'use strict';
console.log('log h');
// Load Modules
var express    = require('express'),      // Loads the Express module
    bodyParser = require('body-parser'),  // Loads the Body-Parser module
    // pug        = require('pug'),       // Loads the PUG templating engine for Express
    Twit       = require('twit'),         // To interact with Twitter API
    config     = require('./config'),     // Object literal containing Twitter                                      //API access key and token
    moment = require('moment'),
    fromNow = require('fromnow');

var object = new Object(),
    profileImg,
    tweets = {},
    messages = {},
    page,
    errorMsg	 = '',
    banner;

// Initialise application
var T = new Twit(config),
    app  = express(),
    port = process.env.PORT;

var params = {
  screen_name: 'MartyKunsman',
  count: 5
};

T.get('users/show', params, gotBanner); //This retrieves the banner 

function gotBanner(err, data, res){
  if (err) {
    errorMsg = "twitter-fail"; // This will be caught on app.get route
  } 
  object.banner = data;
  banner = object.banner.profile_banner_url;
  // console.log(object.banner.status.)
  // console.log(object.banner);
  // banner = object.banner.status.profileAttrs.profile_banner_url;
  // console.log(object.banner.sizes.web.url);
  // console.log(banner);
  T.get('account/settings', params, gotAccount); //This retrieves hd screenname
}

function gotAccount(err, data, res){
  if (err) {
    errorMsg = "twitter-fail"; // This will be caught on app.get route
  }  
  console.log('log gotAccount function');
  object.account = data;
  T.get('statuses/user_timeline',params,gotDataTweets); //get tweets
}
    
function gotDataTweets(err, data, response){ 
  if (err) {
    errorMsg = "twitter-fail"; // This will be caught on app.get route
  } 
  object.tweets = data;   // load tweets to object   
  tweets = object.tweets;
  tweets = getLapsedTweets(tweets); // pass tweets to time lapsed function
  object.tweets = tweets;   // Tweets created_at value is 1 hr ago/1 day ago
  T.get('friends/list',params,gotDataFriends);// Nested get friends 
}

function gotDataFriends(err, data, response){ // get most recent 5 friends
  if (err) {
    errorMsg = "twitter-fail"; // This will be caught on app.get route
  } 
  object.friends = data;           // assign friends to object
  T.get('direct_messages/sent', params, gotDataMessages); // Nested get messages
}

function gotDataMessages(err, data, response){ // get most recent 5 direct messages
  if (err) {
    errorMsg = "twitter-fail"; // This will be caught on app.get route
  } 
  object.messages = data;                      // assign messages to object
  messages = object.messages;
  messages = getLapsedMessages(messages); // pass tweets to time lapsed function
  object.messages = messages;         // message time field is 1day ago/1yr ago
  T.get('account/verify_credentials', params, gotDataCredentials); //nested get 
                                                                  // credentials
}

function gotDataCredentials(err, data, response) {
  if (err) {
    errorMsg = "twitter-fail"; // This will be caught on app.get route
  } 
  object.credentials = data;
}

function getLapsedTweets(tweets){
  var fmt = 'ddd MMM DD hh:mm:ss Z YYYY';
	for (var i = 0; i < tweets.length; i++) {
		tweets[i].created_at = (moment(tweets[i].created_at, fmt).fromNow());
	}
	return tweets;
}

function getLapsedMessages(messages){
  var fmt = 'ddd MMM DD hh:mm:ss Z YYYY';
	for (var i = 0; i < messages.length; i++) {
		messages[i].sender.created_at = (moment(messages[i].sender.created_at, fmt).fromNow());
	}
	return messages;
}
app.use('/static', express.static(__dirname +'/public')); 
app.use('/templates', express.static(__dirname +'/templates'));  

app.set('view engine', 'jade');  
app.set('views', __dirname + '/public/templates');

// Route for API
var router = express.Router();

// Register Routes
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);

// Routes

app.get('/', function(req, res) {
  if (errorMsg === 'twitter-fail') { //If errMsg variable has an error message 
    res.redirect('/error');          // then redirect to /error      
  }
    res.render('index.jade',{data: object, //Show our index page
                banner: banner});
});

app.post('/', function(req, res)  {
  page = res;
	var newTweet = req.body.tweet;    // text field for tweet
	T.post('statuses/update',{status: newTweet}, function(error) {
	  if (!error) {
	    page.redirect('/update'); // Redirect to /update route
    } else {
        errorMsg = 'twitter-fail';  // errorMsg will be read at /error route
        page.redirect('/error');    // Redirect to /error route
    }
	});
});

app.get('/update', function(req, res) {
  page = res;
  T.get('statuses/user_timeline', params, function(error, data, response) {
    if (error) {
      page.redirect('/error'); 
    }
    object.tweets = data;
    tweets = object.tweets;
    tweets = getLapsedTweets(tweets); // pass tweets to time lapsed function
    object.tweets = tweets;   // Tweets created_at value is 1 hr ago/1 day ago
    res.render('index.jade',{data: object});
  });
});

app.get('/error', function(req, res) {
	var message;
	if (errorMsg === 'twitter-fail') {
		message = 'Couldn\'t connect with twitter.com';
	} else {
		message = 'Error connecting';
	}
	res.render('error', {message: message});
});

app.listen(port, function() {
    console.log("Theeee Frontend Server is Running....PORT" + port);
});



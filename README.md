This app calls on the Twitter API to pull a user's twitter info.
It builds three columns
 1 - The user's last 5 tweets
 2 - The user's last 5 friends
 3 - The user's last 5 direct messages
 
 A field is created at the bottom of the screen to post a tweet to this
 user's twitter account.
 
 The config.js file is used to load parameters for access to the Twitter API
 The config.js file uses confidential access codes that should not be pushed
 to Github. Any user that wants to use the app must use their own config file
 with the access codes to their twitter api account.
 
 index.jade is used to show the page.
 error.jade is used to show any errors that occur connecting to Twitter.
 
 
## Running the server

1) Open `server.js` and start the app by clicking on the "Run" button in the top menu.

2) Alternatively you can launch the app from the Terminal:

    $ node server.js

Once the server is running, open the project in the shape of 'https://projectname-username.c9.io/'. As you enter your name, watch the Users list (on the left) update. Once you press Enter or Send, the message is shared with all connected clients.

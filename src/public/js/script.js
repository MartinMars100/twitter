console.log ('log a');

// document.getElementById('screen-name').innerHTML = 'Lost';

// var Twit = require('twit');

// We need to include our configuration file
// var T = new Twit(require('./config.js'));


// // event listener to respond to "Show another quote" button clicks
// // when user clicks anywhere on the button, the "printQuote" function is called
// document.getElementById('loadQuote').addEventListener("click", printQuote, false); 

// var quotes = [
//   {
//   "quote": "America is the only country where people go hunting on a full stomach. I love America.",
//   "source": "Chris Rock",
//   "tags": "Humor"
//   },    
//   {
//   "quote": "A collision is exactly what you do need, because collisions are transformative.  A relationship can occasionally fulfill a person but only a collision can transform them.",
//   "source": "Tom Robbins",
//   "citation": "Half Asleep in Frog Pajamas",
//   "year": "1994",
//   "tags": "Philosophy"
//   },
//   {
//   "quote": "Buddha said life is pain, as well it might be said that the rest of his teachings could be summed up as, let pain be our teacher - By taking one more step beyond, and out of bitterness we find compassion.",
//   "source": "Unknown",
//   "tags": "Spiritual"
//   },
//   {
//   "quote": "That which we are, we shall teach, not voluntarily, but involuntarily.",
//   "source": "Ralph Waldo Emerson",
//   "citation": "The Over Soul According to Emerson",
//   "year": "1841",
//   "tags": "Philosophy"
//   },
//   {
//   "quote": "Did you exchange a walk on part in the war, for a lead role in a cage?",
//   "source": "Pink Floyd",
//   "citation": "Wish You Were Here",
//   "year": "1975",
//   "tags": "Lyrics"
//   },
//   {
//   "quote": "Someone told me I was delusional. I almost fell off my unicorn.",
//   "source": "Unknown",
//   "tags": "Humor"
//   },
//   {
//   "quote": "Ego says, once everything falls into place, I‘ll find peace. Spirit says, find your peace and then everything will fall into place.",
//   "source": "Marianne Williamson",
//   "tags": "Spiritual"
//   },
//   {
//   "quote": "Your mind will answer most questions if you learn to relax and wait for the answer.",
//   "source": "William S. Burroughs",
//   "tags": "Philosophy"
//   },
//   {
//   "quote": "They remember too much about what went wrong. It might be they should learn to forget.",
//   "source": "Bonnie Raitt, One Part Be My Lover",
//   "tags": "Lyrics"
//   },
//   {
//   "quote": "I would only hire someone that I would work for.",
//   "source": "Mark Zuckerberg",
//   "citation": "Q&A With Mark",
//   "year": "2015",
//   "tags": "Business"
//   },
//   {
//   "quote": "Money is the Mc-mansion in Sarasota that starts falling apart after 10 years. Power is the old stone building that stands for centuries. I cannot respect someone who doesn't see the difference.",
//   "source": "House of Cards, Francis Underwood",
//   "year": "2013",
//   "tags": "Television"
//   },
//   {
//   "quote": "Proximity to power deludes some into thinking they wield it.",
//   "source": "House of Cards, Francis Underwood",
//   "year": "2013",
//   "tags": "Television"
//   }
// ];

// function printQuote() {
//   var quoteObject = getRandomQuote();
//   if (quoteObject.hasOwnProperty('citation')) {
//     if (quoteObject.hasOwnProperty('year')) {
//     document.getElementById('quote-box').innerHTML = '<p class="quote">' +    //year and citation
//         quoteObject.quote + '</p><p class="source">' + quoteObject.source +
//         '<span class="citation">' + quoteObject.citation + '</span><span class="year">' +
//         quoteObject.year + '</span></p>';
//     } else { //end if
//       document.getElementById('quote-box').innerHTML = '<p class="quote">' +   //citation only
//         quoteObject.quote + '</p><p class="source">' + quoteObject.source +
//         '<span class="citation">' + quoteObject.citation + '</span></p>';
//     } //end else
  
//   } else { //end initial if
//     if (quoteObject.hasOwnProperty('year')){
//       document.getElementById('quote-box').innerHTML = '<p id="quote" class="quote">' +   //year only
//         quoteObject.quote + '</p><p class="source">' + quoteObject.source +
//         '<span class="year">' + quoteObject.year + '</span></p>';
//     } else { //end if
//       document.getElementById('quote-box').innerHTML = '<p class="quote">' +       //quote and source only
//         quoteObject.quote + '</p><p class="source">' + quoteObject.source +
//         '</p>';
//     }  //end else
  
//   } //end initial else
  
// } //end function

// function getRandomQuote() {
//   return quotes[Math.floor(Math.random() *11) +1];
// }




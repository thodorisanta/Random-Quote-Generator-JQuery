$(document).ready(function() {

  // Quote Array.
  var quotes = ["Never in the field of human conflict was so much owed by so many to so few.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "In war there is no prize for the runner-up.",
    "Ours is a world of nuclear giants and ethical infants. We know more about war than we know about peace, more about killing than we know about living.",
    "The soldier above all others prays for peace, for it is the soldier who must suffer and bear the deepest wounds and scars of war."
  ];

  // Authors array.
  var authors = ["Winston Churchill", "Winston Churchill", "General Omar Bradley", "General Omar Bradley", "General Douglas MacArthur"];

  //Color Array.
  var colors = ['BlueViolet', 'BurlyWood', 'Brown', 'Chartreuse', 'Chocolate', 'CornflowerBlue', 'DarkGoldenRod ', 'DarkKhaki ', 'DarkSalmon', 'DeepPink', 'Gold', 'FireBrick'];

  // Random number(for both Quote and Author).
  function getRandom() {
    return Math.floor(Math.random() * quotes.length);
  }

  // Random Color.
  function getColor() {
    return Math.floor(Math.random() * colors.length);
  }

  var firstRandom = getRandom();
  // Puts a random quote on page load.
  $("#quote").text(quotes[firstRandom]);
  // Puts a random author on page load(according to Quote).
  $("#author").text(authors[firstRandom]);

  var pageloadColor = colors[getColor()];
  // Puts a random color on page load.
  $("body,.buttColor").css("background", pageloadColor);
  // Puts a random (quote)text color on page load.
  $("p").css("color", pageloadColor);

  // On New Quote button click.
  $('#quoteGen').click(function() {
    var newRandom = getRandom();
    var colorKeeper = colors[getColor()];
    // FadeOut the quote and author
    $('#quote').fadeTo(500, 0).fadeTo(1000, 1);
    $("#authorsP").fadeTo(500, 0).fadeTo(1000, 1);
    setTimeout(function() {
      // Change text when they are invisible
      $('#quote').text(quotes[newRandom]); //changes quote.
      $('#author').text(authors[newRandom]); //changes author.
    }, 500);
    $("body,.buttColor").css("background", colorKeeper); //changes background and buttons colors.
    $("p").css("color", colorKeeper); //changes quote texts color.
  });

  //on tweet button click.
  $('#tweetButton').click(function() {
    var textToTweet = $("#quote").text() + "-" + $("#author").text(); //what text to tweet.
    //twitter doesnt allow tweets with more than 140 characters.
    if (textToTweet.length > 140) {
      alert('Tweet should be less than 140 Chars');
    } else {
      var twtLink = 'https://twitter.com/home?status=' + encodeURIComponent(textToTweet); //tweet quote.    
      window.open(twtLink, '_blank'); //open twitter on a new window.
    }
  });
  //THATS IT FOLKS!
});
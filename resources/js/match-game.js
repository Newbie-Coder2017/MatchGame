var MatchGame = {}

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

$(document).ready(function() {
  MatchGame.renderCards(MatchGame.generateCardValues(), $('#game'))
});


/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function() {
  var cardValues = [];
  for (var i = 1; i < 9; i++) {
    cardValues.push(i);
    cardValues.push(i);
  }
  console.log(cardValues);

  cardValues.sort(function() {
    return 0.5 - Math.random();
  })

  console.log(cardValues);
  return cardValues;
}

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {
  $game.empty();

  var cardColors = ["hsl(25,85%,65%)", "hsl(55,85%,65%)", "hsl(90,85%,65%)", "hsl(160,85%,65%)", "hsl(220,85%,65%)", "hsl(265,85%,65%)", "hsl(310,85%,65%)", "hsl(360,85%,65%)"];
  var totalCards = cardValues.length;
  for (i = 0; i < totalCards; i++) {
    var value = cardValues[i];
    var $card = $('<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 card"></div>');
    $card.data('value', value);
    $card.data('flipped', false);
    $card.data('color', cardColors[value - 1]);
    $game.append($card);
  }

  // LIstener for when a card is clicked
  $('.card').on('click', (function() {
    MatchGame.flipCard($card, $game);

  }))
}

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {
  var flippedCards = [];
  $game.data('revealed', flippedCards);

  // Flip the Card if the card has not already been flipped


  if ($card.data('flipped') !== true) {
    // Check is the card is face down, and show the characteristics of the flipped card.
    flippedCards.push($card.data('value'));
    $card.css('background-color', $card.data('color'));
    $card.text($card.data('value'));
    $card.data('flipped', true);
  } else {
    // The card has already been flipped, do nothing to that card.
    if (flippedCards.length === 2) {
        // Check if the game has 2 flipped cards
      if (flippedCards[0] === flippedCards[1]) {
        $card.css('background-color', 'rgb(153,153,153)');
        $card.css('color', 'rgb(204,204,204)');
      } else {
        $card.css('background-color', 'rgb(32, 64, 86)');
        $card.text(' ');
        $card.data('flipped', false);
      }
      $game.data('revealed', []);
    } else {

    }
  }

}

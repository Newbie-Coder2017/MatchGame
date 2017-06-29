$(document).ready;
var MatchGame = {
};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/
$ MatchGame.generateCardValues();
$ MatchGame.rendercards(CardValues, '#game');



/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
var cardValues = [];
for (var i = 1; i < 9; i++) {
  cardValues.push(i);
  cardValues.push(i);
}
console.log(cardValues);

cardValues.sort(function(){
  return 0.5- Math.random();
});

console.log(cardValues);
return cardValues;
}

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {
var cardColors = ['hsl(25,85%,65%)','hsl(55,85%,65%)','hsl(90,85%,65%)','hsl(160,85%,65%)','hsl(220,85%,65%)','hsl(265,85%,65%)','hsl(310,85%,65%)','hsl(360,85%,65%)']
$game.empty();
for (var i = 0; i <= cardValues.length; i++){
var cardNumber = cardValues[i];
var card = $('<div class="col-xs-9 col-sm-9 col-md-9 col-lg-9" id="game"></div>');
card.data("number", cardNumber);
card.data("flipped",false);
card.data("color", cardColors[i-1]);
card.append($game);

}
};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};

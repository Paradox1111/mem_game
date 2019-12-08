console.log("Up and running!");
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/images/queen-of-diamonds.png"
},
{
	rank:"king",
	suit: "hearts",
	cardImage: "images/images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/images/king-of-diamonds.png"
}
];
var cardsInPlay = [];
// var cardOne = cards[0];
// var cardTwo = cards[2];
// var cardThree = cards[1];
// var cardFour = cards[3];

function checkForMatch(){
	if (cardsInPlay.length === 2) 
	{
		if (cardsInPlay[0].rank === cardsInPlay[1].rank) 
		{
			alert("You found a match!")
		} else 
		{
			alert("Sorry, try again")
		}
	}
}
function flipCard() {
	cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId])
	console.log('card flipped')
	this.setAttribute('src', cards[cardId].cardImage);
	checkForMatch(cardId);
}

function shuffle(array) {
  let i = array.length;
  while (i--) {
    const ri = Math.floor(Math.random() * (i + 1));
    [array[i], array[ri]] = [array[ri], array[i]];
  }
  return array;
}

function createBoard() {
	shuffledCards = shuffle(cards);
	for(let i = 0; i<shuffledCards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		var board = document.getElementById('game-board');
		board.appendChild(cardElement);
	}
}
createBoard()

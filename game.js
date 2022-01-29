var btn1 = document.getElementById("start");
var btn2 = document.getElementById("newcard");
var description = document.getElementById("description");
var carddetails = document.getElementById("cards");
var sums = document.getElementById("sum");
let isalive = false;
let hasblackjack = false;
btn1.addEventListener("click", startgame);
let cards = [];
let sum = 0;
newcard.addEventListener("click", getnewcard);
function getrandomnumber() {
  var x = Math.floor(Math.random() * 13) + 1;
  if (x > 10) {
    //j q k card
    return 10;
  } else if (x === 1) {
    //A card
    return 11;
  } else {
    return x;
  }
}
function getnewcard() {
  if (isalive == true && hasblackjack == false) {
    var newcards = getrandomnumber();
    cards.push(newcards);
    carddetails.textContent += newcards;
    sum += newcards;
    sums.textContent = "SUM" + ":" + sum;
    if (sum <= 20) {
      description.textContent = "do you want to play more?";
    } else if (sum === 21) {
      hasblackjack = true;
      description.textContent = "you have got the blackjack";
    } else if (sum > 21) {
      isalive = false;
      description.textContent = "You're out of game!please start game again";
    }
  }
}
function startgame() {
  isalive = true;
  let firstcard = getrandomnumber();
  let seccard = getrandomnumber();
  cards = [firstcard, seccard];
  sum = firstcard + seccard;
  carddetails.textContent = "CARDS:";
  if (sum <= 20) {
    description.textContent = "do you want to play more?";
  } else if (sum === 21) {
    hasblackjack = true;
    description.textContent = "you have got the blackjack";
  } else if (sum > 21) {
    isalive = false;
    description.textContent = "You're out of game";
  }
  for (var i = 0; i < cards.length; i++) {
    carddetails.textContent += cards[i] + " ";
  }
  sums.textContent = "SUM" + ":" + sum;
}

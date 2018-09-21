/*
 * Create a list that holds all of your cards
 */
let cardsNodes = document.querySelectorAll('.card');
let cardsArray = Array.from(cardsNodes);
const winAlert = document.querySelector('#win-alert');
var winConditionArr = [];
var count = 0;

cardsArray = shuffle(cardsArray);

const deck = document.querySelector('.deck');

removeAllChildEl(deck);

creteShuffledCards(cardsArray, deck);

const restart = document.querySelector('.restart');
restart.addEventListener('click',function(){
  window.location.reload(false);
});

const newGame = document.querySelector('#new-game');
newGame.addEventListener('click',function(){
  window.location.reload(false);
});

cardsNodes = document.querySelectorAll('.card');

addListenersToCards();


// WRite better win condit
function addListenersToCards(){
   var start = Date.now();
   cardsNodes.forEach(function(card){
     card.addEventListener('click',function checkCard(){
         count++;
         changeRating(count);
         displayCount(count);
         card.removeEventListener('click',checkCard);

         let openCards = document.querySelectorAll('.open');


         card.setAttribute('class','card open show');

        setTimeout(function(){
           if(!keepOpen(openCards, card)){
              card.setAttribute('class','card');
              card.addEventListener('click',checkCard);
           }
        },650);

        let matchedCards = document.querySelectorAll('.match');
        console.log(matchedCards.length === 14);
        if(matchedCards.length === 14){
          winConditionArr.push(14);
        }
        console.log(winConditionArr.length);
        if(winConditionArr.length === 2){
          setTimeout(function(){
            winAlert.setAttribute('style','');
          },800);
         winConditionArr = [];
         count = 0;
         var delta = Date.now() - start; // milliseconds elapsed since start
         var resultInSec = Math.floor(delta / 1000);
         displaySeconds(resultInSec);
        }
     });
   let className = card.className;

   });
}

function keepOpen(openCards,card){

  if(openCards.length === 0 ){
    return true;
  }
  if(openCards.length % 2 === 0 && allMatch(openCards)){
    return true;
  }

  var check = false;

  openCards.forEach(function(openCard){
     var cardClassNameFromAllOpens = openCard.firstElementChild.className;
     var currentCardClassName = card.firstElementChild.className;

     if(cardClassNameFromAllOpens === currentCardClassName && openCards.length === 1){
      card.setAttribute('class','card match');
      openCard.setAttribute('class','card match');

      check = true;
     }
  });

  return check;
}

function allMatch(openCards){
  var check = true;
  openCards.forEach(function(openCard){
     if(!(openCard.className === 'card match')){
       check = false;
     }
     });
  return check;
}

function displayCount(count){
  var counts =  document.querySelectorAll('.moves');
  for(var i = 0; i < counts.length; i++){
    counts[i].textContent = count;
  }
}

function changeRating(count){
  if(count > 16){
    makeStarsEmpty(1);
  }
  if(count > 30){
    makeStarsEmpty(2);
  }
  if(count > 40){
    makeStarsEmpty(3);
  }
  if(count > 55){
    makeStarsEmpty(4);
  }
  if(count > 100){
    makeStarsEmpty(5);
  }
}

function makeStarsEmpty(numerOfStarsToChange){
  var firstStars =  document.querySelectorAll('.stars')[0].querySelectorAll('i');
  var secondStars = document.querySelectorAll('.stars')[1].querySelectorAll('i');

  for(var i = firstStars.length -1 ; i >= firstStars.length - numerOfStarsToChange; i--){
    firstStars[i].setAttribute('class','fa fa-star-o');
    secondStars[i].setAttribute('class','fa fa-star-o');
  }
}

function displaySeconds(seconds){
  var time = document.querySelector('.seconds');
  time.textContent = seconds;
}




/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function creteShuffledCards(array, element){
  const docFragment = document.createDocumentFragment();
  for(let i = 0; i < array.length; i++){
    docFragment.appendChild(cardsArray[i]);
  }
  element.appendChild(docFragment);
}

function removeAllChildEl(element){
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

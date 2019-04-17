
'use strict';

var correctResponse = 0;

var Name = prompt ('Let\'s play a game. First of all let us become aquainted. I\'m Brad. What is your name?');
alert ('It\'s a pleasure to meet you ' + Name + '. Would you like to know a little more about me?');

//Start game
var answerOne = prompt ('Please answer either Yes OR No.').toLowerCase();
if (answerOne === 'yes' || answerOne === 'y') {
  alert ('Perfect ' + Name + ', let\'s play!!');
  correctResponse++;
} else if (answerOne === 'no' || answerOne === 'n') {
  alert ('Too bad '+ Name + '! We are already on our way down this rabbit hole.....so brace yourself.....here we go!');
} else {
  alert (Name + ' you should have answered Yes OR No. Try again.');
}

//1. Military service
function questionOne(){


  var navy = 'false';
  var militaryService = prompt ('I served in the US Navy. Please answer TRUE or FALSE').toLowerCase();
  if (militaryService === navy) {
    alert ('Right! I have never served in the military, however my father was in the Navy.');
    correctResponse++;
  } else {
    alert ('Sorry. Though I am very familiar with the Navy, it was my father who actually was in the military while I was growing up.');
  }
}

//2. Lived in Italy
function questionTwo(){

  var italyCorrect = 'yes';
  var italy = prompt ('Twenty years ago I lived in Italy and served two years on a Mormon mission. Please answer YES or NO').toLowerCase();
  console.log(italy + 'yes or no');
  if (italy === italyCorrect) {
    alert ('Correct! I still miss Italy very much!');
    correctResponse++;
  }
  else {
    alert ('Nope. Beleive it or not I WAS actually a former Mormon Missionary in Italy!..... and yes, I LOVE pizza!');
  }
}

//3.Where did I move from
function questionThree(){
  var cityMovedFromCorrect = 'true';
  var city_moved_from = prompt ('Ten years ago I moved from Washington DC. Please answer TRUE or FALSE').toLowerCase();
  console.log(city_moved_from + 'true or false');
  if(city_moved_from === cityMovedFromCorrect) {
    alert ('You\'re right! I moved here just after Obama took office in 2009! It was a very exciting time.');
    correctResponse++;
  }
  else {
    alert ('I\'m sorry but the answer is actually TRUE.');
  }
}

//4. Favorite Food
function questionFour(){

  var favoriteFood = 'true';
  var thaiFood = prompt ('Since living in Seattle, Thai food has become my go-to favorite. Please answer TRUE or FALSE.').toLowerCase();
  console.log(thaiFood + 'true or false');
  if (thaiFood === favoriteFood) {
    alert ('You got it! Bring on the Pad Thai!');
    correctResponse++;
  } else {
    alert ('Nope. I bet you thought I was going to say Italian.');
  }
}

//5. Favorite Pasttime
function questionFive(){

  var favorite_pasttime = 'true';
  var cooking = prompt ('When I have the free time, I really enjoy cooking.  Please answer TRUE or FALSE.').toLowerCase();
  console.log(cooking + 'true or false');
  if (cooking === favorite_pasttime) {
    alert ('Absolutely!  I enjoy cooking Italian, French and South American cuisine for dinner parties! Bon Appetit!');
    correctResponse++;
  } else {
    alert ('I could easily just Netflix n chill, but cooking is generally my favorite.');
  }
}

//6. Question 6-How many dogs
function questionSix(){
  var questionSixCounter = 6;
  while(questionSixCounter > 0 && answerSix !== 2){
    var answerSix = Number(prompt('How many dogs do you think I have?'));
    questionSixCounter--;
    if(answerSix === 2){
      alert('Awesome! That\'s correct!');
      correctResponse++;
    } else if(answerSix < 2){
      alert('Nope! That\'s too low. ' + questionSixCounter + 'more guesses');

    } else if(answerSix > 2){
      alert('Nope! That\'s too high. ' + questionSixCounter + 'more guesses');

    } else {
      alert('Nope! All out of guesses!');
    }
  }
}
//Question 7.
function questionSeven(){
  var workType = ['finance', 'retail', 'design'];
  var attemptsRemaining = true;
  var questionSevenCounter = 6;

  while(questionSevenCounter > 0 && attemptsRemaining){
    var answerSeven = prompt('What industries have I worked in?').toLowerCase();

    for(var j = 0; j < workType.length; j++){
      if(answerSeven === workType[j]){
        alert('Correct! Awesome job!');
        correctResponse++;
        attemptsRemaining = false;
      }
    }
    questionSevenCounter--;
    if(questionSevenCounter > 0 && attemptsRemaining){
      alert('Nope! Keep trying! guesses remaining: ', questionSevenCounter);
    }
    if(questionSevenCounter === 0){
      alert('You have run out of guesses. Sorry!');
    }
  }
}

questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
questionSix();
questionSeven();


alert(Name + 'you answered ' + correctResponse + 'out of 7!');





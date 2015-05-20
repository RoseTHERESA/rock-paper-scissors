/* Create a browser-based, single-player version of Rock Paper Scissors. The "computer" should pick a random move each turn. Keep a score counter somewhere on the page. Don't worry about styling until you're done with the logic.

This is an exercise in:

JS Events
DOM Manipulation
Problem Solving
Bonus: If you finish rock paper scissors, 
make rock paper scissors lizard spock. 
I want to see the messages about what beats what! 


Could use Math.random
Prompt the user (just start with a basic prompt
check for rock, paper or scissors)
Score function: computer vs player

Could do timer with setTimeout (takes two parameters:
callback function (function passed to another function) and time elapsed)

*/


var human = 0;
var computer = 0;
function rock() {
	var guess = prompt("Please choose rock, paper or scissors");
	guess = guess.toUpperCase();
	if((guess !== "ROCK")&&(guess !== "PAPER")&&(guess !== "SCISSORS")){
		alert("That is not a valid response. Please choose again");
		rock();
	} else {
		var compGuess = Math.floor(Math.random() * 3);
		if(compGuess===convertGuess(guess)) {
			alert("Tie! Try again!");
			rock();
		} else if(compGuess===0) {
			if(convertGuess(guess)===1){
				alert("Paper beats rock! You win!");
				human++;
				person.innerHTML = human;
			} else {
				alert("Rock beats scissors! You lose!");
				computer++;
				comp.innerHTML = computer;
			}
		} else if(compGuess===1) {
			if(convertGuess(guess)===0){
				alert("Paper beats rock! You lose!");
				computer++;
				comp.innerHTML = computer;
			} else {
				alert("Scissors beats paper! You win!");
				human++;
				person.innerHTML = human;
			}
		} else if(compGuess===2) {
			if(convertGuess(guess)===0){
				alert("Rock beats scissors! You win!");
				human++;
				person.innerHTML = human;
			} else {
				alert("Scissors beats paper! You lose!");
				computer++;
				comp.innerHTML = computer;
			}
		}
	}
}

function convertGuess(str) {
	if(str === "ROCK"){
		return 0;
	} else if(str === "PAPER") {
		return 1;
	} 
		return 2;	
}


rock();

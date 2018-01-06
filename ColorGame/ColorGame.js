var numSquares = 6; 
var colors = [];
// pick a random color 
var pickedColor;

// select all div with "square" class
var squares = document.querySelectorAll(".square"); 
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

var reset = document.querySelector("#reset");

var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	// -----------Beginning Setup for Mode Button-----------------
	setUpModeButtons();
	// -----------End of Setup for Mode Button-------------------

	// -----------Beginning Setup for squares Event Listeners-----------
	setUpSquareListeners();
	// -----------End of Setup for squares Event Listeners  -----------

	// call resetfunc to reset all the square colors and display text
	resetfunc();
}

function setUpModeButtons() {
	for (var i = 0; i < modeButtons.length; i++) {
			modeButtons[i].addEventListener("click", function() {
			// remove class features from both buttons
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			// add class features to the clicked button
			this.classList.add("selected");

			// find out how many squares to display 
			// pick new color 
			// pick a new pickedColor 
			// update page to flect changes 

			// update the numsquare first before calling resetfunc 
			if (this.textContent === "Easy") {
				numSquares = 3; 
			} else {
				numSquares = 6; 
			}
			resetfunc();
		});
	}
}

function setUpSquareListeners() {
	for (var i = 0; i < squares.length; i++) {
		// add click listeners to squares
		squares[i].addEventListener("click", function() {
			// get color of clicked square
			var clickedColor = this.style.backgroundColor;

			// compare color to pickedColor
			if (clickedColor === pickedColor) {	// correct
				messageDisplay.textContent = "Correct!";
				reset.textContent = "Play Again?";
				changeColor(clickedColor);
				h1.style.backgroundColor = clickedColor;
			} else { // wrong
				// if the wrong one is picked, set the square color to 
				// the background color
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function resetfunc() {
	// generate all new colors when this button is clicked 
	colors = generateRandomColors(numSquares); 
	// pick a new random color from the array 
	pickedColor = pickRandomColor();
	// change the display color to matched pickedColor 
	colorDisplay.textContent = pickedColor;

	// change the reset button text to New Color when clicked 
	reset.textContent = "New Colors";

	// change colors of squares, refactor this code later 
	for (var i = 0; i < squares.length; i++) { 
		// if i is a valid index in colors array of numSquares
		if (colors[i]) {
			// show all the squares if i index is valid
			squares[i].style.display = "block";
			// change the top numSquares squares color 
			squares[i].style.backgroundColor = colors[i];
		} else {	// hide the bottom 3 squares color 
			squares[i].style.display = "none";
		}
	}

	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
}

reset.addEventListener("click", function() {
	resetfunc();
});

function generateRandomColors(num) {
	// make an array 
	var arr  = [];
	// add num random colors to array 
	for (var i = 0; i < num; i++) {
		// push num of random colors into "arr"
		arr.push(getRandomColor());
	}
	// return that array
	return arr;
}

function getRandomColor() {
	// make a random color 
	// pick red from 0 to 255
	var r = Math.floor(Math.random() * 256); 
	// pick green from 0 to 255
	var g = Math.floor(Math.random() * 256);
	// pick blue from 0 to 255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function pickRandomColor() {
	// generate a number between [0, colors.length)
	var random = Math.floor( Math.random() * colors.length); 
	return colors[random]; 
}

function changeColor(color) {
	// loop through all squares
	for (var i = 0; i < squares.length; i++) { 
		// change each square color to match given color 
		squares[i].style.backgroundColor = color; 
	}
}

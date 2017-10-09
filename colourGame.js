var numSquares = 6;
var colours = []
var pickedColour;

var squares = document.querySelectorAll(".square");
var colourDisplay = document.getElementById("colourDisplay");
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector("h1");
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll(".mode");

resetButton.addEventListener("click", function(){
	console.log('dsd');
	reset();
});


init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add('selected');
			this.textContent === 'Easy' ? numSquares = 3 : numSquares = 6;
			reset();
		});
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){

	squares[i].addEventListener("click", function(){
		var clickedColour = this.style.backgroundColor;

		if(clickedColour === pickedColour){
			messageDisplay.textContent = 'Correct';
			changeColours(clickedColour );
			h1.style.backgroundColor = clickedColour;
			resetButton.textContent = 'Play Again';
		}else{
			this.style.backgroundColor = '#232323';
			messageDisplay.textContent = 'Try Again';  
		}
	}); 
 
	}
}


function reset(){
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = '';
	colours = generateRandomColours(numSquares);
	pickedColour = pickColour();
	colourDisplay.textContent = pickedColour;
	resetButton.textContent = 'New Colours';
	for(var i = 0; squares.length; i++){
		if(colours[i]){
			squares[i].style.display = 'block';

			squares[i].style.backgroundColor = colours[i];
		}else{
			squares[i].style.display = 'none';
		}
	}
}

function changeColours(colour){
	for(var i = 0; i < squares .length; i++){
		squares[i].style.backgroundColor = colour;
	}

}

function pickColour(){
	var random = Math.floor(Math.random() * colours.length);
	return colours[random];
}

function generateRandomColours(num){
	var arr = [];

	for(var i = 0; i < num; i++){
		arr.push(randomColour());
	}
	return arr;
}

function randomColour(){
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);

	return "rgb(" + red + ", " + green + ", " + blue + ")";  

}
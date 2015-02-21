//When the first player clicks the first box(i.e. no other boxes are clicked) alert a prompt to ask if player wants to select 'X' or 'O'
var playerOneID = null;
var playerTwoID = null;
var num_index = 0;  //This will allow us to count the turns. 0 equals player 1. 1 equals player 2
var playerX = [];   //This will push every box clicked MAKE SURE IT CAN NOT BE CLICKED AGAIN
var ployerY = [];	//This will push every box clicked MAKE SURE IT CAN NOT BE CLICKED AGAIN


if (playerOneID == null){
	assignBasedOnPrompt();
}


function assignBasedOnPrompt() {
	var assign_value = prompt('Player 1, Enter: X or O');
	assign_value=assign_value.toUpperCase();
	console.log(assign_value);
	if(assign_value != 'X' && assign_value != 'O'){
		alert("Why is this so hard for you. Were you ever dropped as a kid");
			return assignBasedOnPrompt();
	}
	if(assign_value == 'X'){
		document.querySelector('.assign_xo_one').innerHTML = 'X'; // player 1 variable
		document.querySelector('.assign_xo_two').innerHTML = 'O';
	} else {
		 //player 2 variable
		 document.querySelector('.assign_xo_one').innerHTML = 'O'; // player 1 variable
		document.querySelector('.assign_xo_two').innerHTML = 'X';
	} 
}
//populate the assign_xo div one and two
//Automatically populate player 2 playerID as 'O' and assign_xo two
var playerOneID = document.querySelector('.assign_xo_one').innerHTML;
var playerTwoID = document.querySelector('.assign_xo_two').innerHTML;

//CODE WILL WORK FINE FROM THE TOP UNTIL IT GETS OVER HERE //

function mark(clicked_element){
	if(clicked_element.innerHTML == 'X' || clicked_element.innerHTML == 'O'){
		return alert("Sorry this spot is already taken don't try to cheat");    //clicked element is already taken. Player is trying to cheat by clicking on that element again.
	}

	if (num_index == 0){
		clicked_element.innerHTML = playerOneID; // this is showing us that it is players 1 turn
		document.querySelector('.assign_xo_one').style.backgroundColor = 'white';
		document.querySelector('.assign_xo_two').style.backgroundColor = 'rgb(22, 96, 181';		





		// store his clicked element to his array player X
		//if player two clicks the same box as player. How to permanently disable the box
		 num_index ++ 

		// tell on the screen that it is players 2 turn.
		// alert the screen and try to tell: document.createTextNode("It is now player ones turn")
		// alert the screen and try to tell: document.createTextNode("It is now player twos turn")


	}  else if(num_index == 1){
		clicked_element.innerHTML = playerTwoID;
		document.querySelector('.assign_xo_one').style.backgroundColor = 'rgb(22, 96, 181)';
		document.querySelector('.assign_xo_two').style.backgroundColor = 'white';	
	 // Now the player cannnot click anymore
	   num_index = 0; // goes back to player ones turn
	}
	//if player1 clicks on box 1 

	// then increment num_index++
}











	//Create something that assigns their choice to their turn
			//Add classlist and add document.querySelect innerHTML 'X'
			
		//create num_index that alternates between 0 and 1
		//use this num_index to specify who's turn it is

//Create a onclick function that applies player id to the box clicked

//Store the players selection into their respective array

//Each player has their own array
//Make sure the array is always sorted

//Create win possibility array

//Compare the individuals array with the winArray






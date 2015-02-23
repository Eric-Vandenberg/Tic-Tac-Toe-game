//When the first player clicks the first box(i.e. no other boxes are clicked) alert a prompt to ask if player wants to select 'X' or 'O'
var playerOneID = null;
var playerTwoID = null;
var num_index = 0;  //This will allow us to count the turns. 0 equals player 1. 1 equals player 2
var playerOneArray = [];   //This will push every box clicked MAKE SURE IT CAN NOT BE CLICKED AGAIN
var playerTwoArray = [];	//This will push every box clicked MAKE SURE IT CAN NOT BE CLICKED AGAIN


if (playerOneID == null){
	assignBasedOnPrompt();
}


function assignBasedOnPrompt() {
	var assign_value = prompt('Player 1, Enter: X or O');
	assign_value=assign_value.toUpperCase();
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





function mark(clicked_element, box){
	var box_position = box;

	 if(clicked_element.innerHTML == 'X' || clicked_element.innerHTML == 'O'){
		return alert("Sorry this spot is already taken don't try to cheat");    //clicked element is already taken. Player is trying to cheat by clicking on that element again.
	}


	if (num_index == 0){
		playerOneArray.push(box_position);
		clicked_element.innerHTML = playerOneID; // this is showing us that it is players 1 turn
		document.querySelector('.assign_xo_one').style.backgroundColor = 'lavender';
		document.querySelector('.assign_xo_two').style.backgroundColor = 'rgb(22, 96, 181';		
		num_index ++ 

	}  else if(num_index == 1){
		clicked_element.innerHTML = playerTwoID;
		playerTwoArray.push(box_position);
		document.querySelector('.assign_xo_one').style.backgroundColor = 'rgb(22, 96, 181)';
		document.querySelector('.assign_xo_two').style.backgroundColor = 'lavender';	
	   num_index = 0; // goes back to player ones turn
	}
	//if player1 clicks on box 1 

	// then increment num_index++
}



function reset(){
	var letters = document.querySelector('.box');	
	var makeSure =confirm('Are you sure you want to restart this game');
	
	if(makeSure == true){
		playerOneArray = [];
		playerTwoArray = [];
		playerOneID = null;
		playerTwoID = null;
		num_index = 0;
		document.querySelector('.assign_xo_one').innerHTML = ''; 
		document.querySelector('.assign_xo_two').innerHTML = '';
		document.querySelectorAll('.box').innerHTML= '';  // its not resetting the innerHTML box
		assignBasedOnPrompt();
	} else {
		return;
	}
	
}












	

















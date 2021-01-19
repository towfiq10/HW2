// Arrow key codes
var UP = 38,
    DOWN = 40,
    RIGHT = 39,
    LEFT = 37;

// rocket object
var rocket = {
	img: document.querySelector("#rocket"),
	x: 490,
	y: 390,
	width: 100
};

let myArray = "";

function startArray(){    
    
   myArray = Array(3);
    for(i =0; i < myArray.length; i++){
       myArray[i] = prompt("Enter three names", "");        
     
   }  
   
   let ul = document.createElement('ul');
   document.getElementById('gameInfo').appendChild(ul);
   for (i = 0; i<myArray.length; i++){
	   let li = document.createElement('li');
	   ul.appendChild(li);
	   li.innerHTML = myArray[i];

   }
      
	// Get the app element
	
  //let gameInfo = document.querySelector('#gameInfo');

  //Create markup
  
  //gameInfo.innerHTML = '<ul>' + myArray.map(function (myArray) {
	//return '<li>' + myArray + '</li>';
  //}).join('') + '</ul>';
  
} 

// function fireArray( ){ 
//    let secondArray = myArray.map(function(oneWord) {
// 	return oneWord.charAt(oneWord.length - 1) + oneWord.substring(1, oneWord.length - 1) + oneWord.charAt(0); 

// 	let ul = document.createElement('ul');
//    document.getElementById('gameInfo').appendChild(ul1);
//    for (i = 0; i<secondArray.length; i++){
// 	   let li = document.createElement('li');
// 	   ul.appendChild(li);
// 	   li.innerHTML = secondArray[i];

//   }

// 	//let gameInfo1 = document.querySelector('#gameInfo');
	
// 	// Create markup
// 	//gameinfo.innerHTML = '<ul>' + secondArray.map(function (secondArray) {
// 	  //return '<li>' + secondArray + '</li>';
// 	//}).join('') + '</ul>';

// 	//document.getElementById('#gameUI').innerHTML="<h1> Hussein maxaa ka taqanaaa</h1>";
// });

// alert(secondArray);
// } 

	
	

function fireArray( ){ 
	let secondArray = myArray.map(function(oneWord) {
	 return oneWord.charAt(oneWord.length - 1) + oneWord.substring(1, oneWord.length - 1) + oneWord.charAt(0); });	
 
 
 
 let ul = document.createElement('ul');
 document.getElementById('gameInfo1').appendChild(ul);
 for (i = 0; i<secondArray.length; i++){
	 let li = document.createElement('li');
	 ul.appendChild(li);
	li.innerHTML = secondArray[i];
 }
 console.log(secondArray);
 alert(secondArray);
 }







var velocity = 8;

// make local names just to save typing later
var torpedo = document.querySelector("#torpedo"),
    startBtn = document.querySelector("#start"),
    fireBtn = document.querySelector("#fire"),
	ufo = document.querySelector("#ufo");
	
	// new navbar
	BtnPg1 = document.querySelector("#page1"),
	BtnPg2 = document.querySelector("#page2"),
	BtnPg3 = document.querySelector("#page3"),


// Initialize objects on the screen  (call method defined below)
render ( );

// define what should happen when click each of the 3 buttons
startBtn.addEventListener("click",startGameHandler,false);
fireBtn.addEventListener("click",fireTorpedoHandler,false)
window.addEventListener("keydown",keydownHandler,false);

// new nav bar
BtnPg1.addEventListener("click",BtnPg1Handler,false);
BtnPg2.addEventListener("click",BtnPg2Handler,false);
BtnPg3.addEventListener("click",BtnPg3Handler,false);



function BtnPg1Handler( ) {
	// Hide the intro screen, show the game screen
	introScreen.style.display = "block";  
	gameScreen.style.display = "none";
	rocket.img.style.display = "none";
	ufo.style.display = "none";
	endScreen.style.display = "none";
}

function BtnPg2Handler( ) {
	// Hide the intro screen, show the game screen
	introScreen.style.display = "none";  // do not display
	gameScreen.style.display = "block";
	rocket.img.style.display = "block";
	ufo.style.display = "block";
	endScreen.style.display = "none";
}

function BtnPg3Handler( ) {
	// Hide the intro screen, show the game screen
	introScreen.style.display = "none";  
	gameScreen.style.display = "none";
	rocket.img.style.display = "none";
	ufo.style.display = "none";
	endScreen.style.display = "block";
}



function startGameHandler( ) {
	// Hide the intro screen, show the game screen
	introScreen.style.display = "none";  // do not display
	gameScreen.style.display = "block";
	rocket.img.style.display = "block";
	ufo.style.display = "block";
	endScreen.style.display = "none";
}

function fireTorpedoHandler( ) {
	// Fire the photon torpedo!
	// CSS animation occurs whenever torpedo
	// 'left' property changes value
	torpedo.style.visibility = "visible";
	torpedo.style.left = (rocket.x - 400)+ "px";
}

function keydownHandler(event) {
	// handle user keyboard input
    // modify the property value of the rocket objects by the amount velocity it set to
	if (event.keyCode == UP) {
		rocket.y -= velocity;
	}
	if (event.keyCode == LEFT) {
		rocket.x -= velocity;
	}
	if (event.keyCode === DOWN) {
		rocket.y += velocity;
	}
	if (event.keyCode == RIGHT) {
		rocket.x += velocity;
	}

	render( );  // call render again after moving things
}

function render( ) {
	// position objects on the screen, form pf location is
	// rocket.img.style.left = 320px     so use code to make that
	rocket.img.style.left = rocket.x + "px";
	rocket.img.style.top = rocket.y + "px";
	torpedo.style.left = (rocket.x +10) + "px";
	torpedo.style.top = (rocket.y+8) + "px";
	torpedo.style.visibility = "hidden";
}
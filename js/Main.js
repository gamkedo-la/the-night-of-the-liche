// Characters //

var canvas, canvasContext;
var redWarrior = new warriorClass();

// Game State //

var menuScreen = true;
var isInShop = false;
var timeSinceInShop = 0;




window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');
	
	colorRect(0,0, canvas.width,canvas.height, 'orange'); // startup page
	colorText("Loading Images... please wait", 400, 300, 'black');	
	loadImages();
	canvas.addEventListener('mousedown',handleMouseClick);
	//backgroundMusic.loopSong("dungeonbackground");
}

function imageLoadingDoneSoStartGame() {	
	var framesPerSecond = 30;
	setInterval(updateAll, 1000/framesPerSecond);
	
	setupInput();
	
	loadLevel(levelOneBG);

}

function nextLevel() {
	levelNow++;
	if(levelNow > levelListBG.length) {
		levelNow = 0;
	}
	loadLevel(levelListBG[levelNow]);
}

function loadLevel(whichLevel) {	
	roomGrid = whichLevel.slice();
	redWarrior.reset(warriorPic, "Red warrior");
}

function updateAll() {
	moveAll();
	drawAll();
}

function moveAll() {
	if(menuScreen){
		// no movement
	} else if (isInShop){
		
	} else { 
		redWarrior.move();

		cameraFollow();	
	};
};

//move to user interface when created
function health() {
	
	if (redWarrior.health <= 0 && !redWarrior.invulnerable) {
		resetLevel();
	}
}

function drawAll() {
		if(menuScreen){
			canvasContext.drawImage(titlepagePic, 0,0);  // blanks out the screen
			canvasContext.font="30px Georgia";
			colorText("Placeholder for Title Screen", 120, 100, "white");				
			canvasContext.font="20px Georgia";
			colorText("This game is still Work in Progress, but playable!", 170, 150, "white");	
			colorText("Move from level to level by collecting keys.", 170, 200, "white");	
			colorText("Kill monsters with your sword, and collect gold.", 170, 225, "white");	
			colorText("Click to start", 170, 255, "white");
			canvasContext.font="15px Georgia";
			colorText("Move Left - Left Arrow", 170, 300, "white");	
			colorText("Move Down - Down Arrow", 170, 325, "white");
			colorText("Move Right - Right Arrow", 170, 350, "white");
			colorText("Move Up - Up Arrow", 170, 375, "white");
			colorText("Sword Attack - Space bar", 170, 400, "white");
		} else if (isInShop){
			drawShop();
			
				
		
		} else {
			if (timeSinceInShop < 15) timeSinceInShop++;

			canvasContext.save();
			canvasContext.translate(-camPanX,-camPanY);
				drawRoom();
				//drawOnlyTilesOnScreen();
				redWarrior.draw();
				drawRoof(timeSinceInShop / 15);

			canvasContext.restore();
			health();
		}
}
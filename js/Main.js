// Characters //

var canvas, canvasContext;
var redWarrior = new warriorClass();
/*var bat1 = new batClass("Bat Carlos");
var bat2 = new batClass("Bat Anely");
var skeleton = new skeletonClass("Skeleton Greg");
var skeleton2 = new skeletonClass("Skeleton Keith");
var zombie = new zombieClass("Zombie Mike");
var zombie2 = new zombieClass("Zombie Bob");
var goblin = new goblinClass("Goblin Vince");
var archer = new archerClass("Archer Kevin", archerPic);
var archer2 = new archerClass("Archer Aaron", archerPic); */

// Game State //

var menuScreen = true;
var isInShop = false;

// Sound //

var doorSound = new SoundOverlapsClass("woodDoorOpen");
var keySound = new SoundOverlapsClass("keys");
var spikeSound = new SoundOverlapsClass("spikes");
var zombieHurtSound = new SoundOverlapsClass("zombiehurt");
var goblinHurtSound = new SoundOverlapsClass("goblinDeath");
var skeletonHurtSound = new SoundOverlapsClass("skeletonhurt");
var batHurtSound = new SoundOverlapsClass("bathurt");
var playerHurtSound = new SoundOverlapsClass("playerHurt");
var backgroundMusic = new BackgroundMusicClass("background");


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
	
	loadLevel(levelOne);

}

function nextLevel() {
	levelNow++;
	if(levelNow > levelList.length) {
		levelNow = 0;
	}
	loadLevel(levelList[levelNow]);
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

function health() {
	
	if (redWarrior.health <= 0) {
		resetLevel();
	}
}

function drawAll() {
		if(menuScreen){
			canvasContext.drawImage(titlepagePic, 0,0);  // blanks out the screen
			canvasContext.font="30px Georgia";
			colorText("Welcome to Vince's Warrior Legend!", 120, 100, "white");				
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
			canvasContext.save();
			canvasContext.translate(-camPanX,-camPanY);
				drawRoom();
				//drawOnlyTilesOnScreen();
				redWarrior.draw();

			canvasContext.restore();
			health();
		}
}
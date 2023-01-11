// Characters //

var canvas, canvasContext;
var player = new WarriorClass();
var alchemist = new AlchemistClass();  //VJM 1/7/23:  need to make this based on the map
var skeleton = new SkeletonClass(); // VJM 1/7/23: need to make skeletons based on the map.  Also, make them in a list.

//practice commit - will remove

// Game State //

var menuScreen = true;
var isInShop = false;
var inGame = false;
var timeSinceInShop = 0;

window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');
	
	colorRect(0,0, canvas.width,canvas.height, 'orange'); // startup page
	colorText("Loading Images... please wait", 400, 300, 'black');	
	loadImages();
	canvas.addEventListener('mousedown',handleMouseClick);
}

function imageLoadingDoneSoStartGame() {	
	var framesPerSecond = 30;
	setInterval(updateAll, 1000/framesPerSecond);
	
	setupInput();
	
	loadLevel(LEVELS[levelList[currentLevelIndex]])
	//SetupPathfindingGridData();  //// WIP for pathfinding
}

function nextLevel() {
	currentLevelIndex++;
	if (currentLevelIndex >= levelList.length) {
		currentLevelIndex = 0;
	}
	loadLevel(LEVELS[levelList[currentLevelIndex]])
}

function loadLevel(whichLevel) {
	roomGrid = whichLevel.layers.background
	player.reset(playerPic, "Red warrior");
	alchemist.reset();
	skeleton.reset();
    SetupPathfindingGridData();
}

function loadAreaByName (name) {
	currentLevelIndex = levelList.findIndex(level => level === name) || 0
	loadLevel(LEVELS[levelList[currentLevelIndex]])
}

function updateAll() {
	moveAll();
	drawAll();
}

function checkCollisions(){
	player.checkWarriorandSwordCollisionAgainst(alchemist);
	player.checkWarriorandSwordCollisionAgainst(skeleton);
}

function moveAll() {
	if(menuScreen) {
		// no movement
	} else if (isInShop) {
		
	} else if (inGame) {
		LEVELS[levelList[currentLevelIndex]].moveAll();
	}
};

//move to user interface when created
function health() {
	if (player.health <= 0 && !player.invulnerable) {
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
		} else if (inGame){
			canvasContext.save();

			drawLevelSpecifics();

			if(displayPlayerThoughts){
				drawPlayerThoughts();
			}
			if(displayPathfinding){
				drawTiles();
			}

			canvasContext.restore();

			displayQuests();
			displayKeyInputs();
			health();
		} else {
			console.log("No Game State");
		}
}

function drawLevelSpecifics () {
	LEVELS[levelList[currentLevelIndex]].drawAll();
}
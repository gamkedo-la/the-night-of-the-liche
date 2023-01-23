// Characters //

var canvas, canvasContext;
var player = new WarriorClass();

//var alchemist = new alchemistClass();  //VJM 1/7/23:  need to make this based on the map

// Game State //
const NIGHT_DARKNESS_OPACITY = 0.85; // 1 = full black

var isNighttime = true; // if this is true, we drawDarkness()
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
	player.reset(playerPic, "Mimi");
	//alchemist.reset();
	console.log(roomGrid)
	for (var i = 0; i < roomGrid.length; i++){ //search for characters to create classes
		if(roomGrid[i] == TILE_SKELETON){
			addSkeleton(); 
		} else if (roomGrid[i] == TILE_ALCHEMIST){
			addAlchemist();
		}
	}
	for (var i = 0; i < skeletonList.length; i++) {  		
		skeletonList[i].reset();
	} 
	for (var i = 0; i < alchemistList.length; i++) {  		
		alchemistList[i].reset();
	} 
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
//	player.checkWarriorandSwordCollisionAgainst(alchemist);
	for (var i = 0; i < skeletonList.length; i++) {  		
	//	player.checkWarriorandSwordCollisionAgainst(skeleton[i]);
	} 
	
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

            if (isNighttime) drawDarkness(); // experimental glow around player with blackness all around

			if(displayPlayerThoughts){
				drawPlayerThoughts();
			}
			if(displayPathfinding){
				drawTiles();
			}

			canvasContext.restore();

			displayQuests();
			displayKeyInputs();
			displayHealth();
		} else {
			console.log("No Game State");
		}
}

// experimental glow around player with blackness all around
// this is a really cheap and simple way of doing this using one image
function drawDarkness() {
    canvasContext.globalAlpha = NIGHT_DARKNESS_OPACITY;
    canvasContext.drawImage(darknessPic,player.x+24-1000,player.y+24-1000);
    canvasContext.globalAlpha = 1;
}

function drawLevelSpecifics () {
	LEVELS[levelList[currentLevelIndex]].drawAll();
}
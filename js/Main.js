// Characters //

var canvas, canvasContext;
var playerCardCanvas, playerCardCanvasContext;
var skeletonCardCanvas, skeletonCardContext;
var player = new WarriorClass();


//var alchemist = new alchemistClass();  //VJM 1/7/23:  need to make this based on the map

// Game State //
var isNighttime = true; // if this is true, we drawDarkness()
var menuScreen = true;
var isInShop = false;
var inGame = false;
var timeSinceInShop = 0;

window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');
	playerCardCanvas = document.getElementById('playerCanvas');
	playerCardCanvasContext = playerCardCanvas.getContext('2d');
	skeletonCardCanvas = document.getElementById('playerCanvas');
	skeletonCardContext = skeletonCardCanvas.getContext('2d');
	
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
		} else if (roomGrid[i] == TILE_SPIRIT){
			addSpirit();
		}
	}
	for (var i = 0; i < skeletonList.length; i++) {  		
		skeletonList[i].reset();
	} 
	for (var i = 0; i < alchemistList.length; i++) {  		
		alchemistList[i].reset();
	} 
	for (var i = 0; i < spiritList.length; i++) {  		
		spiritList[i].reset();
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

			if(displayPlayerThoughts){
				drawPlayerThoughts();
			}
			if(displayPathfinding){
				drawTiles();
			}

			canvasContext.restore();

            if (isNighttime) drawDarkness(); // experimental glow around player with blackness all around

			displayQuests();
			displayKeyInputs();
			displayHealth();
			drawPlayerCard();
			drawSkeletonCard();
		} else {
			console.log("No Game State");
		}
}

function drawLevelSpecifics () {
	LEVELS[levelList[currentLevelIndex]].drawAll();
}

function drawPlayerCard(){  // VJM:  WIP, trying to put together the raw concept
	playerCardCanvasContext.fillStyle = 'white'; //background
	playerCardCanvasContext.fillRect(0,0,300,300); 
	playerCardCanvasContext.drawImage(player.myplayerPic, 240, 0, 48, 52, 0, 0, 100, 100); //player image
	playerCardCanvasContext.fillStyle = 'black'; //character information
	playerCardCanvasContext.fillText("Max Health: " + player.maxHealth, 100, 10);
	playerCardCanvasContext.fillText("Inventory", 10, 120);
	playerCardCanvasContext.beginPath(); //inventory
	let xPos;
	let yPos = 140;
	let boxWidth = 50;
	let boxHeight = 50;
	for (i=0; i<5; i++){
		for (ii=0; ii<3; ii++){
		xPos = (i*boxWidth)+25;
		yPos = (ii*boxHeight)+130;
		playerCardCanvasContext.strokeStyle = 'black';
		playerCardCanvasContext.lineWidth = "3";
		playerCardCanvasContext.rect(xPos, yPos, boxWidth, boxHeight);
		playerCardCanvasContext.stroke();
		}
	}
}


function drawSkeletonCard(){  // VJM:  WIP, trying to put together the raw concept
	skeletonCardContext.fillStyle = 'red'; //background
	skeletonCardContext.fillRect(0,0,300,300); 
	skeletonCardContext.drawImage(skeletonList[0].characterPic, 0, 0, 50, 50, 0, 0, 100, 100); //player image
	skeletonCardContext.fillStyle = 'black'; //character information
	skeletonCardContext.fillText("Max Health: " + skeletonList[0].maxHealth, 100, 10);
	skeletonCardContext.fillText("Inventory", 10, 120);
	skeletonCardContext.beginPath(); //inventory
}
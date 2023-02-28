// THE NIGHT OF THE LICHE
// a Hometeam GameDev Production led by Vince

var canvas, canvasContext;
var playerCardCanvas, playerCardCanvasContext;
var skeletonCardCanvas, skeletonCardContext;
const SIDEBAR_WIDTH = 300;

// Characters //
var player = new WarriorClass();
//var alchemist = new alchemistClass();  //VJM 1/7/23:  need to make this based on the map

// Game State //
var isNighttime = true; // if this is true, we drawDarkness()
var isRaining = true; // set to false to stop the rain
var menuScreen = true;
var isInShop = false;
var inGame = false;
var timeSinceInShop = 0;
var isPaused = false;
var leafsBlowing = true;

window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');
	playerCardCanvas = document.getElementById('playerCanvas');
	playerCardCanvasContext = playerCardCanvas.getContext('2d');
	skeletonCardCanvas = document.getElementById('skeletonCanvas');
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

function loadLevel(whichLevel, resetPlayerPos = true) {
	roomGrid = whichLevel.layers.background
	if(resetPlayerPos) player.reset(playerPic, "Mimi");
	skeletonList.length = 0
	alchemistList.length = 0
	spiritList.length = 0
	animationList.length = 0

    // reset the light source list in the Darkness.js effect
    resetLightsources();

	//alchemist.reset();
	console.log(roomGrid)
	if (LEVELS[levelList[currentLevelIndex]].skeletonList) {
		skeletonList = [...LEVELS[levelList[currentLevelIndex]].skeletonList]
		alchemistList = [...LEVELS[levelList[currentLevelIndex]].alchemistList]
		spiritList = [...LEVELS[levelList[currentLevelIndex]].spiritList]
		licheList = [...LEVELS[levelList[currentLevelIndex]].licheList]
		animationList = [...LEVELS[levelList[currentLevelIndex]].animationList]
	} else {
		for (var i = 0; i < roomGrid.length; i++){ //search for characters to create classes
			if(roomGrid[i] == TILE_SKELETON){
				addSkeleton();
			} else if (roomGrid[i] == TILE_ALCHEMIST){
				addAlchemist();
			} else if (roomGrid[i] == TILE_SPIRIT){
				addSpirit();
			} else if (roomGrid[i] == TILE_LICHE){
				addLiche();
			} else if (whichLevel.layers.interactive[i] == TILE_CANDLE){
			//} else if (roomGrid[i] == TILE_CANDLE){
				whichLevel.layers.interactive[i] = TILE_WALL1_TOP;
				let rowIdx = Math.floor(i/ROOM_COLS);
				let colIdx = i%ROOM_COLS;
				let px = idxToCol(i)*TILE_W;
				let py = idxToRow(i)*TILE_H;
				//let px = colIdx * TILE_W;
				//let py = (rowIdx) * TILE_H;
				addAnimation({pic:candlePic, frames:6, x:px, y:py, height: 100});
				addLightsource(px,py+30,24,1,1,0.7); // small yellow light
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
		for (var i = 0; i < licheList.length; i++) {
			licheList[i].reset();
		}
	}

    // look for torches, fireplaces, etc in the foreground layer
    // console.log("Looking for light sources in a foreground of length "+whichLevel.layers.foreground.length);
    for (var i = 0; i < whichLevel.layers.foreground.length; i++){
        if (whichLevel.layers.foreground[i] == TILE_FIRE_PLACE){
            // console.log("FOUND A FIREPLACE!");
            let px = idxToCol(i)*TILE_W;
            let py = idxToRow(i)*TILE_H;
            addLightsource(px,py+50,80,1,0.5,0); // orange light
        }
    }


	SetupPathfindingGridData();
}

function loadAreaByName (name, direction) {
	LEVELS[levelList[currentLevelIndex]].skeletonList = [...skeletonList]
	LEVELS[levelList[currentLevelIndex]].alchemistList = [...alchemistList]
	LEVELS[levelList[currentLevelIndex]].spiritList = [...spiritList]
	LEVELS[levelList[currentLevelIndex]].licheList = [...licheList]
	LEVELS[levelList[currentLevelIndex]].animationList = [...animationList]
	

	currentLevelIndex = levelList.findIndex(level => level === name) || 0;
	switch (direction) {
		case 'north':
		case 'up':
			player.y = (ROOM_ROWS - 1) * TILE_H; //LEVELS[levelList[currentLevelIndex]].layers.background
			break;
		case 'south':
		case 'down':
			player.y = 0;
			break;
		case 'east':
		case 'right':
			player.x = 0;
			break;
		case 'west':
		case 'left':
			player.x = (ROOM_COLS - 1) * TILE_W;
			break;
	}
	loadLevel(LEVELS[levelList[currentLevelIndex]], false);
}

function updateAll() {
	if (isPaused) return;

	moveAll();
	drawAll();
}

function checkCollisions(){
//	player.checkWarriorandSwordCollisionAgainst(alchemist);
	for (var i = 0; i < skeletonList.length; i++) {		
		player.checkWarriorandSwordCollisionAgainst(skeletonList[i]);
	} 
	for (var i = 0; i < alchemistList.length; i++) {		
		player.checkWarriorandSwordCollisionAgainst(alchemistList[i]);
	} 
	for (var i = 0; i < spiritList.length; i++) {		
		player.checkWarriorandSwordCollisionAgainst(spiritList[i]);
	}
	for (var i = 0; i < licheList.length; i++) {		
		player.checkWarriorandSwordCollisionAgainst(licheList[i]);
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
			canvasContext.drawImage(logoPic, 280,0);

            const helpX = 450;
			let helpy = 340;
            let helph = 14;

			canvasContext.font="24px Georgia";
			//colorText("This game is still Work in Progress, but playable!", 170, 150, "white");
			//colorText("Move from level to level by collecting keys.", 170, 200, "white");
			//colorText("Kill monsters with your sword, and collect gold.", 170, 225, "white");
			colorText("Click to start", helpX-1, 320-1, "red");
			colorText("Click to start", helpX+1, 320-1, "red");
			colorText("Click to start", helpX-1, 320+1, "red");
			colorText("Click to start", helpX+1, 320+1, "red");
			colorText("Click to start", helpX, 320, "white");


			canvasContext.font="12px Georgia";
            colorText("Move Left - Left Arrow", helpX, helpy+=helph, "white");
			colorText("Move Down - Down Arrow", helpX, helpy+=helph, "white");
			colorText("Move Right - Right Arrow", helpX, helpy+=helph, "white");
			colorText("Move Up - Up Arrow", helpX, helpy+=helph, "white");
			colorText("Sword Attack - Space bar", helpX, helpy+=helph, "white");
			colorText("Arrow Attack - A", helpX, helpy+=helph, "white");
			colorText("Interact/Pick Up - X", helpX, helpy+=helph, "white");

            helpy+=helph;

			Object.keys(GLOBAL_KEYBIND_MAP).forEach((k) => {
				const keybind = GLOBAL_KEYBIND_MAP[k];
				colorText(`${keybind.description} - ${keybind.key}`, helpX, helpy+=helph, "white");
			})
		} else if (isInShop){
			drawShop();
		} else if (inGame){

            canvasContext.save();
			drawLevelSpecifics();
			if (displayPathfinding) drawTiles();
			canvasContext.restore();
            if (isNighttime) drawDarkness(); // experimental glow around player with blackness all around
            if (isRaining) drawRain(-camPanX,-camPanY);
			if (displayPlayerThoughts) drawPlayerThoughts(-camPanX,-camPanY); // drawn above darkness

			displayQuests();
			displayKeyInputs();
			displayHealth();
			drawPlayerCard();

			if (skeletonList && skeletonList.length > 0) drawSkeletonCard();

            canvasContext.drawImage(playerCardCanvas, canvas.width - SIDEBAR_WIDTH, 0);
			canvasContext.drawImage(skeletonCardCanvas, canvas.width - SIDEBAR_WIDTH, playerCardCanvas.height);

		} else {
			console.log("No Game State");
		}
}

function drawLevelSpecifics () {
	LEVELS[levelList[currentLevelIndex]].drawAll();
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

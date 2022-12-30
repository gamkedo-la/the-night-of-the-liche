//Letter Keycodes
const KEY_W = 87;
const KEY_A = 65;
const KEY_S = 83;
const KEY_D = 68;
const KEY_B = 66; 
const KEY_C = 67; 
const KEY_E = 69; 
const KEY_F = 70; 
const KEY_G = 71; 
const KEY_H = 72; 
const KEY_I = 73; 
const KEY_J = 74; 
const KEY_K = 75; 
const KEY_L = 76; 
const KEY_M = 77; 
const KEY_N = 78; 
const KEY_O = 79; 
const KEY_P = 80; 
const KEY_Q = 81; 
const KEY_R = 82; 
const KEY_T = 84; 
const KEY_U = 85; 
const KEY_V = 86; 
const KEY_X = 88; 
const KEY_Y = 89; 
const KEY_Z = 90;

const NUM_0 = 48; 
const NUM_1 = 49; 
const NUM_2 = 50; 
const NUM_3 = 51; 
const NUM_4 = 52; 
const NUM_5 = 53; 
const NUM_6 = 54; 
const NUM_7 = 55; 
const NUM_8 = 56; 
const NUM_9 = 57;  

//Arrow Keycodes
const KEY_LEFT_ARROW =  37;
const KEY_UP_ARROW =  38;
const KEY_RIGHT_ARROW =  39;
const KEY_DOWN_ARROW =  40;

//Misc.
const TAB = 9;
const SHIFT = 16;
const KEY_SPACEBAR = 32;
const ALT = 18;
const ENTER = 13;

var mouseX = 0;
var mouseY = 0;

function setupInput() {
	canvas.addEventListener('mousemove', updateMousePos);
	
	document.addEventListener('keydown', keyPressed);
	document.addEventListener('keyup', keyReleased);
	
	player.setupInput(KEY_UP_ARROW, KEY_RIGHT_ARROW, KEY_DOWN_ARROW, KEY_LEFT_ARROW, KEY_SPACEBAR, KEY_A);
}

function updateMousePos(evt) {
	var rect = canvas.getBoundingClientRect();
	var root = document.documentElement;
	
	mouseX = evt.clientX - rect.left - root.scrollLeft;
	mouseY = evt.clientY - rect.top - root.scrollTop;
	
}

function keySet(keyEvent, player, setTo) {
	if(keyEvent.keyCode == player.controlKeyLeft) {
		player.keyHeld_WalkWest = setTo;
	}
	if(keyEvent.keyCode == player.controlKeyRight) {
		player.keyHeld_WalkEast = setTo;
	}
	if(keyEvent.keyCode == player.controlKeyUp) {
		player.keyHeld_WalkNorth = setTo;
	}
	if(keyEvent.keyCode == player.controlKeyDown) {
		player.keyHeld_WalkSouth = setTo;
	}	
}

function keyPressed(evt) {
	// Hold down ctrl + shift and press a letter to activate a cheat
	if (evt.ctrlKey && evt.shiftKey) {
		activateCheatCode(evt.keyCode);
	}
	if(isInShop){
		console.log(evt.keyCode);
		shopInput(evt.keyCode);
		
	} else {
		
		keySet(evt, player, true);
		if(evt.keyCode == player.controlKeySword) {
			player.swordSwing(); 
		}
		else if(evt.keyCode == player.controlKeyArrow) {
			player.shotArrow(); 
		}
	}
    evt.preventDefault(); // without this, arrow keys scroll the browser!
}

function keyReleased(evt) {
	keySet(evt, player, false);
}

function handleMouseClick(evt) {
	if(menuScreen) {
		menuScreen = false;
        backgroundMusic.loopSong("backgroundMusic");
	}
}

function activateCheatCode(keyCode) {
	if (keyCode === KEY_C) {
		player.noClipping = !player.noClipping;
		console.log(`Cheatcode "noClipping" is ${player.noClipping ? "active" : "inactive"}`)
	} else if (keyCode === KEY_I) {
		player.invulnerable = !player.invulnerable;
		console.log(`Cheatcode "invulnerable" is ${player.invulnerable ? "active" : "inactive"}`)
	}
}

var tileOverIdx = -1;
var mouseOverSidebar = false;

var mouseDragging = false;
var mouseSettingWalls = false;

function initInput() {
    document.addEventListener("mousemove", mousemoved);
    document.addEventListener("mousedown", mouseclicked);
    document.addEventListener("mouseup", mousereleased); /////
}

function mousereleased(evt) {
    mouseDragging = false;
}

function mouseclicked(evt) {
    if(mouseOverSidebar) {
        pathfindingNow = !pathfindingNow;
        if(endTile != null) {
            pathfindingNow = false;
        }
        if(pathfindingNow == false) {
            SetupPathfindingGridData();
        }
        return;
    }

    if (tileOverIdx < 0 || tileOverIdx >= tileGrid.length) { // invalid or off board
        return;
    }

    if (tileOverIdx != -1) {
        grid[tileOverIdx].wallToggle();
        mouseDragging = true; 
        mouseSettingWalls = (grid[tileOverIdx].elementType == WALL);  
    }
}

function mousemoved(evt) {
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;

    // account for the margins, canvas position on page, scroll amount, etc.
    mouseX = evt.clientX - rect.left - root.scrollLeft;
    mouseY = evt.clientY - rect.top - root.scrollTop;

    var tileOverCol = Math.floor(mouseX / TILE_W);
    var tileOverRow = Math.floor(mouseY / TILE_H);

    mouseOverSidebar = (tileOverCol >= TILE_COLS);
    if(mouseOverSidebar) {
        tileOverIdx = -1;
    } else {
        tileOverIdx = tileCoordToIndex(tileOverCol, tileOverRow);
    }

    if(mouseDragging && tileOverIdx != -1) { 
        if(mouseSettingWalls) { 
            if(grid[tileOverIdx].elementType != WALL) {
               grid[tileOverIdx].wallToggle(); 
            }
        } else {
            if(grid[tileOverIdx].elementType == WALL) {
               grid[tileOverIdx].wallToggle(); 
            }
        }
    } 
}

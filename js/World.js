const TILE_W = 50;
const TILE_H = 50;
const ROOM_COLS = 21; 
const ROOM_ROWS = 21; 

var camPanX = 0.0;
var camPanY = 0.0;
const PLAYER_DIST_FROM_CENTER_BEFORE_CAMERA_PAN_X = 150;
const PLAYER_DIST_FROM_CENTER_BEFORE_CAMERA_PAN_Y = 100;

const LEVELS = {
	levelOne: getLevelOneLayers(),
	// levelTwo: getLevelTwoLayers() // this doesn't exist yet, but this is how it would be added
}

var currentLevelIndex = 0
// presumably 'levelTwo' will exist eventually too, could also changes these to be 'town', 'forest', 'graveyard', etc
// the strings in this array have to match the property names in the LEVELS object above
var levelList = ['levelOne']

var roomGrid = [];

//Floor Tiles 1 through 100
const TILE_GRASS = 1;
const TILE_WOOD_FLOOR = 2;
const TILE_ROAD = 3; 
const TILE_GARDEN_TL = 10;
const TILE_GARDEN_TOP = 11;
const TILE_GARDEN_TR = 12;
const TILE_GARDEN_LEFTSIDE = 13;
const TILE_GARDEN = 14;
const TILE_GARDEN_RIGHTSIDE = 15;
const TILE_GARDEN_BL = 16;
const TILE_GARDEN_BOTTOM = 17;
const TILE_GARDEN_BR = 18;
const TILE_VEGETABLE1 = 19;
const TILE_VEGETABLE2 = 20;
const TILE_VEGETABLE3 = 21;
const TILE_VEGETABLE4 = 22;
const TILE_VEGETABLE5 = 23;
const TILE_VEGETABLE6 = 24;

//Walls 101 through 200
const TILE_WALL1_TOPLEFT = 101;
const TILE_WALL1_TOP = 102;
const TILE_WALL1_TOPRIGHT = 103;
const TILE_WALL1_LEFT = 104;
const TILE_WALL1_RIGHT = 105;
const TILE_WALL1_BOTTOMLEFT = 106;
const TILE_WALL1_BOTTOM = 107;
const TILE_WALL1_BOTTOMRIGHT = 108;
const TILE_WALL1_LEFTSIDE_TOP = 121;
const TILE_WALL1_LEFTSIDE_BOTTOM = 122;
const TILE_WALL1_RIGHTSIDE_TOP = 123;
const TILE_WALL1_RIGHTSIDE_BOTTOM = 124;
const TILE_WALL1_DOOR_TOP = 125
const TILE_WALL1_DOOR_BOTTOM = 126;
const TILE_WALL3_TOP = 109;
const TILE_WALL3_BOTTOM = 110;
const TILE_WALL3_DOOR_TOP = 111;
const TILE_WALL3_DOOR_BOTTOM = 112;
const TILE_WALL2_TOP = 113;
const TILE_WALL2_BOTTOM = 114;
const TILE_WALL2_RIGHT = 115;
const TILE_WALL2_TOPRIGHT = 116;
const TILE_WALL2_BOTTOMRIGHT = 117;
const TILE_WALL2_LEFT = 118;
const TILE_WALL2_TOPLEFT = 119;
const TILE_WALL2_BOTTOMLEFT = 120;
const TILE_WINDOW_1 = 150;
const TILE_FIRE_PLACE = 151;
const TILE_NIGHT_STAND = 152;

//FENCES 201 to 250
const TILE_FENCE1_LS_POST = 200;
const TILE_FENCE1_LTCORNER = 201;
const TILE_FENCE1_RTCORNER = 202;
const TILE_FENCE1_RS_POST = 203;
const TILE_FENCE1_LS = 204;
const TILE_FENCE1_RS = 205;
const TILE_FENCE1_LBCORNER = 206;
const TILE_FENCE1_BOTTOM = 207;
const TILE_FENCE1_BOTTOM_POST = 208;
const TILE_FENCE1_RBCORNER = 209;

//ROOF 251 TO 300
const TILE_ROOF_1 = 251;
const TILE_ROOF_2 = 252;
const TILE_ROOF_3 = 253;
const TILE_ROOF_4 = 254;
const TILE_ROOF_5 = 255;
const TILE_ROOF_6 = 256;
const TILE_ROOF_7 = 257;
const TILE_ROOF_8 = 258;
const TILE_ROOF_9 = 259;

// To be sorted or removed
const TILE_SHRUB1 = 214;
const TILE_BOOKSELF = 41;
const TILE_BLANK = 42;

const TILE_ALTER = 66;
const TILE_CHAIR1 = 67;
const TILE_CHAIR2 = 68;
const TILE_KITCHENTABLE = 400;
const TILE_BED1 = 401;
const TILE_PLAYERSTART = 402;
const TILE_ALCHEMIST = 403;

function returnTileTypeAtColRow(col, row) {
	if(col >= 0 && col < ROOM_COLS &&
		row >= 0 && row < ROOM_ROWS) {
		 var worldIndexUnderCoord = rowColToArrayIndex(col, row);
		 return roomGrid[worldIndexUnderCoord];
	} else {
		return TILE_WALL;
	}
}

function returnMGTileTypeAtColRow(col, row) {
	if(col >= 0 && col < ROOM_COLS &&
		row >= 0 && row < ROOM_ROWS) {
		 var worldIndexUnderCoord = rowColToArrayIndex(col, row);
		 return (LEVELS[levelList[currentLevelIndex]].interactive)[worldIndexUnderCoord]
		//  return levelOneML[worldIndexUnderCoord];
	} else {
		return TILE_WALL;
	}
}

function getTileTypeAtPixelCoord(atX, atY) {
	var warriorWorldCol = Math.floor(atX / TILE_W);
	var warriorWorldRow = Math.floor(atY / TILE_H);
	var worldIndexUnderWarrior = rowColToArrayIndex(warriorWorldCol, warriorWorldRow);

	if(warriorWorldCol >= 0 && warriorWorldCol < ROOM_COLS &&
		warriorWorldRow >= 0 && warriorWorldRow < ROOM_ROWS) {
		return worldIndexUnderWarrior;
	} // end of valid col and row

	return undefined;
} // end of warriorWorldHandling func

function getTileTypeAtMGPixelCoord(atX, atY) {
	var warriorWorldCol = Math.floor(atX / TILE_W);
	var warriorWorldRow = Math.floor(atY / TILE_H);
	var worldIndexUnderWarrior = rowColToArrayIndex(warriorWorldCol, warriorWorldRow);

	if(warriorWorldCol >= 0 && warriorWorldCol < ROOM_COLS &&
		warriorWorldRow >= 0 && warriorWorldRow < ROOM_ROWS) {
		return worldIndexUnderWarrior;
	} // end of valid col and row

	return undefined;
} // end of warriorWorldHandling func



function rowColToArrayIndex(col, row) {
	return col + ROOM_COLS * row;
}

function drawRoom() {
	var arrayIndex = 0;
	var drawTileX = 0;
	var drawTileY = 0;
	
	for(var eachRow = 0; eachRow < ROOM_ROWS; eachRow++) {
		for(var eachCol = 0; eachCol < ROOM_COLS; eachCol++) {

			var arrayIndex = rowColToArrayIndex(eachCol, eachRow); 
			var tileKindHere = roomGrid[arrayIndex];
			var useImg = worldPics[tileKindHere];
			var spriteX = worldPics[tileKindHere].locX;
			var spriteY = worldPics[tileKindHere].locY;
			var spriteWidth = worldPics[tileKindHere].width;
			var spriteHeight = worldPics[tileKindHere].height;
			var spriteOffSetX = worldPics[tileKindHere].offSetX + drawTileX;
			var spriteOffSetY = worldPics[tileKindHere].offSetY + drawTileY;

			canvasContext.drawImage(useImg, spriteX, spriteY, spriteWidth, spriteHeight, spriteOffSetX, spriteOffSetY, spriteWidth, spriteHeight);
			//img, sx, sy, swidth, sheight, x, y, width, height);
			drawTileX += TILE_W;
			arrayIndex++;
		} // end of for each col
		drawTileY += TILE_H;
		drawTileX = 0;
	} // end of for each row

	var tileX = 0
	var tileY = 0

	for(var eachRow = 0; eachRow < ROOM_ROWS; eachRow++) {
		for(var eachCol = 0; eachCol < ROOM_COLS; eachCol++) {

			var arrayIndex = rowColToArrayIndex(eachCol, eachRow); 
			// var tileKindHere = levelOneML[arrayIndex];
			var tileKindHere = (LEVELS[levelList[currentLevelIndex]].interactive)[arrayIndex];
			var useImg = worldPics[tileKindHere];
			var spriteX = worldPics[tileKindHere].locX;
			var spriteY = worldPics[tileKindHere].locY;
			var spriteWidth = worldPics[tileKindHere].width;
			var spriteHeight = worldPics[tileKindHere].height;
			var spriteOffSetX = worldPics[tileKindHere].offSetX + tileX;
			var spriteOffSetY = worldPics[tileKindHere].offSetY + tileY;

			canvasContext.drawImage(useImg, spriteX, spriteY, spriteWidth, spriteHeight, spriteOffSetX, spriteOffSetY, spriteWidth, spriteHeight);
			tileX += TILE_W;
			arrayIndex++;
		} // end of for each col
		tileY += TILE_H;
		tileX = 0;
	} // end of for each row
}

function drawTopLayer() {
	var arrayIndex = 0;
	var tileFG_X = 0;
	var tileFG_Y = 0;

	for(var eachRow = 0; eachRow < ROOM_ROWS; eachRow++) {
		for(var eachCol = 0; eachCol < ROOM_COLS; eachCol++) {

			var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
			var tileKindHere = (LEVELS[levelList[currentLevelIndex]].foreground)[arrayIndex];
			var useImg = worldPics[tileKindHere];
			var spriteX = worldPics[tileKindHere].locX;
			var spriteY = worldPics[tileKindHere].locY;
			var spriteWidth = worldPics[tileKindHere].width;
			var spriteHeight = worldPics[tileKindHere].height;
			var spriteOffSetX = worldPics[tileKindHere].offSetX + tileFG_X;
			var spriteOffSetY = worldPics[tileKindHere].offSetY + tileFG_Y;

			canvasContext.drawImage(useImg, spriteX, spriteY, spriteWidth, spriteHeight, spriteOffSetX, spriteOffSetY, spriteWidth, spriteHeight);
			tileFG_X += TILE_W;
			arrayIndex++;
		} // end of for each col
		tileFG_Y += TILE_H;
		tileFG_X = 0;
	} // end of for each row
}

function resetLevel() {
	loadLevel(LEVELS[levelList[currentLevelIndex]])
}
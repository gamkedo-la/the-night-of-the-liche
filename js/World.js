const TILE_W = 50;
const TILE_H = 50;
const ROOM_COLS = 20; 
const ROOM_ROWS = 20; 

var camPanX = 0.0;
var camPanY = 0.0;
const PLAYER_DIST_FROM_CENTER_BEFORE_CAMERA_PAN_X = 150;
const PLAYER_DIST_FROM_CENTER_BEFORE_CAMERA_PAN_Y = 100;


var levelOneBG = [
	//1					          5						             10    				           15						            20
	  2,   2,   2,   2,   2,   2,   2,   2,   2,   2,   2,   2,   2,   1,   1,   1,   1,   1,   1,   1, // 1
	  2,   2,   2,   2,   2, 107,   2,   2, 107, 107, 107, 107,   2,   1,   1,   1,   1,   1,   1,   1,
	  2,   2,   2,   2,   2,   2,   2,   2,   2,   2,   2,   2,   2,   1,  10,  11,  11,  11,  12,   1,
	  2,   2,   2,   2,   2,   2,   2,   2,   2,   2,   2,   2,   2,   1,  13,  14,  14,  14,  15,   1,
	109, 109, 109, 109, 109, 111, 109, 101, 102,   2, 102, 102, 103,   1,  13,  14,  14,  14,  15,   1, // 5
	110, 110, 110, 110, 110, 112, 110,   2,   2,   2,   2,   2,   2,   1,  16,  17,  17,  17,  18,   1,
	  1,   1,   1,   1,   1,   3,   1,   2,   2,   2,   2,   2,   2,   1,   1,   1,   3,   1,   1,   1,
	  1,   1,   1,   1,   1,   3,   1,   2,   2,   2,   2,   2,   2,   1,   1,   1,   3,   1,   1,   1,
	  1,   1,   1,   1,   1,   3,   1,   2,   2,   2,   2,   2,   2,   1,   1,   1,   3,   1,   1,   1,
	  1,   1,   1,   1,   1,   3,   1,   2,   2,   2,   2,   2,   2,   1,   1,   1,   3,   1,   1,   1, //10
	  1,   1,   1,   1,   1,   3,   1, 109, 109, 109, 109, 109, 109,   1,   1,   1,   3,   1,   1,   1,
	  1,   1,   1,   1,   1,   3,   1, 110, 110, 110, 110, 110, 110,   1,   1,   1,   3,   1,   1,   1,
	  1,   1,   1,   1,   1,   3,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   3,   1,   1,   1,
	  1,   1,   1,   1,   1,   3,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   3,   1,   1,   1,
	  1,   1,   1,   1,   1,   3,   1,   1,   1,   1, 	1,   1,   1,   1,   1,   1,   3,   1,   1,   1,	//15
	  1,   1,   1,   1,   1,   3,   3,   3,   3,   3,   3,   3,   3,   3,   3,   3,   3,   1,   1,   1,
	  1,   1,   1,   1,   1,   3,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,
	  1,   1,   1,   1,   1,   3,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,
	  1,   1,   1,   1,   1,   3,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,
	  1,   1,   1,   1,   1,   3,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1, //20
	];

  var levelOneML = [
	//1					          5						            10    				           15						            20
	101, 102, 102, 102, 102, 102, 103, 101, 102, 102, 102, 102, 103,  42,  42,  42,  42,  42,  42,  42, // 1
	106,  41,  42,  41,  42, 150, 108, 106, 150,  42, 150,  42, 108,  42, 201, 207, 208, 207, 202,  42,
	104,  42,  42,  42,  42,  42, 123, 121,  42,  42,  42,  42, 105,  42, 200,  20,  19,  20, 203,  42,
	104,  42,  42,  42,  42,  42, 124, 122,  42,  42,  42,  42, 105,  42, 204,  21,  20,  19, 205,  42,
	 42,  42,  42,  42,  42,  42,  42, 101, 102, 125, 102, 102, 103,  42, 200,  24,  23,  22, 205,  42,	// 5
	 42, 150,  42, 150,  42,  42,  42, 106, 107, 126,  41,  42, 108,  42, 206, 207, 208, 207, 209,  42,
	 42,  42,  42,  42,  42,  42,  42, 104,  67,  42,  42,  42, 105,  42,  42,  42,  42,  42,  42,  42,
	 42,  42,  42,  42,  42,  42,  42, 104,  42,  42,  42,  42, 105,  42,  42,  42,  42,  42,  42,  42,
	 42,  42,  42,  42,  42,  42,  42, 104,  42,  42,  42,  42, 105,  42,  42,  42,  42,  42,  42,  42,
	 42,  42,  42,  42,  42,  42,  42, 104,  42,  42,  42,  42, 105,  42,  42,  42,  42,  42,  42,  42, //10
	 42,  42,  42,  42,  42,  42,  42, 109, 109, 109, 109, 109, 109,  42,  42,  42,  42,  42,  42,  42,
	 42,  42,  42,  42,  42,  42,  42, 110, 150, 110, 150, 110, 110,  42,  42,  42,  42,  42,  42,  42,
	 42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
	 42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
	 42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42, //15
	 42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
	 42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
	 42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
	 42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
	 42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42, //20
	];

	var levelOneFG = [
  	//1					         5						           10    				            15					             20
		42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42, //1
		42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
		42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
		42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
		42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
		42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42, //5
		42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
		42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
		42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
		42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
		42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42, //10
		42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
		42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
		42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
		42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
		42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42, //15
		42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
		42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
		42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
		42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
		42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42, //20
	];
 

var levelListBG = [levelOneBG];
var levelNow = 0;
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

function returnTileTypeAtColRow(col, row) {
	if(col >= 0 && col < ROOM_COLS &&
		row >= 0 && row < ROOM_ROWS) {
		 var worldIndexUnderCoord = rowColToArrayIndex(col, row);
		 return roomGrid[worldIndexUnderCoord];
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
			var tileKindHere = levelOneML[arrayIndex];
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

	var tileFG_X = 0
	var tileFG_Y = 0

	for(var eachRow = 0; eachRow < ROOM_ROWS; eachRow++) {
		for(var eachCol = 0; eachCol < ROOM_COLS; eachCol++) {

			var arrayIndex = rowColToArrayIndex(eachCol, eachRow); 
			var tileKindHere = levelOneML[arrayIndex];
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
	loadLevel(levelList[levelNow])
}
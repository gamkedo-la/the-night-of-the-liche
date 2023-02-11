var titlepagePic = document.createElement("img");
var storeFrontPic = document.createElement("img");

var playerPic = document.createElement("img");
var swordPic = document.createElement("img");
var skeletonPic = document.createElement('img');
var alchemistPic = document.createElement("img");
var spiritPic = document.createElement("img");
var thoughtBubblePic = document.createElement("img");
var heartPic = document.createElement("img");
var Pic = document.createElement("img");
var shadowPic = document.createElement("img");
var questGUIPic = document.createElement("img");
var lightGlowPic = document.createElement("img");
var REDlightGlowPic = document.createElement("img");
var GREENlightGlowPic = document.createElement("img");
var BLUElightGlowPic = document.createElement("img");
var candlePic = document.createElement('img');
var rainEffectPic = document.createElement('img');

var worldPics = [];

var picsToLoad = 0;

function countLoadedImagesAndLaunchIfReady(){
	picsToLoad--;
	//console.log(picsToLoad);
	if(picsToLoad == 0) {
		imageLoadingDoneSoStartGame();
	}
}

function beginLoadingImage(imgVar, fileName, locX, locY, width, height, offSetX, offSetY) {
	imgVar.onload = countLoadedImagesAndLaunchIfReady;
	imgVar.src = "images/" + fileName;
	imgVar.locX = locX;
	imgVar.locY = locY;
	imgVar.width = width;
	imgVar.height = height;
	imgVar.offSetX = offSetX;
	imgVar.offSetY = offSetY;
	//console.log(imgVar.locX)
}

function loadImageForWorldCode(worldCode, fileName, locX, locY, width, height, offSetX, offSetY)  {
	worldPics[worldCode] = document.createElement("img");
	beginLoadingImage(worldPics[worldCode], fileName, locX, locY, width, height, offSetX, offSetY);	
}

function loadImages() {
		/*
			Optimize loading for pictures
		*/
	
		var imageList = [
			//Row 1:  SpriteSheet1
			{tileType: TILE_WALL1_TOPLEFT,  theFile: "SpriteSheet1.png", locX: 0, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_WALL1_TOP,  theFile: "SpriteSheet1.png", locX: 50, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_WALL1_TOPRIGHT,  theFile: "SpriteSheet1.png", locX: 100, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_WALL2_TOPLEFT,  theFile: "SpriteSheet1.png", locX: 150, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_WALL2_TOP,  theFile: "SpriteSheet1.png", locX:200, locY: 50, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_WALL2_TOPRIGHT,  theFile: "SpriteSheet1.png", locX: 250, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_WALL3_DOOR_TOP,  theFile: "SpriteSheet1.png", locX: 300, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_WALL3_TOP,  theFile: "SpriteSheet1.png", locX: 350, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_WINDOW_1,  theFile: "SpriteSheet1.png", locX: 400, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: -25},
			{tileType: TILE_FIRE_PLACE,  theFile: "SpriteSheet1.png", locX: 450, locY: 0, width: 50, height: 100, offSetX: 0, offSetY: 20},
			//OPEN
			//Row 2:  SpriteSheet1
			{tileType: TILE_WALL1_BOTTOMLEFT,  theFile: "SpriteSheet1.png", locX: 0, locY: 50, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_WALL1_BOTTOM,  theFile: "SpriteSheet1.png", locX: 50, locY: 50, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_WALL1_BOTTOMRIGHT,  theFile: "SpriteSheet1.png", locX: 100, locY: 50, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_WALL2_BOTTOMLEFT,  theFile: "SpriteSheet1.png", locX: 150, locY: 50, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_WALL2_BOTTOM,  theFile: "SpriteSheet1.png", locX: 200, locY: 50, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_WALL2_BOTTOMRIGHT,  theFile: "SpriteSheet1.png", locX: 250, locY: 50, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_WALL3_DOOR_BOTTOM,  theFile: "SpriteSheet1.png", locX: 300, locY: 50, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_WALL3_BOTTOM,  theFile: "SpriteSheet1.png", locX: 350, locY: 50, width: 50, height: 50, offSetX: 0, offSetY: 0},
			//OPEN
			//OPEN
			//Row 3:  SpriteSheet1
			{tileType: TILE_WALL1_LEFT,  theFile: "SpriteSheet1.png", locX: 0, locY: 100, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_WALL1_DOOR_TOP,  theFile: "SpriteSheet1.png", locX: 50, locY: 100, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_WALL1_RIGHT,  theFile: "SpriteSheet1.png", locX: 100, locY: 100, width: 50, height: 50, offSetX: 0, offSetY: 0},
			//OPEN
			{tileType: TILE_WALL2_LEFT,  theFile: "SpriteSheet1.png", locX: 150, locY: 100, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_WALL2_RIGHT,  theFile: "SpriteSheet1.png", locX: 250, locY: 100, width: 50, height: 50, offSetX: 0, offSetY: 0},
			//OPEN
			//OPEN
			//OPEN
			{tileType: TILE_NIGHT_STAND,  theFile: "SpriteSheet1.png", locX: 450, locY: 100, width: 50, height: 100, offSetX: 0, offSetY: 20},
			//Row 4:  SpriteSheet1
			{tileType: TILE_WALL1_LEFTSIDE_TOP,  theFile: "SpriteSheet1.png", locX: 0, locY: 150, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_WALL1_DOOR_BOTTOM,  theFile: "SpriteSheet1.png", locX: 50, locY: 150, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_WALL1_RIGHTSIDE_TOP,  theFile: "SpriteSheet1.png", locX: 100, locY: 150, width: 50, height: 50, offSetX: 0, offSetY: 0},
			//OPEN
			//OPEN
			//OPEN
			//OPEN
			//OPEN
			//OPEN
			//OPEN
			//Row 5:  SpriteSheet1
			{tileType: TILE_WALL1_LEFTSIDE_BOTTOM,  theFile: "SpriteSheet1.png", locX: 0, locY: 200, width: 50, height: 50, offSetX: 0, offSetY: 0},
			//OPEN
			{tileType: TILE_WALL1_RIGHTSIDE_BOTTOM,  theFile: "SpriteSheet1.png", locX: 100, locY: 200, width: 50, height: 50, offSetX: 0, offSetY: 0},
			//OPEN
			//OPEN
			//OPEN
			//OPEN
			//OPEN
			//OPEN
			//OPEN

			
			//Row 1:  Ground Sprite Sheet
			{tileType: TILE_GARDEN_TL,  theFile: "ground.png", locX: 0, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_GARDEN_TOP,  theFile: "ground.png", locX: 50, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_GARDEN_TR,  theFile: "ground.png", locX: 100, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_VEGETABLE1,  theFile: "ground.png", locX: 150, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_VEGETABLE2,  theFile: "ground.png", locX: 200, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_VEGETABLE3,  theFile: "ground.png", locX: 250, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_VEGETABLE4,  theFile: "ground.png", locX: 300, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			//OPEN
			{tileType: TILE_POND_TL,  theFile: "ground.png", locX: 350, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_POND_TOP,  theFile: "ground.png", locX: 400, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_POND_TR,  theFile: "ground.png", locX: 450, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			//Row 2:  Ground Sprite Sheet
			{tileType: TILE_GARDEN_LEFTSIDE,  theFile: "ground.png", locX: 0, locY: 50, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_GARDEN,  theFile: "ground.png", locX: 50, locY: 50, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_GARDEN_RIGHTSIDE,  theFile: "ground.png", locX: 100, locY: 50, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_VEGETABLE5,  theFile: "ground.png", locX: 150, locY: 50, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_VEGETABLE6,  theFile: "ground.png", locX: 200, locY: 50, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_WHITE_FLOWER,  theFile: "ground.png", locX: 250, locY: 50, width: 50, height: 50, offSetX: 0, offSetY: 0},
			//OPEN
			{tileType: TILE_POND_LEFTSIDE,  theFile: "ground.png", locX: 350, locY: 50, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_POND,  theFile: "ground.png", locX: 400, locY: 50, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_POND_RIGHTSIDE,  theFile: "ground.png", locX: 450, locY: 50, width: 50, height: 50, offSetX: 0, offSetY: 0},
			//Row 3:  Ground Sprite Sheet			
			{tileType: TILE_GARDEN_BL,  theFile: "ground.png", locX: 0, locY: 100, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_GARDEN_BOTTOM,  theFile: "ground.png", locX: 50, locY: 100, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_GARDEN_BR,  theFile: "ground.png", locX: 100, locY: 100, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_LAVANDER,  theFile: "ground.png", locX: 150, locY: 100, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_RED_FLOWER,  theFile: "ground.png", locX: 200, locY: 100, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_BLUE_FLOWER,  theFile: "ground.png", locX: 250, locY: 100, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_YELLOW_FLOWER,  theFile: "ground.png", locX: 300, locY: 100, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_POND_BL,  theFile: "ground.png", locX: 350, locY: 100, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_POND_BOTTOM,  theFile: "ground.png", locX: 400, locY: 100, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_POND_BR,  theFile: "ground.png", locX: 450, locY: 100, width: 50, height: 50, offSetX: 0, offSetY: 0},
			//Row 4:  Ground Sprite Sheet
			{tileType: TILE_GRASSTODIRT_TL,  theFile: "ground.png", locX: 0, locY: 150, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_GRASSTODIRT_TOP,  theFile: "ground.png", locX: 50, locY: 150, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_GRASSTODIRT_TR,  theFile: "ground.png", locX: 100, locY: 150, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_GIANT_MUSHROOM,  theFile: "ground.png", locX: 150, locY: 150, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_RED_MUSHROOM,  theFile: "ground.png", locX: 200, locY: 150, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_YELLOW_MUSHROOM,  theFile: "ground.png", locX: 250, locY: 150, width: 50, height: 50, offSetX: 0, offSetY: 0},
			//OPEN
			//OPEN
			//OPEN
			//OPEN
			//Row 5:  Ground Sprite Sheet
			{tileType: TILE_GRASSTODIRT_LEFTSIDE,  theFile: "ground.png", locX: 0, locY: 200, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_GRASS,  theFile: "ground.png", locX: 50, locY: 200, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_GRASSTODIRT_RIGHTSIDE,  theFile: "ground.png", locX: 100, locY: 200, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_LOG_PILE,  theFile: "ground.png", locX: 150, locY: 200, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_RED_PEPPER,  theFile: "ground.png", locX: 200, locY: 200, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_ORANGE_PEPPER,  theFile: "ground.png", locX: 250, locY: 200, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_CALIFLOWER,  theFile: "ground.png", locX: 300, locY: 200, width: 50, height: 50, offSetX: 0, offSetY: 0},
			//OPEN
			//OPEN
			//OPEN
			//Row 6:  Ground Sprite Sheet
			{tileType: TILE_GRASSTODIRT_BL,  theFile: "ground.png", locX: 0, locY: 250, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_GRASSTODIRT_BOTTOM,  theFile: "ground.png", locX: 50, locY: 250, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_GRASSTODIRT_BR,  theFile: "ground.png", locX: 100, locY: 250, width: 50, height: 50, offSetX: 0, offSetY: 0},
			//OPEN
			//OPEN
			//OPEN
			//OPEN
			//OPEN
			//OPEN
			//OPEN
			//Row 7:  Ground Sprite Sheet
			//
			//Row 8:  Ground Sprite Sheet
			//
			//Row 9:  Ground Sprite Sheet
			//
			//Row 10:  Ground Sprite Sheet
			{tileType: TILE_BROKEN_WAGONWHEEL,  theFile: "ground.png", locX: 0, locY: 450, width: 50, height: 50, offSetX: 0, offSetY: 0},
			//*************************************************************** */
			//Row 1:  Rocks Sprite Sheet
			{tileType: TILE_SMALL_ROCK_1,  theFile: "rocks.png", locX: 0, locY: 0, width: 16, height: 16, offSetX: 0, offSetY: 0},
			{tileType: TILE_SMALL_ROCK_2,  theFile: "rocks.png", locX: 16, locY: 0, width: 16, height: 16, offSetX: 0, offSetY: 0},
			{tileType: TILE_SMALL_ROCK_3,  theFile: "rocks.png", locX: 32, locY: 0, width: 16, height: 16, offSetX: 0, offSetY: 0},
			{tileType: TILE_SMALL_ROCK_4,  theFile: "rocks.png", locX: 48, locY: 0, width: 16, height: 16, offSetX: 0, offSetY: 0},
			{tileType: TILE_SMALL_ROCK_5,  theFile: "rocks.png", locX: 60, locY: 0, width: 16, height: 16, offSetX: 0, offSetY: 0},
			//Row 2:  Rocks Sprite Sheet
			{tileType: TILE_LARGE_ROCK_1,  theFile: "rocks.png", locX: 0, locY: 50, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_LARGE_ROCK_2,  theFile: "rocks.png", locX: 50, locY: 50, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_LARGE_ROCK_3,  theFile: "rocks.png", locX: 0, locY: 100, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_LARGE_ROCK_4,  theFile: "rocks.png", locX: 50, locY: 100, width: 50, height: 50, offSetX: 0, offSetY: 0},

			//*************************************************************** */
			//Row 1:  Fence Sprite Sheet
			{tileType: TILE_FENCE1_LS_POST,  theFile: "Fence.png", locX: 0, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_FENCE1_LTCORNER,  theFile: "Fence.png", locX: 50, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_FENCE1_RTCORNER,  theFile: "Fence.png", locX: 100, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_FENCE1_RS_POST,  theFile: "Fence.png", locX: 150, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			//OPEN
			//OPEN
			//OPEN
			//OPEN
			//OPEN
			//OPEN
			//Row 2:  Fence Sprite Sheet
			{tileType: TILE_FENCE1_LS,  theFile: "Fence.png", locX: 0, locY: 50, width: 50, height: 50, offSetX: 0, offSetY: 0},
			//OPEN
			//OPEN
			{tileType: TILE_FENCE1_RS,  theFile: "Fence.png", locX: 150, locY: 50, width: 50, height: 50, offSetX: 0, offSetY: 0},
			//OPEN
			//OPEN
			//OPEN
			//OPEN
			//OPEN
			//OPEN			//Row 3:  Fence Sprite Sheet
			{tileType: TILE_FENCE1_LBCORNER,  theFile: "Fence.png", locX: 0, locY: 100, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_FENCE1_BOTTOM,  theFile: "Fence.png", locX: 50, locY: 100, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_FENCE1_BOTTOM_POST,  theFile: "Fence.png", locX: 100, locY: 100, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_FENCE1_RBCORNER,  theFile: "Fence.png", locX: 150, locY: 100, width: 50, height: 50, offSetX: 0, offSetY: 0},
			//OPEN
			//OPEN
			//OPEN
			//OPEN
			//OPEN
			//OPEN
			//Row 4:  Fence Sprite Sheet
			//{tileType: TILE_FENCE1,  theFile: "Fence.png", locX: 0, locY: 150, width: 50, height: 50, offSetX: 0, offSetY: 0},
			//{tileType: TILE_FENCE1,  theFile: "Fence.png", locX: 50, locY: 150, width: 50, height: 50, offSetX: 0, offSetY: 0},
			//{tileType: TILE_FENCE1,  theFile: "Fence.png", locX: 100, locY: 150, width: 50, height: 50, offSetX: 0, offSetY: 0},
			//{tileType: TILE_FENCE1,  theFile: "Fence.png", locX: 150, locY: 150, width: 50, height: 50, offSetX: 0, offSetY: 0},
			//OPEN
			//OPEN
			//OPEN
			//OPEN
			//OPEN
			//OPEN
			//Row 5:  Fence Sprite Sheet
			//OPEN			
			//OPEN
			//OPEN
			//OPEN
			//OPEN
			//OPEN
			//OPEN
			//OPEN
			//OPEN
			//OPEN

			// Roof Tiles
			//Row 1:  Fence Sprite Sheet
			{tileType: TILE_ROOF_1,  theFile: "roof.png", locX: 0, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_ROOF_2,  theFile: "roof.png", locX: 50, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_ROOF_3,  theFile: "roof.png", locX: 100, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			//Row 2:  Fence Sprite Sheet
			{tileType: TILE_ROOF_4,  theFile: "roof.png", locX: 0, locY: 50, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_ROOF_5,  theFile: "roof.png", locX: 50, locY: 50, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_ROOF_6,  theFile: "roof.png", locX: 100, locY: 50, width: 50, height: 50, offSetX: 0, offSetY: 0},
			//Row 3:  Fence Sprite Sheet
			{tileType: TILE_ROOF_7,  theFile: "roof.png", locX: 0, locY: 100, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_ROOF_8,  theFile: "roof.png", locX: 50, locY: 100, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_ROOF_9,  theFile: "roof.png", locX: 100, locY: 100, width: 50, height: 50, offSetX: 0, offSetY: 0},


			//To be sorted
			
			{tileType: TILE_ROAD,  theFile: "worldRoad.png", locX: 0, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_WOOD_FLOOR,  theFile: "woodFloor.png", locX: 0, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_BOOKSELF,  theFile: "bookself.png", locX: 0, locY: 0, width: 100, height: 100, offSetX: 0, offSetY: -25},
			{tileType: TILE_KITCHENTABLE,  theFile: "kitchenTable.png", locX: 0, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0 },
			{tileType: TILE_CHAIR1,  theFile: "chair1.png", locX: 0, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: -25},
			{tileType: TILE_CHAIR2,  theFile: "chair2.png", locX: 0, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: -25},
			{tileType: TILE_ALTER,  theFile: "alter.png", locX: 0, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_BED1,  theFile: "bed1.png", locX: 0, locY: 0, width: 50, height: 100, offSetX: 0, offSetY: 10},
			{tileType: TILE_SHRUB1,  theFile: "shrub1.png", locX: 0, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_BLANK,  theFile: "blank.png", locX: 0, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_GRAVE2, theFile: "grave2.png", locX: 0, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_GRAVE3, theFile: "grave2.png", locX: 50, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},

			//characters and misc
			{varName: playerPic, theFile: "player.png"},
			{varName: alchemistPic, theFile: "alchemist.png"},
			{varName: skeletonPic, theFile: "skeleton.png"},
			{varName: titlepagePic, theFile: "background.png"},
			{varName: thoughtBubblePic, theFile: "thoughtBubble.png"},
			{varName: heartPic, theFile: "hearts.png"},
			{varName: shadowPic, theFile: "shadow.png"},
			{varName: questGUIPic, theFile: "questGUI.png"},
			{varName: spiritPic, theFile: "spirit.png"},
			{varName: lightGlowPic, theFile: "light_glow.png"},
			{varName: REDlightGlowPic, theFile: "red_glow.png"},
			{varName: GREENlightGlowPic, theFile: "green_glow.png"},
			{varName: BLUElightGlowPic, theFile: "blue_glow.png"},
			{varName: candlePic, theFile: "household.png"},
            {varName: rainEffectPic, theFile: "rain_effect.png"},

		];
			
	picsToLoad = imageList.length;

	for(var i=0; i<imageList.length; i++) {
		if(imageList[i].varName != undefined) {
			beginLoadingImage(imageList[i].varName, imageList[i].theFile);
		} else {
			loadImageForWorldCode( 
				imageList[i].tileType, 
				imageList[i].theFile, 
				imageList[i].locX, 
				imageList[i].locY, 
				imageList[i].width, 
				imageList[i].height, 
				imageList[i].offSetX, 
				imageList[i].offSetY);
		}

	}
}

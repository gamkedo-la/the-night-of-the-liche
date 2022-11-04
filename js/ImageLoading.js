var titlepagePic = document.createElement("img");
var storeFrontPic = document.createElement("img");

var warriorPic = document.createElement("img");
var swordPic = document.createElement("img");

var skeletonPic = document.createElement("img");
var deadSkeletonPic = document.createElement("img");

var zombiePic = document.createElement("img");
var deadZombiePic = document.createElement("img");
 
var batPic = document.createElement("img");
var deadBatPic = document.createElement("img");

var goblinPic = document.createElement("img");
var deadGoblinPic = document.createElement("img");

var archerPic = document.createElement("img");
var deadArcherPic = document.createElement("img");

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
	console.log(imgVar.locX)
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
			//OPEN
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
			


			//To be sorted
			
			{tileType: TILE_ROAD,  theFile: "worldRoad.png", locX: 0, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_WOOD_FLOOR,  theFile: "woodFloor.png", locX: 0, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_BOOKSELF,  theFile: "bookself.png", locX: 0, locY: 0, width: 100, height: 100, offSetX: 0, offSetY: -25},
			{tileType: TILE_KITCHENTABLE,  theFile: "kitchenTable.png", locX: 0, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0 },
			{tileType: TILE_CHAIR1,  theFile: "chair1.png", locX: 0, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: -25},
			{tileType: TILE_CHAIR2,  theFile: "chair2.png", locX: 0, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: -25},
			{tileType: TILE_ALTER,  theFile: "alter.png", locX: 0, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_BED1,  theFile: "bed1.png", locX: 0, locY: 0, width: 50, height: 100, offSetX: 0, offSetY: 0},
			{tileType: TILE_SHRUB1,  theFile: "shrub1.png", locX: 0, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_BLANK,  theFile: "blank.png", locX: 0, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_YELLOW_KEY,  theFile: "yellowkey.png", locX: 0, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},

			//To Be Deleted 
			{tileType: TILE_GREEN_KEY,  theFile: "greenkey.png", locX: 0, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_BLUE_KEY,  theFile: "bluekey.png", locX: 0, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_RED_KEY,  theFile: "redkey.png", locX: 0, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_WALL, theFile: "wallEast.png", locX: 0, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_YELLOW_DOOR, theFile: "yellowdoor.png", locX: 0, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_BLUE_DOOR, theFile: "bluedoor.png", locX: 0, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_GREEN_DOOR, theFile: "greendoor.png", locX: 0, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_RED_DOOR, theFile: "reddoor.png", locX: 0, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_FINISH, theFile: "world_goal.png", locX: 0, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_SPIKES, theFile: "spikes.png", locX: 0, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_SPIKES_BLOODY, theFile: "spikesBloody.png", locX: 0, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_GRASS,  theFile: "grass.png", locX: 0, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_TREASURE,  theFile: "treasure.png", locX: 0, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_WATER,  theFile: "water.png", locX: 0, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_SHOP_1,  theFile: "table1.png", locX: 0, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_SHOP_2,  theFile: "table2.png", locX: 0, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_SHOP_3,  theFile: "table3.png", locX: 0, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_SHOP_4,  theFile: "table4.png", locX: 0, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_SHOP_6,  theFile: "table6.png", locX: 0, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_SHOP_7,  theFile: "table7.png", locX: 0, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_SHOP_8,  theFile: "table8.png", locX: 0, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_SHOP_9,  theFile: "table9.png", locX: 0, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_SHOP_A,  theFile: "tablea.png", locX: 0, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_BED,  theFile: "bed.png", locX: 0, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_SHOPKEEPER,  theFile: "shopkeeper.png", locX: 0, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_TREE,  theFile: "tree.png", locX: 0, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_GRAVE,  theFile: "grave.png", locX: 0, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_FRESH_GRAVE,  theFile: "freshgrave.png", locX: 0, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_CABINET,  theFile: "cabinet.png", locX: 0, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_GRAVE_YARD_PORTAL,  theFile: "worldRoad.png", locX: 0, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0},
			{tileType: TILE_HOME_VILLAGE_PORTAL,  theFile: "worldRoad.png", locX: 0, locY: 0, width: 50, height: 50, offSetX: 0, offSetY: 0}, 
	
			{varName: warriorPic, theFile: "alchemist.png"},
			{varName: swordPic, theFile: "sword.png"},
			{varName: skeletonPic, theFile: "skeleton.png"},
			{varName: deadSkeletonPic, theFile: "deadSkeleton.png"},
			{varName: deadZombiePic, theFile: "deadZombie.png"},
			{varName: batPic, theFile: "bat.png"},
			{varName: deadBatPic, theFile: "deadbat.png"},
			{varName: zombiePic, theFile: "zombie.png"},
			{varName: goblinPic, theFile: "goblin.png"},
			{varName: deadGoblinPic, theFile: "deadgoblin.png"},
			{varName: archerPic, theFile: "archer.png"},
			{varName: deadArcherPic, theFile: "deadgoblin.png"},
			{varName: storeFrontPic, theFile: "storefront.jpg"},
			{varName: titlepagePic, theFile: "background.png"}
			
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

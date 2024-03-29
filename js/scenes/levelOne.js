// When creating another level, build it as a function like this one.
// Don't forget to add your new file as a script in index.html
// Also need to add your level to the LEVELS variable in World.js

function getLevelOneLayers () {
  return {
		//background are tiles like dirt, grass, water, and farm land.  It's not meant to be interactive with
		background: [
		//0	   1			             5					             10    				            15                       20
			1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1, // 0
			1,   2,   2,   2,   2,   2,   2,   2,   2,   2,   2,   2,   2,   2,   1,   1,   1,   1,   1,   1,   1, 
			1,   2,   2,   2,   2,   2,   2, 107, 107,   2,   2,   2,   2,   2,   1,   1,   1,   1,   1,   1,   1,
			1,   2,   2, 402,   2,   2,   2,   2,   2,   2,   2,   2,   2,   2,   1,  10,  11,  11,  11,  12,   1,
			1,   2,   2,   2,   2,   2,   2,   2,   2,   2,   2,   2,   2,   2,   1,  13,  14,  14,  14,  15,   1, 
			1,   2,   2,   2,   2,   2,   2,   2,   2,   2,   2,   2,   2,   2,   1,  13,  14,  14,  14,  15,   1, //5
			1,   2,   2,   2,   2,   2,   2,   2,   2,   2,   2,   2,   2,   2,   1,  16,  17,   3,  17,  18,   1,
			1,   1,   1,   1,   1,   1,   3,   1,   2,   2,   2,   2,   2,   2,   1,   1,   1,   3,   1,   1,   1,
			1,  10,  11,  11,  12,   1,   3,   1,   2,   2,   2,   2,   2,   2,   1,   1,   1,   3,   1,   1,   1,
			1,  13,  14,  14,  15,   1,   3,   1,   2,   2,   2,   2,   2,   2,   1,   1,   1,   3,  30,  31,  32, 
			1,  13,  14,  14,  15,   1,   3,   1,   2,   2,   2,   2,   2,   2,   1,   1,   1,   3,  33,  34,  35, //10
			1,  13,  14,  14,  15,   1,   3,   1,   2,   2,   2,   2,   2,   2,   1,   1,   1,   3,  33,  34,  35,
			1,  13,  14,  14,  15,   1,   3,   1,   2,   2,   2,   2,   2,   2,   1,   1,   1,   3,  36,  37,  38,
			1,  16,  17,  17,  18,   1,   3,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   3,   1,   1,   1,
		    1,   1,   1,   1,   1,   1,   3,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   3,   1,   1,   1, 
		    1,   1,   1,   1,   1,   1,   3,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   3,   1,   1,   1, //15	
		   14,  14,  14,  14,  14,   1,   3,   3,   3,   3,   3,   3,   3,   3,   3,   3,   3,   3,   1,   1,   1,
		   14,  39,  40,  41,  14,   1,   3,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,
		   14,  43,   1,   1,   1,   1,   3,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,
		   14,  43,   1,  44,  14,   1,   3,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1, 
		   14,  45,  46,  47,  14,   1,   3,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1, //20
		],
		// interactive is where interaction occurs.  These are where majority of the tiles will be listed.
		interactive: [
			//    1					 5				          10    				   15					    20
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42, 101, 406, 102, 102, 102, 406, 103, 101, 102, 102, 102, 102, 103,  42,  42,  42,  42,  42,  42,  42,//1 
			42, 106, 107, 107, 107, 107, 107, 123, 121, 107, 107, 107, 107, 108,  42, 201, 207, 208, 207, 202,  42,
			42, 104,  42,  42,  42,  42,  42, 124, 122,  42,  42,  42,  42, 105,  42, 200,  20,  19,  20, 203,  42,
			42, 104,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42, 105,  42, 204,  21,  20,  19, 205,  42,
			42, 109, 109, 109, 109, 109,  42, 109, 101, 102, 125, 102, 102, 103,  42, 200,  24,  23,  22, 205,  42,	// 5
			42, 110, 110, 110, 110, 110,  42, 110, 106, 107, 126, 599,  42, 108,  42, 206, 207,  42, 207, 209,  42,
			42,  42,  50,  51,  42,  73,  42,  73, 104,  67,  42,  42,  42, 105,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42, 104,  42,  42,  42,  42, 105,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  62, 104,  42,  42,  42,  42, 105,  42,  42,  42,  42,  30,  31,  32,
			73,  42,  42,  42,  42,  42,  42,  61, 104,  42,  42,  42,  42, 105,  42,  42,  42,  42,  33,  34,  35, //10
			73,  42,  42,  42,  42,  42,  42,  42, 109, 109, 109, 109, 109, 109,  42,  42,  42,  42,  33,  34,  35,
		    42,  42,  42,  42,  42,  42,  42,  42, 110, 110, 110, 110, 110, 110,  42,  42,  42,  42,  36,  37,  38,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  50,  42,  51,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  52,  53,  42,  42,  42,  42,  49,  42,  54,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  48,  52,  53,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42, //15
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  55,  42,  42,  42,  42,  42, 153,  56,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  56,  42,  42,  42,  57,  57,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  60,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42, //20
		],
		//foreground layer is where overlays occur.  Player walks through the door and top layer will be above the player.
		foreground: [
			//    1					 5						  10    				   15					    20
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42, 151,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42, //1
			42,  42,  42,  42, 154,  42,  42,  42,  42,  42,  42, 152,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42, 125,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42, 150, 150, 150,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42, //5
			42,  51,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42, //10
			42,  42,  42,  42,  42,  42,  42,  42,  42, 150, 150, 150, 150,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42, //15
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42, //20
		]
	}
}

function levelOneMoveAll () {
	player.move();
	//alchemist.move();
	for (var i = 0; i < skeletonList.length; i++) {		
		skeletonList[i].move();
	} 
	for (var i = 0; i < alchemistList.length; i++) {		
		alchemistList[i].move();
	} 
	for (var i = 0; i < spiritList.length; i++) {		
		spiritList[i].move();
	}
	for (var i = 0; i < licheList.length; i++) {		
		licheList[i].move();
	}
	for (var i = 0; i < leafList.length; i++) {		
		leafList[i].move();
	}



	/*if(pathfindingNow) {
		PathfindingNextStep();
	}*/
	checkToAddLeafs();
	checkCollisions();
	cameraFollow();	
}

function levelOnegetNextMap (direction) {
	let nextMap = null
	switch (direction) {
		case 'north':
		case 'up':
			break
		case 'south':
		case 'down':
			nextMap = 'graveyard';
			break
		case 'west':
		case 'left':
			break
		case 'east':
		case 'right':
			nextMap = 'town';
			break
	}

	return nextMap;
}

function levelOneDrawAll () {
	if (timeSinceInShop < 15) timeSinceInShop++;

	canvasContext.translate(-camPanX,-camPanY);
	drawRoom();
	player.draw();
	//alchemist.draw();
	for (var i = 0; i < skeletonList.length; i++) {		
		skeletonList[i].draw();
	} 
	for (var i = 0; i < alchemistList.length; i++) {		
		alchemistList[i].draw();
	} 
	for (var i = 0; i < spiritList.length; i++) {		
		spiritList[i].draw();
	} 
	for (var i = 0; i < licheList.length; i++) {		
		licheList[i].draw();
	} 
	for (var i = 0; i < animationList.length; i++) {		
		animationList[i].draw();
	} 
	if (leafsBlowing) {
		for (var i = 0; i < leafList.length; i++) {		
			leafList[i].draw();
			if(leafList[i].markForRemoval){
				leafList.splice(i, 1);
			}
		}
	} 
	drawTopLayer();
	drawRoof(timeSinceInShop / 15);
}

let levelOneSkeletonList = null;
let levelOneAlchemistList = null;
let levelOneSpiritList = null;
let levelOneAnimationList = null;
let levelOneLeafList = null;

let levelOneThoughtTimer = 0;

const levelOnePlayerThoughts = [
	{
		startTime: 25,
		endTime: 200,
		thought: 	"It's been several weeks since the\nlast supply wagon has\nmade it to our village.",
		voiceover:  "sound/player_voiceover_1a.mp3"
	},
	{
		startTime: 225,
		endTime: 400,
		thought: 	"I'm not one to worry,\nbut I'm starting to\nget concerned.",
		voiceover:  "sound/player_voiceover_1b.mp3"
	},
	{
		startTime: 425,
		endTime: 600,
		thought: 	"I've been trying to make\nthe best out of my garden,\nbut I'm starting to low on food.",
		voiceover:  "sound/player_voiceover_1c.mp3"
	},
	{
		startTime: 625,
		endTime: 800,
		thought: 	"I should head to our\nneighboring village of\nDagger Fall and investigate.",
		voiceover:  "sound/player_voiceover_1d.mp3"
	}
];

const levelOnePlayerThoughtEndDisplayTime = 900;
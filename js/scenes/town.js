// When creating another level, build it as a function like this one.
// Don't forget to add your new file as a script in index.html
// Also need to add your level to the LEVELS variable in World.js

function getTownLayers () {
  return {
		//background are tiles like dirt, grass, water, and farm land.  It's not meant to be interactive with
		background: [
		//0	   1			             5					             10    				            15                       20
			  1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1, // 0
			  1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1, 
			  1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,
			  1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,
			  1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1, 
			  1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1, //5
			  1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,
			  1,   1,   1,   1,   1,   1,   3,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,
			  1,   1,   1,   1,   1,   1,   3,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,
			  1,   1,   1,   1,   1,   1,   3,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1, 
			  1,   1,   1,   1,   1,   1,   3,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1, //10
			  1,   1,   1,   1,   1,   1,   3,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,
			  1,   1,   1,   1,   1,   1,   3,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,
			  1,   1,   1,   1,   1,   1,   3,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,
		    1,   1,   1,   1,   1,   1,   3,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1, 
		    1,   1,   1,   1,   1,   1,   3,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1, //15	
		    1,   1,   1,   1,   1,   1,   3,   3,   3,   3,   3,   3,   3,   3,   3,   3,   3,   1,   1,   1,   1,
		    1,   1,   1,   1,   1,   1,   3,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,
		    1,   1,   1,   1,   1,   1,   3,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,
		    1,   1,   1,   1,   1,   1,   3,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1, 
		    1,   1,   1,   1,   1,   1,   3,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1, //20
		],
		// interactive is where interaction occurs.  These are where majority of the tiles will be listed.
		interactive: [
			//    1					 5				          10    				   15					    20
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,//1 
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,	// 5
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42, //10
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
		  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  50,  42,  51,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  52,  53,  42,  42,  42,  42,  49,  42,  54,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  48,  52,  53,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42, //15
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42, //20
		],
		//foreground layer is where overlays occur.  Player walks through the door and top layer will be above the player.
		foreground: [
			//    1					 5						  10    				   15					    20
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42, //1
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42, //5
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42, //10
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
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

function townMoveAll () {
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

function townGetNextMap (direction) {
	let nextMap = null
	switch (direction) {
		case 'north':
		case 'up':
			break
		case 'south':
		case 'down':
			
			break
		case 'west':
		case 'left':
			nextMap = 'levelOne';
			break
		case 'east':
		case 'right':
			break
	}

	return nextMap;
}

function townDrawAll () {
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

let townSkeletonList = null;
let townAlchemistList = null;
let townSpiritList = null;
let townAnimationList = null;
let townLeafList = null;

let townThoughtTimer = 0;

const townPlayerThoughts = [
	// {
	// 	startTime: 25,
	// 	endTime: 200,
	// 	thought: 	"It's been several weeks since the\nlast supply wagon has\nmade it to our village."	
	//  voiceover:  null // "sound/player_voiceover_1a.mp3"
	// },
	// {
	// 	startTime: 225,
	// 	endTime: 400,
	// 	thought: 	"I'm not one to worry,\nbut I'm starting to\nget concerned."
	//  voiceover:  null // "sound/player_voiceover_1a.mp3"
	// },
	// {
	// 	startTime: 425,
	// 	endTime: 600,
	// 	thought: 	"I've been trying to make\nthe best out of my garden,\nbut I'm starting to low on food."
	//  voiceover:  null // "sound/player_voiceover_1a.mp3"
	// },
	// {
	// 	startTime: 625,
	// 	endTime: 800,
	// 	thought: 	"I should head to our\nneighboring village of\nDagger Fall and investigate."
	//  voiceover:  null // "sound/player_voiceover_1a.mp3"
	// }
];

const townPlayerThoughtEndDisplayTime = 0;
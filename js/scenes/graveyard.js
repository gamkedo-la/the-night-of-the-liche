// When creating another level, build it as a function like this one.
// Don't forget to add your new file as a script in index.html
// Also need to add your level to the LEVELS variable in World.js

function getGraveyardLayers () {
  return {
		//background are tiles like dirt, grass, water, and farm land.  It's not meant to be interactive with
		background: [
			//0	   1			       5					    10    				    15                       20
			10,  11,  11,  11,  11,  11,  11,  11,  11,  11,  11,  11,  11,  11,  11,  11,  11,  11,  11,  11,  12, // 0
			13,   1,   1,   1,   1,   1,   1,   1,   1,   1,  15,   1,   1,   1,   1,   1,   1,   1,   1,   1,  15, 
			13,   1,   1,   1,   1,   1,   1,   1,   1,   1,  15,   1,   1,   1,   1,   1,   1,   1,   1,   1,  15, 
			13,   1,   1,   1,   1,   1,   1,   1,   1,   1,  15, 404,   1,   1,   1,   1,   1,   1,   1,   1,  15, 
			13,   1,   1,   1,   1,   1,   1,   1,   1,   1,  15,   1,   1,   1,   1,   1,   1,   1,   1,   1,  15, 
			13,   1,   1,   1,   1,   1,   1,   1,   1,   1,  15,   1,   1,   1,   1,   1,   1,   1,   1,   1,  15, 
			13,   1,   1,   1,   1,   1,   1,   1,   1,   1,  15,   1,   1,   1,   1,   1,   1,   1,   1,   1,  15, 
			13,   1,   1,   1,   1,   1,   1,   1,   1,   1,  15,   1,   1,   1,   1,   1,   1,   1,   1,   1,  15, 
			13,   1,   1,   1,   1,   1,   1,   1,   1,   1,  15,   1,   1,   1,   1,   1,   1,   1,   1,   1,  15, 
			13,   1,   1,   1,   1,   1,   1,   1,   1,   1,  15,   1,   1,   1,   1,   1,   1,   1,   1,   1,  15, 
			13,  11,  11,  11,  11,  11,  11,  11,  11,  11,  11,  11,  11,  11,  11,  11,  11,  11,  11,  11,  15, 
			13,   1,   1,   1,   1,   1,   1,   1,   1,   1,  15,   1,   1,   1,   1,   1,   1,   1,   1,   1,  15, 
			13,   1,   1,   1,   1,   1,   1,   1,   1,   1,  15,   1,   1,   1,   1,   1,   1,   1,   1,   1,  15, 
			13,   1, 404,   1,   1,   1,   1,   1,   1,   1,  15,   1,   1,   1,   1,   1,   1,   1,   1,   1,  15, 
			13,   1,   1,   1,   1,   1,   1,   1,   1,   1,  15,   1,   1,   1,   1,   1,   1,   1,   1,   1,  15, 
			13,   1,   1,   1,   1,   1,   1,   1,   1,   1,  15, 404,   1,   1,   1,   1,   1,   1,   1,   1,  15, 
			13,   1,   1,   1,   1,   1,   1,   1,   1,   1,  15,   1,   1,   1,   1,   1,   1,   1,   1,   1,  15, 
			13,   1,   1,   1,   1,   1,   1,   1,   1,   1,  15,   1,   1,   1,   1,   1,   1,   1,   1,   1,  15, 
			13,   1,   1,   1,   1,   1,   1,   1,   1,   1,  15,   1,   1,   1,   1,   1,   1,   1,   1,   1,  15, 
			13,   1,   1,   1,   1,   1,   1,   1,   1,   1,  15,   1,   1,   1,   1,   1,   1,   1,   1,   1,  15, 
			16,  17,  17,  17,  17,  17,  17,  17,  17,  17,  17,  17,  17,  17,  17,  17,  17,  17,  17,  17,  18, //20
		],
		// interactive is where interaction occurs.  These are where majority of the tiles will be listed.
		interactive: [
			//    1					 5				         10    				      15					   20
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
		 205,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42, 204,
		 205,  42,  72,  42,  69,  42,  69,  42,  69,  42,  42,  42,  69,  42,  69,  42,  69,  42,  69,  42, 204,
		 205,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42, 204,
		 205,  42,  69,  42,  70,  42,  69,  42,  70,  42,  42,  42,  69,  42,  69,  42,  70,  42,  69,  42, 204,
		 205,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42, 204,
		 205,  42,  69,  42,  69,  42,  72,  42,  69,  42,  42,  42,  70,  42,  69,  42,  69,  42,  69,  42, 204,
		 205,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42, 204,
		 205,  42,  70,  42,  72,  42,  69,  42,  69,  42,  42,  42,  69,  42,  69,  42,  69,  42,  71,  42, 204,
		 205,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42, 204,
		  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
		 205,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42, 204,
		 205,  42,  69,  42,  69,  42,  69,  42,  69,  42,  42,  42,  71,  42,  69,  42,  70,  42,  69,  42, 204,
		 205,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42, 204,
		 205,  42,  69,  42,  70,  42,  69,  42,  69,  42,  42,  42,  69,  42,  69,  42,  69,  42,  42,  42, 204,
		 205,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42, 204,
		 205,  42,  69,  42,  69,  42,  69,  42,  69,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42, 204,
		 205,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42, 204,
		 205,  42,  69,  42,  69,  42,  70,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42, 204,
		 205,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42, 204,
		 205,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
		],
		//foreground layer is where overlays occur.  Player walks through the door and top layer will be above the player.
		foreground: [
			//        1					 5						 10    				      15					        20
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
		]
	}
}


function graveyardMoveAll () {
	player.move();
	for (var i = 0; i < skeletonList.length; i++) {		
		skeletonList[i].move();
		if(skeletonList[i].markForRemoval){
			console.log("Remove Skeleton" + i)
			skeletonList.splice(i, 1);
		}
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
	if(pathfindingNow) {
		PathfindingNextStep();
	}

	checkCollisions();
	cameraFollow();	
}

function graveyardGetNextMap (direction) {
	let nextMap = null
	switch (direction) {
		case 'north':
		case 'up':
			nextMap = 'levelOne';
			break
		case 'south':
		case 'down':
			break
		case 'west':
		case 'left':
			break
		case 'east':
		case 'right':
			break
	}

	return nextMap;
}

function graveyardDrawAll () {
	canvasContext.translate(-camPanX,-camPanY);
	drawRoom();
	player.draw();

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
}

let graveyardSkeletonList = null;
let graveyardAlchemistList = null;
let graveyardSpiritList = null;
let graveyardAnimationList = null;
let graveyardLeafList = null;

let graveyardThoughtTimer = 0;

const graveyardPlayerThoughts = [
	// See levelOne.js for proper format
	{
		startTime: 25,
		endTime: 175,
		thought: "I've been to the graveyard many times.\nI have many ancenstors buried here.",
		voiceover:  "sound/graveyard_a.mp3"
	},
	{
		startTime: 200,
		endTime: 1000, // FIXME: speech bubble seems to go away too soon: is this value ignored?
		thought: "But something is different now.\nColder. Darker.\nNot as still as it should be.",
		voiceover:  "sound/graveyard_b.mp3"
	}
];

// should be the time we want to stop displaying thoughts and transition to displaying the quest
const graveyardPlayerThoughtEndDisplayTime = 325;
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
			13,   1,   1,   1,   1,   1,   1,   1,   1,   1,  15,   1,   1,   1,   1,   1,   1,   1,   1,   1,  15, 
			13,   1,   1,   1,   1,   1,   1,   1,   1,   1,  15,   1,   1,   1,   1,   1,   1,   1,   1,   1,  15, 
			13,   1,   1,   1,   1,   1,   1,   1,   1,   1,  15,   1,   1,   1,   1,   1,   1,   1,   1,   1,  15, 
			13,   1,   1,   1,   1,   1,   1,   1,   1,   1,  15,   1,   1,   1,   1,   1,   1,   1,   1,   1,  15, 
			13,   1,   1,   1,   1,   1,   1,   1,   1,   1,  15,   1,   1,   1,   1,   1,   1,   1,   1,   1,  15, 
			13,   1,   1,   1,   1,   1,   1,   1,   1,   1,  15,   1,   1,   1,   1,   1,   1,   1,   1,   1,  15, 
			13,   1,   1,   1,   1,   1,   1,   1,   1,   1,  15,   1,   1,   1,   1,   1,   1,   1,   1,   1,  15, 
			13,  11,  11,  11,  11,  11,  11,  11,  11,  11,  11,  11,  11,  11,  11,  11,  11,  11,  11,  11,  15, 
			13,   1,   1,   1,   1,   1,   1,   1,   1,   1,  15,   1,   1,   1,   1,   1,   1,   1,   1,   1,  15, 
			13,   1,   1,   1,   1,   1,   1,   1,   1,   1,  15,   1,   1,   1,   1,   1,   1,   1,   1,   1,  15, 
			13,   1,   1,   1,   1,   1,   1,   1,   1,   1,  15,   1,   1,   1,   1,   1,   1,   1,   1,   1,  15, 
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
}

let graveyardSkeletonList = null;
let graveyardAlchemistList = null;
let graveyardSpiritList = null;
let graveyardAnimationList = null;

const graveyardPlayerThoughts = [
	// See levelOne.js for proper format
	/*
	{
		startTime: 25,
		endTime: 200,
		thought: "here's a thought"
	}
	*/
];

// should be the time we want to stop displaying thoughts and transition to displaying the quest
const graveyardPlayerThoughtEndDisplayTime = 0;
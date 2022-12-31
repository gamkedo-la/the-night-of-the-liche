// When creating another level, build it as a function like this one.
// Don't forget to add your new file as a script in index.html
// Also need to add your level to the LEVELS variable in World.js

function getLevelOneLayers () {
  return {
		//background are tiles like dirt, grass, water, and farm land.  It's not meant to be interactive with
		background: [
		  //0	 1			         5					    10    				    15                       20
			1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1, // 0
			1,   2,   2,   2,   2,   2,   2,   2,   2,   2,   2,   2,   2,   2,   1,   1,   1,   1,   1,   1,   1, 
			1,   2,   2,   2,   2,   2,   2, 107, 107,   2,   2,   2,   2,   2,   1,   1,   1,   1,   1,   1,   1,
			1,   2,   2,   2, 402,   2,   2,   2,   2,   2,   2,   2,   2,   2,   1,  10,  11,  11,  11,  12,   1,
			1,   2,   2,   2,   2,   2,   2,   2,   2,   2,   2,   2,   2,   2,   1,  13,  14,  14,  14,  15,   1, 
			1,   2,   2,   2,   2,   2,   2,   2,   2,   2,   2,   2,   2,   2,   1,  13,  14,  14,  14,  15,   1, //5
			1,   2,   2,   2,   2,   2,   2,   2,   2,   2,   2,   2,   2,   2,   1,  16,  17,  17,  17,  18,   1,
			1,   1,   1,   1,   1,   1,   3,   1,   2,   2,   2,   2,   2,   2,   1,   1,   1,   3,   1,   1,   1,
			1,  10,  11,  11,  12,   1,   3,   1,   2,   2,   2,   2,   2,   2,   1,   1,   1,   3,   1,   1,   1,
			1,  13,  14,  14,  15,   1,   3,   1,   2,   2,   2,   2,   2,   2,   1,   1,   1,   3,   1,   1,   1, 
			1,  13,  14,  14,  15,   1,   3,   1,   2,   2,   2,   2,   2,   2,   1,   1,   1,   3,   1,   1,   1, //10
			1,  13,  14,  14,  15,   1,   3,   1,   2,   2,   2,   2,   2,   2,   1,   1,   1,   3,   1,   1,   1,
			1,  13,  14,  14,  15,   1,   3,   1,   2,   2,   2,   2,   2,   2,   1,   1,   1,   3,   1,   1,   1,
			1,  16,  17,  17,  18,   1,   3,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   3,   1,   1,   1,
			1,   1,   1,   1,   1,   1,   3,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   3,   1,   1,   1, 
			1,   1,   1,   1,   1,   1,   3,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   3,   1,   1,   1, //15	
			1,   1,   1,   1,   1,   1,   3,   3,   3,   3,   3,   3,   3,   3,   3,   3,   3,   3,   1,   1,   1,
			1,   1,   1,   1,   1,   1,   3,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,
			1,   1,   1,   1,   1,   1,   3,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,
			1,   1,   1,   1, 403,   1,   3,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1, 
			1,   1,   1,   1,   1,   1,   3,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1, //20
		],
		// interactive is where interaction occurs.  These are where majority of the tiles will be listed.
		interactive: [
			//    1					 5				         10    				      15					   20
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42, 101, 102, 102, 102, 102, 102, 103, 101, 102, 102, 102, 102, 103,  42,  42,  42,  42,  42,  42,  42,//1 
			42, 106, 107, 107, 107, 107, 107, 123, 121, 107, 107, 107, 107, 108,  42, 201, 207, 208, 207, 202,  42,
			42, 104,  42,  42,  42,  42,  42, 124, 122,  42,  42,  42,  42, 105,  42, 200,  20,  19,  20, 203,  42,
			42, 104,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42, 105,  42, 204,  21,  20,  19, 205,  42,
			42, 109, 109, 109, 109, 109,  42, 109, 101, 102, 125, 102, 102, 103,  42, 200,  24,  23,  22, 205,  42,	// 5
			42, 110, 110, 110, 110, 110, 112, 110, 106, 107, 126,  41,  42, 108,  42, 206, 207, 208, 207, 209,  42,
			42,  42,  42,  42,  42,  42,  42,  42, 104,  67,  42,  42,  42, 105,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42, 104,  42,  42,  42,  42, 105,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42, 104,  42,  42,  42,  42, 105,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42, 104,  42,  42,  42,  42, 105,  42,  42,  42,  42,  42,  42,  42, //10
			42,  42,  42,  42,  42,  42,  42,  42, 109, 109, 109, 109, 109, 109,  42,  42,  42,  42,  42,  42,  42,
		    42,  42,  42,  42,  42,  42,  42,  42, 110, 110, 110, 110, 110, 110,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42, //15
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42, //20
		],
		//foreground layer is where overlays occur.  Player walks through the door and top layer will be above the player.
		foreground: [
			//        1					 5						 10    				      15					        20
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42, //1
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42, 152,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42,  42,  42,  42,  42, 111,  42,  42,  42, 125,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
			42,  42, 150, 150, 150,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42, //5
			42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,  42,
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
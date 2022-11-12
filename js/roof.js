roofIndex = [
    251, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 253,
    254, 251, 252, 252, 252, 252, 252, 252, 252, 252, 252, 253, 256,
    254, 257, 258, 258, 258, 258, 258, 258, 253, 255, 255, 256, 256,
    257, 258, 258, 258, 258, 258, 258, 253, 254, 255, 255, 256, 256,
     42,  42,  42,  42,  42,  42,  42, 254, 254, 255, 255, 256, 256,
     42,  42,  42,  42,  42,  42,  42, 254, 254, 255, 255, 256, 256,
     42,  42,  42,  42,  42,  42,  42, 254, 254, 255, 255, 256, 256,
     42,  42,  42,  42,  42,  42,  42, 254, 254, 255, 255, 256, 256,
     42,  42,  42,  42,  42,  42,  42, 254, 257, 258, 258, 259, 256,
     42,  42,  42,  42,  42,  42,  42, 257, 258, 258, 258, 258, 259,
]

const ROOF_COLS = 13; 
const ROOF_ROWS = 10; 
var tileRoofX = 0;
var tileRoofY = 0;

function roofRowColToArrayIndex(col, row) {
	return col + ROOF_COLS * row;
}

function drawRoof(){
    var arrayIndex = 0;
    var drawTileX = 0;
    var drawTileY = 0;
    
    for(var eachRow = 0; eachRow < ROOF_ROWS; eachRow++) {
        for(var eachCol = 0; eachCol < ROOF_COLS; eachCol++) {
    
            var arrayIndex = roofRowColToArrayIndex(eachCol, eachRow); 
            var tileKindHere = roofIndex[arrayIndex];
           // console.log("ER: " + eachRow + " EC: " + eachCol + " AI: " + arrayIndex + " TK: " + tileKindHere );
            var useImg = worldPics[tileKindHere];
            var spriteX = worldPics[tileKindHere].locX;
            var spriteY = worldPics[tileKindHere].locY;
            var spriteWidth = worldPics[tileKindHere].width;
            var spriteHeight = worldPics[tileKindHere].height;
            var spriteOffSetX = worldPics[tileKindHere].offSetX + drawTileX;
            var spriteOffSetY = worldPics[tileKindHere].offSetY + drawTileY;
            var room1unoccupied = true;
            var room2unoccupied = true;
    

            if(redWarrior.x > 0 && redWarrior.x < 7 * TILE_W &&
               redWarrior.y > 0 && redWarrior.y < 4 * TILE_H){
                room1unoccupied = false;
               }
            if(redWarrior.x > 7 && redWarrior.x < ROOF_COLS * TILE_W &&
               redWarrior.y > 0 && redWarrior.y < ROOF_ROWS * TILE_H ){
                room2unoccupied = false;
               }

            console.log("Room 1: " + room1unoccupied);
            console.log(" Room 2: " + room2unoccupied);
               
              
            if(room1unoccupied && room2unoccupied){
                canvasContext.drawImage(useImg, spriteX, spriteY, spriteWidth, spriteHeight, spriteOffSetX, spriteOffSetY, spriteWidth, spriteHeight);
            }

            drawTileX += TILE_W;
            arrayIndex++;
        } // end of for each col
        drawTileY += TILE_H;
        drawTileX = 0;
    } // end of for each row
}


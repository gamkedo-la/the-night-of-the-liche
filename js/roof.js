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

function drawRoof(alpha){
    var arrayIndex = 0;
    var drawTileX = 0;
    var drawTileY = 0;
    
    for(var eachRow = 0; eachRow < ROOF_ROWS; eachRow++) {
        for(var eachCol = 0; eachCol < ROOF_COLS; eachCol++) {
    
            var arrayIndex = roofRowColToArrayIndex(eachCol, eachRow); 
            var tileKindHere = roofIndex[arrayIndex];
           // console.log("ER: " + eachRow + " EC: " + eachCol + " AI: " + arrayIndex + " TK: " + tileKindHere );
            var startX = 50;
            var startY = 50;
            var useImg = worldPics[tileKindHere];
            var spriteX = worldPics[tileKindHere].locX;
            var spriteY = worldPics[tileKindHere].locY;
            var spriteWidth = worldPics[tileKindHere].width;
            var spriteHeight = worldPics[tileKindHere].height;
            var spriteOffSetX = worldPics[tileKindHere].offSetX + drawTileX + startX;
            var spriteOffSetY = worldPics[tileKindHere].offSetY + drawTileY + startY;
            var room1unoccupied = true;
            var room2unoccupied = true;
    

            if(player.x > 50 && player.x < 8 * TILE_W &&
               player.y > 50 && player.y < 5 * TILE_H){
                room1unoccupied = false;
               }
            if(player.x > 8 * TILE_W  && player.x < 50 + ROOF_COLS * TILE_W &&
               player.y > 50 && player.y < 50 + ROOF_ROWS * TILE_H ){
                room2unoccupied = false;
               }
              
            if(room1unoccupied && room2unoccupied){
                canvasContext.globalAlpha = alpha;
                canvasContext.drawImage(useImg, spriteX, spriteY, spriteWidth, spriteHeight, spriteOffSetX, spriteOffSetY, spriteWidth, spriteHeight);
                canvasContext.globalAlpha = 1;
                if (timeSinceInShop == 0) {
                    sfx_door.play(); // open the door
                }
            } else {
                if (timeSinceInShop != 0) {
                    sfx_door.play(); // close the door
                }
                timeSinceInShop = 0;
            }

            drawTileX += TILE_W;
            arrayIndex++;
        } // end of for each col
        drawTileY += TILE_H;
        drawTileX = 0;
    } // end of for each row
}


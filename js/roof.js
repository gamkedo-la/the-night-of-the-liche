roofIndex = [
    251, 252, 253,
    251, 252, 253
]

const ROOF_COLS = 3; 
const ROOF_ROWS = 2; 
var tileRoofX = 0;
var tileRoofY = 0;

function drawRoof(){
    for(var eachRow = 0; eachRow < ROOF_ROWS; eachRow++) {
		for(var eachCol = 0; eachCol < ROOF_COLS; eachCol++) {
			var arrayIndex = rowColToArrayIndex(eachCol, eachRow); 
			var tileKindHere = roofIndex[arrayIndex];
            console.log(eachRow);
			var useImg = worldPics[tileKindHere];
			var spriteX = worldPics[tileKindHere].locX;
			var spriteY = worldPics[tileKindHere].locY;
			var spriteWidth = worldPics[tileKindHere].width;
			var spriteHeight = worldPics[tileKindHere].height;
			var spriteOffSetX = worldPics[tileKindHere].offSetX + tileRoofX;
			var spriteOffSetY = worldPics[tileKindHere].offSetY + tileRoofY;

            if(redWarrior.x > 0 && redWarrior.x < 200){
                //don't draw roof
            } else {
                canvasContext.drawImage(useImg, spriteX, spriteY, spriteWidth, spriteHeight, spriteOffSetX, spriteOffSetY, spriteWidth, spriteHeight);
            }
        }
    }
}

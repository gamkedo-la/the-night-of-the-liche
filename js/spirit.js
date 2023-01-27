var spiritList = [];

function addSpirit(){
	var tempSpirit = new spiritClass();
	spiritList.push(tempSpirit);
}

spiritClass.prototype = new characterClass();
function spiritClass() {

    this.trackingPlayer = true;
    
    this.superclassReset = this.reset; 
    this.reset = function() {
        for (var eachRow = 0; eachRow < ROOM_ROWS; eachRow++) {
            for (var eachCol = 0; eachCol < ROOM_COLS; eachCol++) {
                var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
                if (roomGrid[arrayIndex] == TILE_SPIRIT) {
                    roomGrid[arrayIndex] = TILE_GRASS;
                    this.x = eachCol * TILE_W + TILE_W / 2;
                    this.y = eachRow * TILE_H + TILE_H / 2;
					this.characterPic = spiritPic;
                    return;
                } 
            } 
        } 
    }  
}
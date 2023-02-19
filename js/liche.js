var licheList = [];

function addLiche(){
	var tempLiche = new licheClass();
	licheList.push(tempLiche);
}

licheClass.prototype = new characterClass();
function licheClass() {
    this.width = 100;
    this.height = 102;

    this.trackingPlayer = true;
    
    this.superclassReset = this.reset; 
    this.reset = function() {
        for (var eachRow = 0; eachRow < ROOM_ROWS; eachRow++) {
            for (var eachCol = 0; eachCol < ROOM_COLS; eachCol++) {
                var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
                if (roomGrid[arrayIndex] == TILE_LICHE) {
                    roomGrid[arrayIndex] = TILE_GRASS;
                    this.x = eachCol * TILE_W + TILE_W / 2;
                    this.y = eachRow * TILE_H + TILE_H / 2;
					this.characterPic = lichePic;
                    return;
                } 
            } 
        } 
    }  
}
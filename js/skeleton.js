skeletonClass.prototype = new characterClass();
function skeletonClass() {

    this.trackingPlayer = true;
    
    this.superclassReset = this.reset; 
    this.reset = function() {
        for (var eachRow = 0; eachRow < ROOM_ROWS; eachRow++) {
            for (var eachCol = 0; eachCol < ROOM_COLS; eachCol++) {
                var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
                if (roomGrid[arrayIndex] == TILE_SKELETON) {
                    roomGrid[arrayIndex] = TILE_GRASS;
                    this.x = eachCol * TILE_W + TILE_W / 2;
                    this.y = eachRow * TILE_H + TILE_H / 2;
					this.characterPic = skeletonPic;
                    return;
                } 
            } 
        } 
        console.log("Skeleton not found!");
    }  
}
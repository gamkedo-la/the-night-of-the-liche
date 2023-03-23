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
    this.attackReadyTicker = 30;
    this.attackReady = true;
    this.health = 10; 
    this.alive = true;
    
    
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

    this.attack = function() {
        if(this.attackReady == true){
            // play attack animation

            this.characterPic = licheAttackPic;
            this.frameIndex = 0; 
            // play attack SFX 

            player.health = player.health -1; 
            console.log( "Skeleton Strikes! ... Player has ", player.health, " remaining!" )
            this.attackReady = false;
        }
        else if(this.attackReady == false) {  
            this.attackReadyCounter();
        }
    }

    this.attackReadyCounter = function() {
        if(this.attackReadyTicker > 0){ 
            this.attackReadyTicker--;
        } else if(this.attackReadyTicker <= 0){
            this.characterPic = skeletonPic;
            this.attackReadyTicker = 60; //amount of time between bites
            this.attackReady = true;
        }
    }   
}
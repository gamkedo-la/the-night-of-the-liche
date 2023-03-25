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

            this.showAttack = true;
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

    this.draw = function() {
        if (this.move) {
            this.tickCount++;
        }
        if (this.tickCount > this.ticksPerFrame) {
            this.tickCount = 0;
            if (this.frameIndex < this.numberOfFrames - 1) {
                this.frameIndex += 1;
            } else {
                this.frameIndex = 0;
            }
        }

        this.sx = this.frameIndex * this.width;
        canvasContext.drawImage(shadowPic, 0, 0, 25, 25, this.x+12, this.y+31, 25, 25); 
        if(this.showAttack){
            this.characterPic = licheAttackPic;
            if(this.frameIndex == 3){
                this.showAttack = false;
            }
        } else {
           this.characterPic = lichePic;
        }
        canvasContext.drawImage(this.characterPic, this.sx, this.sy, this.width, this.height, this.x, this.y, this.width, this.height);
    }
}
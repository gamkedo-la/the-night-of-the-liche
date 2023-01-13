var alchemistIntro1Play = true;
var alchemistIntro2Play = false;
var alchemistIntro3Play = false;

alchemistClass.prototype = new characterClass();
function alchemistClass() {
    this.height = 48;
    this.width = 48;

    this.reset = function() {
        for (var eachRow = 0; eachRow < ROOM_ROWS; eachRow++) {
            for (var eachCol = 0; eachCol < ROOM_COLS; eachCol++) {
                var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
                if (roomGrid[arrayIndex] == TILE_ALCHEMIST) {
                    roomGrid[arrayIndex] = TILE_GRASS;
                    this.x = eachCol * TILE_W + TILE_W / 2;
                    this.y = eachRow * TILE_H + TILE_H / 2;
                    this.characterPic = alchemistPic;
                    return;
                } // end of Player Start if
            } //end of col row for
        } // end of row for
        console.log("Alchemist not found!");
    } // end of func

    this.isOverlappingPoint = function(testX, testY) {  // textX is player.x and testY is player.y
	    this.voiceTimer++;
        if(this.voiceTimer > 200){
            this.voiceTimer = 0;
            this.voiceReady = true;    
        }

		//test if player is inside box of Alchemist
		if(this.x < testX && (this.x + this.width) > testX && this.y < testY && (this.y + this.height) > testY){
            if(alchemistIntro1Play && this.voiceReady){
                alchemistIntro_1.play();
                alchemistIntro1Play = false;
                alchemistIntro2Play = true;
                alchemistIntro3Play = false;
                this.voiceReady = false;
                this.voiceTimer = 0;
            } else if (alchemistIntro2Play && this.voiceReady){
                alchemistIntro_2.play();
                alchemistIntro1Play = false;
                alchemistIntro2Play = false;
                alchemistIntro3Play = true;
                this.voiceReady = false;
                this.voiceTimer = 0;
            } else if (alchemistIntro3Play && this.voiceReady){
                alchemistIntro_3.play() 
                alchemistIntro1Play = true;
                alchemistIntro2Play = false;
                alchemistIntro3Play = false;
                this.voiceReady = false;
                this.voiceTimer = 0;
            }
		}		
	};
}
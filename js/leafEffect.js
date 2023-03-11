var leafList = [];
var leafAmount;

function pickAmountOfLeafs(){
    this.sx;
    this.sy;
    this.xPos;
    this.yPos;
    this.markForRemoval;
    
   leafAmount = 1+Math.random()*10;
      for (var i = 0; i < leafAmount; i++) {
		addLeaf();
	} 

    for(var i = 0; i < leafList.length; i++){
        leafList[i].initialize();
    }


}

function checkToAddLeafs(){
    let decisionToAddMoreLeafs = 1+Math.random()*10000;
    if(decisionToAddMoreLeafs > 9950){
        pickAmountOfLeafs();
    }
}

function addLeaf(){
	var tempLeaf = new leafClass();
	leafList.push(tempLeaf);
}

function leafClass(){
    this.initialize = function(){
        this.xPos = 1+Math.random()*600;
        this.yPos = 1+Math.random()*600;
        this.whichLeaf = Math.floor(1+Math.random()*3-1);
        this.anim = null;

        if(this.whichLeaf == 0){
            // this.sx = 300;
            this.anim = addAnimation({
                pic: leaf1AnimPic,
                frames: 16,
                ticksPerFrame: 10,
                x: this.x,
                y: this.y,
                width: 14,
                height: 14
            });
            this.anim.draw = function () {
                this.tickCount++;
                if (this.tickCount > this.ticksPerFrame) {
                    this.tickCount = 0;
                    const forward = Math.floor(100 * Math.random())
                    if (forward > 25) {
                        this.frameIndex++;
                        if (this.frameIndex >= this.numberOfFrames) this.frameIndex = 0;
                    } else {
                        this.frameIndex--;
                        if (this.frameIndex < 0) this.frameIndex = this.numberOfFrames - 1;
                    }
                }
        
                this.sx = this.frameIndex * this.width;
                canvasContext.drawImage(this.pic, this.sx, this.sy, this.width, this.height, this.x, this.y, this.width, this.height);    
            }
        } else if (this.whichLeaf == 1){
            this.sx = 350;
        } else if (this.whichLeaf == 2){
            this.sx = 400;
        }
        this.sy = 250;
        this.markForRemoval = false;
    }

    this.draw = function() {
        let windSpeed = 1;
        this.xPos += windSpeed + (Math.floor(2 * Math.random()));
        this.yPos += (Math.floor(3 * Math.random()) - 1);

        if (this.whichLeaf === 0) {
            this.anim.x = this.xPos;
            this.anim.y = this.yPos;
            this.anim.draw();
        } else {
            if(this.xPos > 800){
                // TODO: this makes the leaves fade away before they reach 
                // the right edge of the map because of camera scrolling
                this.markForRemoval = true;
            }


            /*canvasContext.save();
            canvaseContext.translate(this.xPos,this.yPos);
            canvasContext.rotate(50); 
            canvasContext.drawImage(worldPics[50], this.sx,this.sy, 50, 50, this.xPos, this.yPos, 50, 50);     
            canvasContext.restore(); 
            */
            canvasContext.drawImage(worldPics[50], this.sx,this.sy, 50, 50, this.xPos, this.yPos, 50, 50);
        }
    }
}
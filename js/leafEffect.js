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
        if(this.whichLeaf == 0){
            this.sx = 300; 
        } else if (this.whichLeaf == 1){
            this.sx = 350;
        } else if (this.whichLeaf == 2){
            this.sx = 400;
        }
        this.sy = 250;
        this.markForRemoval = false;
    }

    this.draw = function(){
        if(this.xPos > 800){
            this.markForRemoval = true;
        }
        let windSpeed = 1;
        this.xPos += windSpeed;
        /*canvasContext.save();
        canvaseContext.translate(this.xPos,this.yPos);
        canvasContext.rotate(50); 
        canvasContext.drawImage(worldPics[50], this.sx,this.sy, 50, 50, this.xPos, this.yPos, 50, 50);     
        canvasContext.restore(); 
        */
        canvasContext.drawImage(worldPics[50], this.sx,this.sy, 50, 50, this.xPos, this.yPos, 50, 50);    
    }
}
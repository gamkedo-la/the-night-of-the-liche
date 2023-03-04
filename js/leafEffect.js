var leafList = [];
var leafAmount;

function pickAmountOfLeafs(){
    
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
        console.log("X Pos: " + this.xPos);
        this.yPos = 1+Math.random()*600;
        this.markForRemoval = false;
    }

    this.draw = function(){
        if(this.xPos > 800){
            this.markForRemoval = true;
        }
        let windSpeed = 1;
        this.xPos += windSpeed;
        canvasContext.drawImage(worldPics[50], 300,250, 50, 50, this.xPos, this.yPos, 50, 50); 
        
    }
}
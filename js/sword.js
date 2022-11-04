const SWORD_LIFE = 10;
const SWORD_SPEED = 1.0;
var swordAlive = false;


function swordClass() {
	this.sx = 0;
	this.sy = 0;
	this.ang = 01;
	this.xv = 5;
	this.yv = 5;
	this.swordLife = SWORD_LIFE;
	this.mySwordPic = swordPic;
	this.damage = 1.0;

	this.reset = function() {
		this.swordLife = 0;
		swordAlive = true;
	} 
	
	this.move = function() {
		if(this.swordLife > 0) {
			this.swordLife--;
		this.swX = redWarrior.x;
		this.swY = redWarrior.y;	  
		}
	}

	this.isSwordReadyToSwing = function() {
		this.damage = 1.0;
        return(this.swordLife <= 0);
    }
	
	this.shootFrom = function(warriorAttack) {
		this.x = warriorAttack.x;
		this.y = warriorAttack.y;
		
		this.swordLife = SWORD_LIFE;
	}
	
	this.hitTest = function(thisEnemy) {
		
		
		if(this.swordLife <= 0) {
			return false;
		}

	this.checkhit = function() {
		if(this.damage == 1.0) {
			document.getElementById("debugText").innerHTML = "Successful hit "+ thisEnemy.myName+" for 1 damage point!";
			this.damage = this.damage - 1;
			thisEnemy.health = thisEnemy.health - 1;
			if(thisEnemy == goblin) {
				goblinHurtSound.play();
			} else if (thisEnemy == skeleton || thisEnemy == skeleton2) {
				skeletonHurtSound.play();
			} else if (thisEnemy == zombie || thisEnemy == zombie2) {
				zombieHurtSound.play();
			} else if (thisEnemy == bat1 || thisEnemy == bat2) {
				batHurtSound.play();
			}
		}
	}		
		
		if(direction == "north") {// warrior facing North
			
						
			if(	this.x+25 > thisEnemy.x &&    // within left side
				this.x+25 < (thisEnemy.x + thisEnemy.width) && //within right side
				this.y-20 > thisEnemy.y && // within top side
				this.y-20 < (thisEnemy.y + thisEnemy.height)) // within bottom 
					{ 
						this.checkhit();
					}
		} else if(direction == "south") {// warrior facing South
			
			if(	this.x + 10 > thisEnemy.x &&    // within left side
				this.x + 10 < (thisEnemy.x + thisEnemy.width) && //within right side
				this.y + 70 > thisEnemy.y && // within top side
				this.y + 70 < (thisEnemy.y + thisEnemy.height)) // within bottom 
					{ 
						this.checkhit();
					}			
		} else if(direction == "west") {// warrior facing West
						
			if(	this.x -30 > thisEnemy.x &&    // within left side
				this.x -30 < (thisEnemy.x + thisEnemy.width) && //within right side
				this.y + 25 > thisEnemy.y && // within top side
				this.y + 25 < (thisEnemy.y + thisEnemy.height)) 
					{
						this.checkhit();
					}			
		} else if(direction == "east") {// warrior facing East
						
			if(	this.x + 60 > thisEnemy.x &&    // within left side
				this.x + 60 < (thisEnemy.x + thisEnemy.width) && //within right side
				this.y + 25 > thisEnemy.y && // within top side
				this.y + 25 < (thisEnemy.y + thisEnemy.height)) // within bottom 
					{ 
						this.checkhit();
					}			    
 		} else {
			return false;
		}
	}
	
	this.draw = function() {

		var swordWidth = 10;
		var swordLength = 40;
		var swordXLocation = redWarrior.x;
		var swordYLocation = redWarrior.y;
		
		if(direction == "north") {
			swordWidth = 10;
			swordLength = 20;
			swordXLocation = redWarrior.centerX+5;
			swordYLocation = redWarrior.y - swordLength;
		}
		else if(direction == "south") {
			swordWidth = 10;
			swordLength = 40;
			swordXLocation = redWarrior.centerX-10;
			swordYLocation = redWarrior.centerY+10;
		}
		else if(direction == "west") {
			swordWidth = 40;
			swordLength = 10;
			swordXLocation = redWarrior.x - swordWidth + 10;
			swordYLocation = redWarrior.centerY;
		}
		else if(direction == "east") {
			swordWidth = 40;
			swordLength = 10;
			swordXLocation = redWarrior.x + 20;
			swordYLocation = redWarrior.centerY;
		
		} 
		
		if(this.swordLife > 0) {
			swordAlive = false;
			colorRect(swordXLocation, swordYLocation, swordWidth, swordLength, "gray" );
		}
	}
	
}


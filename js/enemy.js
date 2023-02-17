function oppositeDirectionOf(direction) {
    if (direction == "north") {
        return "south";
    } else if (direction == "south") {
        return "north";
    } else if (direction == "west") {
        return "east";
    } else if (direction == "east") {
        return "west";
    } else if (direction == "stationary") {
        return "nonstationary";
    } 
}

function characterClass() {
    this.timer = 0; 
    this.x, this.y;
    this.direction = "east";
    this.speed = 3.0; // previously 0
    this.characterPic = skeletonPic; // which picture to use
    this.name = "Frank";
    this.waitTime = 0;
    this.previousTileType = -1;
    this.sx = 40;
    this.sy = 0;
    this.tickCount = 0;
    this.frameIndex = 0;
    this.width = 50;
    this.numberOfFrames = 4;
    this.height = 50;
    this.ticksPerFrame = 5;
    this.move = false;
    this.voiceReady = true;
    this.voiceTimer = 0;
    this.myPathList = [];
    this.standStill = false;
    this.wandering = false;
    this.trackingPlayer = false;
    this.trackingDistanceX = 5;
    this.trackingDistanceY = 5;

    this.walkNorth = false;
    this.walkSouth = false;
    this.walkWest = false;
    this.walkEast = false;

    this.prevDirection = "stationary";
    
    this.reset = function() {
        for (var eachRow = 0; eachRow < ROOM_ROWS; eachRow++) {
            for (var eachCol = 0; eachCol < ROOM_COLS; eachCol++) {
                var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
                if (roomGrid[arrayIndex] == TILE_SKELETON) {
                    roomGrid[arrayIndex] = TILE_GRASS;
                    this.x = eachCol * TILE_W + TILE_W / 2;
                    this.y = eachRow * TILE_H + TILE_H / 2;
					console.log("Character created")
                    return;
                } 
            } 
        } 
        console.log("Character not found!");
    } 
    this.setDirection = function(toDir){
        this.walkNorth = false;
        this.walkSouth = false;
        this.walkWest = false;
        this.walkEast = false;

        switch (toDir) {
            case "north":
                this.walkNorth = true;
                this.prevDirection = "north";
                break;
            case "south":
                this.walkSouth = true;
                this.prevDirection = "south";
                break;
            case "west":
                this.walkWest = true;
                this.prevDirection = "west";
                break;
            case "east":
                this.walkEast = true;
                this.prevDirection = "east";
                break;
            case "stationary":
                this.walkNorth = false;
                this.walkSouth = false;
                this.walkWest = false;
                this.walkEast = false;
                break;
        } // end of switch
    }

    this.pickRandomDirection = function() {

        const DIRECTIONS = ["north", "south", "west", "east", "stationary"];

        // picks out a random direction that is not opposite direction to previous direction
        let dir = DIRECTIONS[Math.floor(5 * Math.random())];
        while (dir == oppositeDirectionOf(this.prevDirection)) {
            dir = DIRECTIONS[Math.floor(5 * Math.random())];
        }

        this.setDirection(dir);
    } // end of func


    this.move = function() {
        var nextX = this.x;
        var nextY = this.y;

        this.timer = (this.timer + 1) % (this.ticksPerFrame * 6);

        var enemyDistXFromPlayerX = Math.floor(Math.abs(player.x/TILE_W - this.x/TILE_W));
        var enemyDistYFromPlayerY = Math.floor(Math.abs(player.y/TILE_H - this.y/TILE_H));
   //     console.log("X: " + enemyDistXFromPlayerX + " Y: " + enemyDistYFromPlayerY);
        if(enemyDistXFromPlayerX < this.trackingDistanceX && enemyDistXFromPlayerX > 1
            && enemyDistYFromPlayerY < this.trackingDistanceY && enemyDistYFromPlayerY > 1){
            this.trackingPlayer = true;
            this.wandering = false;
            this.standStill = false;
        } else if (enemyDistXFromPlayerX + enemyDistYFromPlayerY <= 1){
            this.trackingPlayer = false;
            this.wandering = false;
            this.standStill = true;
        } else {
            this.trackingPlayer = false;
            this.wandering = true;
            this.standStill = false;
        }
    //    console.log("Tracking: " + this.trackingPlayer + " Wandering: " + this.wandering);

        if (this.wandering && this.timer == 0) {
            this.speed = 2;
            this.pickRandomDirection();
        } else if(this.myPathList.length > 0 && this.trackingPlayer){
            this.speed = 4;
            var goalTile = this.myPathList[this.myPathList.length-1];
        //    console.log(goalTile)
            var goalC = idxToCol(goalTile);
            var goalR = idxToRow(goalTile);
            var currentC = Math.floor(this.x/TILE_H);
            var currentR = Math.floor(this.y/TILE_W);
            if(currentC < goalC){
                this.setDirection("east");
           //     console.log("Searching: " + this.myPathList.length + " G:" + goalC + "," + goalR + " C:" + currentC + "," + currentR) ;
            } else if (currentC > goalC){
                this.setDirection("west");
           //     console.log("Searching: " + this.myPathList.length + " G:" + goalC + "," + goalR + " C:" + currentC + "," + currentR) ;
            } else if(currentR < goalR){
                this.setDirection("south");
           //     console.log("Searching: " + this.myPathList.length + " G:" + goalC + "," + goalR + " C:" + currentC + "," + currentR) ;
            } else if (currentR > goalR){
                this.setDirection("north");
          //      console.log("Searching: " + this.myPathList.length + " G:" + goalC + "," + goalR + " C:" + currentC + "," + currentR) ;
            } else {
            //    console.log("Reached Goal! " + this.myPathList.length + " G:" + goalC + "," + goalR + " C:" + currentC + "," + currentR) ;
                this.myPathList.pop(); //this should remove the list down by 1.
            }
        } else if (this.standStill) {
            this.speed = 0;
        } else {
            this.myPathList = generatePathFromTo(this,player);
        }

        if (this.walkNorth) {
            nextY -= this.speed;
            this.direction = "north";
            this.sx = 0;
            this.sy = 3*this.height;
        }
        if (this.walkSouth) {
            nextY += this.speed;
            this.direction = "south";
            this.sx = 0;
            this.sy = 0*this.height;
        }
        if (this.walkWest) {
            nextX -= this.speed;
            this.direction = "west";
            this.sx = 0;
            this.sy = 1*this.height;
        }
        if (this.walkEast) {
            nextX += this.speed;
            this.direction = "east";
            this.sx = 0;
            this.sy = 2*this.height;
        }

        if (this.walkNorth || this.walkSouth || this.walkWest || this.walkEast) {
          //  this.alchemistMove = true;
        } else {
          //  this.alchemistMove = false;
        }

        var walkIntoTileIndex = getTileTypeAtPixelCoord(nextX, nextY);
        var walkIntoTileType = TILE_WALL1_TOP;
        var walkIntoMGTileIndex = getTileTypeAtPixelCoord(nextX, nextY);

        if (this.direction == "north") {
            walkIntoTileIndex = getTileTypeAtPixelCoord(nextX + (this.width / 2), nextY);
            walkIntoMGTileIndex = getTileTypeAtMGPixelCoord(nextX + (this.width / 2), nextY);
        }
        if (this.direction == "south") {
            walkIntoTileIndex = getTileTypeAtPixelCoord(nextX - (this.width / 2), nextY + this.height);
            walkIntoMGTileIndex = getTileTypeAtMGPixelCoord(nextX + (this.width / 2), nextY + this.height);
        }
        if (this.direction == "west") {
            walkIntoTileIndex = getTileTypeAtPixelCoord(nextX, nextY - (this.height / 2));
            walkIntoMGTileIndex = getTileTypeAtMGPixelCoord(nextX, nextY + (this.height / 2));
        }
        if (this.direction == "east") {
            walkIntoTileIndex = getTileTypeAtPixelCoord(nextX + this.width, nextY + (this.height / 2));
            walkIntoMGTileIndex = getTileTypeAtMGPixelCoord(nextX + this.width, nextY + (this.height / 2));
        }
        if (walkIntoTileIndex != undefined) {
            walkIntoTileType = (LEVELS[levelList[currentLevelIndex]].layers.interactive)[walkIntoMGTileIndex]
            if(walkIntoTileType == TILE_BLANK){
                walkIntoTileType = (LEVELS[levelList[currentLevelIndex]].layers.background)[walkIntoMGTileIndex]
            }
        }
        
        switch (walkIntoTileType) {   //VJM 1/7/23  Each character uses switch cases.  Need to refactor classes to share a parent class.
            case TILE_ROAD:
            case TILE_WOOD_FLOOR:
                playerMoveSpeed = 5.0;
                this.x = nextX;
                this.y = nextY;
                break;
            case TILE_GARDEN_TOP:
            case TILE_GARDEN_TR:
            case TILE_GARDEN_LEFTSIDE:
            case TILE_GARDEN:
            case TILE_GARDEN_RIGHTSIDE:
            case TILE_GARDEN_BL:
            case TILE_GARDEN_BOTTOM:
            case TILE_GARDEN_BR:
                playerMoveSpeed = 3.0;
                this.x = nextX;
                this.y = nextY;
                break;
            case TILE_GRASS:
                playerMoveSpeed = 4.0;
                this.x = nextX;
                this.y = nextY;
                break;
            case TILE_WALL1_DOOR_TOP:
            case TILE_WALL1_DOOR_BOTTOM:
            case TILE_WALL3_DOOR_BOTTOM:
                this.x = nextX;
                this.y = nextY;
                break;
            case TILE_WALL1_TOP:  
            case TILE_BOOKSELF:
            default:
                playerMoveSpeed = 4.0;
                break;

        } // end of switch
		
        this.previousTileType = walkIntoTileType;
    }

    this.isOverlappingPoint = function(testX, testY) {  
       if(testX > this.x && testX < this.x + this.width && testY > this.y && testY < this.y + this.height){
            //VJM 1/7/23:  Need to code the player can't pass through skeleton and vice versa
            //VJM 1/7/23:  Need to code Skeleton to attack at a close range
            //VJM 1/7/23:  Need to improve code to collide from different sides and not the center of the player
            console.log("collision with player from skeleton")
       };
    };

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
        canvasContext.drawImage(this.characterPic, this.sx, this.sy, this.width, this.height, this.x, this.y, this.width, this.height);
    }
}
function SkeletonClass() {
    this.timer = 0; 

    this.x, this.y;
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
					console.log("Skeleton created")
                    return;
                } // end of Player Start if
            } //end of col row for
        } // end of row for
        console.log("Skeleton not found!");
    } // end of func

    this.move = function() {
        var nextX = this.x;
        var nextY = this.y;

        this.timer = (this.timer + 1) % (this.ticksPerFrame * 6);

        this.pickRandomDirection = function() {

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

            const DIRECTIONS = ["north", "south", "west", "east", "stationary"];

            // picks out a random direction that is not opposite direction to previous direction
            let direction = DIRECTIONS[Math.floor(5 * Math.random())];
            while (direction == oppositeDirectionOf(this.prevDirection)) {
                direction = DIRECTIONS[Math.floor(5 * Math.random())];
            }
    
            this.walkNorth = false;
            this.walkSouth = false;
            this.walkWest = false;
            this.walkEast = false;
    
            switch (direction) {
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
        } // end of func

        if (this.timer == 0) {
            this.pickRandomDirection();
        }

        if (this.walkNorth) {
            nextY -= this.speed;
            direction = "north";
            this.sx = 0;
            this.sy = 3*this.height;
        }
        if (this.walkSouth) {
            nextY += this.speed;
            direction = "south";
            this.sx = 0;
            this.sy = 0*this.height;
        }
        if (this.walkWest) {
            nextX -= this.speed;
            direction = "west";
            this.sx = 0;
            this.sy = 1*this.height;
        }
        if (this.walkEast) {
            nextX += this.speed;
            direction = "east";
            this.sx = 0;
            this.sy = 2*this.height;
        }

        if (this.walkNorth || this.walkSouth || this.walkWest || this.walkEast) {
            this.alchemistMove = true;
        } else {
            this.alchemistMove = false;
        }

        var walkIntoTileIndex = getTileTypeAtPixelCoord(nextX, nextY);
        var walkIntoTileType = TILE_WALL1_TOP;
        var walkIntoMGTileIndex = getTileTypeAtPixelCoord(nextX, nextY);

        if (direction == "north") {
            walkIntoTileIndex = getTileTypeAtPixelCoord(nextX + (this.width / 2), nextY);
            walkIntoMGTileIndex = getTileTypeAtMGPixelCoord(nextX + (this.width / 2), nextY);
        }
        if (direction == "south") {
            walkIntoTileIndex = getTileTypeAtPixelCoord(nextX + (this.width / 2), nextY + this.height);
            walkIntoMGTileIndex = getTileTypeAtMGPixelCoord(nextX + (this.width / 2), nextY + this.height);
        }
        if (direction == "west") {
            walkIntoTileIndex = getTileTypeAtPixelCoord(nextX, nextY + (this.height / 2));
            walkIntoMGTileIndex = getTileTypeAtMGPixelCoord(nextX, nextY + (this.height / 2));
        }
        if (direction == "east") {
            walkIntoTileIndex = getTileTypeAtPixelCoord(nextX + this.width, nextY + (this.height / 2));
            walkIntoMGTileIndex = getTileTypeAtMGPixelCoord(nextX + this.width, nextY + (this.height / 2));
        }
        if (walkIntoTileIndex != undefined) {
            walkIntoTileType = (LEVELS[levelList[currentLevelIndex]].layers.interactive)[walkIntoMGTileIndex]
            if(walkIntoTileType == TILE_BLANK){
                walkIntoTileType = (LEVELS[levelList[currentLevelIndex]].layers.background)[walkIntoMGTileIndex]
            }
        }
        
        switch (walkIntoTileType) {
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

    this.isOverlappingPoint = function(testX, testY) {  // textX is player.x and testY is player.y
	
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

        canvasContext.drawImage(this.characterPic, this.sx, this.sy, this.width, this.height, this.x, this.y, this.width, this.height);
    }
}
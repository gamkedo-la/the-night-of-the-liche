function alchemistClass() {
    this.timer = 0; 

    this.x, this.y;
    this.speed = 3.0; // previously 0
    this.characterPic = alchemistPic; // which picture to use
    this.name = "Frank";
    this.waitTime = 0;
    this.previousTileType = -1;
    this.sx = 40;
    this.sy = 0;
    this.tickCount = 0;
    this.frameIndex = 0;
    this.width = 48;
    this.numberOfFrames = 4;
    this.height = 48;
    this.ticksPerFrame = 5;
    this.move = false;

    this.walkNorth = false;
    this.walkSouth = false;
    this.walkWest = false;
    this.walkEast = false;

    this.prevDirection = "stationary";
    
    this.reset = function() {
        for (var eachRow = 0; eachRow < ROOM_ROWS; eachRow++) {
            for (var eachCol = 0; eachCol < ROOM_COLS; eachCol++) {
                var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
                if (roomGrid[arrayIndex] == TILE_ALCHEMIST) {
                    roomGrid[arrayIndex] = TILE_GRASS;
                    this.x = eachCol * TILE_W + TILE_W / 2;
                    this.y = eachRow * TILE_H + TILE_H / 2;
                    return;
                } // end of Player Start if
            } //end of col row for
        } // end of row for
        console.log("Alchemist not found!");
    } // end of func

    this.move = function() {
        var nextX = this.x;
        var nextY = this.y;
        this.tickCount++;  /*this advances the ticks per frame.  @jiho, use this for random movements
        You will need to reset the tickCount once a direction gets set. Recommend creating a random function
        to set 1 through 5 for states (N, S, W, E, stationary).  When state gets selected, make that true and
        the other states false. */

        this.timer = (this.timer + 1) % 90;

        this.pickRandomDirection = function() {
            const DIRECTIONS = ["north", "south", "west", "east", "stationary"];
            let direction = DIRECTIONS[Math.floor(5 * Math.random())]; // picks out a random direciton
    
            this.walkNorth = false;
            this.walkSouth = false;
            this.walkWest = false;
            this.walkEast = false;
    
            switch (direction) {
                case "north":
                    this.walkNorth = true;
                    if (this.prevDirection != "north") {
                        this.tickCount = 0;
                    }
                    break;
                case "south":
                    this.walkSouth = true;
                    if (this.prevDirection != "south") {
                        this.tickCount = 0;
                    }
                    break;
                case "west":
                    this.walkWest = true;
                    if (this.prevDirection != "west") {
                        this.tickCount = 0;
                    }
                    break;
                case "east":
                    this.walkEast = true;
                    if (this.prevDirection != "east") {
                        this.tickCount = 0;
                    }
                    break;
                case "stationary":
                    this.walkNorth = false;
                    this.walkSouth = false;
                    this.walkWest = false;
                    this.walkEast = false;
                    if (this.prevDirection != "stationary") {
                        this.tickCount = 0;
                    }
                    break;
            } // end of switch

            this.prevDirection = direction;
        } // end of func

        // for every 3 seconds (in 30fps), pick out a random direction
        if (this.timer == 0) {
            this.pickRandomDirection();
        }

        if (this.walkNorth) {
            nextY -= this.speed;
            direction = "north";
            this.sx = 0;
            this.sy = 0;
        }
        if (this.walkSouth) {
            nextY += this.speed;
            direction = "south";
            this.sx = 0;
            this.sy = 0;
        }
        if (this.walkWest) {
            nextX -= this.speed;
            direction = "west";
            this.sx = 0;
            this.sy = 0;
        }
        if (this.walkEast) {
            nextX += this.speed;
            direction = "east";
            this.sx = 0;
            this.sy = 0;
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
            walkIntoTileType = (LEVELS[levelList[currentLevelIndex]].interactive)[walkIntoTileIndex]
            if(walkIntoTileType == TILE_BLANK || this.noClipping){
                walkIntoTileType = (LEVELS[levelList[currentLevelIndex]].background)[walkIntoTileIndex]
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

    this.draw = function() {
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
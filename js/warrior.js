var playerMoveSpeed = 3.0;
var direction = "south";
var displayIngredientInventory = true;
var displayPotions = false;

function WarriorClass() {
    this.noClipping = false;
    this.invulnerable = false;
    this.mySword = new swordClass();
    this.sword = true;
    this.myArrow = new arrowClass();
    this.arrowList = [];
    this.x = 65;
    this.centerX = 40;
    this.y = 100;
    this.centerY = 80;
    this.head = this.y - 25;
    this.feet = this.y + 25;
    this.leftArm = this.x + 25;
    this.rightArm = this.x - 25;
    this.speed = 0;
    this.myplayerPic = playerPic; // which picture to use
    this.name = "Mary";
    this.inventoryList = [];
    this.lavanderHeld = 0;
    this.redFlowerHeld = 0;
    this.blueFlowerHeld = 0;
    this.yellowFlowerHeld = 0;
    this.whiteFlowerHeld = 0;
    this.giantMushroomHeld = 0;
    this.redMushroomHeld = 0;
    this.yellowMushroomHeld = 0;
    this.redPepperHeld = 0;
    this.orangePepperHeld = 0;
    this.califlowerHeld = 0;
    this.health = 1;
    this.maxHealth = 3;
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
    this.playerMove = false;
    this.swordSwung = false;

    this.keyHeld_WalkNorth = false;
    this.keyHeld_WalkSouth = false;
    this.keyHeld_WalkWest = false;
    this.keyHeld_WalkEast = false;
    this.keyHeld_Sword = false;
    this.keyHeld_PickUp = false;

    this.controlKeyUp;
    this.controlKeyRight;
    this.controlKeyDown;
    this.controlKeyLeft;
    this.controlKeySword;

    this.setupInput = function(upKey, rightKey, downKey, leftKey, swordKey, arrowKey, pickUpKey) {
        this.controlKeyUp = upKey;
        this.controlKeyRight = rightKey;
        this.controlKeyDown = downKey;
        this.controlKeyLeft = leftKey;
        this.controlKeySword = swordKey;
        this.controlKeyArrow = arrowKey;
        this.controlKeyPickUp = pickUpKey;
    }

    this.releaseKeys = function() {
        this.keyHeld_WalkNorth = false;
        this.keyHeld_WalkSouth = false;
        this.keyHeld_WalkWest = false;
        this.keyHeld_WalkEast = false;
        this.keyHeld_Sword = false;
        this.keyHeld_PickUp = false;
    }

    this.reset = function(whichImage, warriorName) {
        this.name = warriorName;
        this.myplayerPic;
        this.health = 3;
        this.maxHealth = 3;
        this.updateReadout();

        for (var eachRow = 0; eachRow < ROOM_ROWS; eachRow++) {
            for (var eachCol = 0; eachCol < ROOM_COLS; eachCol++) {
                var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
                if (roomGrid[arrayIndex] == TILE_PLAYERSTART) {
                    roomGrid[arrayIndex] = TILE_WOOD_FLOOR;
                    this.x = eachCol * TILE_W + TILE_W / 2;
                    this.y = eachRow * TILE_H + TILE_H / 2;
                    return;
                } // end of Player Start if
            } //end of col row for
        } // end of row for
        console.log("No Player Start found!");
        this.mySword.reset();
        this.myArrow.reset();
    } // end of warriorRest func

    this.updateReadout = function() {
        //   document.getElementById("inventory").innerHTML = "Arrows: " + player.myArrow.arrowQuantity + "<br>Yellow Keys: " + this.yellowKeysHeld + "<br>Red Keys: " + this.redKeysHeld + "<br>Green Keys: " + this.greenKeysHeld + "<br>Blue Keys: " + this.blueKeysHeld + "<br>Gold Pieces: " + this.goldpieces;
    }

    this.move = function() {
        var nextX = this.x;
        var nextY = this.y;

        if (this.health <= 0) {
            endGame();
        }

        if (this.keyHeld_WalkNorth) {
            nextY -= playerMoveSpeed;
            direction = "north";
            this.sx = 0;
            this.sy = 52 * 3;
            if (this.sword = true) {
                this.sy = 52 * 7;
                if (this.swordSwung) {
                    this.sx = 52 * 8;
                }
            }
            this.moving = true;
        }
        if (this.keyHeld_WalkSouth) {
            nextY += playerMoveSpeed;
            direction = "south";
            this.sx = 0;
            this.sy = 52 * 0;
            if (this.sword = true) {
                this.sy = 52 * 4;
                if (this.swordSwung) {
                    this.sx = 52 * 8;
                }
            }
        }
        if (this.keyHeld_WalkWest) {
            nextX -= playerMoveSpeed;
            direction = "west";
            this.sx = 0;
            this.sy = 52 * 1;
            if (this.sword = true) {
                this.sy = 52 * 5;
                if (this.swordSwung) {
                    this.sx = 52 * 8;
                }
            }
        }
        if (this.keyHeld_WalkEast) {
            nextX += playerMoveSpeed;
            direction = "east";
            this.sx = 0;
            this.sy = 52 * 2;
            if (this.sword = true) {
                this.sy = 52 * 6;
                if (this.swordSwung) {
                    this.frameIndex = 6;
                }
            }
        }

        if (this.keyHeld_WalkNorth || this.keyHeld_WalkSouth || this.keyHeld_WalkWest || this.keyHeld_WalkEast) {
            this.playerMove = true;
        } else {
            this.playerMove = false;
        }


        var walkIntoTileIndex = getTileTypeAtPixelCoord(nextX, nextY);
        var walkIntoTileType = TILE_WALL1_TOP;

        if (direction == "north") {
            walkIntoTileIndex = getTileTypeAtPixelCoord(nextX + (this.width / 2), nextY);
            if (!walkIntoTileIndex) {
                const newMapName = getNextMapAtPixelCoord(nextX + (this.width / 2), nextY);
                if (newMapName) {
                    // WIP
                    loadAreaByName(newMapName, direction);
                }
            }
            walkIntoMGTileIndex = getTileTypeAtMGPixelCoord(nextX + (this.width / 2), nextY);
        }
        if (direction == "south") {
            walkIntoTileIndex = getTileTypeAtPixelCoord(nextX + (this.width / 2), nextY + this.height);
            if (!walkIntoTileIndex) {
                const newMapName = getNextMapAtPixelCoord(nextX + (this.width / 2), nextY + this.height);
                if (newMapName) {
                    // WIP
                    loadAreaByName(newMapName, direction);
                }
            }
            walkIntoMGTileIndex = getTileTypeAtMGPixelCoord(nextX + (this.width / 2), nextY + this.height);
        }
        if (direction == "west") {
            walkIntoTileIndex = getTileTypeAtPixelCoord(nextX, nextY + (this.height / 2));
            if (!walkIntoTileIndex) {
                const newMapName = getNextMapAtPixelCoord(nextX, nextY + (this.height / 2));
                if (newMapName) {
                    loadAreaByName(newMapName, direction);
                }
            }
            walkIntoMGTileIndex = getTileTypeAtMGPixelCoord(nextX, nextY + (this.height / 2));
        }
        if (direction == "east") {
            walkIntoTileIndex = getTileTypeAtPixelCoord(nextX + this.width, nextY + (this.height / 2));
            if (!walkIntoTileIndex) {
                const newMapName = getNextMapAtPixelCoord(nextX + this.width, nextY + (this.height / 2));
                if (newMapName) {
                    loadAreaByName(newMapName, direction);
                }
            }
            walkIntoMGTileIndex = getTileTypeAtMGPixelCoord(nextX + this.width, nextY + (this.height / 2));
        }

        walkIntoTileType = getInteractionOrBackgroundTile(walkIntoTileIndex);

        playerMoveSpeed = isWorldTypeWalkable(walkIntoTileType);
        // Override all other rules for moving when cheat mode noClipping is active
        if (this.noClipping) {
            playerMoveSpeed = 5;
        }
        if (playerMoveSpeed > 0.0) {
            this.x = nextX;
            this.y = nextY;
        }

        switch (walkIntoTileType) {
            case TILE_RED_FLOWER:
                if (this.keyHeld_PickUp) {
                    this.redFlowerHeld++;
                    (LEVELS[levelList[currentLevelIndex]].layers.interactive)[walkIntoTileIndex] = TILE_BLANK;
                }
                break;
            case TILE_BLUE_FLOWER:
                if (this.keyHeld_PickUp) {
                    this.blueFlowerHeld++;
                    (LEVELS[levelList[currentLevelIndex]].layers.interactive)[walkIntoTileIndex] = TILE_BLANK;
                }
                break;
            case TILE_YELLOW_FLOWER:
                if (this.keyHeld_PickUp) {
                    this.yellowFlowerHeld++;
                    (LEVELS[levelList[currentLevelIndex]].layers.interactive)[walkIntoTileIndex] = TILE_BLANK;
                }
                break;
            case TILE_WHITE_FLOWER:
                if (this.keyHeld_PickUp) {
                    this.whiteFlowerHeld++;
                    (LEVELS[levelList[currentLevelIndex]].layers.interactive)[walkIntoTileIndex] = TILE_BLANK;
                }
                break;
            case TILE_GIANT_MUSHROOM:
                if (this.keyHeld_PickUp) {
                    this.giantMushroomHeld++;
                    (LEVELS[levelList[currentLevelIndex]].layers.interactive)[walkIntoTileIndex] = TILE_BLANK;
                }
                break;
            case TILE_RED_MUSHROOM:
                if (this.keyHeld_PickUp) {
                    this.redMushroomHeld++;
                    (LEVELS[levelList[currentLevelIndex]].layers.interactive)[walkIntoTileIndex] = TILE_BLANK;
                }
                break;
            case TILE_YELLOW_MUSHROOM:
                if (this.keyHeld_PickUp) {
                    this.yellowMushroomHeld++;
                    (LEVELS[levelList[currentLevelIndex]].layers.interactive)[walkIntoTileIndex] = TILE_BLANK;
                }
                break;
            case TILE_LAVANDER:
                if (this.keyHeld_PickUp) {
                    this.lavanderHeld++;
                    (LEVELS[levelList[currentLevelIndex]].layers.interactive)[walkIntoTileIndex] = TILE_BLANK;
                }
                break;
            case TILE_VEGETABLE2:
                if (this.keyHeld_PickUp) {
                    this.redPepperHeld++;
                    (LEVELS[levelList[currentLevelIndex]].layers.interactive)[walkIntoTileIndex] = TILE_VEGETABLE1;
                }
                break;
            case TILE_VEGETABLE6:
                if (this.keyHeld_PickUp) {
                    this.orangePepperHeld++;
                    (LEVELS[levelList[currentLevelIndex]].layers.interactive)[walkIntoTileIndex] = TILE_VEGETABLE5;
                }
                break;
            case TILE_VEGETABLE4:
                if (this.keyHeld_PickUp) {
                    this.califlowerHeld++;
                    (LEVELS[levelList[currentLevelIndex]].layers.interactive)[walkIntoTileIndex] = TILE_VEGETABLE3;
                }
                break;
            default:
                break;
        } // END OF SWITCH CASE	

        this.previousTileType = walkIntoTileType;
        this.mySword.move();
        this.myArrow.move();

        this.playFootstepSFX(this.playerMove);
    }

    this.playFootstepSFX = function(isOn = true) {

        if (!this.footstepSFX) {
            this.footstepSFX = new Audio("sound/footsteps.mp3");
            this.footstepSFX.loop = true;
            this.footstepSFX.volume = 0.5; // quiet
            this.footstepSFX.play();
        }

        this.footstepSFX.volume = isOn ? 0.5 : 0; // mute the looped sound if stopped

    }

    this.checkWarriorandSwordCollisionAgainst = function(thisEnemy) {

        this.centerX = this.x + this.width / 2;
        this.centerY = this.y + this.height / 2;

        if (thisEnemy.isOverlappingPoint(this.centerX, this.centerY)) {
            //empty
        }

        if (this.mySword.hitTest(thisEnemy)) {
            console.log('sword collision check; enemy hit; take collision');
        }

        if (this.myArrow.hitTest(thisEnemy)) {
            //empty
        }
    }

    this.swordSwing = function() {
        if (this.mySword.isSwordReadyToSwing()) {
            this.mySword.shootFrom(this);
            this.swordSwung = true;
            this.frameIndex = 8;
        }
    }

    this.shotArrow = function() {
        if (this.myArrow.isArrowReadyToShot()) {
            this.myArrow.shootFrom(this);
        }
    }


    this.displayInventory = function() {
        if (this.lavanderHeld > 0) {
            var lavederDisplay = [
                //   {lavederToShow:  true, lavernderQty: this.lavanderHeld}
                1
            ]
            this.inventoryList[lavederDisplay].push;
        }
    }

    this.draw = function() {
        this.tickCount++;
        if (this.tickCount > this.ticksPerFrame) {
            this.tickCount = 0;
            if (this.playerMove) {
                if (this.frameIndex < this.numberOfFrames - 1) {
                    this.frameIndex += 1;
                } else {
                    this.frameIndex = 0;
                }
            } else if (this.swordSwung) {
                if (this.frameIndex < 13) {
                    this.frameIndex += 1;
                } else {
                    this.frameIndex = 0;
                    this.swordSwung = false;
                }

            } else {
                if (this.frameIndex < 6) {
                    this.frameIndex += 1;
                } else {
                    this.frameIndex = 4;
                }
            }
        }

        this.sx = this.frameIndex * this.width;

        canvasContext.drawImage(shadowPic, 0, 0, 25, 25, this.x + 12, this.y + 31, 25, 25);
        canvasContext.drawImage(this.myplayerPic, this.sx, this.sy, this.width, this.height, this.x, this.y, this.width, this.height);
        /*		colorRect(this.x,this.y, 5,5, "white") 
                colorRect(this.x,this.y+this.height, 5,5, "white")
                colorRect(this.x+this.width,this.y, 5,5, "white")
                colorRect(this.x+this.width,this.y+this.height, 5,5, "white")
                        
                colorRect(this.centerX,this.centerY, 5, 5, 'white') */


        shadowPic
        this.mySword.draw();

        //this.myArrow.draw();

        //this.displayInventory();

        /*this.lavanderHeld = 0;
    this.redFlowerHeld = 0;
    this.blueFlowerHeld = 0;
    this.yellowFlowerHeld = 0;
    this.whiteFlowerHeld = 0;
    this.giantMushroomHeld = 0;
    this.redMushroomHeld = 0;
    this.yellowMushroomHeld = 0;
*/
    }
}
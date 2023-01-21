function worldTileTypeToPathFindingType(worldType){
  var walkableSpeed = isWorldTypeWalkable(worldType);
  if(walkableSpeed > 0.0){
    return NOTHING;
  } else {
    return WALL;
  }
  
}
function getInteractionOrBackgroundTile(walkIntoTileIndex){
  var walkIntoTileType = undefined;
  if (walkIntoTileIndex != undefined) {
    walkIntoTileType = (LEVELS[levelList[currentLevelIndex]].layers.interactive)[walkIntoTileIndex]; //removed MG from walkIntoTileIndex
    if(walkIntoTileType == TILE_BLANK){
        walkIntoTileType = (LEVELS[levelList[currentLevelIndex]].layers.background)[walkIntoTileIndex];
    }
  }
  return walkIntoTileType;
}

function isWorldTypeWalkable(walkIntoTileType){  //Walk Speed through it, and 0 means blocked
  switch (walkIntoTileType) {
    case TILE_ROAD:
    case TILE_WOOD_FLOOR:
      return 5.0;
    case TILE_GARDEN_TOP:
    case TILE_GARDEN_TR:
    case TILE_GARDEN_LEFTSIDE:
    case TILE_GARDEN:
    case TILE_GARDEN_RIGHTSIDE:
    case TILE_GARDEN_BL:
    case TILE_GARDEN_BOTTOM:
    case TILE_GARDEN_BR:
    case TILE_GARDEN_TL:
    case TILE_GARDEN_TOP:
    case TILE_GARDEN_TR:
    case TILE_GARDEN_LEFTSIDE:
    case TILE_GARDEN:
    case TILE_GARDEN_RIGHTSIDE:
    case TILE_GARDEN_BL:
    case TILE_GARDEN_BOTTOM:
    case TILE_GARDEN_BR:
    case TILE_VEGETABLE1:
    case TILE_VEGETABLE2:
    case TILE_VEGETABLE3:
    case TILE_VEGETABLE4:
    case TILE_VEGETABLE5:
    case TILE_VEGETABLE6:
    case TILE_SMALL_ROCK_1:
    case TILE_SMALL_ROCK_2:
    case TILE_SMALL_ROCK_3:
    case TILE_SMALL_ROCK_4:
    case TILE_SMALL_ROCK_5:
    case TILE_GRASSTODIRT_TL:
    case TILE_GRASSTODIRT_TOP:
    case TILE_GRASSTODIRT_TR:
    case TILE_GRASSTODIRT_LEFTSIDE:
    case TILE_GRASSTODIRT_RIGHTSIDE: 
    case TILE_GRASSTODIRT_BL:
    case TILE_GRASSTODIRT_BOTTOM:
    case TILE_GRASSTODIRT_BR:
    case TILE_LAVANDER:
    case TILE_RED_FLOWER:
        return 3.5;
    case TILE_GRASS:
        return 4.0;
    case TILE_WALL1_DOOR_TOP:
    case TILE_WALL1_DOOR_BOTTOM:
    case TILE_WALL3_DOOR_BOTTOM:
    case TILE_WALL3_DOOR_TOP:
        return 4.0;
    case TILE_POND_TL:
    case TILE_POND_TOP:
    case TILE_POND_TR:
    case TILE_POND_LEFTSIDE:
    case TILE_POND:
    case TILE_POND_RIGHTSIDE:
    case TILE_POND_BL:
    case TILE_POND_BOTTOM:
    case TILE_POND_BR:
    case TILE_LARGE_ROCK_1:
    case TILE_LARGE_ROCK_2:
    case TILE_LARGE_ROCK_3:
    case TILE_LARGE_ROCK_4:
    case TILE_WALL1_TOPLEFT:
    case TILE_WALL1_TOP:
    case TILE_WALL1_TOPRIGHT:
    case TILE_WALL1_LEFT:
    case TILE_WALL1_RIGHT:
    case TILE_WALL1_BOTTOMLEFT:
    case TILE_WALL1_BOTTOM:
    case TILE_WALL1_BOTTOMRIGHT:
    case TILE_WALL1_LEFTSIDE_TOP:
    case TILE_WALL1_LEFTSIDE_BOTTOM:
    case TILE_WALL1_RIGHTSIDE_TOP:
    case TILE_WALL1_RIGHTSIDE_BOTTOM:
    case TILE_WALL3_TOP:
    case TILE_WALL3_BOTTOM:
    case TILE_WALL2_TOP:
    case TILE_WALL2_BOTTOM:
    case TILE_WALL2_RIGHT:
    case TILE_WALL2_TOPRIGHT:
    case TILE_WALL2_BOTTOMRIGHT:
    case TILE_WALL2_LEFT:
    case TILE_WALL2_TOPLEFT:
    case TILE_WALL2_BOTTOMLEFT:
    case TILE_WINDOW_1:
    case TILE_FIRE_PLACE:
    case TILE_NIGHT_STAND:
    case TILE_BROKEN_WAGONWHEEL:
    case TILE_FENCE1_LS_POST:
    case TILE_FENCE1_LTCORNER:
    case TILE_FENCE1_RTCORNER:
    case TILE_FENCE1_RS_POST:
    case TILE_FENCE1_LS:
    case TILE_FENCE1_RS:
    case TILE_FENCE1_LBCORNER:
    case TILE_FENCE1_BOTTOM:
    case TILE_FENCE1_BOTTOM_POST:
    case TILE_FENCE1_RBCORNER:
    case TILE_ALTER:
    case TILE_CHAIR1:
    case TILE_CHAIR2:
    case TILE_KITCHENTABLE:
    case TILE_BED1:
    case TILE_SHRUB1:
    case TILE_BOOKSELF:

    default:
        return 0.0;
  } // end of switch
}

function GridElement() {
    this.tilC;
    this.tilR; // so each tile knows its own col and row position in overall grid
    this.tilIdx;
  
    this.hVal; ///// heuristic weight (some kind of distance) for A*
                    
    this.elementType;
    this.distance;
    this.cameFrom; // GridElement reference to which tile we left to reach this one
    
    this.setup = function(myC, myR, myIdx, myElement) {
      this.reset();
      this.tilC=myC;
      this.tilR=myR;
      this.tilIdx=myIdx;
      if(isWorldTypeWalkable(myElement) == 0.0){
        this.elementType = WALL;
      } else {
        this.elementType = NOTHING;
      }
      if(this.elementType == SOURCE) {
          this.setDistIfLess(0,null);
      }
    }
  
    this.reset = function() {
      if (this.elementType==VISITED || this.elementType==PATH) {
        this.elementType=NOTHING;
      }
      this.distance = INFINITY_START_DISTANCE;
      this.cameFrom = null;
    }
    
    this.display = function() {
      var pieceName = "";
      var tileIDnumber = this.tilIdx;
      var tileBGColor = '#FF0000';
  
      switch (this.elementType) {
          case NOTHING:
              tileBGColor = '#aaaaaa'
              pieceName += "" + (this.hVal).toFixed(1); ///// showing hVal
              break;
          case SOURCE:
              pieceName += "S ";
              tileBGColor = '#55ff55';
              break;
          case DEST:
              pieceName += "D ";
              tileBGColor = '#aaaaff';
              break;
          case WALL:
              pieceName += "W";
              tileBGColor = '#555555';
              break;
          case VISITED: // include hVal
              pieceName += ""+this.distance + " " + this.hVal.toFixed(1);
              tileBGColor = '#bbbbbb';
              break;
          case PATH: // include hVal
              pieceName += "" + this.distance + " " + this.hVal.toFixed(1);
              tileBGColor = '#000000';
              break;
      }
  
      var tileLeftEdgeX = this.tilC * TILE_W;
      var tileTopEdgeY = this.tilR * TILE_H;
  
      colorRect(tileLeftEdgeX, tileTopEdgeY,TILE_W, TILE_H, tileBGColor);
      canvasContext.fillStyle = 'white';
      canvasContext.fillText(pieceName, tileLeftEdgeX + TILE_W / 2, tileTopEdgeY + TILE_H / 2);
      canvasContext.fillText(tileIDnumber, tileLeftEdgeX + TILE_W / 2, tileTopEdgeY + TILE_H-5);
      if (tileOverIdx == this.tilIdx) { // mouseover?
          outlineRect(tileLeftEdgeX, tileTopEdgeY,
              TILE_W, TILE_H, 'green');
      }
    }
    
    this.wallToggle = function () {
 //     console.log("Grid: " + this.elementType)
      if(this.elementType == SOURCE || this.elementType == DEST) {
          return; // do nothing, no support yet for placing source or dest in-game, use grid init
      } else if (this.elementType == WALL) {
          this.elementType = NOTHING;
      } else {
          this.elementType = WALL;
      }
    }
    
    this.setTile = function(toType) {
      this.elementType=toType;
    }
  
    function GetGridAtCR(atC,atR) {
      return grid[atC + atR * ROOM_COLS];
    }
    
    this.myUnvisitedNeighbors = function() {
      var myNeighbors = [];
      var consideredNeighbor;
      
      if(this.tilC > 0) {
        consideredNeighbor = GetGridAtCR(this.tilC-1,this.tilR);
        if(arrayContains(unvisitedList,consideredNeighbor)) {
          myNeighbors.push( consideredNeighbor );
        }
      }
      if(this.tilC < TILE_W-1) {
        consideredNeighbor = GetGridAtCR(this.tilC+1,this.tilR);
        if(arrayContains(unvisitedList,consideredNeighbor)) {
          myNeighbors.push( consideredNeighbor );
        }
      }
      if(this.tilR > 0) {
        consideredNeighbor = GetGridAtCR(this.tilC,this.tilR-1);
        if(arrayContains(unvisitedList,consideredNeighbor)) {
          myNeighbors.push( consideredNeighbor );
        }
      }
      if(this.tilR < TILE_H-1) {
        consideredNeighbor = GetGridAtCR(this.tilC,this.tilR+1);
        if(arrayContains(unvisitedList,consideredNeighbor)) {
          myNeighbors.push( consideredNeighbor );
        }
      }
      
      return myNeighbors;
    }
  
    this.isTileType = function(matchType) {
      return (this.elementType==matchType);
    }
    
    // function to update distance, do so only if less than previously found best distance
    this.setDistIfLess = function(newDistToConsider, comingFrom) {
      //console.log("comparing " + newDistToConsider + " vs " + this.distance);
      if(newDistToConsider < this.distance) {
        this.distance = newDistToConsider;
        this.cameFrom = comingFrom;
      }
    }
      
  }//end class declaration
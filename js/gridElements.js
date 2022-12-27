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
      this.elementType=myElement;
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
      var tileBGColor = '#FF0000';
  
      switch (this.elementType) {
          case NOTHING:
              tileBGColor = '#aaaaaa'
              pieceName += "" + (this.hVal).toFixed(1); ///// showing hVal
              break;
          case SOURCE:
              pieceName += "S";
              tileBGColor = '#55ff55';
              break;
          case DEST:
              pieceName += "D";
              tileBGColor = '#aaaaff';
              break;
          case WALL:
              pieceName += "W";
              tileBGColor = '#555555';
              break;
          case VISITED: ///// updated to include hVal
              pieceName += ""+this.distance + " " + this.hVal.toFixed(1);
              tileBGColor = '#bbbbbb';
              break;
          case PATH: ///// updated to include hVal
              pieceName += "" + this.distance + " " + this.hVal.toFixed(1);
              tileBGColor = '#000000';
              break;
      }
  
      var tileLeftEdgeX = this.tilC * TILE_W;
      var tileTopEdgeY = this.tilR * TILE_H;
  
      colorRect(tileLeftEdgeX, tileTopEdgeY,
          TILE_W - TILE_GAP, TILE_H - TILE_GAP, tileBGColor);
      canvasContext.fillStyle = 'white';
      canvasContext.fillText(pieceName,
          tileLeftEdgeX + TILE_W / 2, tileTopEdgeY + TILE_H / 2);
  
      if (tileOverIdx == this.tilIdx) { // mouseover?
          outlineRect(tileLeftEdgeX, tileTopEdgeY,
              TILE_W - TILE_GAP, TILE_H - TILE_GAP, 'green');
      }
    }
    
    this.wallToggle = function () {
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
      return grid[atC + atR * TILE_COLS];
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
      // console.log("comparing " + newDistToConsider + " vs " + this.distance);
      if(newDistToConsider < this.distance) {
        this.distance = newDistToConsider;
        this.cameFrom = comingFrom;
      }
    }
      
  }//end class declaration
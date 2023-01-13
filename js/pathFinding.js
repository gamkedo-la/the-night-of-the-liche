var unvisitedList = [];
var PathFindingPathToTake = [];
var endTile = null;
var pathfindingNow = false;
var displayPathfinding = false;
const PATHFINDING_DUBUGGING_OPACITY = 0.8;
//// Need to call at the start of each new pathfinding since it clears the visited list
function SetupPathfindingGridData() {
  
  unvisitedList = [];
  endTile = null;
  pathfindingNow = false;
  var wasSourceC = -1;
  var wasSourceR = -1;
  var wasDestC = -1;
  var wasDestR = -1;

  if(grid.length > 0) { // non-zero, copy over player set walls into tileGrid for reset
      for (var eachCol = 0; eachCol < ROOM_COLS; eachCol++) {
          for (var eachRow = 0; eachRow < ROOM_ROWS; eachRow++) {
              var idxHere = rowColToArrayIndex(eachCol, eachRow);
              if(grid[idxHere].elementType == DEST){
                wasDestC = eachCol;
                wasDestR = eachRow;
              }
              if(grid[idxHere].elementType == SOURCE){
                wasSourceC = eachCol;
                wasSourceR = eachRow;
              }
              if(grid[idxHere].elementType == VISITED ||
                  grid[idxHere].elementType == PATH) {
                //  tileGrid[idxHere] = NOTHING;
                // ?????? Not sure required 1/6/2022 VJM
              } else {
                //  tileGrid[idxHere] = grid[idxHere].elementType;
              }
          }
      }
  }

  grid = [];

  for (var eachCol = 0; eachCol < ROOM_COLS; eachCol++) {
      for (var eachRow = 0; eachRow < ROOM_ROWS; eachRow++) { 
          var idxHere = rowColToArrayIndex(eachCol, eachRow);

          grid[idxHere] = new GridElement();
          unvisitedList.push( grid[idxHere] );

          var tileTypeFromCorrectGrid = getInteractionOrBackgroundTile(idxHere);

          grid[idxHere].setup(eachCol, eachRow, idxHere, tileTypeFromCorrectGrid);
          if(eachCol == wasSourceC && eachRow == wasSourceR){
            grid[idxHere].elementType = SOURCE;
            grid[idxHere].distance = 0;
          }
          if(eachCol == wasDestC && eachRow == wasDestR){
            grid[idxHere].elementType = DEST;
          }
      }
  }
  updatehVals();
}

function updatehVals(){
  ///// new variables we'll use in heuristic calculation
  var endR = -1;
  var endC = -1;

  for (var eachCol = 0; eachCol < ROOM_COLS; eachCol++) {
    for (var eachRow = 0; eachRow < ROOM_ROWS; eachRow++) {
        var idxHere = rowColToArrayIndex(eachCol, eachRow);
        if(grid[idxHere].elementType == DEST) { ///// found end!
          endR = eachRow; ///// save tile coords for use with
          endC = eachCol; ///// computing h value of each tiles
      } /////
    }
  }

  for (var eachCol = 0; eachCol < ROOM_COLS; eachCol++) { /////
      for (var eachRow = 0; eachRow < ROOM_ROWS; eachRow++) { /////
          var idxHere = rowColToArrayIndex(eachCol, eachRow); /////

          grid[idxHere].hVal =  /////
            hValCal(eachCol, eachRow, endC,endR, 3); /////
      } /////
  } /////
}

function hValCal(atC,atR, toC,toR, multWeight) { /////
  var diffC = atC - toC;
  var diffR = atR - toR;

  return multWeight * //// weight multiplier
              Math.sqrt( diffC*diffC + diffR*diffR ); // geometric dist.
              // (Math.abs(diffC) + Math.abs(diffR)); ///// manhatten streets
} /////

function PathfindingNextStep() {
    var tentativeDistance=0;
    var safetyLimit = 10000;

      while(unvisitedList.length > 0 && safetyLimit-- > 0) { //// "while Q is not empty:"
        //// "u := vertex in Q with min dist[u]"
        var currentTile = null;
        var ctDistWithH; ///// a* with hVal heuristic added
        // console.log(unvisitedList.length);
        for (var i=0; i<unvisitedList.length; i++) {
          var compareTile = unvisitedList[i];
        
          if(currentTile == null || compareTile.distance + compareTile.hVal < ctDistWithH) { /////
            currentTile = compareTile;
            ctDistWithH = currentTile.distance + currentTile.hVal; /////
          }
        }
        
        arrayRemove(unvisitedList,currentTile); // remove u from Q
     
        // "for each neighbor v of u: where v has not yet been removed from Q"
        var neighborsStillInUnvisitedList = currentTile.myUnvisitedNeighbors();
        for (var i=0; i<neighborsStillInUnvisitedList.length; i++) {
          var neighborTile = neighborsStillInUnvisitedList[i];
          
          // A* note: hVal is NOT part of these calls, would accumulate
          if (neighborTile.isTileType(NOTHING)) {
            tentativeDistance = currentTile.distance+1;
            neighborTile.setDistIfLess(tentativeDistance, currentTile);
            neighborTile.setTile(VISITED);
          } else if (neighborTile.isTileType(DEST)) {
            tentativeDistance = currentTile.distance+1;
            neighborTile.setDistIfLess (tentativeDistance, currentTile);
            endTile=neighborTile;
            unvisitedList = []; //// empty the unvisitedList since we've found the end
          }
        }
      } 
      
      //else { // all nodes have been accounted for, work backward from end's tiles for path
             
        if (endTile!=null) {
          // walk backward from destination to create the path
          var previousTile = endTile.cameFrom;
          
          for (var pathIndex = endTile.distance; pathIndex>1; pathIndex--) {
            console.log(previousTile.tilIdx);
            PathFindingPathToTake.push(previousTile.tilIdx);
            previousTile.setTile(PATH);PathFindingPathToTake
            previousTile = previousTile.cameFrom;
          }
        }
        pathfindingNow = false;
      //}
}

function arrayContains(arr, obj) {
  var arrLen = arr.length;
  for (var i = 0; i < arrLen; i++) {
      if (arr[i] === obj) {
          return true;
      }
  }
  return false;
}

function arrayRemove(arr, obj) {
  for (var i = arr.length-1; i >= 0; i--) {
      if (arr[i] === obj) {
          arr.splice(i,1);
          return;
      }
  }
}

function drawTiles() {
  var tileCount = ROOM_COLS * ROOM_ROWS;
  canvasContext.globalAlpha = PATHFINDING_DUBUGGING_OPACITY;
  ;
  for (var eachTil = 0; eachTil < tileCount; eachTil++) {
      grid[eachTil].display();
  } // end of for eachTil
  canvasContext.globalAlpha = 1.0;
} // end of drawTiles()

function removePathfindingType(typeToRemove){
  var tileCount = ROOM_COLS * ROOM_ROWS;
  for (var eachTil = 0; eachTil < tileCount; eachTil++) {
    if(grid[eachTil].elementType == typeToRemove){
      grid[eachTil].setTile(NOTHING);
    }
  } 
} // end of for eachTil

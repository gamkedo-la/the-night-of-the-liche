

// USED FOR TESTING ENEMIES/SKELETONS WITHOUT ALTERING ACTUAL FILE
// REMEMBER TO CHANGE SCRIPT LINK IN INDEX FILE FROM     skeleton  to  test-skeleton    AND VICE VERSA
//

// var skeletonList = [];

// function addSkeleton(){
// 	var tempSkeleton = new skeletonClass();
// 	skeletonList.push(tempSkeleton);
// }

// skeletonClass.prototype = new characterClass();
// function skeletonClass() {

//     this.trackingPlayer = true;
//     this.attackReadyTicker = 30;
//     this.attackReady = true;
//     this.health = 4; 
//     this.alive = true;
    
//     this.superclassReset = this.reset; 
//     this.reset = function() {
//         for (var eachRow = 0; eachRow < ROOM_ROWS; eachRow++) {
//             for (var eachCol = 0; eachCol < ROOM_COLS; eachCol++) {
//                 var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
//                 if (roomGrid[arrayIndex] == TILE_SKELETON) {
//                     roomGrid[arrayIndex] = TILE_GRASS;
//                     this.x = eachCol * TILE_W + TILE_W / 2;
//                     this.y = eachRow * TILE_H + TILE_H / 2;
// 					this.characterPic = skeletonPic;
//                     return;
//                 } 
//             } 
//         } 
//     }

//     this.attack = function() {
//         if(this.attackReady == true){
//             player.health = player.health -1; 
//             console.log( "Skeleton Strikes! ... Player has ", player.health, " remaining!" )
//             // player flashes red for a moment
//             // playerHurtSound.play(); 
//             // document.getElementById("debugText").innerHTML = "Ouch! I've been attacked by a Skeleton for 1 point of damage."; 
//             this.attackReady = false;
//         }
//         else if(this.attackReady == false) {  
//             this.attackReadyCounter();
//         }
//     }
    
//     this.attackReadyCounter = function() {
//         if(this.attackReadyTicker > 0){ 
//             this.attackReadyTicker--;
//         } else if(this.attackReadyTicker <= 0){
//             this.attackReadyTicker = 60; //amount of time between bites
//             this.attackReady = true;
//         }
//     }

// } 



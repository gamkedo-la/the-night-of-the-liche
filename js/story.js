var quest1Active = false;
var quest1 = "Investigate missing Supply Wagons";

var displayTimer = 0;
var displayPlayerThoughts = true;

function thoughtBubble(txt,x,y) {
    const w = 240;
    const h = 70;
    const lh = 16;
    const margin = 10;
    
    x-=20; // offset for the bubbles
    y-=60; // above the player's head
    
    //colorRect(x-10,y-20,w,h,'white');
    canvasContext.drawImage(thoughtBubblePic,x-1,y-20);

    var lines = txt.split('\n');
    for (let n=0; n<lines.length; n++) {
        colorText(lines[n],x+margin,y+lh*n,'black');
    }
}

function drawPlayerThoughts (){
    displayTimer++;
    for (const playerThought of LEVELS[levelList[currentLevelIndex]].playerThoughts) {
        if (displayTimer > playerThought.startTime && displayTimer < playerThought.endTime) {
            thoughtBubble(playerThought.thought,player.x,player.y);
            break;
        }
    }

    if (displayTimer >= LEVELS[levelList[currentLevelIndex]].playerThoughtEndTime) {
        quest1Active = true;
        displayPlayerThoughts = false;
    }
}

function displayKeyInputs(){
    if(displayTimer < 300){
        colorRect(5, 10, 200, 30, 'white') 
        colorText("M:  Pause/Un-pauses music", 10, 30, "black");
    } else if (displayTimer > 305 && displayTimer < 600){
        colorRect(5, 10, 200, 30, 'white')
        colorText("N:  Displays Pathfinding", 10, 30, "black");
    }
}

function displayQuests(){
    if(quest1Active){
        colorRect(5, 0, 260, 30, "white");
        colorText(quest1, 20, 20, 'black');
    }
}


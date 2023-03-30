var quest1Active = false;
var quest1 = "Investigate missing Supply Wagons";

var displayTimer = 0;
var displayPlayerThoughts = true;

function thoughtBubble(txt,x,y) {
    const w = 240;
    const h = 70;
    const lh = 16;
    const margin = 10;
    let atMaxPan = camPanX >= ROOM_COLS * TILE_W - (canvas.width-SIDEBAR_WIDTH);
    let bubbleToUse = thoughtBubblePic
    
    y-=60; // above the player's head

    x-=20; // offset for the bubbles
    
    if (x < 0) {
        x = 0; // prevent offscreen thoughts
    } else if (atMaxPan && (x + w > canvas.width - SIDEBAR_WIDTH)) {
        const oldX = x
        x = canvas.width - w - SIDEBAR_WIDTH;
        if (oldX - x >= 10 && oldX - x < 90) {
            bubbleToUse = thoughtBubblePicMiddle
        } else if (oldX - x >= 90) {
            bubbleToUse = thoughtBubblePicFlipped
        }
    }

    //colorRect(x-10,y-20,w,h,'white');
    canvasContext.drawImage(bubbleToUse,x-1,y-20);

    var lines = txt.split('\n');
    for (let n=0; n<lines.length; n++) {
        colorText(lines[n],x+margin,y+lh*n,'black');
    }
}

function drawPlayerThoughts (offsetx=0,offsety=0){
    displayTimer++;
    for (let playerThought of LEVELS[levelList[currentLevelIndex]].playerThoughts) {
        if (displayTimer > playerThought.startTime && displayTimer < playerThought.endTime) {
            thoughtBubble(playerThought.thought,player.x+offsetx,player.y+offsety);

            // play a voiceover on the first frame this thought is shown
            if (!playerThought.hasPlayedVoiceover) {
                if (playerThought.voiceover) {
                    console.log("playing a "+playerThought.voiceover+" for: "+playerThought.thought);
                    let playme = new Audio(playerThought.voiceover);
                    playme.play();
                }
                playerThought.hasPlayedVoiceover = true; // never play again
            }

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
        //colorRect(5, 10, 200, 30, 'white') 
        canvasContext.drawImage(questGUIPic,0,0);
        colorText("M:  Pause/Un-pauses music", 30, 30, "black");
    } else if (displayTimer > 305 && displayTimer < 600){
        //colorRect(5, 10, 200, 30, 'white')
        canvasContext.drawImage(questGUIPic,0,0);
        colorText("N:  Displays Pathfinding", 30, 30, "black");
    }
}

function displayQuests(){
    if(quest1Active){
        //colorRect(5, 0, 260, 30, "white");
        canvasContext.drawImage(questGUIPic,0,0);
        colorText(quest1, 30, 30, 'black');
    }
}


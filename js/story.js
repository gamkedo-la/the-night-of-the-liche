var quest1Active = false;
var quest1 = "Investigate missing Supply Wagons";
var thoughtLine1 = "It’s been several weeks since the\nlast supply wagon has\nmade it to our village."; 
var thoughtLine2 = "I’m not one to worry,\nbut I’m starting to\nget concerned."; 
var thoughtLine3 = "I’ve been trying to make\nthe best out of my garden,\nbut I’m starting to low on food.";   
var thoughtLine4 = "I should head to our\nneighboring village of\nDagger Fall and investigate.";
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
    if(displayTimer > 25 && displayTimer < 200){
        //colorRect(player.x-10,player.y - 40, 530, 30, 'white') 
        //colorText(thoughtLine1, player.x, player.y - 20, 'black');
        thoughtBubble(thoughtLine1,player.x,player.y);
    } else if (displayTimer > 225 && displayTimer < 400){
        //colorRect(player.x-10,player.y - 40, 390, 30, 'white') 
        //colorText(thoughtLine2, player.x, player.y - 20, 'black');
        thoughtBubble(thoughtLine2,player.x,player.y);
    } else if (displayTimer > 425 && displayTimer < 600){
        //colorRect(player.x-10,player.y - 40, 580, 30, 'white') 
        //colorText(thoughtLine3, player.x, player.y - 20, 'black');
        thoughtBubble(thoughtLine3,player.x,player.y);
    } else if (displayTimer > 625 && displayTimer < 800){
        //colorRect(player.x-10,player.y - 40, 490, 30, 'white') 
        //colorText(thoughtLine4, player.x, player.y - 20,  'black');
        thoughtBubble(thoughtLine4,player.x,player.y);
    } else if (displayTimer == 900){
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


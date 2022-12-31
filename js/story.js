var quest1Active = false;
var quest1 = "Investigate missing Supply Wagons";
var thoughtLine1 = "It’s been several weeks since the last supply wagon has made it to our village."; 
var thoughtLine2 = "I’m not one to worry, but I’m starting to get concerned."; 
var thoughtLine3 = "I’ve been trying to make the best out of my garden, but I’m starting to low on food.";   
var thoughtLine4 = "I should head to our neighboring village of Dagger Fall and investigate.";
var displayTimer = 0;
var displayPlayerThoughts = true;

function drawPlayerThoughts (){
    displayTimer++;
    if(displayTimer > 25 && displayTimer < 200){
        colorRect(player.x-10,player.y - 40, 530, 30, 'white') 
        colorText(thoughtLine1, player.x, player.y - 20, 'black');
    } else if (displayTimer > 225 && displayTimer < 400){
        colorRect(player.x-10,player.y - 40, 390, 30, 'white') 
        colorText(thoughtLine2, player.x, player.y - 20, 'black');
    } else if (displayTimer > 425 && displayTimer < 600){
        colorRect(player.x-10,player.y - 40, 580, 30, 'white') 
        colorText(thoughtLine3, player.x, player.y - 20, 'black');
    } else if (displayTimer > 625 && displayTimer < 800){
        colorRect(player.x-10,player.y - 40, 490, 30, 'white') 
        colorText(thoughtLine4, player.x, player.y - 20,  'black');
    } else if (displayTimer == 900){
        quest1Active = true;
        displayPlayerThoughts = false;
    }
}

function displayKeyInputs(){
    if(displayTimer < 300){
        colorText("M:  Pause/Un-pauses music", 10, 30, "black")
    }

}

function displayQuests(){
    if(quest1Active){
        colorRect(5, 0, 260, 30, "white");
        colorText(quest1, 20, 20, 'black');
    }
}


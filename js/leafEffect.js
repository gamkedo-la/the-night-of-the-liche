var leafXPos = 50

function drawLeafs(){
    let windSpeed = 0;
    leafXPos += windSpeed;
    canvasContext.drawImage(worldPics[50], 300,250, 50, 50, leafXPos, 400, 50, 50); 
}
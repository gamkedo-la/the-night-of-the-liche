function drawPlayerCard(){  // VJM:  WIP, trying to put together the raw concept
	playerCardCanvasContext.fillStyle = 'white'; //background
	playerCardCanvasContext.fillRect(0,0,300,300); 
	playerCardCanvasContext.drawImage(player.myplayerPic, 240, 0, 48, 52, 0, 0, 100, 100); //player image
	playerCardCanvasContext.fillStyle = 'black'; //character information
	playerCardCanvasContext.fillText("Max Health: " + player.maxHealth, 100, 10);
	
	playerCardCanvasContext.beginPath(); //inventory
	let xPos;
	let yPos = 140;
	let boxWidth = 50;
	let boxHeight = 50;
	if(displayIngredientInventory){
		playerCardCanvasContext.fillText("Ingredient Inventory", 10, 120);
		playerCardCanvasContext.fillStyle = '#89CFF0';
		playerCardCanvasContext.fillRect(25,128, 250, 150);
		for (i=0; i<5; i++){
			for (ii=0; ii<3; ii++){
			xPos = (i*boxWidth)+25;
			yPos = (ii*boxHeight)+130;
			playerCardCanvasContext.strokeStyle = 'black';
			playerCardCanvasContext.lineWidth = "3";
			playerCardCanvasContext.rect(xPos, yPos, boxWidth, boxHeight);
			playerCardCanvasContext.stroke();
			}
		}
		if(player.lavanderHeld > 0){
			playerCardCanvasContext.drawImage(worldPics[50], 150,100, 50, 50, 25, 130, 50, 50);
			playerCardCanvasContext.fillStyle = "Black";
			playerCardCanvasContext.fillText(player.lavanderHeld, 65, 175);
		}
		if(player.redFlowerHeld > 0){
			playerCardCanvasContext.drawImage(worldPics[50], 200,100, 50, 50, 75, 130, 50, 50);
			playerCardCanvasContext.fillStyle = "Black";
			playerCardCanvasContext.fillText(player.redFlowerHeld, 115, 175);
		}
		if(player.blueFlowerHeld > 0){
			playerCardCanvasContext.drawImage(worldPics[50], 250,100, 50, 50, 125, 130, 50, 50);
			playerCardCanvasContext.fillStyle = "Black";
			playerCardCanvasContext.fillText(player.blueFlowerHeld, 165, 175);
		}
		if(player.yellowFlowerHeld > 0){
			playerCardCanvasContext.drawImage(worldPics[50], 300,100, 50, 50, 175, 130, 50, 50);
			playerCardCanvasContext.fillStyle = "Black";
			playerCardCanvasContext.fillText(player.yellowFlowerHeld, 215, 175);
		}
		if(player.whiteFlowerHeld > 0){
			playerCardCanvasContext.drawImage(worldPics[50], 250, 50, 50, 50, 225, 130, 50, 50);
			playerCardCanvasContext.fillStyle = "Black";
			playerCardCanvasContext.fillText(player.whiteFlowerHeld, 265, 175);
		}
		if(player.giantMushroomHeld > 0){
			playerCardCanvasContext.drawImage(worldPics[50], 150,150, 50, 50, 25, 180, 50, 50);
			playerCardCanvasContext.fillStyle = "Black";
			playerCardCanvasContext.fillText(player.giantMushroomHeld, 65, 225);
		}
		if(player.redMushroomHeld > 0){
			playerCardCanvasContext.drawImage(worldPics[50], 300,150, 50, 50, 75, 180, 50, 50);
			playerCardCanvasContext.fillStyle = "Black";
			playerCardCanvasContext.fillText(player.redMushroomHeld, 115, 225);
		}
		if(player.yellowMushroomHeld > 0){
			playerCardCanvasContext.drawImage(worldPics[50], 350,150, 50, 50, 125, 180, 50, 50);
			playerCardCanvasContext.fillStyle = "Black";
			playerCardCanvasContext.fillText(player.redMushroomHeld, 165, 225);
		}
		if(player.redPepperHeld > 0){
			playerCardCanvasContext.drawImage(worldPics[50], 200,200, 50, 50, 25, 230, 50, 50);
			playerCardCanvasContext.fillStyle = "Black";
			playerCardCanvasContext.fillText(player.redPepperHeld, 65, 275);
		}
		if(player.orangePepperHeld > 0){
			playerCardCanvasContext.drawImage(worldPics[50], 250,200, 50, 50, 75, 230, 50, 50);
			playerCardCanvasContext.fillStyle = "Black";
			playerCardCanvasContext.fillText(player.orangePepperHeld, 115, 275);
		}
		if(player.califlowerHeld > 0){
			playerCardCanvasContext.drawImage(worldPics[50], 300,200, 50, 50, 125, 230, 50, 50);
			playerCardCanvasContext.fillStyle = "Black";
			playerCardCanvasContext.fillText(player.califlowerHeld, 165, 275);
		}
	} else if (displayPotions){
		playerCardCanvasContext.fillText("Potion Inventory", 10, 120);
		playerCardCanvasContext.fillStyle = '#088F8F';
		playerCardCanvasContext.fillRect(25,128, 250, 150);
		for (i=0; i<5; i++){
			for (ii=0; ii<3; ii++){
			xPos = (i*boxWidth)+25;
			yPos = (ii*boxHeight)+130;
			playerCardCanvasContext.strokeStyle = 'black';
			playerCardCanvasContext.lineWidth = "3";
			playerCardCanvasContext.rect(xPos, yPos, boxWidth, boxHeight);
			playerCardCanvasContext.stroke();
			}
		}
        //demo potion for displaying
        playerCardCanvasContext.drawImage(worldPics[50], 150,250, 50, 50, 125, 230, 50, 50);
		playerCardCanvasContext.fillStyle = "Black";
		playerCardCanvasContext.fillText("2", 165, 275);
	}
}
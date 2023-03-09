function displayHealth(){
    let emptyHeartSpriteOffset = 0;
    let fullHeartSpriteOffset = 32;
    let heartSpriteWidth = 32;
    let xHeartPosStart = HEALTH_X_OFFSET - (Math.max(player.health, player.maxHealth) * heartSpriteWidth);

    for(i = 0; i < player.maxHealth; i++){
        let xmodifier = heartSpriteWidth * i;
        let xHeartPos = xHeartPosStart + xmodifier;
        canvasContext.drawImage(heartPic, emptyHeartSpriteOffset, 0, 32, 32, xHeartPos, 0, 32, 32);
        if ( player.health > i ) {
            canvasContext.drawImage(heartPic, fullHeartSpriteOffset, 0, 32, 32, xHeartPos, 0, 32, 32);
        }
    };
};
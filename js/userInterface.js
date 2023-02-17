function displayHealth(){
    let emptyHeartSpriteOffset = 0;
    let fullHeartSpriteOffset = 32;
    for(i = 0; i < player.maxHealth; i++){
        let xmodifier = 32 * i;
        let xHeartPos = 700 + xmodifier;
        canvasContext.drawImage(heartPic, emptyHeartSpriteOffset, 0, 32, 32, xHeartPos, 0, 32, 32);
    };
    for(i = 0; i < player.health; i++){
        let xmodifier = 32 * i;
        let xHeartPos = 700 + xmodifier;
        canvasContext.drawImage(heartPic, fullHeartSpriteOffset, 0, 32, 32, xHeartPos, 0, 32, 32);
    };
};
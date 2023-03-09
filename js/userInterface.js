function displayHealth(){
    const emptyHeartSpriteOffset = 0;
    const fullHeartSpriteOffset = 32;
    const heartSpriteWidth = 32;
    const numHearts = Math.max(player.health, player.maxHealth);
    const xHeartPosStart = HEALTH_X_OFFSET - (numHearts * heartSpriteWidth);

    for(i = 0; i < numHearts; i++){
        const xmodifier = heartSpriteWidth * i;
        const xHeartPos = xHeartPosStart + xmodifier;
        if ( player.maxHealth > i )
            canvasContext.drawImage(heartPic, emptyHeartSpriteOffset, 0, 32, 32, xHeartPos, 0, 32, 32);
        if ( player.health > i )
            if ( player.maxHealth <= i )
                canvasContext.drawImage(heartPic, fullHeartSpriteOffset, 0, 32, 32, xHeartPos, 0, 46, 46);
            else
                canvasContext.drawImage(heartPic, fullHeartSpriteOffset, 0, 32, 32, xHeartPos, 0, 32, 32);
    };
};

function displayPauseState() {
    if ( isPaused ) {
        const helpX = 450;
        let helpy = 300;
        let helph = 14;

        // Reminder current health as fun animation (if we render more than just the once)
        // Currently it can be seen if toggling pause rapidly :)
        const emptyHeartSpriteOffset = 0;
        const fullHeartSpriteOffset = 32;
        const numHearts = Math.max(player.health, player.maxHealth);
        const now = performance.now();
        const circlingHeight = 120;
        const circlingWidth = 20;
        const iterationWeight = 1;
        const circlingSpeed = 0.0007;

        pauseAnimationContext.clearRect(0, 0, pauseAnimationCanvas.width, pauseAnimationCanvas.height);
        const remainder = player.maxHealth - player.health;
            for(i = 0; i < numHearts; i++) {
                const heartOffset = i < remainder ? emptyHeartSpriteOffset : fullHeartSpriteOffset;

            pauseAnimationContext.drawImage(heartPic, heartOffset, 0, 32, 32, helpX-60 +circlingWidth*(Math.sin(i*iterationWeight+now*circlingSpeed)-1.0), helpy+circlingHeight*(Math.cos(i*iterationWeight+now*circlingSpeed)+1.0), 32, 32);
            pauseAnimationContext.drawImage(heartPic, heartOffset, 0, 32, 32, helpX+180+circlingWidth*(Math.sin(i*iterationWeight+now*circlingSpeed)+1.0), helpy-circlingHeight*(Math.cos(i*iterationWeight+now*circlingSpeed)-1.0), 32, 32);
        }

        if ( !drawnPauseScreen ) {
            // Transparent background looks cool, lets play field bleed through so they remember they are paused
            canvasContext.globalAlpha = .7;
            canvasContext.drawImage(titlepagePic, 0,0);  // blanks out the screen
            canvasContext.drawImage(logoPic, 280,0);
            canvasContext.globalAlpha = 1;


            // Print some text clearly stating we are paused
            canvasContext.font="24px Georgia";
            canvasContext.fillStyle = '#22aff0';
            canvasContext.fillText("Paused", helpX, helpy);
            canvasContext.fillStyle = '#89CFF0';
            canvasContext.fillText("Paused", helpX, helpy);

            helpy += helph;

            // Print keybinds for helpfulness
            canvasContext.font="12px Georgia";
            colorText("Move Left - Left Arrow", helpX, helpy+=helph, "white");
            colorText("Move Down - Down Arrow", helpX, helpy+=helph, "white");
            colorText("Move Right - Right Arrow", helpX, helpy+=helph, "white");
            colorText("Move Up - Up Arrow", helpX, helpy+=helph, "white");
            colorText("Sword Attack - Space bar", helpX, helpy+=helph, "white");
            colorText("Arrow Attack - A", helpX, helpy+=helph, "white");
            colorText("Interact/Pick Up - X", helpX, helpy+=helph, "white");

            helpy += helph;

            Object.keys(GLOBAL_KEYBIND_MAP).forEach((k) => {
                const keybind = GLOBAL_KEYBIND_MAP[k];
                colorText(`${keybind.description} - ${keybind.key}`, helpX, helpy+=helph, "white");
            });

            // Don't redraw for transparency, altho at cost of fun animation
            drawnPauseScreen = true;
        }

    }
}

function leavePauseState() {
    pauseAnimationContext.clearRect(0, 0, pauseAnimationCanvas.width, pauseAnimationCanvas.height);
    drawnPauseScreen = false;
}
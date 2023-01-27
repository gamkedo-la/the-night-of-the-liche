// a black overlay that we cut holes (in like swiss cheese)
// which we then draw on top of the world to simulate darkness and light


const NIGHT_DARKNESS_OPACITY = 0.85; // so you can always see a little
const darknessColour = "rgba(0,0,0,0.85);"; // semi-transparent blackness
var darknessCanvas, darknessCTX; 

function drawDarkness() {
    
    if (!darknessCanvas) { // init on 1st use
        console.log("initializing darkness effect");
        darknessCanvas = document.createElement("canvas");
        darknessCanvas.width = canvas.width;
        darknessCanvas.height = canvas.height;
        darknessCTX = darknessCanvas.getContext('2d');
    }
    
    darknessCTX.globalCompositeOperation = "source-over"; // normal drawing
    darknessCTX.clearRect(0,0,darknessCanvas.width,darknessCanvas.height); // empty
    darknessCTX.fillStyle = darknessColour; // see-through black
    darknessCTX.fillRect(0,0,darknessCanvas.width,darknessCanvas.height);

    // cut holes in the darkness where lights are
    darknessCTX.globalCompositeOperation = "destination-out"; // cut alpha

    // around the player
    darknessCTX.drawImage(lightGlowPic,player.x-128+24-camPanX,player.y-128+24-camPanY);

    // and all monsters and NPCs (for now)
	for (me of skeletonList) darknessCTX.drawImage(lightGlowPic,me.x-128+24-camPanX,me.y-128+24-camPanY);
	for (me of alchemistList) darknessCTX.drawImage(lightGlowPic,me.x-128+24-camPanX,me.y-128+24-camPanY);
	for (me of spiritList) darknessCTX.drawImage(lightGlowPic,me.x-128+24-camPanX,me.y-128+24-camPanY);
    
    // draw the darkness over top of the scene
    canvasContext.globalAlpha = NIGHT_DARKNESS_OPACITY; //FIXME: the above blackness is 100% opaque not sure why
    canvasContext.drawImage(darknessCanvas,0,0);
    canvasContext.globalAlpha = 1;

    // the old way that worked
    // canvasContext.globalAlpha = NIGHT_DARKNESS_OPACITY;
    // canvasContext.drawImage(darknessPic,player.x+24-1000,player.y+24-1000);
    // canvasContext.globalAlpha = 1;
}


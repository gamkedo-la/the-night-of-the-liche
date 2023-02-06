// a black overlay that we cut holes (in like swiss cheese)
// which we then draw on top of the world to simulate darkness and light


const NIGHT_DARKNESS_OPACITY = 0.85; // so you can always see a little
const USE_COLOURED_LIGHTS = true; // experimental r,g,b tinted light sources 
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
    
    darknessCTX.globalAlpha = 1;

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
    // flickering light sources
    for (me of lightsourceList) {
        // flicker
        let alphaFlicker = Math.sin(performance.now()/100)/4+0.75;
        darknessCTX.globalAlpha = alphaFlicker;
        // wobble
        let wobx = Math.sin(performance.now()*0.01234)*6;
        let woby = Math.sin(performance.now()*0.02345)*6;
        let x = me.x-128+24-camPanX+wobx;
        let y = me.y-128+24-camPanY+woby;
        // cut a hole in the black image's alpha channel:
        darknessCTX.globalCompositeOperation = "destination-out"; // cut alpha
        darknessCTX.drawImage(lightGlowPic,x,y);
        // overlay some additional colour
        if (USE_COLOURED_LIGHTS) {
            // three (r,g,b) layers are required for coloured lights without requiring temp canvases
            // console.log("COLOURED LIGHT: "+me.r+","+me.g+","+me.b);
            darknessCTX.globalCompositeOperation = "lighten"; // for an interesting effect try 'lighter'
            darknessCTX.globalAlpha = alphaFlicker * me.r;
            darknessCTX.drawImage(REDlightGlowPic,x,y);
            darknessCTX.globalAlpha = alphaFlicker * me.g;
            darknessCTX.drawImage(GREENlightGlowPic,x,y);
            darknessCTX.globalAlpha = alphaFlicker * me.b;
            darknessCTX.drawImage(BLUElightGlowPic,x,y);
        }
    }

    // add a blue glow around spirits
    if (USE_COLOURED_LIGHTS) {
        darknessCTX.globalCompositeOperation = "lighten";
        darknessCTX.globalAlpha = 0.5;
        for (me of spiritList) {
            darknessCTX.drawImage(BLUElightGlowPic,me.x-128+24-camPanX,me.y-128+24-camPanY);
        }
        for (me of skeletonList) {
            darknessCTX.drawImage(REDlightGlowPic,me.x-128+24-camPanX,me.y-128+24-camPanY);
        }
    }

    darknessCTX.globalCompositeOperation = "source-over"; // reset to normal drawing mode
    darknessCTX.globalCompositeOperation = "multiply"; // hmmm
    
    // draw the darkness over top of the scene
    canvasContext.globalAlpha = NIGHT_DARKNESS_OPACITY; //FIXME: the above blackness is 100% opaque not sure why
    canvasContext.drawImage(darknessCanvas,0,0);
    canvasContext.globalAlpha = 1;

    // the old way that worked
    // canvasContext.globalAlpha = NIGHT_DARKNESS_OPACITY;
    // canvasContext.drawImage(darknessPic,player.x+24-1000,player.y+24-1000);
    // canvasContext.globalAlpha = 1;
}

// a list of light sources - extra glows added by level tiles
var lightsourceList = [];

// used in level loading similar to adding a monster
// (r,g,b = red green blue) eg. 1,1,1 is white light
function addLightsource(x,y,size=48,r=1,g=1,b=1) {
    console.log("adding a light source at :"+x+","+y);
    lightsourceList.push({x:x,y:y,size:size,r:r,g:g,b:b});
}

// run when we change levels
function resetLightsources() {
    console.log("removing all light glows used by the darkness effect");
    lightsourceList = [];
}
// rain effect v1.2 made by mcfunkypants

var rainDrops = [];
const RAIN_COUNT = 150;
const RAIN_SPRITE_W = 320;
const RAIN_SPRITE_H = 64;
const RAIN_DIRECTION = -1; // 1 for left, -1 for right

function drawRain(cameraOffsetX=0,cameraOffsetY=0) {
    
    var spdy = 0;

    for (var loop=0; loop<RAIN_COUNT; loop++) {

        if (!rainDrops[loop]) rainDrops[loop] = { x:0,y:999999999,sx:-1,sy:2};
        
        // respawn when past bottom of WORLD
        if (rainDrops[loop].y > canvas.height+RAIN_SPRITE_H-cameraOffsetY) {
            spdy = 1+Math.random()*4;
            // extra wide spawn region because it falls at an angle and we want rain in the bottom left corner of the screen
            rainDrops[loop].x = (Math.random()*(canvas.width+RAIN_SPRITE_W*2))-cameraOffsetX-(RAIN_SPRITE_W*4); 
            // console.log("rain respawn because y="+rainDrops[loop].y.toFixed()+" spawn x ="+rainDrops[loop].x.toFixed());
            // anywhere above the camera is fine
            rainDrops[loop].y = -RAIN_SPRITE_H+cameraOffsetY-(Math.random()*200);
            rainDrops[loop].sx=-spdy/2 * RAIN_DIRECTION;
            rainDrops[loop].sy=spdy;
        }

        rainDrops[loop].x += rainDrops[loop].sx;
        rainDrops[loop].y += rainDrops[loop].sy;
        //console.log("rain "+rainDrops[loop].x.toFixed()+","+rainDrops[loop].y.toFixed()+" cam:"+cameraOffsetX.toFixed()+","+cameraOffsetY.toFixed());

        canvasContext.globalAlpha = 1;
        canvasContext.drawImage(rainEffectPic,rainDrops[loop].x+cameraOffsetX,rainDrops[loop].y+cameraOffsetY);
        
        /*    canvasContext.drawImage(rainEffectPic,
            0, // sx
            0, // sy
            RAIN_SPRITE_W, // sw
            RAIN_SPRITE_H, // sh
            rainDrops[loop].x, // dx
            rainDrops[loop].y, // dy
            RAIN_SPRITE_W, // dw
            RAIN_SPRITE_H); // dh        
        */

    }
}
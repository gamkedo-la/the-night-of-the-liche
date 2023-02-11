// rain effect v1.2 made by mcfunkypants

var rainDrops = [];
const RAIN_COUNT = 100;
const RAIN_SPRITE_W = 320;
const RAIN_SPRITE_H = 64;
const RAIN_DIRECTION = -1; // 1 for left, -1 for right

function drawRain(cameraOffsetX=0,cameraOffsetY=0) {
    
    var spdy = 0;

    for (var loop=0; loop<RAIN_COUNT; loop++) {

        if (!rainDrops[loop]) rainDrops[loop] = { x:0,y:999999999,sx:-1,sy:2};
        
        // respawn when past bottom of WORLD
        if (rainDrops[loop].y > canvas.height+RAIN_SPRITE_H+500) { // FIXME: add height and width of track
            //console.log("rain respawn");
            spdy = 1+Math.random()*4;
            rainDrops[loop].x = (Math.random()*canvas.width)-cameraOffsetX-(RAIN_SPRITE_W*2);
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
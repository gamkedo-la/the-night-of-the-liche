var animationList = [];

function addAnimation(spec={}){
	var anim = new animationClass(spec);
	animationList.push(anim);
}

function animationClass(spec={}) {
    this.x = spec.x || 0;
    this.y = spec.y || 0;
    this.pic = spec.pic || candlePic; // which picture to use
    this.sx = 0;
    this.sy = 0;
    this.tickCount = 0;
    this.frameIndex = 0;
    this.width = spec.width || 50;
    this.numberOfFrames = spec.frames || 6;
    this.height = spec.height || 50;
    this.ticksPerFrame = spec.ticksPerFrame || 5;

    this.draw = function() {
        this.tickCount++;
        if (this.tickCount > this.ticksPerFrame) {
            this.tickCount = 0;
            if (this.frameIndex < this.numberOfFrames - 1) {
                this.frameIndex += 1;
            } else {
                this.frameIndex = 0;
            }
        }

        this.sx = this.frameIndex * this.width;
        canvasContext.drawImage(this.pic, this.sx, this.sy, this.width, this.height, this.x, this.y, this.width, this.height);
    }
}

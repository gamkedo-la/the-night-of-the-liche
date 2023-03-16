var audioFormat;

// Sound //
var alchemistIntro_1 = new SoundOverlapsClass("alchemist_intro1");
var alchemistIntro_2 = new SoundOverlapsClass("alchemist_intro2");
var alchemistIntro_3 = new SoundOverlapsClass("alchemist_intro3");
var sfx_footsteps = new SoundOverlapsClass("footsteps");
var sfx_door = new SoundOverlapsClass("door");
//var sfx_player_attack = new SoundOverlapsClass("sfx_player_attack");
//var sfx_skeleton_attack = new SoundOverlapsClass("attsfx_skeleton_attackack");
//var sfx_lich_attack = new SoundOverlapsClass("sfx_lich_attack");

// Music //
var backgroundMusic = new BackgroundMusicClass("background");

function setFormat(){
	var audio = new Audio();
	if (audio.canPlayType("audio/mp3")){ // true in 99.8% of browsers
		audioFormat = ".mp3";
	} else {
		audioFormat = ".ogg";
	}
}

function SoundOverlapsClass(filenameWithPath) {
	
	setFormat();
	
	var mainSound = new Audio("sound/"+filenameWithPath+audioFormat);
	var altSound = new Audio("sound/"+filenameWithPath+audioFormat);
	
	var altSoundTurn = false;
	
	this.play = function() {
		if(altSoundTurn) {
			altSound.currentTime = 0;
			altSound.play();
		} else {
			mainSound.currentTime = 0;
			mainSound.play();
		}
		altSoundTurn = !this.altSoundTurn;
	}

}	

function BackgroundMusicClass(filenameWithPath){
	
	var musicSound = null;
	
	this.loopSong = function(filenameWithPath){
		setFormat(); 
		
		if(musicSound != null){
			musicSound.pause();
			musicSound = null;
		}
		musicSound = new Audio("sound/"+filenameWithPath+audioFormat);
		musicSound.loop = true;
		musicSound.play();
	}
	
	this.startOrStopMusic = function(){
		if(musicSound.paused){
			musicSound.play();
		} else {
			musicSound.pause();
		}
	}
}


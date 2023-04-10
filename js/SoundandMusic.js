var audioFormat;

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
	
	this.play = function(volume=1) {
		if(altSoundTurn) {
			altSound.currentTime = 0;
            altSound.volume = volume;
			altSound.play();
		} else {
			mainSound.currentTime = 0;
            mainSound.volume = volume;
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

// Sound //
var alchemistIntro_1 = new SoundOverlapsClass("alchemist_intro1");
var alchemistIntro_2 = new SoundOverlapsClass("alchemist_intro2");
var alchemistIntro_3 = new SoundOverlapsClass("alchemist_intro3");
var sfx_door = new SoundOverlapsClass("door");

// TODO: replace these with nicer mp3s - swish.mp3 is placeholder
var sfx_sword_attack = new SoundOverlapsClass("swish");
var sfx_arrow_attack = new SoundOverlapsClass("arrow");
var sfx_skeleton_attack = new SoundOverlapsClass("swish");
var sfx_lich_attack = new SoundOverlapsClass("swish");

// Music //
var backgroundMusic = new BackgroundMusicClass("backgroundMusic");

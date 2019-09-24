class Sound {
  constructor(soundId) {
    this.sound = document.getElementById(soundId);
  }

  play() {
    this.sound.play();
  }

  pause() {
    this.sound.pause();
  }
}

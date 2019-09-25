class Sound {
  constructor(soundId) {
    this.sound = document.getElementById(soundId);
  }

  createPlayer(sound) {
    this.sound = document.createElement("audio");
    this.sound.src = sound;
    return this;
  }

  play() {
    this.sound.play();
  }

  pause() {
    this.sound.pause();
  }
}

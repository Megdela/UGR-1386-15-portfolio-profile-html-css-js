document.addEventListener("DOMContentLoaded", () => {
  const image = document.getElementById("play-audio");
  const audio = document.getElementById("audio-element");

  image.addEventListener("click", () => {
    
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  });
});

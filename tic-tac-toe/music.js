const d = document;

export function playMusic() {
  let $sound = d.querySelector(".on"),
    song = d.createElement("audio");

  song.src = "assets/magic-in-the-air-43177.mp3";

  song.play();
  song.loop = true;
  song.autoplay = true;

  d.addEventListener("click", (e) => {
    if (e.target === $sound) {
      // clik for mute
      if ($sound.classList.contains("on")) {
        $sound.classList.remove("on");
        $sound.classList.add("off");
        $sound.src = "assets/sin-volumen.png";
        song.muted = true;
      } else if ($sound.classList.contains("off")) {
        // click for replay
        $sound.classList.remove("off");
        $sound.classList.add("on");
        $sound.src = "assets/volumen.png";
        song.muted = false;
      }
    }
  });
}

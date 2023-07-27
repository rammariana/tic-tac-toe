import { start } from "./beggining.js";
import { playMusic } from "./music.js";
import { playStart } from "./play-start.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  start();
  playStart();
  playMusic();
});

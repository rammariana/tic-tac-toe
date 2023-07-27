import { gameCount } from "./play-start.js";

const d = document;

export function whoWin() {
  const $player = d.getElementById("score-player"),
    $pc = d.getElementById("score-pc"),
    $container = d.querySelector(".container"),
    $replayBtn = d.createElement("button");

  //CREATING MESSAGE TO THE WINNER
  let messagePopUp = d.createElement("section"),
    textMessage = d.createElement("p");
  messagePopUp.classList.add("message");

  //CREATING REPLAY BTN
  $replayBtn.textContent = "Replay";
  $replayBtn.classList.add("replay-btn");

  gameCount;

  if ($player.textContent > $pc.textContent) {
    console.log("player win ", parseInt($player.textContent, 10));
    textMessage.textContent = "¡...You won the game...!";
  } else if ($player.textContent < $pc.textContent) {
    console.log("pc wins");
    textMessage.textContent = "¡...Pc won the game...!";
  }
  messagePopUp.appendChild(textMessage);
  messagePopUp.appendChild($replayBtn);
  $container.appendChild(messagePopUp);

  d.addEventListener("click", (e) => {
    if (e.target.matches(".replay-btn")) {
      location.reload();
    }
  });
}

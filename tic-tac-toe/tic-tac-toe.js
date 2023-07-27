import { gameCount } from "./play-start.js";
import { tieMessage } from "./tie-message.js";
import { whoWin } from "./who-win.js";

const d = document;

export function paintTicTacToe() {
  let $article = d.getElementById("article"),
    $containerTicTacToe = d.createElement("section"),
    $lines = d.createElement("div");

  //EXPORTING GAME COUNT VAR
  gameCount;
  //
  let currentGame = 0;
  let random = [];
  let click;

  //

  function render() {
    click = 0;
    $article.textContent = "";
    $article.classList.remove("article");
    //
    $article.classList.add("article-play");
    $lines.classList.add("lines");
    $containerTicTacToe.classList.add("cont-tic-tac-toe");

    random.length = 0;
    for (let i = 1; i <= 9; i++) {
      let div = d.createElement("div");

      div.id = [i];
      div.textContent = "";
      div.classList.add("div");

      random.push(i);
      $containerTicTacToe.appendChild(div);
      console.log(div);
    }
    $article.appendChild($lines);
    $article.appendChild($containerTicTacToe);

    random.sort(function () {
      return Math.random() - 0.5;
    });
    console.log(random);
  }

  //footer
  function footerRender() {
    let $footer = d.querySelector("footer"),
      score = d.createElement("aside"),
      scorePlayer = d.createElement("p"),
      scorePc = d.createElement("p"),
      player = d.createElement("div"),
      pc = d.createElement("div"),
      firstNode = d.querySelector("img");
    score.classList.add("score");

    scorePc.id = "score-pc";
    scorePlayer.id = "score-player";
    player.classList.add("player");
    pc.classList.add("pc");
    //
    scorePc.textContent = "0";
    scorePlayer.textContent = "0";
    player.textContent = "Player:";
    pc.textContent = "Pc:";
    //
    player.appendChild(scorePlayer);
    pc.appendChild(scorePc);
    score.appendChild(player);
    score.appendChild(pc);

    $footer.insertBefore(score, firstNode);
  }

  render();
  footerRender();

  //console.log(random);

  let div1 = d.getElementById("1"),
    div2 = d.getElementById("2"),
    div3 = d.getElementById("3"),
    div4 = d.getElementById("4"),
    div5 = d.getElementById("5"),
    div6 = d.getElementById("6"),
    div7 = d.getElementById("7"),
    div8 = d.getElementById("8"),
    div9 = d.getElementById("9");

  let countPlayer = 0,
    countPc = 0;

  d.addEventListener("click", (e) => {
    //
    if (currentGame < gameCount) {
      if (e.target.matches(".div") && e.target.textContent === "") {
        click += 1;
        console.log(click);
        e.target.textContent = "O";
        random.splice(random.indexOf(parseInt(e.target.id, 10)), 1);

        if (
          ((div5.textContent === "X" && div7.textContent === "X") ||
            (div6.textContent === "X" && div9.textContent === "X") ||
            (div1.textContent === "X" && div2.textContent === "X")) &&
          div3.textContent === ""
        ) {
          div3.textContent = "X";
          random.splice(random.indexOf(parseInt(div3.id, 10)), 1);
        } else if (
          ((div2.textContent === "X" && div3.textContent === "X") ||
            (div5.textContent === "X" && div9.textContent === "X") ||
            (div4.textContent === "X" && div7.textContent === "X")) &&
          div1.textContent === ""
        ) {
          div1.textContent = "X";
          random.splice(random.indexOf(parseInt(div1.id, 10)), 1);
        } else if (
          ((div8.textContent === "X" && div9.textContent === "X") ||
            (div5.textContent === "X" && div3.textContent === "X") ||
            (div1.textContent === "X" && div4.textContent === "X")) &&
          div7.textContent === ""
        ) {
          div7.textContent = "X";
          random.splice(random.indexOf(parseInt(div7.id, 10)), 1);
        } else if (
          ((div5.textContent === "X" && div1.textContent === "X") ||
            (div6.textContent === "X" && div3.textContent === "X") ||
            (div7.textContent === "X" && div8.textContent === "X")) &&
          div9.textContent === ""
        ) {
          div9.textContent = "X";
          random.splice(random.indexOf(parseInt(div9.id, 10)), 1);
        } else if (
          ((div5.textContent === "X" && div6.textContent === "X") ||
            (div1.textContent === "X" && div7.textContent === "X")) &&
          div4.textContent === ""
        ) {
          div4.textContent = "X";
          random.splice(random.indexOf(parseInt(div4.id, 10)), 1);
        } else if (
          ((div5.textContent === "X" && div4.textContent === "X") ||
            (div9.textContent === "X" && div3.textContent === "X")) &&
          div6.textContent === ""
        ) {
          div6.textContent = "X";
          random.splice(random.indexOf(parseInt(div6.id, 10)), 1);
        } else if (
          ((div9.textContent === "X" && div1.textContent === "X") ||
            (div7.textContent === "X" && div3.textContent === "X") ||
            (div2.textContent === "X" && div8.textContent === "X") ||
            (div4.textContent === "X" && div6.textContent == "X")) &&
          div5.textContent === ""
        ) {
          div5.textContent = "X";
          random.splice(random.indexOf(parseInt(div5.id, 10)), 1);
        } else if (
          ((div5.textContent === "X" && div2.textContent === "X") ||
            (div7.textContent === "X" && div9.textContent === "X")) &&
          div8.textContent === ""
        ) {
          div8.textContent = "X";
          random.splice(random.indexOf(parseInt(div8.id, 10)), 1);
        } else if (
          ((div3.textContent === "X" && div1.textContent === "X") ||
            (div5.textContent === "X" && div8.textContent === "X")) &&
          div2.textContent === ""
        ) {
          div2.textContent = "X";
          random.splice(random.indexOf(parseInt(div2.id, 10)), 1);
        } else if (
          (e.target.id === "4" && div7.textContent === "O") ||
          (e.target.id === "5" && div9.textContent === "O") ||
          (e.target.id === "3" && div2.textContent === "O") ||
          (e.target.id === "7" && div4.textContent === "O") ||
          (e.target.id === "9" && div5.textContent === "O") ||
          (e.target.id === "2" && div3.textContent === "O")
        ) {
          if (div1.textContent === "X" && random.length > 0) {
            //console.log("ocupado");
            if (
              d.getElementById(`${random[0]}`).textContent === "O" ||
              d.getElementById(`${random[0]}`).textContent === "X"
            ) {
              //si
              d.getElementById(`${random[1]}`).textContent = "X";
              random.splice(random.indexOf(parseInt(random[1], 10)), 1);
            } else {
              //no
              d.getElementById(`${random[0]}`).textContent = "X";
              random.splice(random.indexOf(parseInt(random[0], 10)), 1);
            }
          } else if (div1.textContent === "O") {
            //si div esta ocupado con un O y los tros dos ya estan marcados gano player
            console.log("ganaste");
          } else {
            div1.textContent = "X";
            random.splice(random.indexOf(parseInt(div1.id, 10)), 1);
          }
        } else if (
          (e.target.id === "2" && div1.textContent === "O") ||
          (e.target.id === "1" && div2.textContent === "O") ||
          (e.target.id === "5" && div7.textContent === "O") ||
          (e.target.id === "7" && div5.textContent === "O") ||
          (e.target.id === "6" && div9.textContent === "O") ||
          (e.target.id === "9" && div6.textContent === "O")
        ) {
          if (div3.textContent === "X" && random.length > 0) {
            //console.log("ocupado");
            if (
              d.getElementById(`${random[0]}`).textContent === "O" ||
              d.getElementById(`${random[0]}`).textContent === "X"
            ) {
              //si
              d.getElementById(`${random[1]}`).textContent = "X";
              random.splice(random.indexOf(parseInt(random[1], 10)), 1);
            } else {
              //no
              d.getElementById(`${random[0]}`).textContent = "X";
              random.splice(random.indexOf(parseInt(random[0], 10)), 1);
            }
          } else if (div3.textContent === "O") {
            //si div esta ocupado con un O y los tros dos ya estan marcados gano player
            console.log("ganaste");
          } else {
            div3.textContent = "X";
            random.splice(random.indexOf(parseInt(div3.id, 10)), 1);
          }
        } else if (
          (e.target.id === "6" && div3.textContent === "O") ||
          (e.target.id === "3" && div6.textContent === "O") ||
          (e.target.id === "5" && div1.textContent === "O") ||
          (e.target.id === "1" && div5.textContent === "O") ||
          (e.target.id === "8" && div7.textContent === "O") ||
          (e.target.id === "7" && div8.textContent === "O")
        ) {
          if (div9.textContent === "X" && random.length > 0) {
            //console.log("ocupado");
            if (
              d.getElementById(`${random[0]}`).textContent === "O" ||
              d.getElementById(`${random[0]}`).textContent === "X"
            ) {
              //si
              d.getElementById(`${random[1]}`).textContent = "X";
              random.splice(random.indexOf(parseInt(random[1], 10)), 1);
            } else {
              //no
              d.getElementById(`${random[0]}`).textContent = "X";
              random.splice(random.indexOf(parseInt(random[0], 10)), 1);
            }
          } else if (div9.textContent === "O") {
            //si div esta ocupado con un O y los tros dos ya estan marcados gano player
            console.log("ganaste");
          } else {
            div9.textContent = "X";
            random.splice(random.indexOf(parseInt(div9.id, 10)), 1);
          }
        } else if (
          (e.target.id === "4" && div1.textContent === "O") ||
          (e.target.id === "1" && div4.textContent === "O") ||
          (e.target.id === "3" && div5.textContent === "O") ||
          (e.target.id === "5" && div3.textContent === "O") ||
          (e.target.id === "8" && div9.textContent === "O") ||
          (e.target.id === "9" && div8.textContent === "O")
        ) {
          if (div7.textContent === "X" && random.length > 0) {
            //console.log("ocupado");
            if (
              d.getElementById(`${random[0]}`).textContent === "O" ||
              d.getElementById(`${random[0]}`).textContent === "X"
            ) {
              //si
              d.getElementById(`${random[1]}`).textContent = "X";
              random.splice(random.indexOf(parseInt(random[1], 10)), 1);
            } else {
              //no
              d.getElementById(`${random[0]}`).textContent = "X";
              random.splice(random.indexOf(parseInt(random[0], 10)), 1);
            }
          } else if (div7.textContent === "O") {
            //si div esta ocupado con un O y los tros dos ya estan marcados gano player
            console.log("ganaste");
          } else {
            div7.textContent = "X";
            random.splice(random.indexOf(parseInt(div7.id, 10)), 1);
          }
        } else if (
          (e.target.id === "5" && div8.textContent === "O") ||
          (e.target.id === "8" && div5.textContent === "O") ||
          (e.target.id === "3" && div1.textContent === "O") ||
          (e.target.id === "1" && div3.textContent === "O")
        ) {
          if (div2.textContent === "X" && random.length > 0) {
            //console.log("ocupado");
            if (
              d.getElementById(`${random[0]}`).textContent === "O" ||
              d.getElementById(`${random[0]}`).textContent === "X"
            ) {
              //si
              d.getElementById(`${random[1]}`).textContent = "X";
              random.splice(random.indexOf(parseInt(random[1], 10)), 1);
            } else {
              //no
              d.getElementById(`${random[0]}`).textContent = "X";
              random.splice(random.indexOf(parseInt(random[0], 10)), 1);
            }
          } else if (div2.textContent === "O") {
            //si div esta ocupado con un O y los tros dos ya estan marcados gano player
            console.log("ganaste");
          } else {
            div2.textContent = "X";
            random.splice(random.indexOf(parseInt(div2.id, 10)), 1);
          }
        } else if (
          (e.target.id === "2" && div5.textContent === "O") ||
          (e.target.id === "5" && div2.textContent === "O") ||
          (e.target.id === "7" && div9.textContent === "O") ||
          (e.target.id === "9" && div7.textContent === "O")
        ) {
          if (div8.textContent === "X" && random.length > 0) {
            //console.log("ocupado");
            if (
              d.getElementById(`${random[0]}`).textContent === "O" ||
              d.getElementById(`${random[0]}`).textContent === "X"
            ) {
              //si
              d.getElementById(`${random[1]}`).textContent = "X";
              random.splice(random.indexOf(parseInt(random[1], 10)), 1);
            } else {
              //no
              d.getElementById(`${random[0]}`).textContent = "X";
              random.splice(random.indexOf(parseInt(random[0], 10)), 1);
            }
          } else if (div8.textContent === "O") {
            //si div esta ocupado con un O y los tros dos ya estan marcados gano player
            console.log("ganaste");
          } else {
            div8.textContent = "X";
            random.splice(random.indexOf(parseInt(div8.id, 10)), 1);
          }
        } else if (
          (e.target.id === "5" && div6.textContent === "O") ||
          (e.target.id === "6" && div5.textContent === "O") ||
          (e.target.id === "7" && div1.textContent === "O") ||
          (e.target.id === "1" && div7.textContent === "O")
        ) {
          if (div4.textContent === "X" && random.length > 0) {
            //console.log("ocupado");
            if (
              d.getElementById(`${random[0]}`).textContent === "O" ||
              d.getElementById(`${random[0]}`).textContent === "X"
            ) {
              //si
              d.getElementById(`${random[1]}`).textContent = "X";
              random.splice(random.indexOf(parseInt(random[1], 10)), 1);
            } else {
              //no
              d.getElementById(`${random[0]}`).textContent = "X";
              random.splice(random.indexOf(parseInt(random[0], 10)), 1);
            }
          } else if (div4.textContent === "O") {
            //si div esta ocupado con un O y los tros dos ya estan marcados gano player
            console.log("ganaste");
          } else {
            div4.textContent = "X";
            random.splice(random.indexOf(parseInt(div4.id, 10)), 1);
          }
        } else if (
          (e.target.id === "4" && div5.textContent === "O") ||
          (e.target.id === "5" && div4.textContent === "O") ||
          (e.target.id === "3" && div9.textContent === "O") ||
          (e.target.id === "9" && div3.textContent === "O")
        ) {
          if (div6.textContent === "X" && random.length > 0) {
            //console.log("ocupado");
            if (
              d.getElementById(`${random[0]}`).textContent === "O" ||
              d.getElementById(`${random[0]}`).textContent === "X"
            ) {
              //si
              d.getElementById(`${random[1]}`).textContent = "X";
              random.splice(random.indexOf(parseInt(random[1], 10)), 1);
            } else {
              //no
              d.getElementById(`${random[0]}`).textContent = "X";
              random.splice(random.indexOf(parseInt(random[0], 10)), 1);
            }
          } else if (div6.textContent === "O") {
            //si div esta ocupado con un O y los tros dos ya estan marcados gano player
            console.log("ganaste");
          } else {
            div6.textContent = "X";
            random.splice(random.indexOf(parseInt(div6.id, 10)), 1);
          }
        } else if (
          (e.target.id === "2" && div8.textContent === "O") ||
          (e.target.id === "8" && div2.textContent === "O") ||
          (e.target.id === "1" && div9.textContent === "O") ||
          (e.target.id === "9" && div1.textContent === "O") ||
          (e.target.id === "7" && div3.textContent === "O") ||
          (e.target.id === "3" && div7.textContent === "O") ||
          (e.target.id === "4" && div6.textContent === "O") ||
          (e.target.id === "6" && div4.textContent === "O")
        ) {
          if (div5.textContent === "X" && random.length > 0) {
            //console.log("ocupado");
            if (
              d.getElementById(`${random[0]}`).textContent === "O" ||
              d.getElementById(`${random[0]}`).textContent === "X"
            ) {
              //si
              d.getElementById(`${random[1]}`).textContent = "X";
              random.splice(random.indexOf(parseInt(random[1], 10)), 1);
            } else {
              //no
              d.getElementById(`${random[0]}`).textContent = "X";
              random.splice(random.indexOf(parseInt(random[0], 10)), 1);
            }
          } else if (div5.textContent === "O") {
            //si div esta ocupado con un O y los tros dos ya estan marcados gano player
            console.log("ganaste");
          } else {
            div5.textContent = "X";
            random.splice(random.indexOf(parseInt(div5.id, 10)), 1);
          }
        } else {
          d.getElementById(`${random[0]}`).textContent = "X";
          random.splice(random.indexOf(parseInt(random[0], 10)), 1);
        }

        if (
          div1.textContent === "O" &&
          div5.textContent === "O" &&
          div9.textContent === "O"
        ) {
          currentGame++;
          console.log(currentGame);
          countPlayer++;
          div1.classList.add("grow-green");
          div5.classList.add("grow-green");
          div9.classList.add("grow-green");
          setTimeout(() => {
            d.querySelectorAll(".div").forEach((el) => {
              el.textContent = "";
              el.classList.remove("grow-green");
            });
            render();

            d.getElementById("score-player").textContent = `${countPlayer}`;
          }, 1000);
        } else if (
          div1.textContent === "O" &&
          div2.textContent === "O" &&
          div3.textContent === "O"
        ) {
          currentGame++;
          console.log(currentGame);
          countPlayer++;
          div1.classList.add("grow-green");
          div2.classList.add("grow-green");
          div3.classList.add("grow-green");
          setTimeout(() => {
            d.querySelectorAll(".div").forEach((el) => {
              el.textContent = "";
              el.classList.remove("grow-green");
            });
            render();

            d.getElementById("score-player").textContent = `${countPlayer}`;
          }, 1000);
        } else if (
          div1.textContent === "O" &&
          div4.textContent === "O" &&
          div7.textContent === "O"
        ) {
          currentGame++;
          console.log(currentGame);
          countPlayer++;
          div1.classList.add("grow-green");
          div4.classList.add("grow-green");
          div7.classList.add("grow-green");
          setTimeout(() => {
            d.querySelectorAll(".div").forEach((el) => {
              el.textContent = "";
              el.classList.remove("grow-green");
            });
            render();

            d.getElementById("score-player").textContent = `${countPlayer}`;
          }, 1000);
        } else if (
          div2.textContent === "O" &&
          div5.textContent === "O" &&
          div8.textContent === "O"
        ) {
          currentGame++;
          console.log(currentGame);
          countPlayer++;
          div2.classList.add("grow-green");
          div5.classList.add("grow-green");
          div8.classList.add("grow-green");
          setTimeout(() => {
            d.querySelectorAll(".div").forEach((el) => {
              el.textContent = "";
              el.classList.remove("grow-green");
            });
            render();

            d.getElementById("score-player").textContent = `${countPlayer}`;
          }, 1000);
        } else if (
          div3.textContent === "O" &&
          div6.textContent === "O" &&
          div9.textContent === "O"
        ) {
          currentGame++;
          console.log(currentGame);
          countPlayer++;
          div3.classList.add("grow-green");
          div6.classList.add("grow-green");
          div9.classList.add("grow-green");
          setTimeout(() => {
            d.querySelectorAll(".div").forEach((el) => {
              el.textContent = "";
              el.classList.remove("grow-green");
            });
            render();

            d.getElementById("score-player").textContent = `${countPlayer}`;
          }, 1000);
        } else if (
          div3.textContent === "O" &&
          div5.textContent === "O" &&
          div7.textContent === "O"
        ) {
          currentGame++;
          console.log(currentGame);
          countPlayer++;
          div3.classList.add("grow-green");
          div5.classList.add("grow-green");
          div7.classList.add("grow-green");
          setTimeout(() => {
            d.querySelectorAll(".div").forEach((el) => {
              el.textContent = "";
              el.classList.remove("grow-green");
            });
            render();

            d.getElementById("score-player").textContent = `${countPlayer}`;
          }, 1000);
        } else if (
          div9.textContent === "O" &&
          div8.textContent === "O" &&
          div7.textContent === "O"
        ) {
          currentGame++;
          console.log(currentGame);
          countPlayer++;
          div9.classList.add("grow-green");
          div8.classList.add("grow-green");
          div7.classList.add("grow-green");
          setTimeout(() => {
            d.querySelectorAll(".div").forEach((el) => {
              el.textContent = "";
              el.classList.remove("grow-green");
            });
            render();

            d.getElementById("score-player").textContent = `${countPlayer}`;
          }, 1000);
        } else if (
          div4.textContent === "O" &&
          div5.textContent === "O" &&
          div6.textContent === "O"
        ) {
          currentGame++;
          console.log(currentGame);
          countPlayer++;
          div4.classList.add("grow-green");
          div5.classList.add("grow-green");
          div6.classList.add("grow-green");
          setTimeout(() => {
            d.querySelectorAll(".div").forEach((el) => {
              el.textContent = "";
              el.classList.remove("grow-green");
            });
            render();

            d.getElementById("score-player").textContent = `${countPlayer}`;
          }, 1000);
        } else if (
          div1.textContent === "X" &&
          div5.textContent === "X" &&
          div9.textContent === "X"
        ) {
          div1.classList.add("grow-red");
          div5.classList.add("grow-red");
          div9.classList.add("grow-red");
          console.log("perdiste");
          currentGame++;
          console.log(currentGame);
          countPc++;
          setTimeout(() => {
            d.querySelectorAll(".div").forEach((el) => {
              el.textContent = "";
              el.classList.remove("grow-red");
            });
            render();

            d.getElementById("score-pc").textContent = `${countPc}`;
          }, 1000);
        } else if (
          div1.textContent === "X" &&
          div2.textContent === "X" &&
          div3.textContent === "X"
        ) {
          console.log("perdiste");
          currentGame++;
          div1.classList.add("grow-red");
          div2.classList.add("grow-red");
          div3.classList.add("grow-red");
          console.log(currentGame);
          countPc++;
          setTimeout(() => {
            d.querySelectorAll(".div").forEach((el) => {
              el.textContent = "";
              el.classList.remove("grow-red");
            });
            render();

            d.getElementById("score-pc").textContent = `${countPc}`;
          }, 1000);
        } else if (
          div1.textContent === "X" &&
          div4.textContent === "X" &&
          div7.textContent === "X"
        ) {
          console.log("perdiste");
          currentGame++;
          div1.classList.add("grow-red");
          div4.classList.add("grow-red");
          div7.classList.add("grow-red");
          console.log(currentGame);
          countPc++;
          setTimeout(() => {
            d.querySelectorAll(".div").forEach((el) => {
              el.textContent = "";
              el.classList.remove("grow-red");
            });
            render();

            d.getElementById("score-pc").textContent = `${countPc}`;
          }, 1000);
        } else if (
          div2.textContent === "X" &&
          div5.textContent === "X" &&
          div8.textContent === "X"
        ) {
          console.log("perdiste");
          currentGame++;
          div2.classList.add("grow-red");
          div5.classList.add("grow-red");
          div8.classList.add("grow-red");
          console.log(currentGame);
          countPc++;
          setTimeout(() => {
            d.querySelectorAll(".div").forEach((el) => {
              el.textContent = "";
              el.classList.remove("grow-red");
            });
            render();

            d.getElementById("score-pc").textContent = `${countPc}`;
          }, 1000);
        } else if (
          div3.textContent === "X" &&
          div6.textContent === "X" &&
          div9.textContent === "X"
        ) {
          console.log("perdiste");
          currentGame++;
          div3.classList.add("grow-red");
          div6.classList.add("grow-red");
          div9.classList.add("grow-red");
          console.log(currentGame);
          countPc++;
          setTimeout(() => {
            d.querySelectorAll(".div").forEach((el) => {
              el.textContent = "";
              el.classList.remove("grow-red");
            });
            render();

            d.getElementById("score-pc").textContent = `${countPc}`;
          }, 1000);
        } else if (
          div3.textContent === "X" &&
          div5.textContent === "X" &&
          div7.textContent === "X"
        ) {
          console.log("perdiste");
          currentGame++;
          div3.classList.add("grow-red");
          div5.classList.add("grow-red");
          div7.classList.add("grow-red");
          console.log(currentGame);
          countPc++;
          setTimeout(() => {
            d.querySelectorAll(".div").forEach((el) => {
              el.textContent = "";
              el.classList.remove("grow-red");
            });
            render();

            d.getElementById("score-pc").textContent = `${countPc}`;
          }, 1000);
        } else if (
          div9.textContent === "X" &&
          div8.textContent === "X" &&
          div7.textContent === "X"
        ) {
          console.log("perdiste");
          currentGame++;
          div9.classList.add("grow-red");
          div8.classList.add("grow-red");
          div7.classList.add("grow-red");
          console.log(currentGame);
          countPc++;
          setTimeout(() => {
            d.querySelectorAll(".div").forEach((el) => {
              el.textContent = "";
              el.classList.remove("grow-red");
            });
            render();

            d.getElementById("score-pc").textContent = `${countPc}`;
          }, 1000);
        } else if (
          div4.textContent === "X" &&
          div5.textContent === "X" &&
          div6.textContent === "X"
        ) {
          console.log("perdiste");
          currentGame++;
          div4.classList.add("grow-red");
          div5.classList.add("grow-red");
          div6.classList.add("grow-red");
          console.log(currentGame);
          countPc++;
          setTimeout(() => {
            d.querySelectorAll(".div").forEach((el) => {
              el.textContent = "";
              el.classList.remove("grow-red");
            });
            render();

            d.getElementById("score-pc").textContent = `${countPc}`;
          }, 1000);
        } else if (
          //DETECTING TIE

          click === 5 &&
          (!(
            div1.textContent === "X" &&
            div5.textContent === "X" &&
            div9.textContent === "X"
          ) ||
            !(
              div1.textContent === "X" &&
              div2.textContent === "X" &&
              div3.textContent === "X"
            ) ||
            !(
              div1.textContent === "X" &&
              div4.textContent === "X" &&
              div7.textContent === "X"
            ) ||
            !(
              div2.textContent === "X" &&
              div5.textContent === "X" &&
              div8.textContent === "X"
            ) ||
            !(
              div3.textContent === "X" &&
              div6.textContent === "X" &&
              div9.textContent === "X"
            ) ||
            !(
              div3.textContent === "X" &&
              div5.textContent === "X" &&
              div7.textContent === "X"
            ) ||
            !(
              div9.textContent === "X" &&
              div8.textContent === "X" &&
              div7.textContent === "X"
            ) ||
            !(
              div4.textContent === "X" &&
              div5.textContent === "X" &&
              div6.textContent === "X"
            )) &&
          (!(
            div1.textContent === "X" &&
            div5.textContent === "X" &&
            div9.textContent === "X"
          ) ||
            !(
              div1.textContent === "X" &&
              div2.textContent === "X" &&
              div3.textContent === "X"
            ) ||
            !(
              div1.textContent === "X" &&
              div4.textContent === "X" &&
              div7.textContent === "X"
            ) ||
            !(
              div2.textContent === "X" &&
              div5.textContent === "X" &&
              div8.textContent === "X"
            ) ||
            !(
              div3.textContent === "X" &&
              div6.textContent === "X" &&
              div9.textContent === "X"
            ) ||
            !(
              div3.textContent === "X" &&
              div5.textContent === "X" &&
              div7.textContent === "X"
            ) ||
            !(
              div9.textContent === "X" &&
              div8.textContent === "X" &&
              div7.textContent === "X"
            ) ||
            !(
              div4.textContent === "X" &&
              div5.textContent === "X" &&
              div6.textContent === "X"
            ))
        ) {
          //DETECTING TIE
          console.log("Draw");
          setTimeout(() => {
            tieMessage();
          }, 500);
          setTimeout(() => {
            d.querySelectorAll(".div").forEach((el) => (el.textContent = ""));
            render();
          }, 1000);
        }
      }
    }
    if (currentGame === gameCount) {
      console.log("acabó la partida");
      setTimeout(() => {
        whoWin();
      }, 1000);
    }
  });
}

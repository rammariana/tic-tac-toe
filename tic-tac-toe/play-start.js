import { paintTicTacToe } from "./tic-tac-toe.js";

const d = document;
export let gameCount = 0;

export function playStart() {
  const $btnThree = d.getElementById("three"),
    $btnFive = d.getElementById("five"),
    $btnNine = d.getElementById("nine");

  d.addEventListener("click", (e) => {
    if (e.target === $btnThree) {
      gameCount = 3;
      paintTicTacToe();
    }

    if (e.target === $btnFive) {
      gameCount = 5;
      paintTicTacToe();
    }

    if (e.target === $btnNine) {
      gameCount = 9;
      paintTicTacToe();
    }
  });
}

/**
 *
 * Para exportar una variable y obtener su valor modificado dentro de la función, es posible si:
 *
 * - declaro la variable fuera de la función a exportar
 * RAZÓN?--- NO se puede poner un export dentro de la función que ya tiene export
 * -llamo la variable a través de import desde el archivo donde la voy a usar
 * IMPORTANTE: colocar la función que va a correr debajo de la variable  exportada
 * sino, aparecerá con su valor inicial y no con el valor modificado
 */

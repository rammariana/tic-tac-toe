const d = document;

export function tieMessage() {
  let $tiePopUp = d.createElement("div"),
    $message = d.createElement("p"),
    $container = d.querySelector(".container");

  $tiePopUp.classList.add("tie-pop-up");
  $message.textContent = "Draw";

  $tiePopUp.appendChild($message);
  $container.appendChild($tiePopUp);

  setTimeout(() => {
    $container.removeChild($tiePopUp);
  }, 1500);
}

const d = document;

export function start() {
  const $container = d.querySelector(".container");

  let $nav = d.createElement("nav"),
    $article = d.createElement("article"),
    $footer = d.createElement("footer"),
    $copyright = d.createElement("div");

  $nav.innerHTML = `<section class="title">
  <h1 class="one">Tic</h1> <h1 class="middle-dash">-</h1>
  <h1 class="two">Tac</h1> <h1 class="middle-dash">-</h1> 
  <h1 class="three">Toe</h1>
  </section>
  <p>Player vs PC</p>`;
  $article.innerHTML = `<h3>Select Game Count</h3>
    <section class="select-count">
    <button id="three">3</button>
    <button id="five">5</button>
    <button id="nine">9</button>
    </section>
`;
  $footer.innerHTML = `    <img class="on" src="assets/volumen.png">
  
`;
  $copyright.innerHTML = `<p class="copyright">Programado por Mariana Ramírez</p>
  `;
  $article.classList.add("article");
  $article.id = "article";

  $container.appendChild($nav);
  $container.appendChild($article);
  $container.appendChild($footer);
  $container.insertAdjacentElement("afterend", $copyright);
}

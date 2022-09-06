const plays = document.querySelectorAll(".svgArea i");
const nivelArea = document.querySelector(".nivelArea"),
  backInicio = document.querySelector("#backInicio"),
  tema = document.querySelector(".tema");
plays.forEach((play) => {
  play.addEventListener("click", (p) => {
    nivelArea.classList.add("showNivel");
    tema.innerText = p.path[2].children[0].innerText;
  });
});

backInicio.addEventListener("click", () => {
  nivelArea.classList.remove("showNivel");
});

const niveis = document.querySelectorAll(".niveis li"),
  perguntasArea = document.querySelector(".perguntasArea"),
  backNiveis = document.querySelector("#backNiveis");

niveis.forEach((n) => {
  n.addEventListener("click", (e) => {
    console.log(e.path[1].innerText);
    perguntasArea.classList.add("showNivel");
  });
});

backNiveis.addEventListener("click", () => {
   perguntasArea.classList.remove("showNivel");

});

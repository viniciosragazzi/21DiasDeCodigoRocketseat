
const infos ={
tema:'', nivel:''
}

const plays = document.querySelectorAll(".svgArea i");
const nivelArea = document.querySelector(".nivelArea"),
  backInicio = document.querySelector("#backInicio"),
  tema = document.querySelector(".tema");
plays.forEach((play) => {
  play.addEventListener("click", (p) => {
    nivelArea.classList.add("showNivel");
    infos.tema =  p.path[2].children[0].innerText;
    tema.innerText = infos.tema
   

  });
});

backInicio.addEventListener("click", () => {
  nivelArea.classList.remove("showNivel");
});

const niveis = document.querySelectorAll(".niveis li"),
  perguntasArea = document.querySelector(".perguntasArea"),
  backNiveis = document.querySelector("#backNiveis"),
  app = document.querySelector(".app"),
  nivelQuestion =  document.querySelector(".nivelQuestion");

niveis.forEach((n) => {
  n.addEventListener("click", (e) => {
    
    app.classList.add("modeQuestion");

    perguntasArea.classList.add("showNivel");
    infos.nivel = e.target.innerText
    nivelQuestion.innerText = infos.nivel 
console.log(infos);
  });
});

backNiveis.addEventListener("click", () => {

   perguntasArea.classList.remove("showNivel");
   app.classList.remove("modeQuestion");
});

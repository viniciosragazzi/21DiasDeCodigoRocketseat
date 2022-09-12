const infos = {
  tema: "",
  nivel: "",
  quantQuestoes:'',
  quantAcertadas:0,
  quantErradas:0,
  perguntaAcertadas:[

  ],
  perguntaErradas:[
    
  ]
};

// Reseta algumas informações
const reset = () => {
  respostasArea.innerHTML = "";
  perguntaAtual = 0;
  enviarRespBtn.style.display = "flex";
  proximaPergBtn.style.display = "none";
  verResultado.style.display = "none";

};

// Dados das questões
const dados = {
  html: [
    {
      basico: [
        {
          questions: [
            {
              number: 1,
              question: "Eighteen thousandths, written as a decimal, is:",
              answers: ["0.0018", "0.018", "0.18", "0.18"],
              correct_answer: 1,
            },
            {
              number: 2,
              question:
                "The next number in the sequence <b>1, 3, 6, 10, </b> is:",
              answers: ["12", "13", "14", "15"],
              correct_answer: 4,
            },
            {
              number: 3,
              question:
                "The next number in the sequence <b>1, 3, 6, 10, </b> is:",
              answers: ["11", "05", "14", "12"],
              correct_answer: 2,
            },
            {
              number: 4,
              question:
                "The next number in the sequence <b>1, 3, 6, 10, </b> is:",
              answers: ["06", "07", "64", "25"],
              correct_answer: 1,
            },
            {
              number: 5,
              question:
                "The next number in the sequence <b>1, 3, 6, 10, </b> is:",
              answers: ["21", "31", "41", "75"],
              correct_answer: 2,
            },
          ],
        },
      ],
      mediano: [
        {
          questions: [
            {
              number: 1,
              question: "Eighteen thousandths, written as a decimal, is:",
              answers: ["0.0018", "0.018", "0.18", "0.18"],
              correct_answer: 1,
            },
            {
              number: 2,
              question:
                "The next number in the sequence <b>1, 3, 6, 10, </b> is:",
              answers: ["12", "13", "14", "15"],
              correct_answer: 4,
            },
          ],
        },
      ],
      avançado: [
        {
          questions: [
            {
              number: 1,
              question: "Eighteen thousandths, written as a decimal, is:",
              answers: ["0.0018", "0.018", "0.18", "0.18"],
              correct_answer: 1,
            },
            {
              number: 2,
              question:
                "The next number in the sequence <b>1, 3, 6, 10, </b> is:",
              answers: ["12", "13", "14", "15"],
              correct_answer: 4,
            },
          ],
        },
      ],
    },
  ],
  css: [
    {
      basico: [
        {
          questions: [
            {
              number: 1,
              question: "Eighteen thousandths, written as a decimal, is:",
              answers: ["0.0018", "0.018", "0.18", "0.18"],
              correct_answer: 1,
            },
            {
              number: 2,
              question:
                "The next number in the sequence <b>1, 3, 6, 10, </b> is:",
              answers: ["12", "13", "14", "15"],
              correct_answer: 4,
            },
          ],
        },
      ],
      mediano: [
        {
          questions: [
            {
              number: 1,
              question: "Eighteen thousandths, written as a decimal, is:",
              answers: ["0.0018", "0.018", "0.18", "0.18"],
              correct_answer: 1,
            },
            {
              number: 2,
              question:
                "The next number in the sequence <b>1, 3, 6, 10, </b> is:",
              answers: ["12", "13", "14", "15"],
              correct_answer: 4,
            },
          ],
        },
      ],
      avançado: [
        {
          questions: [
            {
              number: 1,
              question: "Eighteen thousandths, written as a decimal, is:",
              answers: ["0.0018", "0.018", "0.18", "0.18"],
              correct_answer: 1,
            },
            {
              number: 2,
              question:
                "The next number in the sequence <b>1, 3, 6, 10, </b> is:",
              answers: ["12", "13", "14", "15"],
              correct_answer: 4,
            },
          ],
        },
      ],
    },
  ],
  js: [
    {
      basico: [
        {
          questions: [
            {
              number: 1,
              question: "Eighteen thousandths, written as a decimal, is:",
              answers: ["0.0018", "0.018", "0.18", "0.18"],
              correct_answer: 1,
            },
            {
              number: 2,
              question:
                "The next number in the sequence <b>1, 3, 6, 10, </b> is:",
              answers: ["12", "13", "14", "15"],
              correct_answer: 4,
            },
          ],
        },
      ],
      mediano: [
        {
          questions: [
            {
              number: 1,
              question: "Eighteen thousandths, written as a decimal, is:",
              answers: ["0.0018", "0.018", "0.18", "0.18"],
              correct_answer: 1,
            },
            {
              number: 2,
              question:
                "The next number in the sequence <b>1, 3, 6, 10, </b> is:",
              answers: ["12", "13", "14", "15"],
              correct_answer: 4,
            },
          ],
        },
      ],
      avançado: [
        {
          questions: [
            {
              number: 1,
              question: "Eighteen thousandths, written as a decimal, is:",
              answers: ["0.0018", "0.018", "0.18", "0.18"],
              correct_answer: 1,
            },
            {
              number: 2,
              question:
                "The next number in the sequence <b>1, 3, 6, 10, </b> is:",
              answers: ["12", "13", "14", "15"],
              correct_answer: 4,
            },
          ],
        },
      ],
    },
  ],
  php: [
    {
      basico: [
        {
          questions: [
            {
              number: 1,
              question: "Eighteen thousandths, written as a decimal, is:",
              answers: ["0.0018", "0.018", "0.18", "0.18"],
              correct_answer: 1,
            },
            {
              number: 2,
              question:
                "The next number in the sequence <b>1, 3, 6, 10, </b> is:",
              answers: ["12", "13", "14", "15"],
              correct_answer: 4,
            },
          ],
        },
      ],
      mediano: [
        {
          questions: [
            {
              number: 1,
              question: "Eighteen thousandths, written as a decimal, is:",
              answers: ["0.0018", "0.018", "0.18", "0.18"],
              correct_answer: 1,
            },
            {
              number: 2,
              question:
                "The next number in the sequence <b>1, 3, 6, 10, </b> is:",
              answers: ["12", "13", "14", "15"],
              correct_answer: 4,
            },
          ],
        },
      ],
      avançado: [
        {
          questions: [
            {
              number: 1,
              question: "Eighteen thousandths, written as a decimal, is:",
              answers: ["0.0018", "0.018", "0.18", "0.18"],
              correct_answer: 1,
            },
            {
              number: 2,
              question:
                "The next number in the sequence <b>1, 3, 6, 10, </b> is:",
              answers: ["12", "13", "14", "15"],
              correct_answer: 4,
            },
          ],
        },
      ],
    },
  ],
};


// Area que da função ao botãoplay na tela inicial
const plays = document.querySelectorAll(".svgArea i"),
  nivelArea = document.querySelector(".nivelArea"),
  tema = document.querySelector(".tema");
plays.forEach((play) => {
  play.addEventListener("click", (p) => {
    nivelArea.classList.add("showNivel");
    infos.tema = p.path[2].children[0].innerText;
    tema.innerText = infos.tema;
  });
});

// Da a função ao botão de voltar no topo da pagina
const backInicio = document.querySelector("#backInicio");
backInicio.addEventListener("click", () => {
  nivelArea.classList.remove("showNivel");
});

const niveis = document.querySelectorAll(".niveis li"),
  perguntasArea = document.querySelector(".perguntasArea"),
  backNiveis = document.querySelector("#backNiveis"),
  app = document.querySelector(".app"),
  nivelQuestion = document.querySelector(".nivelQuestion"),
  spinner = document.querySelector(".spinnerArea"),
  content = document.querySelector(".content");

  // Configura a tela de seleção de niveis
niveis.forEach((n) => {
  n.addEventListener("click", (e) => {
    app.classList.add("modeQuestion"); // Avisa a pagina que esta no modo de seleção de questões

    perguntasArea.classList.add("showNivel");
    infos.nivel = e.target.innerText ? e.target.innerText : e.path[1].innerText;
    nivelQuestion.innerText = infos.nivel;
    renderQuestions(infos.tema.toLowerCase(), infos.nivel.toLowerCase());

    setTimeout(() => {
      spinner.style.display = "none";
      content.style.display = "grid";
    }, 1200);
  });
});

const perguntaTxt = document.querySelector(".perguntaTxt");
const respostasArea = document.querySelector(".respostas .form");
const quantAtual = document.querySelector(".barQuantQuestion .top .quantAtual");
const quantTotal = document.querySelector(".barQuantQuestion .top .quantTotal");
const barProgress = document.querySelector(".barQuantQuestion .bar .progress");
const perguntaAtualTxt = document.querySelector(".perguntaAtual span");


// Configura o botão de voltar para o modo de seleção de niveis
backNiveis.addEventListener("click", () => {
  perguntasArea.classList.remove("showNivel");
  app.classList.remove("modeQuestion");
  reset();
  setTimeout(() => {
    spinner.style.display = "flex";
    content.style.display = "none";
  }, 500);
});





let perguntaAtual = 0;

let numeroDePerguntas = "";
let pergunta = "";
let respostas = "";
let respostaCorreta = "";

const renderQuestions = (theme, level) => {

  numeroDePerguntas = dados[theme][0][level][0].questions.length;
  pergunta = dados[theme][0][level][0].questions[perguntaAtual].question;
  respostas = dados[theme][0][level][0].questions[perguntaAtual].answers;
  respostaCorreta =
    dados[theme][0][level][0].questions[perguntaAtual].correct_answer;
  // Renderizando as perguntas e as respostas na tela
  perguntaTxt.innerHTML = pergunta;

  let lb;
  respostas.forEach((resposta, index) => {
    lb = document.createElement("label");
    lb.classList.add("inputRes");
    lb.setAttribute("for", `res${index}`);
    lb.innerHTML = ` 
    <input type="radio"  name="res" id="res${index}" value="${resposta}" />
    <span class="resTxt"
      >${resposta}</span
    >
`;

    respostasArea.appendChild(lb);
  });



  // Renderizando a quantidade de perguntas

  quantAtual.innerText = perguntaAtual + 1;
  quantTotal.innerText = numeroDePerguntas;
  infos.quantQuestoes = numeroDePerguntas
  barProgress.style.width = `${
    ((perguntaAtual + 1) / numeroDePerguntas) * 100
  }%`;

  perguntaAtualTxt.innerHTML = perguntaAtual + 1;
};



const enviarRespBtn = document.querySelector(".enviarResp");
const proximaPergBtn = document.querySelector(".proximaPergunta");
const verResultado = document.querySelector(".verResultado");


let inputsRespostas;
let labelRespostas;

enviarRespBtn.addEventListener("click", () => {

  labelRespostas = document.querySelectorAll(".inputRes");
  inputsRespostas = document.querySelectorAll(".inputRes input");


  // Verifica se 
  let checado = false
  inputsRespostas.forEach((input, i) => {
    if (input.checked) {
      checado = true
      if (respostaCorreta === i + 1) {
        labelRespostas[i].classList.add("respCorreta");
        infos.quantAcertadas =  infos.quantAcertadas + 1
        infos.perguntaAcertadas.push(perguntaAtual+1)
        console.log("certo");
      } else {
        labelRespostas[i].classList.add("respErrada");
        labelRespostas[respostaCorreta-1].classList.add("respCorreta");

        infos.quantErradas =  infos.quantErradas + 1
        infos.perguntaErradas.push(perguntaAtual+1)

        console.log("errado");
      }
    }
   
    if(checado){
      input.disabled  = true
    }
  });

  // Alterna os botão seguindo determinadas regras

  if(checado){
    if (perguntaAtual + 1 < numeroDePerguntas) {
      enviarRespBtn.style.display = "none";
      proximaPergBtn.style.display = "flex";
    }else{
      enviarRespBtn.style.display = "none";
      proximaPergBtn.style.display = "none";
      verResultado.style.display = "flex";
    }
  }else{
    alert('Selecione uma das opções')
  }
  
  


// Configura o botão para a proxima pergunta
  proximaPergBtn.addEventListener("click", () => {
    if (perguntaAtual + 1 < numeroDePerguntas) {
      enviarRespBtn.style.display = "flex";
      proximaPergBtn.style.display = "none";
      perguntaAtual++;
      respostasArea.innerHTML = "";
      renderQuestions(infos.tema.toLowerCase(), infos.nivel.toLowerCase());
    }
  });
});

verResultado.addEventListener('click', ()=>{
  console.log(infos);
})

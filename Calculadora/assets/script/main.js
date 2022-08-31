const conta = document.querySelector(".conta span"),
  result = document.querySelector(".result span"),
  nums = document.querySelectorAll(".num"),
  btnEqual = document.querySelector("#igual"),
  btnDel = document.querySelector("#del"),
  btnAc = document.querySelector("#ac");

let contaText = "";
let contaResult = 0;
nums.forEach((num) => {
  num.addEventListener("click", (e) => {
    contaText += e.target.innerText;
    conta.innerHTML = contaText;
  });
});

btnEqual.addEventListener("click", () => {
  let r = eval(contaText);
  console.log(r);
  if (contaText.length > 2 && r) {
    result.innerHTML = r;
  } else {
    result.innerHTML = "Conta Invalida";
  }
});

btnDel.addEventListener("click", () => {
  const contaText2 = contaText.substring(0, contaText.length - 1);
  contaText = contaText2;
  conta.innerHTML = contaText;
  if (contaText.length == 0) {
    conta.innerHTML = 0;
    result.innerHTML = 0
  }
});


btnAc.addEventListener("click", () => {
    contaText = ''
    if (contaText == 0) {
        conta.innerHTML = 0;
        result.innerHTML = 0
      }
})
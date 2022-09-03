let liberado = false;
const app = document.querySelector(".app");
const redirectPage = () => {

  setTimeout(() => {
    app.classList.add("login");
    console.log(liberado);
  }, 4500);
};

redirectPage();

const btnSubmit = document.querySelector(".btnSubmit"),
  inputUser = document.querySelector("input#user"),
  inputPassword = document.querySelector("input#password"),
  areaUser = document.querySelector(".areaUser"),
  areaPassword = document.querySelector(".areaPassword");

btnSubmit.addEventListener("click", () => {
  if (!inputUser.value) {
    areaUser.classList.add("err");
  } else {
    areaUser.classList.remove("err");
  }

  if (!inputPassword.value) {
    areaPassword.classList.add("err");
  } else {
    areaPassword.classList.remove("err");
  }
});

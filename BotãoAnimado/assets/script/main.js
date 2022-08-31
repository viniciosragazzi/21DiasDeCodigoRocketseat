const btnInput = document.querySelector("#btnInput");
const textH1 = document.querySelector(" .text h1");
document.addEventListener("click", () => {
  if (btnInput.checked) {
    textH1.style.backgroundImage =
      "url('https://giffiles.alphacoders.com/155/15523.gif')";
  } else {
    textH1.style.backgroundImage =
      "url('https://i.pinimg.com/originals/c6/ac/bf/c6acbf05e9eaa1658ab5143e653dc4aa.gif')";
  }
});

const html = document.querySelector("html"),
  checkbox = document.querySelector("input[name=switchModeInput");

const getStyle = (element, style) =>
  window.getComputedStyle(element).getPropertyValue(style);

const initialColors = {
  bg: getStyle(html, "--bg"),
  white: getStyle(html, "--white"),
  bgCard: getStyle(html, "--bgCard"),
  switchBG: getStyle(html, "--switchBG"),
};

const darkMode = {
  bg: "#E5E5E5",
  white: "#04001b",
  bgCard: "#F9F9F9",
  switchBG: "#E9E9E9",
};

const transformKey = (key) => "--" + key;

const changeColors = (colors) => {
  Object.keys(colors).map((key) =>
    html.style.setProperty(transformKey(key), colors[key])
  );
};

checkbox.addEventListener("change", ({ target }) => {
  target.checked ? changeColors(darkMode) : changeColors(initialColors);
});

const btnStart = document.querySelector("button.start"),
  btnPause = document.querySelector("button.pause"),
  btnReset = document.querySelector("button.reset"),
  horaTxt = document.querySelector("span.hora"),
  minutoTxt = document.querySelector("span.minute"),
  segundoTxt = document.querySelector("span.segundo");

let seg = 0;
let min = 0;
let hour = 0;

let interval;

let startDisable = false;
btnStart.addEventListener("click", () => {
    setTimeout(()=>{
        disable()
    },500)
    if(!startDisable){
        interval = setInterval(() => {
            seg++;
           
            if (seg > 59) {
              seg = 0;
              min++;
            }
            if (min > 59) {
              min = 0;
              hour++;
            }
            if (hour > 23) {
              hour = 0;
            }
        
            segundoTxt.innerText = seg < 10 ? "0" + seg : seg;
            minutoTxt.innerText = min < 10 ? "0" + min : min;
            horaTxt.innerText = hour < 10 ? "0" + hour : hour;
          }, [1000]);
    }

});

const disable = (el) =>[
    startDisable = true,
    btnStart.classList.add('disabled')
]
btnPause.addEventListener("click", () => {
  clearInterval(interval);
  startDisable = false
  btnStart.classList.remove('disabled')
});

btnReset.addEventListener("click", () => {
  seg = 0;
  min = 0;
  hour = 0;
  segundoTxt.innerText = "0" + seg;
  minutoTxt.innerText = "0" + min;
  horaTxt.innerText = "0" + hour;
  clearInterval(interval);
  startDisable = false
  btnStart.classList.remove('disabled')
});

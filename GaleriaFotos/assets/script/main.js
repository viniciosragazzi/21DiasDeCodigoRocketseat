var $simpleCarousel = document.querySelector(".js-carousel");
let posicao = 0;
const carouselItens = document.querySelectorAll(".carousel");

const glide = new Glider($simpleCarousel, {
  slidesToShow: 5,
  slidesToScroll: 1,
  draggable: true,
  dots: ".js-carousel--simple-dots",
  arrows: {
    prev: ".prev",
    next: ".next",
  },
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
  ],
});

const imgG = document.querySelector(".foto .img");
let link = carouselItens[posicao].children[0].currentSrc;
imgG.setAttribute("src", link);
carouselItens[0].classList.add("imgActive");

carouselItens.forEach((el, index) => {
  el.addEventListener("click", () => {
    posicao = index;
    link = carouselItens[posicao].children[0].currentSrc;
    imgG.setAttribute("src", link);
    activeDestaque(carouselItens[posicao]);
  });
});
const arrowNext = document.querySelector(".arrow.next");
const arrowPrev = document.querySelector(".arrow.prev");

arrowNext.addEventListener("click", () => {
  if (posicao < carouselItens.length - 1) {
    posicao++;
    link = carouselItens[posicao].children[0].currentSrc;
    imgG.setAttribute("src", link);
    console.log(posicao, carouselItens.length - 1);
  } 
  activeDestaque(carouselItens[posicao]);
  
});
arrowPrev.addEventListener("click", () => {
  if (posicao > 0 && posicao < carouselItens.length) {
    posicao--;
    link = carouselItens[posicao].children[0].currentSrc;
    imgG.setAttribute("src", link);
    console.log(posicao, carouselItens.length - 1);
  }
  activeDestaque(carouselItens[posicao]);
});

const activeDestaque = (item) => {
  carouselItens.forEach((el, index) => {
    el.classList.remove("imgActive");
  });
  item.classList.add("imgActive");
};
glide.mount()
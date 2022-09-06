const plays = document.querySelectorAll('.svgArea i')
const nivelArea = document.querySelector('.nivelArea'),
backInicio = document.querySelector('#backInicio'),
tema = document.querySelector('.tema')
plays.forEach((play)=>{
    play.addEventListener('click', (p)=>{
        nivelArea.classList.add('showNivel')
        tema.innerText = p.path[2].children[0].innerText
    })
})

backInicio.addEventListener('click', ()=>{
    nivelArea.classList.remove('showNivel')

})
let fondo = document.querySelector('.fondo')

let llanta1 = document.querySelector('.llanta1')
let llanta2 = document.querySelector('.llanta2')
let luz = document.querySelector('.luz')

fondo.addEventListener('click', movimiento)

function movimiento(){
    fondo.classList.add('fondoAnimado')
    llanta1.classList.add('llantaAnimada')
    llanta2.classList.add('llantaAnimada')
    luz.classList.add('luzAnimada')
    
}
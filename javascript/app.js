const imagen = document.getElementById("imagen"); // llamo los elementos de html por el dom 
const sonido = document.querySelector(".sonido");
const instru = document.querySelector(".instru");
const inst = document.getElementById("inst");

document.addEventListener("keydown", tecla);  // evento de las teclas 

// la funcion que permite el sinido y la imagen
function tecla(evento) {
    evento.preventDefault();
    if (evento.keyCode == 32) {
        sonido.innerHTML=`<audio src="sounds/bombo.mp3" autoplay></audio>`;
        imagen.src ="img/base-bombo.png";
    }else if (evento.keyCode == 70) {
        sonido.innerHTML=`<audio src="sounds/caja.mp3" autoplay></audio>`;
        imagen.src ="img/base-caja.png";
    } else if (evento.keyCode == 68) {
        sonido.innerHTML=`<audio src="sounds/hit-hat.mp3" autoplay></audio>`;
        imagen.src ="img/base-hit-hat.png";
    }else if (evento.keyCode == 83) {
        sonido.innerHTML=`<audio src="sounds/platillo-crash-izquierdo.mp3" autoplay></audio>`;
        imagen.src ="img/base-platillo-izquierdo.png";
    }else if(evento.keyCode == 75){
        sonido.innerHTML=`<audio src="sounds/platillo-ride.mp3" autoplay></audio>`;
        imagen.src ="img/base-platillo-ride.png";
    }else if(evento.keyCode == 76){
        sonido.innerHTML=`<audio src="sounds/platillo-crash-derecho2.mp3" autoplay></audio>`;
        imagen.src ="img/base-platillo-crash-derecho.png";
    }else if(evento.keyCode == 71){
        sonido.innerHTML=`<audio src="sounds/tom-aereo.mp3" autoplay></audio>`;
        imagen.src ="img/base-tom-aereo.png";
    }else if(evento.keyCode == 74){
        sonido.innerHTML=`<audio src="sounds/tom-suelo.mp3" autoplay></audio>`;
        imagen.src ="img/base-tom-suelo.png";
    }
}
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
     instru.style.display = "none"   
    }, 8000);

})

inst.addEventListener("click", function () {
    instru.style.display = "block"
})

instru.addEventListener("click", function(){
    instru.style.display = "none";
})

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        instru.style.display = "none";
    }, 4000);
});



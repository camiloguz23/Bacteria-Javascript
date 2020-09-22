const imagen = document.getElementById("imagen");
const sonido = document.querySelector(".sonido");
document.addEventListener("keydown", tecla);
 
function tecla(evento) {
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
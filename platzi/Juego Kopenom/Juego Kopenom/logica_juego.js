let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

//Inicio del juego, escoger mascota
function iniciarJuego(){

    //se inserta el atributo .style.display para ocultar algunos elementos a medida que avanza cada seccion del juego. Desde aqui
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'
    //hasta aqui

    let botonMascotaJugador = document.getElementById('boton-seleccionar')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador); 

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego);
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua);
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra);

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)

}

function seleccionarMascotaJugador(){
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'
    
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'flex'

    let inputWaterpunch = document.getElementById('Waterpunch');
    let inputTerrahit = document.getElementById('Terrahit');
    let inputFirekick = document.getElementById('Firekick');
    let spanMascotaJugador = document.getElementById('mascota-jugador');

    if(inputWaterpunch.checked){
       alert('seleccionaste a Waterpunch');
       spanMascotaJugador.innerHTML = 'Waterpunch'
    }else if (inputTerrahit.checked){
       alert('seleccionaste a Terrahit');
       spanMascotaJugador.innerHTML = 'Terrahit'
    }else if(inputFirekick.checked){
       alert('seleccionaste a Firekick');
       spanMascotaJugador.innerHTML = 'Firekick'
    }else{
        (alert("Selecciona una mascota"));
    }
    seleccionarMascotaEnemigo();
}

//Selección aleatoria de mascota del enemigo
function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if(mascotaAleatoria == 1){
        spanMascotaEnemigo.innerHTML = 'Waterpunch'
        alert('tu enemigo seleccionó a Waterpunch')
    } else if(mascotaAleatoria == 2){
        spanMascotaEnemigo.innerHTML = 'Terrahit'
        alert('tu enemigo seleccionó a Terrahit')
    } else if(mascotaAleatoria == 3){
        spanMascotaEnemigo.innerHTML = 'Firekick'
        alert('tu enemigo seleccionó a Firekick')
    }
}

/*import {ataqueAgua, ataqueFuego, ataqueTierra } from "./select_ataque.js";
import { ataqueAleatorioEnemigo } from "./select_ataque.js"
ataqueAleatorioEnemigo()*/

//Funciones de ataques jugador
function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}

function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}

function ataqueTierra() {
        ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
    }

//funcion ataques de enemigo aleatorios
function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }

    combate()
}

function combate () {
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje('EMPATE')
    } else if((ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') || (ataqueJugador == 'AGUA' && ataqueEnemigo =='FUEGO') || (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA')) {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
        
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    revisarVidas()
}
    
//REVISAR LAS VIDAS
function revisarVidas() { 
    if(vidasEnemigo == 0){
    crearMensajeFinal('felicitaciones, GANASTE! :)')
    }else if(vidasJugador == 0){
    crearMensajeFinal('PERDISTE :(')
    }
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', la mascota de tu enemigo atacó con ' + ataqueEnemigo + ' - ' + resultado + '!!'

    sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal

    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//El juego solo se iniciará hasta que haya cargado todo
window.addEventListener('load', iniciarJuego)
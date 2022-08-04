function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-seleccionar')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador) 
}

function seleccionarMascotaJugador(){
    let inputWaterpunch = document.getElementById('Waterpunch');
    let inputTerrahit = document.getElementById('Terrahit');
    let inputFirekick = document.getElementById('Firekick');
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if(inputWaterpunch.checked){
       alert('seleccionaste a Waterpunch')
       spanMascotaJugador.innerHTML = 'Waterpunch'
    }else if (inputTerrahit.checked){
       alert('seleccionaste a Terrahit')
       spanMascotaJugador.innerHTML = 'Terrahit'
    }else if(inputFirekick.checked){
       alert('seleccionaste a Firekick')
       spanMascotaJugador.innerHTML = 'Firekick'
    }else{
        (alert("Selecciona una mascota"))
    }
    seleccionarMascotaEnemigo()
};

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function seleccionarMascotaEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if(ataqueAleatorio == 1){
        spanMascotaEnemigo.innerHTML = 'Waterpunch'
        alert('tu enemigo seleccionó a Waterpunch')
    } else if(ataqueAleatorio == 2){
        spanMascotaEnemigo.innerHTML = 'Terrahit'
        alert('tu enemigo seleccionó a Terrahit')
    } else if(ataqueAleatorio == 3){
        spanMascotaEnemigo.innerHTML = 'Firekick'
        alert('tu enemigo seleccionó a Firekick')
    }
}

window.addEventListener('load', iniciarJuego)
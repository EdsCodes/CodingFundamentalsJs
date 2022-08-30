//Funciones de ataques jugador
export function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}

export function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}

export function ataqueTierra() {
        ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
    }


//funcion ataques de enemigo aleatorios
export default function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)

if(ataqueAleatorio == 1) {
    ataqueEnemigo = 'FUEGO'
} else if(ataqueAleatorio == 2) {
    ataqueEnemigo == 'AGUA'
} else if (ataqueAleatorio == 3){
    ataqueEnemigo == 'TIERRA'
}

    crearMensaje()
}
//obtener numero aleatorio para Pc
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//asignar una jugada a un numero
function eleccion(jugada) {
    let resultado = ""
    if(jugada == 1){
        resultado = "piedra"
   } else if(jugada == 2){
        resultado = "papel"
    }else if(jugada == 3){
        resultado = "tijera"
    }else{
        resultado = "mal elegido"
    }
    return resultado
}

let jugador = 0
let min = 1
let max = 3
let pc = 0
let triunfos = 0
let perdidas = 0

while(triunfos < 3 && perdidas < 3){
    pc = aleatorio (1,3)
    jugador = parseInt(prompt("por favor elige: 1 para piedra, 2 para papel, 3 para tijera"))
    alert("tu eliges:" + eleccion(jugador))
    alert("PC elige:" + eleccion(pc))

    // logica del combate
if(pc == jugador) {
        alert("EMPATE")
    } else if((jugador == 1 && pc == 3) || (jugador == 2 && pc ==1) || (jugador ==3& pc ==2)) {
        triunfos++
        alert("GANASTE")
    } else {
        perdidas++
        alert("PERDISTE")
}
}
alert("Ganaste " + triunfos + " veces y perdiste " + perdidas + " veces.")
if(perdidas >= 3){
    alert("La pc es la ganadora")
}else(alert("Felicidades, eres el ganador"))
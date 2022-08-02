function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

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

let jugador = parseInt(prompt("por favor elige: 1 para piedra, 2 para papel, 3 para tijera"))
let min = 1
let max = 3
let pc = aleatorio (1,3)

alert("tu eliges:" + eleccion(jugador))
alert("PC elige:" + eleccion(pc))

//combate
if(pc == jugador){
    alert("EMPATE")
}else if(jugador == 1 && pc == 3){
    alert("GANASTE")
}else if(jugador == 2 && pc == 1){
    alert("GANASTE")
}else if(jugador == 3 && pc == 2){
    alert("GANASTE")
}else{
    alert("PERDISTE")
}
/*Programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales*/

let primerNumero = parseInt(prompt("ingrese un numero por favor"))
let segundoNumero = parseInt(prompt("ingrese otro numero por favor"))
let condition = true

do {
    response = prompt(`usted ingresó el numero ${primerNumero} y el numero ${segundoNumero}, esta de acuerdo?[s/n]`)
                    .toLowerCase()
                    .trim()
    switch (response) {
        case "s":
        case "si":
           alert("gracias por participar, sigamos adelante")
            condition =false
            break;
        case "n":
        case "no":
            alert("Por favor ingrese nuevamente los numeros deseados")
            primerNumero = parseInt(prompt("ingrese un numero por favor"))
            segundoNumero = parseInt(prompt("ingrese otro numero por favor"))
            break;
            default:
            response = prompt("No es una respuesta valida, por favor intentelo de nuevo")
            break;
    }
} while (condition);


if(primerNumero > segundoNumero){
    alert(`el numero ${primerNumero} es mayor que ${segundoNumero}`)
        }else if (primerNumero < segundoNumero){
    alert(`el numero ${primerNumero} es menor que ${segundoNumero}`)
         }else if (primerNumero === segundoNumero){
alert(`el numero ${primerNumero} es igual que ${segundoNumero}`)
}
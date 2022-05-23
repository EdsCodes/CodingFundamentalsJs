//crear una calculadora con las 4 operaciones aritmeticas basicas y que solo admita dos numeros a la vez

var operacion = prompt("Por favor ingrese la operacion\n1.adicion\n2.sustraccion\n3.multiplicacion\n4.division");
var primerNumero = parseInt(prompt("ingrese el primer numero"));
var segundoNumero = parseInt(prompt("ingrese el segundo numero"));

function adicion (primerNumero, segundoNumero){
    return (primerNumero+segundoNumero) 
}

function sustraccion (primerNumero, segundoNumero){
    return primerNumero-segundoNumero
}

function multiplicacion (primerNumero, segundoNumero){
    return primerNumero*segundoNumero
}

function division (primerNumero, segundoNumero){
    return primerNumero/segundoNumero
}


switch (operacion){    
    case "1":
    case "adicion":
    case "1.adicion":
       alert(adicion(primerNumero, segundoNumero));
        break;
    case "2":
    case "sustraccion":
    case "2.sustraccion":
        alert(sustraccion(primerNumero, segundoNumero));
        break;
    case "3":
    case "multiplicacion":
    case "3.multiplicacion":
        alert(multiplicacion(primerNumero, segundoNumero));
        break;
    case "4":
    case "division":
    case "4.division":
        alert(division(primerNumero, segundoNumero));
            break;
        default:
            alert("Operacion no válida, ingrese una opción del menú por favor.")
            break;
}

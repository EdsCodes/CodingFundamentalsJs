
//cree un programa que le pida X cantidad de numeros y arroje como resultado la suma de ellos

let suma = 0
let numero
let Nnumeros = parseInt(prompt("ingrese la cantidad de numeros a sumar"));
for(i=0;i<Nnumeros;i++){
    numero = parseFloat(prompt("ingrese un numero"))
    suma += numero
}
alert(suma)

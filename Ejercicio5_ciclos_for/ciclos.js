// Numeros pares e impares del 1 al 100

for(let i=0;i<=100;i++) {
    switch(i%2){
        case 0:
            console.log("el numero es par"+ i)
            break
        default:
            console.log("el numero es impar" + i)
    }
}
console.log(i)
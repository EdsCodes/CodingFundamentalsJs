alert("Hola, ingresa por favor el consumo de energia del mes");

let consumo = parseFloat(window.prompt("ingrese el consumo del mes"));
let precio = 0;

if (consumo <= 100) {
    precio = 0
    alert("el valor a pagar por su factura es:" + precio)
    }
    else if(consumo <= 200){
    precio = consumo *5
    alert("el valor a pagar por su factura es:" + precio)
    }
      else if(consumo > 200){
      precio = (consumo-200)*10 + 500 //500 de las segundas unidades a pagar por $5 cada una
      alert("el valor a pagar por su factura es:" + precio)
      }
      
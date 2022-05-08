let consumo = parseFloat(prompt("Ingrese su consumo en Kw para calcular su factura por favor"));
let precio = 0

if(consumo && consumo>0){
  if(consumo <= 100){
    alert("el valor a pagar por su consumo de energia es:" + precio);
      } else if(consumo <= 200){
      precio= consumo*5;
    alert("el valor a pagar por su consumo de energia es:" + precio);
      }else{
      precio = (consumo-200)*10 +500;
      alert("el valor a pagar por su consumo de energia es:" + precio);
      }
} else {
  alert("Por favor ingrese un valor válido");
}
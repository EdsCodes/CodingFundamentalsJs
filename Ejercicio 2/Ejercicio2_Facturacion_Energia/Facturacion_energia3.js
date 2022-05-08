let consumo = parseFloat(prompt("por favor ingrese su consumo de electricidad"));
let precio = 0

if(consumo && consumo>0){
if(consumo <= 100){  //las primeras 100 unds de consumo son gratis. 
    alert("el precio a pagar por su factura es:" + precio); //Se llama la variable precio=0 
 } else if(consumo <= 200){ //de 101 y hasta 200 se pagará $5 por und consumida. El else if nos hace cumplir esta condición excluyendo la anterior, es decir sin tener en cuenta las primeras 100 unds.
     precio=consumo*5;
     alert("el precio a pagar por su factura es:" + precio);
 } else{ // si no se cumple ninguna de las dos condiciones anteriores, es decir, si el consumo es >200, al consumo se le resta 200 porque ya lo contablizamos, se multiplica por $10 y se le suman los 500 del consumo de 100 a 200 (100*5)
     precio = (consumo - 200) * 10 + 500 
     alert("el precio a pagar por su factura es:" + precio);
 }
}else{
    alert("por favor ingrese un valor válido")
    }
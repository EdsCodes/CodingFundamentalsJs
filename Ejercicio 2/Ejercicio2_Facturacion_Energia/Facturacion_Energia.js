let consumoEnergia = Number(prompt("ingrese su gasto mensual"));
let extraConsumo = 0;

if(consumoEnergia && consumoEnergia>0){
    if(consumoEnergia <= 100){
        Total = 0;
      alert("Su valor a pagar es 0");
    };
      if(consumoEnergia > 100 && consumoEnergia <= 200){
        consumoEnergia = consumoEnergia - 100;
        consumoEnergia = 100;
      }
        if(consumoEnergia >= 200){
          extraConsumo = consumoEnergia - 100;
          consumoEnergia = 100;
        }
        Total = consumoEnergia*5 - extraConsumo*10
        alert("Su valor a pagar es:" + Total)
}
        else{
      alert("por favor ingrese un valor")
    } 
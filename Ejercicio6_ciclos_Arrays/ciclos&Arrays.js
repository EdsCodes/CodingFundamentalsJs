/*Escribe un script el cual nos deje introducir una cantidad de examenes y luego introducir la nota de cada examen de manera individual. Al final del programa nos tiene que devolver el promedio de las notas.*/


let cantidadMaterias = parseInt(prompt("ingrese la cantidad de materias a evaluar"))
let materias = []
let cantidadExamenes = 0
let nota = 0
let promedioMateria = []


for (i=1;i<=cantidadMaterias;i++){
    materias.push(prompt(`ingrese el nombre de la materia No. ${i}`));
    cantidadExamenes=(prompt(`ingrese la cantidad de exámenes a evaluar en la materia ${materias[i-1]}`));
    for (j=1;j<=cantidadExamenes;j++){ 
          nota += ((parseFloat(prompt(`ingrese la nota del examen No.${j} de la materia ${materias[i-1]}`))));
        }
     promedioMateria.push(nota/cantidadExamenes);
        alert((`el promedio para la materia ${materias[i-1]} es ${promedioMateria[i-1]}`));
}
/* Cree un programa que solicite al usuario la fecha de nacimineto y con base a ello calcule su edad, si el usuario esta entre 18 y 79 años podria conducir, de lo contrario, no.*/

const fechaNacimiento = document.getElementById("fechaNacimiento");
const edad = document.getElementById("edad"); 

const calculateAge=(fechaNacimiento)=>{ 
    const fechaActual = new Date();
    const anoActual = parseInt(fechaActual.getFullYear());
    const mesActual = parseInt(fechaActual.getMonth() + 1);
    const diaActual = parseInt(fechaActual.getDate());

    const anoNacimiento = parseInt((fechaNacimiento).toString(0,4));
    const mesNacimiento = parseInt((fechaNacimiento).toString(5,7));
    const diaNacimiento = parseInt((fechaNacimiento).toString(8,10));

    let edad = anoActual - anoNacimiento;
    if(mesActual < mesNacimiento){
        edad=edad-1;
    }else if(mesActual === mesNacimiento){
        if(diaActual < diaNacimiento){
            edad=edad-1;
        }
    }
    return edad;
};

window.addEventListener('load', function () {
    fechaNacimiento.addEventListener('change', function(){
        if(calculateAge(this.value) >= 18 && calculateAge(this.value) <= 79) {
            edad.innerText = `Su edad es ${calculateAge(this.value)} años, usted es apto para conducir`;
        }else {
            edad.innerText = `Debido a que su edad es ${calculateAge(this.value)} años, usted NO es apto para conducir`
        }
    });
});
var form = document.querySelector("#miForm");
var n1 = form["n1"];
var n2 = form["n2"];

document.querySelector("#boton").addEventListener("click", function () {
    const operacion = document.querySelector("#lista").value;
    if (operacion == 1) {
        var resultado = parseInt(n1.value) + parseInt(n2.value);
    } else if (operacion == 2) {
        var resultado = parseInt(n1.value) - parseInt(n2.value);
    } else if (operacion == 3) {
        var resultado = parseInt(n1.value) * parseInt(n2.value);
    } else if (operacion == 4) {
        var resultado = parseInt(n1.value) / parseInt(n2.value);
    } else if (operacion == 5) {
        var resultado = parseInt(n1.value) % parseInt(n2.value);
    }
    if(isNaN(resultado)){
        resultado = 'Faltan numeros o no se ha seleccionado operación';
    }
    document.querySelector("#res").innerHTML = `${resultado}` ;
});

const limpiar = () => {
    document.getElementById("miForm").reset();
};



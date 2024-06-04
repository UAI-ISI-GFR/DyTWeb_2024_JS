/*Funciones en JS*/

/*a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.
Ejecutar la función y guardar el resultado en una variable, mostrando el valor de
dicha variable en la consola del navegador.*/
var numero1 = 10;
var numero2 = 20;

function SumadeNumeros(num1, num2) {
    var resultado = num1 + num2;
    return resultado;
}

console.log(SumadeNumeros(numero1, numero2));



/*b. A la función suma anterior, agregarle una validación para controlar si alguno de
los parámetros no es un número, mostrar una alerta aclarando que uno de los
parámetros tiene error y retornar el valor NaN como resultado.*/
var numero3 = 25;
var numero4 = 35;

function SumadeNumeros2(num1, num2) {
    if ((typeof num1) != "number" || (typeof num2) != "number") {
        console.log("Alerta: No es un valor admitido");
        return NaN;
    } else {
        return num1 + num2;
    }
}

console.log(SumadeNumeros2(numero3, numero4));



/*c. Crear una función validate integer que reciba un número como parámetro y
devuelva verdadero si es un número entero.*/

var numero5 = 13;

function ValidateInteger(num) {
    if (Number.isInteger(num)) {
        return true;
    } else {
        return;
    }
}

console.log(ValidateInteger(numero5));



/*d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los
números sean enteros. En caso que haya decimales mostrar un alerta con el
error y retorna el número convertido a entero (redondeado).*/

var numero6 = 100;
var numero7 = 90.77;


function SumadeNumeros3(num1, num2) {
    if ((typeof num1) != "number" || (typeof num2) != "number") {
        console.log("Alerta: No es un valor admitido");
        return NaN;
    } else {
        if (!Number.isInteger(num1)) {
            console.log("Primer Número no es entero");
            num1 = Math.round(num1);
        }

        if (!Number.isInteger(num2)) {
            console.log("Segundo Número no es entero");
            num2 = Math.round(num2);
        }
        
        return num1 + num2;
    }
}

console.log(SumadeNumeros3(numero6, numero7));


/*e. Convertir la validación del ejercicio 6d) en una función separada y llamarla
dentro de la función suma probando que todo siga funcionando igual.*/
var numero8 = 1001.44;
var numero9 = 90.77;


function SumadeNumeros4(num1, num2) {
    if ((typeof num1) != "number" || (typeof num2) != "number") {
        console.log("Alerta: No es un valor admitido");
        return NaN;
    } else {
        ValidarEnteros(num1, num2);
    }
}

function ValidarEnteros(num1, num2) {
    if (!Number.isInteger(num1)) {
        console.log("Primer Número no es entero");
        num1 = Math.round(num1);
    }

    if (!Number.isInteger(num2)) {
        console.log("Segundo Número no es entero");
        num2 = Math.round(num2);
    }

    return num1 + num2;
}

console.log(SumadeNumeros3(numero8, numero9));

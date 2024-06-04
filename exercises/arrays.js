/*arrays*/

/*a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por
consola los meses 5 y 11 (utilizar console.log).*/

var arreglo = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(arreglo[4]);
console.log(arreglo[10]);



/*b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/
var arregloOrdenado = arreglo.slice(); //no está pedido este método, pero lo utilizo para no afectar el arreglo original
arregloOrdenado.sort()
console.log(arregloOrdenado);



/*c. Agregar un elemento al principio y al final del array (utilizar unshift y push).*/
arreglo.push("Elemento Final");
arreglo.unshift("Primer Elemento")
console.log(arreglo)



/*d. Quitar un elemento del principio y del final del array (utilizar shift y pop).*/
arreglo.shift();
arreglo.pop();
console.log(arreglo);


/*e. Invertir el orden del array (utilizar reverse).*/
var arregloInvertido = arreglo.slice().reverse();
console.log(arreglo);


/*f. Unir todos los elementos del array en un único string donde cada mes este
separado por un guión - (utilizar join).*/
var listadoMeses = arreglo.join(" - ");
console.log(listadoMeses);


/*g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre
(utilizar slice).*/
var arregloCopia = arreglo.slice(4, 11);
console.log(arregloCopia);  
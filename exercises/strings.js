/*Strings*/

/*a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el
texto en mayúscula (utilizar toUpperCase).*/

var string = "abcdefghijklmn";
var todoMayuscula = string.toUpperCase;


/*b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con los primeros 5 caracteres guardando el resultado en una nueva
variable (utilizar substring).*/

var string2 = "zyxwvutsrqpo";
var subTexto = string2.substring(0,5);


/*c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con los últimos 3 caracteres guardando el resultado en una nueva variable
(utilizar substring).*/

var string3 = "vutsrqponmlkj";
var subTexto2 = string3.substring((string3.length - 3),string.length);


/*d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con la primera letra en mayúscula y las demás en minúscula. Guardar el
resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y
el operador +).*/

var string4 = "cadenaDePruebaParaEjercicio4";
var cadenaConvertida = string4.substring(0, 1).toUpperCase() + string4.substring(1).toLowerCase()



/*e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en
blanco. Encontrar la posición del primer espacio en blanco y guardarla en una
variable (utilizar indexOf).*/

var string5 = "Cadena de Prueba Ejercicio 5"
var posicion = string5.indexOf(" ");



/*f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y
algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para
generar un nuevo string que tenga la primera letra de ambas palabras en
mayúscula y las demás letras en minúscula (utilizar indexOf, substring,
toUpperCase, toLowerCase y el operador +).*/

var word1 = "último ejercicio";
var word2 = "para entendimiento";
var nuevoString1 = word1.substring(0, 1).toUpperCase() + word1.substring(1, (word1.indexOf(" ") + 1)).toLowerCase() + word1.substring((word1.indexOf(" ") + 1), (word1.indexOf(" ") + 2)).toUpperCase() + word1.substring((word1.indexOf(" ") + 2), word1.length).toLowerCase();  
var nuevoString2 = word2.substring(0, 1).toUpperCase() + word2.substring(1, (word2.indexOf(" ") + 1)).toLowerCase() + word2.substring((word2.indexOf(" ") + 1), (word2.indexOf(" ") + 2)).toUpperCase() + word2.substring((word2.indexOf(" ") + 2), word2.length).toLowerCase();  
var stringFinal = nuevoString1 + " " + nuevoString2;

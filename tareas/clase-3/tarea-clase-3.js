// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!


let nombreDelUsuario = prompt("Cual es su nombre?").toLowerCase();
const miNombre = "FRANCISCO".toLowerCase();
const nombreDeMiPrimo = "JULIAN".toLowerCase();

if (nombreDelUsuario === miNombre){
    console.log(`Hola!, yo tambien me llamo ${nombreDelUsuario}`);
}else if (nombreDelUsuario === nombreDeMiPrimo){
    console.log(`Hola ${nombreDelUsuario}! te llamas igual que mi primo`);
}
else {
    console.log(`Hola ${nombreDelUsuario}!`);
}


//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.



let edadDelUsuario = Number(prompt("Cual es tu edad?"));
const miEdad = 21;

if (edadDelUsuario === miEdad){
    console.log(`Yo tambien tengo ${edadDelUsuario} años!!!`);
}
else if(edadDelUsuario > miEdad){
    console.log("Sos mas grande yo!!!");
}
else if(edadDelUsuario < miEdad){
    console.log("Sos mas chico que yo!!!");
}


//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.


let tieneDocumento = prompt("Tiene el documento?").toLowerCase();
if (tieneDocumento === "si"){
    let edad = Number(prompt("Cual es tu edad?"));
    if (edad >= 18){
        console.log("Usted puede entrar al bar");
    }
    else{
        console.log("Usted no puede entrar al bar");
    }
}
else if (tieneDocumento === "no"){
    console.log("Usted no puede entrar al bar");
}
else{
    console.log(`No entendi su respesta ${tieneDocumento}, debe contestar por si o por no.`)
}


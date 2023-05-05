/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

document.querySelector("#agregar").onclick = function(event){
    const totalSalarios = document.querySelectorAll(".input-salario");
    mostrarBotonCalcular();
    agregarSalario(totalSalarios.length)

    event.preventDefault();
}

document.querySelector("#quitar").onclick = function(event){
    const totalSalarios = document.querySelectorAll(".input-salario");
    quitarSalario(totalSalarios.length)

    event.preventDefault();
}

document.querySelector("#calcular").onclick = function (event){
    mostrarResultados();
    const salarios = document.querySelectorAll(".salarios-input");
    document.querySelector("#salario-mayor-mensual").textContent =mayorSalarioMensual(salarios);
    document.querySelector("#salario-menor-mensual").textContent =menorSalarioMensual(salarios);
    document.querySelector("#salario-promedio-mensual").textContent =promedioSalarioMensual(salarios);
    document.querySelector("#salario-promedio-anual").textContent =(promedioSalarioMensual(salarios)*12);

    event.preventDefault();
}



function agregarSalario(indice){
    const $div = document.createElement("div");
    $div.className = "input-salario";
    $div.id = indice;
    const $label = document.createElement("label");
    $label.textContent = `Salario mensual del integrante numero ${indice+1}`
    const $input = document.createElement("input");
    $input.type = "number";
    $input.className = "salarios-input";

    $div.appendChild($label);
    $div.appendChild($input);

    document.querySelector("#integrantes-con-salario").appendChild($div);
}

function quitarSalario(indice){
    ocultarResultados();
    const divSalario = document.getElementById(indice-1);
    if (indice === 1){
        ocultarBotonCalcular();
    }
    if (indice>0){
    divSalario.remove();
    }
    else{
        alert("No hay elementos para quitar");
    }
}

function mostrarBotonCalcular(){
    document.querySelector("#calcular").className = "";
}

function ocultarBotonCalcular(){
    document.querySelector("#calcular").className = "oculto";
}

function mostrarResultados(){
    document.querySelector("#resultados-calcular").className = "";
}

function ocultarResultados(){
    document.querySelector("#resultados-calcular").className = "oculto";
}
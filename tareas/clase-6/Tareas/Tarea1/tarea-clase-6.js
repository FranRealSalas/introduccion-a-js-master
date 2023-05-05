/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/
document.querySelector("#boton-siguiente").onclick = function(event){   
    const $cantidadIntegrantes = document.querySelector("#cantidad-integrantes");
    const cantidadIntegrantes = Number($cantidadIntegrantes.value);

    quitarIntegrantes();
    crearIntegrantes(cantidadIntegrantes);

    event.preventDefault();
}

document.querySelector("#calcular").onclick = function(event){
    const numeros = obtenerEdades();
    document.querySelector("#edad-menor").textContent = `La menor edad es ${obtenerMenor(numeros)}`
    document.querySelector("#edad-mayor").textContent = `La mayor edad es ${obtenerMayor(numeros)}`
    document.querySelector("#edad-promedio").textContent = `El promedio de edad es ${obtenerPromedio(numeros)}`
    mostrarCalculos();
    
    event.preventDefault();
}

document.querySelector("#boton-reset").onclick = reset;


function quitarIntegrantes(){
    const $integrantes = document.querySelectorAll(".integrantes");
    for(let i=0;i<$integrantes.length;i++){
        $integrantes[i].remove();
    }
}

function crearIntegrantes(cantidadIntegrantes){
    if(cantidadIntegrantes>0){
        mostrarBotonCalcular();
    }
    else{
        reset();
    }
    for(let i=0;i<cantidadIntegrantes;i++){
        crearIntegrante(i);
    }
}

function crearIntegrante(indice){
    const $div = document.createElement('div');
    $div.className = "integrantes";

    const $label = document.createElement("label");
    $label.textContent = `Integrante numero ${indice+1}`;
    const $input = document.createElement("input");
    $input.type = "number";

    $div.appendChild($label);
    $div.appendChild($input);

    const $integrantes = document.querySelector("#integrantes-familia");
    $integrantes.appendChild($div);
}


function obtenerEdades(){
    const $integrantes = document.querySelectorAll(".integrantes input");
    const edades = [];
    for (let i=0;i<$integrantes.length;i++){
        edades.push(Number($integrantes[i].value));
    }

    return edades;
}

function reset(){
    quitarIntegrantes();
    ocultarBotonCalcular();
    ocultarCalculos();
}

function ocultarBotonCalcular(){
    document.querySelector("#calcular").className = "oculto";
}


function mostrarBotonCalcular(){
    document.querySelector("#calcular").className = "";
}


function ocultarCalculos(){
    document.querySelector("#resultados-calculo").className = "oculto";
}

function mostrarCalculos(){
    document.querySelector("#resultados-calculo").className = "";
}

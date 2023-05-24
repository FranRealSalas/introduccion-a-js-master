function crearArreglo(){
    let $elementos = document.querySelectorAll(".numero");
    let arregloA = [];
    for (let i=0;i<$elementos.length;i++){
        arregloA.push(Number($elementos[i].innerText));
    }

    return arregloA;
}

function calcularPromedio(arregloA){
    let acumulador=0;
    for(let i=0;i<arregloA.length;i++){
        acumulador += arregloA[i];
    }
    return acumulador/arregloA.length;
}
function obtenerMayor(arregloA){
    let numeroMayor = arregloA[0];
    for (let i=0; i<arregloA.length;i++){
        if (arregloA[i]>numeroMayor){
            numeroMayor=arregloA[i];
        }
    }
    return numeroMayor;
}

function obtenerMenor(arregloA){
    let numeroMenor = arregloA[0];
    for (let i=0; i<arregloA.length;i++){
        if (arregloA[i]<numeroMenor){
            numeroMenor=arregloA[i];
        }
    }
    return numeroMenor;
}

function obtenerRepetido(arregloA){
    let numeroMasRepetido;
    let cantidadDeRepeticiones = 0;
    for (let i=0;i<arregloA.length;i++){
        let aparicionesActuales = 0;
        for(let j=i;j<arregloA.length;j++){
            if (arregloA[i]===arregloA[j]){
                aparicionesActuales += 1;
            }
        }
        if(aparicionesActuales >= cantidadDeRepeticiones){
            cantidadDeRepeticiones = aparicionesActuales;
            numeroMasRepetido = arregloA[i];
        }
    }

    if(cantidadDeRepeticiones < 2){
        numeroMasRepetido = undefined;
    }

    return numeroMasRepetido;
}

let primerArray = crearArreglo();
let numeroRepetido = obtenerRepetido(primerArray)

document.querySelector("#total-promedio").innerText = `El promedio de sus elementos es ${calcularPromedio(primerArray)}`;
document.querySelector("#numero-mayor").innerText = `El numero mayor de sus elementos es ${obtenerMayor(primerArray)}`;
document.querySelector("#numero-menor").innerText = `El numero menor de sus elementos es ${obtenerMenor(primerArray)}`;

if (numeroRepetido===undefined){
    document.querySelector("#mas-repetido").innerText = `No hay numero repetido`;
}
else{
    document.querySelector("#mas-repetido").innerText = `El numero que mas se repite de sus elementos es ${obtenerRepetido(primerArray)}`;
}


function mayorSalarioMensual(salarios){
    let salarioMayor = salarios[0].value;
    for (let i=0;i<salarios.length;i++){
        if(salarios[i].value>salarioMayor){
            salarioMayor=salarios[i].value;
        }
    }

    return salarioMayor;
}

function menorSalarioMensual(salarios){
    let salarioMenor = salarios[0].value;
    for (let i=0;i<salarios.length;i++){
        if(Number(salarios[i].value) === 0){
            continue;
        }
        if(salarios[i].value<salarioMenor){
            salarioMenor=salarios[i].value;
        }
    }

    return salarioMenor;
}


function promedioSalarioMensual(salarios){
    let acumulador = 0;
    let salariosValidos = 0;
    for (let i=0;i<salarios.length;i++){
        let salario = Number(salarios[i].value);
        if(salario===0){
            continue;
        }
        acumulador += salario;
        salariosValidos++;
    }

    let promedioMensual = acumulador/salariosValidos;


    return promedioMensual;
}
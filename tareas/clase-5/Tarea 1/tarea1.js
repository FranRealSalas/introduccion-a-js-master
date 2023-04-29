document.querySelector("#calcularsalario").onclick = function(){
    const salarioAnual = Number(document.querySelector("#salarioanual").value);
    const salarioMensual = calcularSalarioMensual(salarioAnual);

    document.querySelector("#salariomensual").value = salarioMensual;

    return false;
}

function calcularSalarioMensual(salario){
    return salario / 12;
}
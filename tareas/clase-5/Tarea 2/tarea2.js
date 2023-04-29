document.querySelector("#ingresar").onclick = function(){
    const primerNombre = document.querySelector("#primer-nombre").value;
    const segundoNombre = document.querySelector("#segundo-nombre").value; 
    const apellidoUsuario = document.querySelector("#apellido").value; 
    const edadUsuario = document.querySelector("#edad").value;
    
    document.querySelector("#info-completa").innerText=`${primerNombre} ${segundoNombre} ${apellidoUsuario} de ${edadUsuario} años de edad`;
    document.querySelector("#bienvenido").innerText = `Bienvenido ${primerNombre}!!!`;


    return false;
}
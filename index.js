(function(){
    var formulario = document.getElementsByName('formulario')[0],
    elementos = formulario.elements,
    boton = document.getElementById('boton');

    var validarNombre = function(){
        if (formulario.name.value== 0) {
            alert("Completa el campo.")
        }
        else if (formulario.apellidos.value== 0) {
            alert("Completa el campo.")
        }
        
    };
    

    var validar = function(){
        validarNombre();
    };

    var validarapellidos = function(){
        validarApellido();
    };

    
    formulario.addEventListener("submit", validar);
    formulario.addEventListener("submit", validarapellidos);
   


}())

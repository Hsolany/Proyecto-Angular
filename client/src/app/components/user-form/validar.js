function validar() {
    var id, nombre, apellido, fecha;
    nombre = document.getElementById("nombre").value;
    id = document.getElementById("id").value;
    apellido = document.getElementById("apellido").value;
    fecha = document.getElementById("fecha").value;

    if(nombre ==""){
        alert("el campo nombre esta vacio");
        return false;
    }

}
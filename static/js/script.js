function enviar() {

    let formUno = document.getElementById("principal").value;
    let formDos = document.getElementById("secundario").value;

    if (formUno === "" || formDos === "") {
        alert("Es obligatorio rellenar los campos");
    } 
    
    else if (formUno === "Ignacio Diaz" && formDos === "amorteamoarto") {
        window.location.replace("portada.html");
    } 
    
    else {
        alert("Error: Contraseña o Nombre de Usuario incorrecto");
    };

};

if(localStorage.getItem("login") !== "true"){
    window.location.href = "index.html.";
}


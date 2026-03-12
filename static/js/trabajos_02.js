//Barra de navegacion 
const menuBtn = document.querySelector(".menu");
const navMenu = document.querySelector(".nav ul");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

function uno() {
    let ingreso = parseInt(prompt("Ingrese algun dato"));

    if (ingreso >= 18) {
        alert("Acceso concedido. Eres mayor de edad.")

    } else if (ingreso < 18) {
        alert("Acceso denegado. Eres menor de edad")
    };
};

function dos() {
    let nombre = prompt("Ingrese su nombre...");
    let usuarios = [];
    if (nombre !== "") {
        usuarios.push(nombre);
        alert(`Hola ${usuarios}`);
    } else {
        alert("Error: El nombre no puede estar en blanco...")
    }

}

function tres() {
    let productos = ["celular", "teclado", "mouse"];
    let nuevoProducto = "celular";

    if (productos.includes(nuevoProducto)) {
        alert("El producto ya está en el inventario");
    } else {
        alert("El producto no está en el inventario");
    }
}

let bodega = ["caja1", "caja2", "caja3", "caja4", "caja5", "caja6"];

function cuatro() {
    if (bodega.lenght <= 5) {
        alert("Espacio disponible")
    } else {
        alert("Bodega llena, eliminando último ingreso")
        bodega.pop();
    }
}

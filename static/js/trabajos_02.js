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

function cinco() {
    let colaEspera = ["error_404", "Juan", "Sofia"];
    if (colaEspera[0] == "error_404") {
        colaEspera.shift()
    }
    alert(`Cola de espera limpia: ${colaEspera.join(" - ")}`)
}

function ceis() {
    let foro = ["User1", "User2"];
    let rol = prompt("Ingresar rol:");
    if (rol.toLowerCase === "admin") {
        foro.unshift(rol);
        alert(foro);
    } else {
        foro.push(rol)
        alert(foro);
    }
}

function ciete() {
    let nota = parseFloat(prompt("Ingrese la nota"));
    if (nota >= 6 && nota <= 7) {
        alert("Excelente, eximido")
    } else if (nota >= 4 && nota <= 5.9) {
        alert("Aprobado vas a examen")
    } else if (nota < 4 && nota >= 1) {
        alert("Reprobado")
    } else {
        alert("Ingrese un valor válido")
    }
}

function ocho() {
    let invitados = ["Ana", "Luis", "Camila", "Diego"];
    let personas = prompt("Ingrese su nombre: ");
    if (invitados.includes(personas)) {
        alert(`¡Bienvenido ${personas} Pasa a la fiesta!`)
    } else {
        alert("Lo siento, no estas en la lista de invitados")
    }
}

function nueve() {
    let estanteria = [["Manzanas", "Peras"], ["Leche", "Yogur"]];
    let seccion = prompt("Ingresar una seccion(0-1)");
    let productos = prompt("Ingresar producto solicitado");
    if (seccion !== 0 || seccion !== 1) {
        alert("No tenemos esta seccion")
    }
    else if (estanteria[seccion].includes(productos)) {
        alert("Producto encontrado en el estante")
    } else {
        alert("No tenemos ese producto en esa sección")
    }
};

let bitacora = [];
function dies() {
    let nombreVisita = prompt("Ingresa tu nombre: ")
    let esVip = parseInt(prompt(`¿Eres VIP?\n0 = no\n1 = si`));
    nombreVisita = nombreVisita.trim();

    if (nombreVisita == "") {
        alert("Error: el nombre no puede estar vacío.");
    } else if (bitacora.includes(nombreVisita)) {
        alert("Esa persona ya está en la lista.");
    } else if (esVip == 1) {
        bitacora.unshift(nombreVisita);
        alert(`Agregado correctamente a la lista:\n${bitacora.join(", ")}\nPersonas en total:
    ${bitacora.length}`);
    } else if (esVip == 0) {
        bitacora.push(nombreVisita);
        alert(`Agregado correctamente a la lista:\n${bitacora.join(", ")}\nPersonas en total:
        ${bitacora.length}`);
    } else {
        alert("Ingrese valores validos.");
    }
};
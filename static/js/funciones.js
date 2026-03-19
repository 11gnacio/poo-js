console.log("js conectado...");

let asistencia = [];

function agregarLista(nombre) {

    asistencia.push(nombre);

    return asistencia.join(", ");
}

function Contador() {
    const container = document.getElementById("container1");
    const result = document.getElementById("result1");
    const input = document.getElementById("input1");

    let nombre = input.value.trim();

    if (nombre === "") return; // evita agregar vacío

    let resultado = agregarLista(nombre);
    result.textContent = resultado;

    input.value = "";
    container.classList.remove("d-none");
}

// Ejercicio 2


let pacientes = ["Carlos", "María", "Diego"];

function ingresarUrgencia() {
    const input = document.getElementById("input2");
    const result = document.getElementById("result2");
    const container = document.getElementById("container2");

    let nombre = input.value.trim();

    if (nombre !== "") {

        pacientes.unshift(nombre);

        result.textContent = "Próximos a atender: " + pacientes.join(", ");

        container.classList.remove("d-none");
    }

    input.value = "";
}

// Ejercicio 3

let entregas = ["Pizza", "Sushi", "Hamburguesa", "Ensalada"];

function delivery() {
    const inputTres = document.getElementById("input3");
    const resulDos  = document.getElementById("result3");
    const containerTres = document.getElementById("container3");
   
    let accion = inputTres.value.trim().toLowerCase();

    if (accion === "despachar") {
    entregas.shift();
} else if (accion === "cancelar") {
    entregas.pop();
}
    resulDos.textContent = "Pedidos pendientes: " + entregas.join(", ");

    containerTres.classList.remove("d-none");

    inputTres.value = "";
}

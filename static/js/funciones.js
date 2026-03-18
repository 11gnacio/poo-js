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

let pacientes = ["Carlos", "Maria", "Diego"];
function agregarUrgencia(nombre) {
  pacientes.unshift(nombre);
  return pacientes.join(", ");
};

function ingresarUrgencia() {
    const container = document.getElementById("container2");
    const result = document.getElementById("result2");
    const input = document.getElementById("input2");
    
    if (input.value !== "") {
        let nombre = input.value;
        let resultado = agregarUrgencia(nombre); //Llama a la función guardando 
    }
}
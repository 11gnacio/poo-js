console.log("js conectado...");

// Ejercicio 1

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
    const resulDos = document.getElementById("result3");
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

// Ejercicio 4

let codigosValidos = ["VERANO2026", "PROMO50", "CLIENTEVIP"];

function verificarCodigo() {
    const inputCuatro = document.getElementById("input4");
    const resultCuatro = document.getElementById("result4");
    const containerCuatro = document.getElementById("container4");

    let accion = inputCuatro.value.trim();

    let mensaje = "Codigo invalido";

    for (let i = 0; i < codigosValidos.length; i++) {
        if (accion == codigosValidos[i]) {
            mensaje = "Exito";
        }
    }

    resultCuatro.textContent = mensaje;

    containerCuatro.classList.remove("d-none");
w
    inputCuatro.value = "";
}

// ejercicio 5

function calcularCuotas(valor, cuota) {
    let registroPagos = "";
    for (let i = 1; i <= 3; i++) {
        registroPagos += `Cuota ${i} de ${cuota}: ${parseInt(valor/e)} |`;
    }
    return registroPagos;
};

function simularCuotas() {
    const producto = document.getElementById("input5");
    let valorProducto = parseInt(producto, value);
    const cuotaInput = document.getElementById("input_5");
    let cuota = parseInt(cuotaInput.value);
    const result = document.getElementById("result5");
    const container = document.getElementById("container5");
    let resultado = calcularCuotas(valorProducto, cuota)
    result.textContent = resultado;
    producto.value = "";
    cuotaInput.value = "";
    container.classList.remove("d-none");
};



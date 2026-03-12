console.log("Activo.....");

// 1. El contador en pantalla}

function Contador() {
    let numeros = [];
    const continer = document.getElementById(`resultadoContainer`);
    const resultado = document.getElementById(`result1`);
    for (let i = 1; i <= 10; i++) {
        numeros.push(i);
    }
    resultado.textContent = `Contador: ${numeros.join(" - ")}`;
    continer.classList.remove(`d-none`)
}

// 2. Lista de Asistencia Automática

function lista() {
    let curso = ["Ana", "Diego", "Sofía", "Matias"];
    const container = document.getElementById(`resultadoContainer2`);
    const resultado = document.getElementById(`result2`);
    resultado.textContent = ""; // Limpiar contenedor
    for (let i = 0; i < curso.length; i++) {
        resultado.textContent += `${curso[i]},`
    }
    container.classList.remove('d-none')
}

// 3.  Buscador de Aprobados (Escala 1 a 7)

function notas() {
    let notas = [3.5, 6.2, 5.0, 2.8, 4.5, 7.0];
    let contadorAprobados = 0;

    const container = document.getElementById("resultadoContainer3");
    const resulto = document.getElementById("result3");

    for (let i = 0; i < notas.length; i++) {
        if (notas[i] >= 4.0) {
            contadorAprobados++;
        }
    }

    resulto.textContent = "Total de alumnos aprobados: " + contadorAprobados;
    container.classList.remove("d-none");
}
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

function Inventario() {
    let productos = ["Teclado", "Mouse", "Agotado", "Monitor", "Agotado", "Audífonos"];
    const container = document.getElementById('resultadoContainer4');
    const resultado = document.getElementById('result4');
    let disponibles = [];
    resultado.textContent = "";
    for (let i = 0; i < productos.length; i++) {
        if (productos[i] !== "Agotado") {
            disponibles.push(productos[i]);
        }
    }
    resultado.textContent = `productos disponibles: ${disponibles.join(" - ")}`
    container.classList.remove('d-none')
}

function Sumando() {
    let aportes = [1500, 2000, 500, 3000, 1000];
    let totalRecaudado = 0;
    const container = document.getElementById('resultadoContainer5');
    const resultado = document.getElementById('result5');
    for (let i = 0; i < aportes.length; i++) {
        totalRecaudado += aportes[i];
    }
    resultado.textContent = `La colecta reunió un total de: ${totalRecaudado}`
    container.classList.remove('d-none')
}

function Formateador() {
    let asistentes = ["Carlos", "MARIA", "pedro", "LUCIA"];
    let resultado = [];
    const container = document.getElementById('resultadoContainer6')
    const result = document.getElementById('result6');
    for (let i = 0; i < asistentes.length; i++) {
        if (i % 2 === 0) {
            resultado.push(`${asistentes[i]} VIP`);
        } else {
            resultado.push(`${asistentes[i]} `);
        }
    }
    result6.textContent = resultado.join(" - ");
    container.classList.remove('d-none')
};

function Stock() {
    let bodega = ["Lápiz", "Cuaderno", "Goma", "Cuaderno", "Regla", "Cuaderno"];
    let articuloBuscado = prompt("Ingrese el articulo que busca: ");
    let vecesEncontrado = 0;
    const container = document.getElementById('resultadoContainer7');
    const resultado = document.getElementById('result7');
    for (let i = 0; i < bodega.length; i++) {
        if (articuloBuscado == bodega[i]) {
            vecesEncontrado++
        }
    }
    resultado.textContent = `El artículo ${articuloBuscado} se encuentra ${vecesEncontrado} veces en la bodega`
    container.classList.remove('d-none')
}

function generarParrafos() {
    let temperaturas = [22, 24, 28, 35, 21, 38];

    const container = document.getElementById(`container8`);
    const result = document.getElementById(`result8`);
    
    for (i = 0; i < temperaturas.length; i++) {
        if (temperaturas[i] >= 30 && temperaturas[i] < 50) {
            result.innerHTML +=
            `<p class="text-danger"> ¡ALERTA! Temperatura critica
            de ${temperaturas[i]} grados.</p><br>`;
            container.classList.remove(`d-none`);
        }
    }
}
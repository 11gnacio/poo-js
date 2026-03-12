console.log("Activo.....");

// 1. El contador en pantalla}

function contadorPantalla() {
    let numeros = [];
    const continer = document.getElementById("");
    const resultado = document.getElementById("");
    for(let i = 1; i <= 10; i++) {
        numeros.push(i);
    }
    resultado.textContent = `Contador: ${numeros.join(" - ")}`;
    continer.classList.remove(`d-none`)
}
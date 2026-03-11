let i
    console.log("Carrgando...", + i, "%" );
    i++;
};
console.log("Recursos Conectados :)");



//Barra de navegacion 
const menuBtn = document.querySelector(".menu");
const navMenu = document.querySelector(".nav ul");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
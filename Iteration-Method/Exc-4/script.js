const form = document.getElementById("texto");
const paragraph = document.getElementById("NullP");

form.addEventListener("input", () => { // Evento de input no campo de texto
    paragraph.textContent = form.value; // Atualiza o texto do <p> com o valor do input
});

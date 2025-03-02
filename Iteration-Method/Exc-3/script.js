document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    
    const campo1 = document.getElementById("campo1").value;
    const campo2 = document.getElementById("campo2").value;

    
    alert(`Campo 1: ${campo1}\nCampo 2: ${campo2}`);
});
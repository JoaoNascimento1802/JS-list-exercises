const button = document.getElementById("button1")

button.addEventListener("click" , function(event){
    alert("Botao Clicado" , );
    console.log("Id" , event.target.id);
});
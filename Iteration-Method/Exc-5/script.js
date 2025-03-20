const select = document.getElementById("select")
const NullP = document.getElementById("NullP")

select.addEventListener("change", function(){
    if (select.value == "Pequeno") {
        NullP.style.fontSize = "small"; 
    } else if (select.value == "Medio") {
        NullP.style.fontSize = "medium";
    } else if (select.value == "Grande") {
        NullP.style.fontSize = "large";
    }
});



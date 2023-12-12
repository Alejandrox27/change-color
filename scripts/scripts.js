function loaded() {
    const buttonVisualize = document.getElementById("btnVisualize");

    buttonVisualize.addEventListener("click", changeColor, false);
}

function changeColor(){
    const inputColor = document.getElementById("inputColor");
    const par_hex = document.getElementById("hex-color")
    const card_color = document.getElementById("card");

    val = inputColor.value;
    card_color.style.backgroundColor = val;
    par_hex.textContent = val;

    navigator.clipboard
        .writeText(inputColor.value)
        .then(() => window.alert("text copied!"))
        .catch((e) => console.log(e));
}

window.addEventListener("load", loaded, false);
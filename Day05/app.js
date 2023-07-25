// Obtiene los elementos con las etiquetas
var buttonLight = document.getElementById("light-theme"); //sun
var buttonDark = document.getElementById("dark-theme"); //moon
var pageTheme = document.getElementById("page-theme"); //Toda la página

function toggleLight() {
    // Agrega la clase opaque (es visible)
    buttonLight.classList.add("opaque"); 
    // Agrega la clase transparent (no es visible)
    buttonDark.classList.add("transparent");
    // Agrega la clase light (cambia el color de fondo)
    pageTheme.classList.add("dark");
}

function toggleDark() {
    // Quita las clases agregadas en la funcion anterior
    buttonLight.classList.remove("opaque");
    buttonDark.classList.remove("transparent");
    pageTheme.classList.remove("dark");
}
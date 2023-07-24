// Obtiene los elementos con las etiquetas
var boton = document.getElementById("button-light"); //Boton
var ligth_on = document.getElementById("ligth"); //Luz(imagen)

function toggleLigth() {
    // Agrega o quita la clase active (animación del boton para la luz prendida)
    boton.classList.toggle("active");
    // Agrega o quita la clase on (muestra la luz)
    ligth_on.classList.toggle("on"); 
}

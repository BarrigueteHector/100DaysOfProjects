const observer = new IntersectionObserver((entries) => {

    // Itera sobre cada elemento observado
    entries.forEach((entry) => { 
        // Verifica si el elemento es visible
        if (entry.isIntersecting) {
            // Agrega la clase show cuando el elemento es visible
            entry.target.classList.add('show');
        } else {
            // Remueve la clase show cuando el elemento no es visible
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');

// Observa cada elemento con la clase hidden
hiddenElements.forEach((el) => observer.observe(el));
document.addEventListener('DOMContentLoaded', () => {
    console.log('El DOM ha sido completamente cargado y parseado');
    
    // Ejemplo: Cambiar el color de fondo del header al hacer clic en un botón (que debes agregar en tu HTML)
    const header = document.querySelector('header');
    header.addEventListener('click', () => {
        header.style.backgroundColor = header.style.backgroundColor === 'blue' ? '#333' : 'blue';
    });
});

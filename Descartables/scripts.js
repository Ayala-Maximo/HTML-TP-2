function checkboxClicked(element) {
    console.log();('Casilla ' + (element.checked ? 'seleccionada' : 'deseleccionada'));
}

function radioClicked(element) {
    console.log();('Casilla de radio ' + (element.checked ? 'seleccionada' : 'deseleccionada'));
}

function increaseProgress() {
    var progressBar = document.getElementById('progressBar');
    if (progressBar.value < 100) {
        progressBar.value += 10;
    }
}

function rangeChanged(element) {
   console.log();('Valor de la barra de desplazamiento: ' + element.value);
}

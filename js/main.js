const contadorCarrito = document.getElementById("contadorCarrito");

function actualizarNumeroCarrito() {
    const memoria = JSON.parse(localStorage.getItem("perfumes"));
    let contador = 0;
    for (const item of memoria) {
        contador++;
        contadorCarrito.innerText = contador;
    }

}
actualizarNumeroCarrito();

const contenedorStock = document.getElementById("contenedorStock");

fetch('../db/dbPerfumes.json').then(res => res.json()).then(data => {
    const { perfumes } = data;
    crearHtml(perfumes);
});

function agregarAlCarrito(perfume) {
    let memoria = JSON.parse(localStorage.getItem("perfumes"));
    console.log(memoria);
    if (!memoria) {
        const nuevoPerfume = nuevoPerfumeMemoria(perfume);
        localStorage.setItem("perfumes", JSON.stringify([nuevoPerfume]));
        
    } else {
        const indiceProducto = memoria.findIndex(unPerfume => unPerfume.id === perfume.id);
        console.log(indiceProducto);
        const nuevaMemoria = memoria;
        if (indiceProducto === -1) {
            nuevaMemoria.push(nuevoPerfumeMemoria(perfume));
           
            
        } else {
            nuevaMemoria[indiceProducto].cantidad++;
            
        }
        localStorage.setItem("perfumes", JSON.stringify(nuevaMemoria));
    }
}

function nuevoPerfumeMemoria(perfume) {
    const nuevoPerfume = perfume;
    nuevoPerfume.cantidad = 1;
    return nuevoPerfume;
}

//Funcion crear html desestructurada
function crearHtml(perfumes) {
    contenedorStock.innerHTML = "";

    for (const perfume of perfumes) {
        const nuevoPerfume = document.createElement("div");
        const { genero, marca, nombre, cantidadMl, precio, img } = perfume;
        nuevoPerfume.classList = "cardPerfumes";
        nuevoPerfume.innerHTML = `
        
        <img src=" ../images/Perfumes/${img}" alt="${nombre}">
                <h3>${nombre}</h3>
                <p>Marca: ${marca}</p>
                <p>Cantidad: ${cantidadMl} ml</p>
                <p>Genero: ${genero}</p>
                <p>Precio: $${precio} </p>
            
            <button class="btnAgregar" id="${genero}">Agregar al Carrito</button>
            </div>`;

        contenedorStock.appendChild(nuevoPerfume);
        nuevoPerfume.getElementsByTagName("button")[0].addEventListener("click", () => {
            agregarAlCarrito(perfume);
            Swal.fire({
                title: "Agregado al carrito",
                icon: "success"
            });
            actualizarNumeroCarrito();
        }
        );

    }
    
}

actualizarNumeroCarrito();

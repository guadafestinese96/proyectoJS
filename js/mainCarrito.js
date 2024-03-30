const contenedorPerfumesElegidos = document.getElementById("contenedorPerfumesCarrito");

function crearCardsPerfumesElegidos() {
    contenedorPerfumesElegidos.innerHTML = "";
    const perfumes = JSON.parse(localStorage.getItem("perfumes"));
    console.log(perfumes);

    for (const perfume of perfumes) {
        const nuevoPerfume = document.createElement("div");
        const { genero, marca, nombre, cantidadMl, precio, img } = perfume;
        nuevoPerfume.classList = "cardCarrito";
        nuevoPerfume.innerHTML = `
        <div class="imgCarrito">
            <img src=" ../images/Perfumes/${img}" alt="${nombre}">
                <h3>${nombre}</h3>
                <p>Precio: $${precio} </p>
                </div>
            <div class="botones">
                <button class="btnSumarYRestar">-</button>
                <span class="cantidad">0</span>
                <button class="btnSumarYRestar">+</button>
                </div>
            </div>`;

        contenedorPerfumesElegidos.appendChild(nuevoPerfume);
        nuevoPerfume.getElementsByTagName("button")[1].addEventListener("click", (e) => {
            agregarAlCarrito(perfume);
            crearCardsPerfumesElegidos();
            const totalCantidad = e.target.parentElement.getElementsByTagName("span");

            console.log(totalCantidad[0]);
        });

        nuevoPerfume.getElementsByTagName("button")[0].addEventListener("click", (e) => {
            removerDelCarrito(perfume);
            crearCardsPerfumesElegidos();
        })
    }
}


    crearCardsPerfumesElegidos();


    function removerDelCarrito(perfume) {
        const memoria = JSON.parse(localStorage.getItem("perfumes"));
        const indiceProducto = memoria.findIndex(unPerfume => unPerfume.id === perfume.id);
        if (memoria[indiceProducto].cantidad === 1) {
            memoria.splice(indiceProducto, 1);
            localStorage.setItem("perfumes", JSON.stringify(memoria));
        }



        else{
         memoria[indiceProducto].cantidad-- ;
        }
        localStorage.setItem("perfumes", JSON.stringify(memoria));
    }

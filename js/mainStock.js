const contenedorMujer = document.getElementById("contenedorMujer");


//Funcion crear html desestructurada
function crearHtmlMujer(arr) {
    contenedorMujer.innerHTML = "";
    let html;

    for (const perfume of arr) {
        const { genero, marca, nombre, cantidadMl, precio, img } = perfume;
        html = `
        <div class="cardPerfumes mujer">
        <img src=" ../images/Perfumes/${img}" alt="${nombre}">
                <h3>${nombre}</h3>
                <p>Marca: ${marca}</p>
                <p>Cantidad: ${cantidadMl} ml</p>
                <p>Genero: ${genero}</p>
                <p>Precio: $${precio} </p>
            
            <button class="btnAgregar" id="${genero}">Agregar al Carrito</button>
            </div>`;

        contenedorMujer.innerHTML += html;
    }
}


let carritoMujer = [];

const crearHtmlPerfumesMujer = () =>{
    fetch('../db/dbMujer.json').then(res => res.json()).then(data => {
    const { perfumesMujer } = data;
    crearHtmlMujer(perfumesMujer);
    const cardPerfumes = document.querySelectorAll(".cardPerfumes");

    for (const card of cardPerfumes) {
        card.addEventListener("click", e => {
            Swal.fire({
                title: "Agregado al carrito",
                icon: "success"
            });
            if (e.target.classList.contains("btnAgregar")) {
                const product = e.target.parentElement;
                console.log(product);
                console.log(product.querySelector("h3").textContent);
                const propiedades = product.querySelectorAll("p");

                const infoProducto = {
                    cantidad: 1,
                    nombre: product.querySelector("h3").textContent,
                    marca: propiedades[0].textContent,
                    cantidad: propiedades[1].textContent,
                    genero: propiedades[2].textContent,
                    precio: propiedades[3].textContent,
                }
                carritoMujer = [...carritoMujer, infoProducto];
                console.log(carritoMujer);

            }

        })
    }

})
}

//----------------------------------------------------
const contenedorHombre = document.getElementById("contenedorHombre");

function crearHtmlHombre(arr) {
    contenedorHombre.innerHTML = "";
    let html;

    for (const perfume of arr) {
        const { genero, marca, nombre, cantidadMl, precio, img } = perfume;
        html = `
        <div class="cardPerfumes hombre">
        <img src=" ../images/Perfumes/${img}" alt="${nombre}">
                <h3>${nombre}</h3>
                <p>Marca: ${marca}</p>
                <p>Cantidad: ${cantidadMl} ml</p>
                <p>Genero: ${genero}</p>
                <p>Precio: $${precio} </p>
            
            <button class="btnAgregar" id="${genero}">Agregar al Carrito</button>
            </div>`;

        contenedorHombre.innerHTML += html;
    }
}

let carritoHombre = [];

const crearHtmlPerfumesHombre = () =>{
    fetch('../db/dbHombre.json').then(res => res.json()).then(data => {
    const { perfumesHombre } = data;
    crearHtmlHombre(perfumesHombre);
    const cardPerfumesHombre = document.querySelectorAll(".hombre");

    for (const card of cardPerfumesHombre) {
        card.addEventListener("click", e => {
            Swal.fire({
                title: "Agregado al carrito",
                icon: "success"
            });
            if (e.target.classList.contains("btnAgregar")) {
                const product = e.target.parentElement;
                console.log(product);
                console.log(product.querySelector("h3").textContent);
                const propiedades = product.querySelectorAll("p");

                const infoProducto = {
                    cantidad: 1,
                    nombre: product.querySelector("h3").textContent,
                    marca: propiedades[0].textContent,
                    cantidad: propiedades[1].textContent,
                    genero: propiedades[2].textContent,
                    precio: propiedades[3].textContent,
                }
                carritoHombre = [...carritoHombre, infoProducto];
                console.log(carritoHombre);

            }

        })
    }

    
})
}


const carritoSumado = () =>{
crearHtmlPerfumesHombre();
crearHtmlPerfumesMujer();
let carritoTotal = []
carritoTotal = [...carritoTotal, carritoHombre, carritoMujer];
console.log(carritoTotal);
}


carritoSumado();








const contenedorCarrito = document.querySelector(".divCarrito");
console.log(contenedorCarrito);









//async y await. Funcion asincrona. Esto espera que la respuesta dela url se concrete y se pase a json y pueda obtener los datos
/*
const getData = async (url)=>{
    const respuesta = await fetch(url);
    const datos = await respuesta.json();

    const {perfumes} = datos;
    crearHtmlMujer(perfumes)
}

getData('../db/dbMujer.json');
*/

//Node JS y NPM




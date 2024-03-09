
const contenedor = document.querySelector("#contenedor");
const contenedorElegidos = document.querySelector("#perfumesElegidos");
const inputMujer = document.getElementById("inputMujer");
const inputHombre = document.getElementById("inputHombre");
const btnMujer = document.querySelector("#btnMujer");
const btnHombre = document.querySelector("#btnHombre");
const perfumesReservados = [];
let seguirReservando;

const perfumesMujer = [
    { genero: "femenino", marca: "Paco Rabanne", nombre: "lady million", cantidadMl: 60, precio: 21000, img: "ladyMillion.jpg" },
    { genero: "femenino", marca: "Paco Rabanne", nombre: "olympea", cantidadMl: 60, precio: 21000, img: "olympea.jpg" },
    { genero: "femenino", marca: "Paco Rabanne", nombre: "black xs", cantidadMl: 60, precio: 21000, img: "blackXsM.jpg" },
    { genero: "femenino", marca: "Paco Rabanne", nombre: "black xs lexcess", cantidadMl: 60, precio: 21000, img: "blackXsLexcessM.jpg" },
    { genero: "femenino", marca: "Paco Rabanne", nombre: "pure xs", cantidadMl: 60, precio: 21000, img: "pureXsM.jpg" },
    { genero: "femenino", marca: "Dior", nombre: "jadore", cantidadMl: 60, precio: 21000, img: "jadore.jpg" },
    { genero: "femenino", marca: "Dior", nombre: "miss dior", cantidadMl: 60, precio: 21000, img: "missDior.jpg" },
    { genero: "femenino", marca: "Azzaro", nombre: "wanted", cantidadMl: 60, precio: 21000, img: "wantedM.jpg" },
    { genero: "femenino", marca: "Thierry Mugler", nombre: "alien", cantidadMl: 60, precio: 21000, img: "alien.jpg" },
    { genero: "femenino", marca: "Thierry Mugler", nombre: "angel", cantidadMl: 60, precio: 21000, img: "angel.jpg" },
    { genero: "femenino", marca: "Issey Miyake", nombre: "l'eau d'issey", cantidadMl: 60, precio: 21000, img: "miyakeM.jpg" },
    { genero: "femenino", marca: "Lancome", nombre: "la vida es bella", cantidadMl: 60, precio: 21000, img: "lvb.jpg" },
    { genero: "femenino", marca: "Yves Saint Lauren", nombre: "mon paris", cantidadMl: 60, precio: 21000, img: "monParis.jpg" },
    { genero: "femenino", marca: "Dolce Gabbana", nombre: "light blue", cantidadMl: 60, precio: 21000, img: "lightBlue.jpg" },
    { genero: "femenino", marca: "Moschino", nombre: "toy 2", cantidadMl: 60, precio: 21000, img: "toy2.jpg" },
    { genero: "femenino", marca: "Givenchy", nombre: "angel ou demon le secret", cantidadMl: 60, precio: 21000, img: "angOdemon.jpg" },
    { genero: "femenino", marca: "Givenchy", nombre: "linterdit", cantidadMl: 60, precio: 21000, img: "linterdit.jpg" },
    { genero: "femenino", marca: "Calvin Klein", nombre: "eternity", cantidadMl: 60, precio: 21000, img: "eternity.jpg" },
    { genero: "femenino", marca: "Calvin Klein", nombre: "escape", cantidadMl: 60, precio: 21000, img: "escape.jpg" },
    { genero: "femenino", marca: "Calvin Klein", nombre: "one shock", cantidadMl: 60, precio: 21000, img: "oneShock.jpg" },
    { genero: "femenino", marca: "Calvin Klein", nombre: "one", cantidadMl: 60, precio: 21000, img: "ckOne.jpg" },
    { genero: "femenino", marca: "Kenzo", nombre: "flower", cantidadMl: 60, precio: 21000, img: "flower.jpg" },
    { genero: "femenino", marca: "Jesús del Pozo", nombre: "halloween", cantidadMl: 60, precio: 21000, img: "hallo.jpg" },
    { genero: "femenino", marca: "Armani", nombre: "code", cantidadMl: 60, precio: 21000, img: "codeM.jpg" },
    { genero: "femenino", marca: "Armani", nombre: "my way", cantidadMl: 60, precio: 21000, img: "myWay.jpg" },
    { genero: "femenino", marca: "Armani", nombre: "si", cantidadMl: 60, precio: 21000, img: "si.jpg" },
    { genero: "femenino", marca: "Carolina Herrera", nombre: "212 clasico", cantidadMl: 60, precio: 21000, img: "212claM.jpg" },
    { genero: "femenino", marca: "Carolina Herrera", nombre: "212 sexy", cantidadMl: 60, precio: 21000, img: "212sexy.jpg" },
    { genero: "femenino", marca: "Carolina Herrera", nombre: "212 vip", cantidadMl: 60, precio: 21000, img: "212vipM.jpg" },
    { genero: "femenino", marca: "Carolina Herrera", nombre: "212 vip rose", cantidadMl: 60, precio: 21000, img: "212rose.jpg" },
    { genero: "femenino", marca: "Carolina Herrera", nombre: "good girl", cantidadMl: 60, precio: 21000, img: "goodGirl.jpg" },
    { genero: "femenino", marca: "Tommy Hilfiger", nombre: "tommy girl", cantidadMl: 60, precio: 21000, img: "tommyM.jpg" },
];
//------------------------------------------------------------------------------------------

const perfumesHombre = [
    { genero: "masculino", marca: "Paco Rabanne", nombre: "invictus", cantidadMl: 60, precio: 21000, img: "invictus.jpg" },
    { genero: "masculino", marca: "Paco Rabanne", nombre: "one million", cantidadMl: 60, precio: 21000, img: "oneMillion.jpg" },
    { genero: "masculino", marca: "Paco Rabanne", nombre: "black xs", cantidadMl: 60, precio: 21000, img: "blackXsH.jpg" },
    { genero: "masculino", marca: "Paco Rabanne", nombre: "black xs lexcess", cantidadMl: 60, precio: 21000, img: "blackXsLexcessH.jpg" },
    { genero: "masculino", marca: "Paco Rabanne", nombre: "pure xs", cantidadMl: 60, precio: 21000, img: "pureXsH.jpg" },
    { genero: "masculino", marca: "Dior", nombre: "farenheit", cantidadMl: 60, precio: 21000, img: "fht.jpg" },
    { genero: "masculino", marca: "Dior", nombre: "sauvage", cantidadMl: 60, precio: 21000, img: "sauvage.jpg" },
    { genero: "masculino", marca: "Azzaro", nombre: "wanted", cantidadMl: 60, precio: 21000, img: "wantedH.jpg" },
    { genero: "masculino", marca: "Thierry Mugler", nombre: "a men", cantidadMl: 60, precio: 21000, img: "aMen.jpg" },
    { genero: "masculino", marca: "Issey Miyake", nombre: "l'eau d'issey", cantidadMl: 60, precio: 21000, img: "miyakeH.jpg" },
    { genero: "masculino", marca: "Tommy Hilgfiger", nombre: "tommy", cantidadMl: 60, precio: 21000, img: "tommyH.jpg" },
    { genero: "masculino", marca: "Calvin Klein", nombre: "one", cantidadMl: 60, precio: 21000, img: "ckOne.jpg" },
    { genero: "masculino", marca: "Kenzo", nombre: "kenzo", cantidadMl: 60, precio: 21000, img: "kenzoH.jpg" },
    { genero: "masculino", marca: "Ralph Lauren", nombre: "polo blue", cantidadMl: 60, precio: 21000, img: "poloBlue.jpg" },
    { genero: "masculino", marca: "Carolina Herrera", nombre: "212 clasico", cantidadMl: 60, precio: 21000, img: "212claH.jpg" },
    { genero: "masculino", marca: "Carolina Herrera", nombre: "212 vip", cantidadMl: 60, precio: 21000, img: "212vipH.jpg" },
    { genero: "masculino", marca: "Carolina Herrera", nombre: "bad boy", cantidadMl: 60, precio: 21000, img: "badBoy.jpg" },
    { genero: "masculino", marca: "Creed Adventus", nombre: "creed", cantidadMl: 60, precio: 21000, img: "creed.jpg" },
    { genero: "masculino", marca: "Tom Ford", nombre: "ombre leather", cantidadMl: 60, precio: 21000, img: "ombre.jpg" },
    { genero: "masculino", marca: "Armani", nombre: "you", cantidadMl: 60, precio: 21000, img: "you.jpg" },
    { genero: "masculino", marca: "Armani", nombre: "acqua di gio", cantidadMl: 60, precio: 21000, img: "acquaDigGioH.jpg" },
    { genero: "masculino", marca: "Armani", nombre: "code", cantidadMl: 60, precio: 21000, img: "codeH.jpg" },
    { genero: "masculino", marca: "Versace", nombre: "eros", cantidadMl: 60, precio: 21000, img: "eros.jpg" },
    { genero: "masculino", marca: "Versace", nombre: "blue jeans", cantidadMl: 60, precio: 21000, img: "blueJeans.jpg" },
    { genero: "masculino", marca: "Bvlgary", nombre: "pour homme", cantidadMl: 60, precio: 21000, img: "pourHomme.jpg" },
];
//------------------------------------------------------------------------------------------

//Constructor perfume y nueva instancia
function Perfume(genero, marca, nombre, cantidadMl, precio, img) {
    this.genero = genero;
    this.marca = marca;
    this.nombre = nombre;
    this.cantidadMl = parseInt(cantidadMl);
    this.precio = parseInt(precio);
    this.img = img;
}

const perfu = new Perfume("femenino", "Armaf", "Untold", 60, 21000, "untold.jpg");
perfumesMujer.push(perfu);

//------------------------------------------------------------------------------------------

//Funcion para crear html de que no encontro el perfume
const noEncontrado = () => {
    contenedor.innerHTML = "";
    let html = `
    <div id="noEncontrado">
    <h2>No se encontró el perfume</h2>
    </div>`;
    contenedor.innerHTML += html;
}
//------------------------------------------------------------------------------------------

//Función para crear estructura html del perfume encontrado
function crearHtml(arr) {
    contenedor.innerHTML = "";
    let html;

    for (const el of arr) {
        html = `<div class="card">
        <img src=" ../images/Perfumes/${el.img}" alt="${el.nombre}">
                <h3>${el.nombre}</h3>
                <p>Precio: $${el.precio} </p>
              
              <button class="btnAgregar" id="${el.nombre}Btn">Agregar</button>
            </div>`;
        contenedor.innerHTML += html;
    }
}
//------------------------------------------------------------------------------------------

//Funcion crear html desestructurada
function crearHtml2(arr) {
    contenedor.innerHTML = "";
    let html;
    const carrito = [];


    for (const perfume of arr) {
        const { genero, marca, nombre, cantidadMl, precio, img } = perfume;

        html = `<div class="card">
        <img src=" ../images/Perfumes/${img}" alt="${nombre}">
                
                <h3>${nombre}</h3>
                <p>Marca: ${marca}</p>
                <p>Cantidad: ${cantidadMl} ml</p>
                <p>Genero: ${genero}</p>
                <p>Precio: $${precio} </p>
              
              <button class="btnAgregar" id="${nombre}Btn">Agregar al Carrito</button>
            </div>`;
        contenedor.innerHTML += html;

        //poder agregar varios VER
        
        const btnAgregarClass = document.getElementsByClassName(".btnAgregar");
        const btnAgregarAlCarrito = document.getElementById(`${nombre}Btn`)
     

        btnAgregarAlCarrito.addEventListener("click", () => {
            carrito.push(perfume)
            alert("Agregado")
            console.log(carrito);

        })

    }

}


//------------------------------------------------------------------------------------------


function buscarPerfume(array, perfu) {
    return array.find((elemento) => elemento.nombre.includes(perfu));
}

function filtrarPerfumes(arr, filtro) {
    const filtrado = arr.filter((el) => {
        return el.nombre.includes(filtro);
    });
    return filtrado;
}
//------------------------------------------------------------------------------------------

//Boton de busqueda mujer
btnMujer.addEventListener("click", () => {
    const filtrado = filtrarPerfumes(perfumesMujer, inputMujer.value);
    (filtrado[0] != undefined) ? crearHtml2(filtrado) : noEncontrado();
    /*
    if (filtrado[0] != undefined) {
        crearHtml(filtrado);
    } else {
        noEncontrado();
    }
    //console.log(filtrado);*/
});
//------------------------------------------------------------------------------------------

//Boton de busqueda hombre
btnHombre.addEventListener("click", () => {
    const filtrado = filtrarPerfumes(perfumesHombre, inputHombre.value);
    (filtrado[0] != undefined) ? crearHtml2(filtrado) : noEncontrado();
    /*
    if (filtrado[0] != undefined) {
        crearHtml(filtrado);
    } else {
       noEncontrado();
    }
    console.log(filtrado);*/
});

//

/*
const comprarPerfumesMujer = () => {
    let perfu;
    let encontrado;
    let seguir;
    do {
        perfu = prompt("Ingrese el nombre del perfume de mujer que desea buscar: ");
        encontrado = buscarPerfume(perfumesMujer, perfu);
        if (encontrado != undefined) {
            perfumesReservados.push(encontrado);
            alert("Perfume encontrado");
        }
        seguir = prompt("Quiere seguir buscando perfumes de mujer? si o no");
    } while (seguir == "si");

}

const comprarPerfumesHombre = () => {
    let perfu;
    let encontrado;
    let seguir;
    do {
        perfu = prompt("Ingrese el nombre del perfume de hombre que desea buscar: ");
        encontrado = buscarPerfume(perfumesHombre, perfu);
        if (encontrado != undefined) {
            perfumesReservados.push(encontrado);
            alert("Perfume encontrado");
        }
        seguir = prompt("Quiere seguir buscando perfumes de hombre? si o no");
    } while (seguir == "si");
}

*/



const ingreso = (arrayOpciones) => {
    alert(arrayOpciones);
    let opcionIngresada = parseInt(prompt("Ingrese el número de opción que quiera seleccionar: "));
    return opcionIngresada;
}
let opcionesZona = "Selecciona tu zona: \n1)BUENOS AIRES \n2)NORTE: Jujuy, Formosa, Salta, Chaco, Tucumán, Catamarca, Santiago del Estero, Corrientes, Misiones, La Rioja.  \n3)CENTRO: Entre Ríos, Santa Fé, Córdoba, San Juan, San Luis, Mendoza, La Pampa. \n4)SUR: Neuquén, Río Negro, Chubut, Santa Cruz, Tierra del Fuego. \n5) Salir.";
let opcionesCaba = "Si es de CABA ingrese 1, si es de GBA ingrese 2";
let opcionZona;

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
const perfumesReservados = [];
let seguirReservando;

function Perfume(genero, marca, nombre, cantidadMl, precio, img){
    this.genero = genero;
    this.marca = marca;
    this.nombre = nombre;
    this.cantidadMl = parseInt(cantidadMl);
    this.precio = parseInt(precio);
    this.img = img;
}

// const inputNombre = document.getElementById("nombre");
// const inputEmail = document.getElementById("email");
// const inputCelular = document.getElementById("celular");



do {
    opcionZona = ingreso(opcionesZona);

    switch (opcionZona) {
        case 1:
            let opBsAs = ingreso(opcionesCaba);
            switch (opBsAs) {
                case 1:
                    let ingresoCABA = parseInt(prompt("Ingrese los km desde Avenida Cabildo 900 hacia su dirección: "));
                    if (ingresoCABA <= 0) {
                        alert("Error, ingrese un numero de kilómetros valido");
                        break;
                    } else {
                        let resultado1 = ingresoCABA * 250;
                        alert("El valor del envío por motomensajería a su domicilio es: $" + resultado1);
                    }
                    break;
                case 2:
                    let ingresoGBA = parseInt(prompt("Ingrese los km desde Avenida Patricios 200 hacia su dirección: "));
                    if (ingresoGBA <= 0) {
                        alert("Error, ingrese un numero de kilómetros valido");
                        break;
                    } else {
                        let resultado2 = ingresoGBA * 250;
                        alert("El valor del envío por motomensajería a su domicilio es: $" + resultado2);
                    }
                    break;
                default:
                    alert("Opción inválida");
                    break;
            }
            break;
        case 2:
            alert("El envío por Vía Cargo al Norte de Argentina vale $10.500");
            break;
        case 3:
            alert("El envío al Centro de Argentina por Vía Cargo vale $9.500");
            break;
        case 4:
            alert("El envío al Sur de Argentina vale $10.500");
            break;
        case 5:
            opcionZona == 5;
            break;
        default:
            alert("Opcion zona inválida");
            break;
    }
} while (opcionZona != 5);



// console.log(`Hola ${inputNombre.value}, tu email es ${inputEmail.value} y tu celular es ${inputCelular.value}`);



function buscarPerfume(array, perfu) {
    return array.find((elemento) => elemento.nombre.includes(perfu));
}

function filtrarPerfumes(arr, filtro) {
    const filtrado = arr.filter((el) => {
        return el.nombre.includes(filtro);
    });
    return filtrado;
}

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


do {
    const consulta = prompt("Si quiere buscar comprar perfumes de mujer ingrese 1, de hombre ingrese 2: ");
    if (consulta == 1) {
        comprarPerfumesMujer();
    } else if (consulta == 2) {
        comprarPerfumesHombre();
    } else {
        console.log("Opcion inválida");
    }
    seguirReservando = prompt("Quiere seguir reservando perfumes de hombre o mujer? si o no: ");

} while (seguirReservando != "no");

alert("Perfumes elegidos: ");


//Recorro el array de perfumes reservados y muestro el nombre de cada perfume(objeto)
for (const perfume of perfumesReservados) {
    alert(perfume.nombre);
}


function acumuladorPrecios(arrayPerfumes){
    let acumulador = 0;
    let contador = 0;
    for (const perfume of arrayPerfumes) {
        acumulador += perfume.precio;
        contador +=1;
    }
    
    if(contador >= 5){
        alert("Por llevar más de 5 perfumes tenés un 10% de descuento");
        acumulador = acumulador - (acumulador*10/100);
    }
    return acumulador;
}

alert("El valor total de los perfumes que eligió es: $" + acumuladorPrecios(perfumesReservados));



const inputContactoDatos = document.querySelectorAll(".inputContacto");
const inputNombre = inputContactoDatos[0];
const inputEmail = inputContactoDatos[1];
const inputCelular = inputContactoDatos[2];
/*
inputNombre.addEventListener("keyup", ()=>{
    console.log(inputNombre.value);
})
inputEmail.addEventListener("keyup", ()=>{
    console.log(inputEmail.value);
})
inputCelular.addEventListener("keyup", ()=>{
    console.log(inputCelular.value);
})



const opcionesEnvios=[
    "Buenos Aires",
    "Centro",
    "Norte",
    "Sur"
 ]

 const select= document.querySelector("#selectEnvios");
 opcionesEnvios.forEach((zona)=>{
    let option = document.createElement("option");
   option.value = zona;
     option.innerText = zona;
    select.append(option);
 })

select.addEventListener("change", ()=>{
     let option = select.options[selectEnvios.selectedIndex].value;
     console.log(option);
})


const btnHombre = document.getElementById("btnHombre");
console.log(btnHombre);
btnHombre.addEventListener("click", () => {
    alert("Tocaste el boton de hombre");
})


const btnMujer = document.getElementById("btnMujer");
console.log(btnMujer);
btnMujer.addEventListener("click", ()=>{
    alert("Tocaste el boton de mujer");
})
*/


contenedor = document.querySelector("#contenedor");
const noEncontrado= ()=>{
    contenedor.innerHTML= "";
    let html = `
    <div id="noEncontrado">
    <h2>No se encontró el perfume</h2>
    </div>`;
    contenedor.innerHTML = contenedor.innerHTML + html;
}

// Función para crear estructura html
function crearHtml(arr) {
    contenedor.innerHTML = "";
    let html;

    for (const el of arr) {
        html = `<div class="card">
        <img src=" ../images/Perfumes/${el.img}" alt="${el.nombre}">
                <hr>
                <h3>${el.nombre}</h3>
                <p>Precio: $${el.precio} </p>
              
              <button class="btnAgregar" id="${el.id}">Agregar</button>
            </div>`;
        contenedor.innerHTML = contenedor.innerHTML + html;
    }
}

const inputMujer = document.getElementById("inputMujer");
const inputHombre = document.getElementById("inputHombre");

//evento


btnMujer.addEventListener("click", () => {
    const filtrado = filtrarPerfumes(perfumesMujer, inputMujer.value);
    if (filtrado[0] != undefined) {
        crearHtml(filtrado);
    } else {
        noEncontrado();
    }
    //console.log(filtrado);
    
});

btnHombre.addEventListener("click", () => {
    const filtrado = filtrarPerfumes(perfumesHombre, inputHombre.value);
    if (filtrado[0] != undefined) {
        crearHtml(filtrado);
    } else {
       noEncontrado();
    }
    //console.log(filtrado);
    
});
/*

const carrito = []
const perfu= buscarPerfume(perfumesHombre, "you")
carrito.push(perfu)
localStorage.setItem("carrito", JSON.stringify(perfu));

const carritodels = JSON.parse(localStorage.getItem('carrito'))
console.log(carritodels);*/
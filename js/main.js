
const ingreso = (arrayOpciones) => {
    console.log(arrayOpciones);
    let opcionIngresada = parseInt(prompt("Ingrese el número de opción que quiera seleccionar: "));
    return opcionIngresada;
}
let opcionesZona = "Selecciona tu zona: \n1)BUENOS AIRES \n2)NORTE: Jujuy, Formosa, Salta, Chaco, Tucumán, Catamarca, Santiago del Estero, Corrientes, Misiones, La Rioja.  \n3)CENTRO: Entre Ríos, Santa Fé, Córdoba, San Juan, San Luis, Mendoza, La Pampa. \n4)SUR: Neuquén, Río Negro, Chubut, Santa Cruz, Tierra del Fuego. \n5) Salir.";
let opcionesCaba = "Si es de CABA ingrese 1, si es de GBA ingrese 2";
let opcionZona;

const perfumesMujer = [
    { genero: "femenino", marca: "Paco Rabanne", nombre: "lady million", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Paco Rabanne", nombre: "olympea", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Paco Rabanne", nombre: "black xs", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Paco Rabanne", nombre: "black xs lexcess", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Paco Rabanne", nombre: "pure xs", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Dior", nombre: "jadore", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Dior", nombre: "miss dior", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Azzaro", nombre: "wanted", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Thierry Mugler", nombre: "alien", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Thierry Mugler", nombre: "angel", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Issey Miyake", nombre: "l'eau d'issey", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Lancome", nombre: "la vida es bella", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Yves Saint Lauren", nombre: "mon paris", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Dolce Gabbana", nombre: "ight blue", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Moschino", nombre: "toy 2", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Givenchy", nombre: "angel ou demon le secret", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Givenchy", nombre: "linterdit", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Calvin Klein", nombre: "eternity", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Calvin Klein", nombre: "escape", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Calvin Klein", nombre: "one shock", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Calvin Klein", nombre: "one", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Kenzo", nombre: "flower", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Jesús del Pozo", nombre: "halloween", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Armani", nombre: "code", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Armani", nombre: "my way", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Armani", nombre: "si", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Carolina Herrera", nombre: "212 clasico", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Carolina Herrera", nombre: "212 sexy", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Carolina Herrera", nombre: "212 vip", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Carolina Herrera", nombre: "212 vip rose", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Carolina Herrera", nombre: "good girl", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Tommy Hilgfiger", nombre: "tommy girl", cantidadMl: 60, precio: 21000 },
];

const perfumesHombre = [
    { genero: "masculino", marca: "Paco Rabanne", nombre: "invictus", cantidadMl: 60, precio: 21000 },
    { genero: "masculino", marca: "Paco Rabanne", nombre: "one million", cantidadMl: 60, precio: 21000 },
    { genero: "masculino", marca: "Paco Rabanne", nombre: "black xs", cantidadMl: 60, precio: 21000 },
    { genero: "masculino", marca: "Paco Rabanne", nombre: "black xs lexcess", cantidadMl: 60, precio: 21000 },
    { genero: "masculino", marca: "Paco Rabanne", nombre: "pure xs", cantidadMl: 60, precio: 21000 },
    { genero: "masculino", marca: "Dior", nombre: "farenheit", cantidadMl: 60, precio: 21000 },
    { genero: "masculino", marca: "Dior", nombre: "sauvage", cantidadMl: 60, precio: 21000 },
    { genero: "masculino", marca: "Azzaro", nombre: "wanted", cantidadMl: 60, precio: 21000 },
    { genero: "masculino", marca: "Thierry Mugler", nombre: "a men", cantidadMl: 60, precio: 21000 },
    { genero: "masculino", marca: "Issey Miyake", nombre: "l'eau d'issey", cantidadMl: 60, precio: 21000 },
    { genero: "masculino", marca: "Tommy Hilgfiger", nombre: "tommy", cantidadMl: 60, precio: 21000 },
    { genero: "masculino", marca: "Calvin Klein", nombre: "one", cantidadMl: 60, precio: 21000 },
    { genero: "masculino", marca: "Kenzo", nombre: "kenzo", cantidadMl: 60, precio: 21000 },
    { genero: "masculino", marca: "Ralph Lauren", nombre: "polo blue", cantidadMl: 60, precio: 21000 },
    { genero: "masculino", marca: "Carolina Herrera", nombre: "212 clasico", cantidadMl: 60, precio: 21000 },
    { genero: "masculino", marca: "Carolina Herrera", nombre: "212 vip", cantidadMl: 60, precio: 21000 },
    { genero: "masculino", marca: "Carolina Herrera", nombre: "bad boy", cantidadMl: 60, precio: 21000 },
    { genero: "masculino", marca: "Creed Adventus", nombre: "creed", cantidadMl: 60, precio: 21000 },
    { genero: "masculino", marca: "Tom Ford", nombre: "ombre leather", cantidadMl: 60, precio: 21000 },
    { genero: "masculino", marca: "Armani", nombre: "you", cantidadMl: 60, precio: 21000 },
    { genero: "masculino", marca: "Armani", nombre: "acqua di gio", cantidadMl: 60, precio: 21000 },
    { genero: "masculino", marca: "Armani", nombre: "code", cantidadMl: 60, precio: 21000 },
    { genero: "masculino", marca: "Versace", nombre: "eros", cantidadMl: 60, precio: 21000 },
    { genero: "masculino", marca: "Versace", nombre: "blue jeans", cantidadMl: 60, precio: 21000 },
    { genero: "masculino", marca: "Bvlgary", nombre: "pour homme", cantidadMl: 60, precio: 21000 },
];
const perfumesReservados = [];
let seguirReservando;

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
                        console.log("Error, ingrese un numero de kilómetros valido");
                        break;
                    } else {
                        let resultado1 = ingresoCABA * 250;
                        console.log("El valor del envío por motomensajería a su domicilio es: $" + resultado1);
                    }
                    break;
                case 2:
                    let ingresoGBA = parseInt(prompt("Ingrese los km desde Avenida Patricios 200 hacia su dirección: "));
                    if (ingresoGBA <= 0) {
                        console.log("Error, ingrese un numero de kilómetros valido");
                        break;
                    } else {
                        let resultado2 = ingresoGBA * 250;
                        console.log("El valor del envío por motomensajería a su domicilio es: $" + resultado2);
                    }
                    break;
                default:
                    console.log("Opción inválida");
                    break;
            }
            break;
        case 2:
            console.log("El envío por Vía Cargo al Norte de Argentina vale $10.500");
            break;
        case 3:
            console.log("El envío al Centro de Argentina por Vía Cargo vale $9.500");
            break;
        case 4:
            console.log("El envío al Sur de Argentina vale $10.500");
            break;
        case 5:
            opcionZona == 5;
            break;
        default:
            console.log("Opcion zona inválida");
            break;
    }
} while (opcionZona != 5);



// console.log(`Hola ${inputNombre.value}, tu email es ${inputEmail.value} y tu celular es ${inputCelular.value}`);



function buscarPerfume(array, perfu) {
    return array.find((elemento) => elemento.nombre.includes(perfu));
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

console.log("Perfumes elegidos: ");
console.log(perfumesReservados);

function acumuladorPrecios(arrayPerfumes){
    let acumulador = 0;
    let contador = 0;
    for (const perfume of arrayPerfumes) {
        acumulador += perfume.precio;
        contador +=1;
    }
    
    if(contador >= 5){
        console.log("Por llevar más de 5 perfumes tenés un 10% de descuento");
        acumulador = acumulador - (acumulador*10/100);
    }
    return acumulador;
}

console.log("El valor total de los perfumes que eligió es: $" + acumuladorPrecios(perfumesReservados));




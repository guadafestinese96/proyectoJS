
const ingreso = (arrayOpciones) => {
    console.log(arrayOpciones);
    let opcionIngresada = parseInt(prompt("Ingrese el número de opción que quiera seleccionar: "));
    return opcionIngresada;
}
let opcionesZona = "Selecciona tu zona: \n1)BUENOS AIRES \n2)NORTE: Jujuy, Formosa, Salta, Chaco, Tucumán, Catamarca, Santiago del Estero, Corrientes, Misiones, La Rioja.  \n3)CENTRO: Entre Ríos, Santa Fé, Córdoba, San Juan, San Luis, Mendoza, La Pampa. \n4)SUR: Neuquén, Río Negro, Chubut, Santa Cruz, Tierra del Fuego. \n5) Salir.";
let opcionesCaba = "Si es de CABA ingrese 1, si es de GBA ingrese 2";
let opcionZona;

const perfumesMujer = [
    { genero: "femenino", marca: "Paco Rabanne", nombre: "Lady Million", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Paco Rabanne", nombre: "Olympea", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Paco Rabanne", nombre: "Black XS", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Paco Rabanne", nombre: "Black XS L'Excess", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Paco Rabanne", nombre: "Pure XS", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Dior", nombre: "Jadore", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Dior", nombre: "Miss Dior", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Azzaro", nombre: "Wanted", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Thierry Mugler", nombre: "Alien", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Thierry Mugler", nombre: "Angel", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Issey Miyake", nombre: "L'eau D'Issey", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Lancome", nombre: "La vida es bella", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Yves Saint Lauren", nombre: "Mon Paris", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Dolce Gabbana", nombre: "Light Blue", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Moschino", nombre: "Toy 2", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Givenchy", nombre: "Angel Ou Demon Le Secret", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Givenchy", nombre: "Linterdit", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Calvin Klein", nombre: "Eternity", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Calvin Klein", nombre: "Escape", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Calvin Klein", nombre: "One Shock", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Calvin Klein", nombre: "One", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Kenzo", nombre: "Flower", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Jesús del Pozo", nombre: "Halloween", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Armani", nombre: "Code", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Armani", nombre: "My Way", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Armani", nombre: "Si", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Carolina Herrera", nombre: "212 Clásico", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Carolina Herrera", nombre: "212 Sexy", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Carolina Herrera", nombre: "212 Vip", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Carolina Herrera", nombre: "212 Vip Rosé", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Carolina Herrera", nombre: "Good Girl", cantidadMl: 60, precio: 21000 },
    { genero: "femenino", marca: "Tommy Hilgfiger", nombre: "Tommy Girl", cantidadMl: 60, precio: 21000 },
];

const perfumesHombre = [
    { genero: "masculino", marca: "Paco Rabanne", nombre: "Invictus", cantidadMl: 60, precio: 21000 },
    { genero: "masculino", marca: "Paco Rabanne", nombre: "One Million", cantidadMl: 60, precio: 21000 },
    { genero: "masculino", marca: "Paco Rabanne", nombre: "Black XS", cantidadMl: 60, precio: 21000 },
    { genero: "masculino", marca: "Paco Rabanne", nombre: "Black XS L'Excess", cantidadMl: 60, precio: 21000 },
    { genero: "masculino", marca: "Paco Rabanne", nombre: "Pure XS", cantidadMl: 60, precio: 21000 },
    { genero: "masculino", marca: "Dior", nombre: "Farenheit", cantidadMl: 60, precio: 21000 },
    { genero: "masculino", marca: "Dior", nombre: "Sauvage", cantidadMl: 60, precio: 21000 },
    { genero: "masculino", marca: "Azzaro", nombre: "Wanted", cantidadMl: 60, precio: 21000 },
    { genero: "masculino", marca: "Thierry Mugler", nombre: "A men", cantidadMl: 60, precio: 21000 },
    { genero: "masculino", marca: "Issey Miyake", nombre: "L'eau D'Issey", cantidadMl: 60, precio: 21000 },
    { genero: "masculino", marca: "Tommy Hilgfiger", nombre: "Tommy Clásico", cantidadMl: 60, precio: 21000 },
    { genero: "masculino", marca: "Calvin Klein", nombre: "One", cantidadMl: 60, precio: 21000 },
    { genero: "masculino", marca: "Kenzo", nombre: "Clásico", cantidadMl: 60, precio: 21000 },
    { genero: "masculino", marca: "Ralph Lauren", nombre: "Polo Blue", cantidadMl: 60, precio: 21000 },
    { genero: "masculino", marca: "Carolina Herrera", nombre: "212 Clásico", cantidadMl: 60, precio: 21000 },
    { genero: "masculino", marca: "Carolina Herrera", nombre: "212 Vip", cantidadMl: 60, precio: 21000 },
    { genero: "masculino", marca: "Carolina Herrera", nombre: "Bad Boy", cantidadMl: 60, precio: 21000 },
    { genero: "masculino", marca: "Creed Adventus", nombre: "Creed", cantidadMl: 60, precio: 21000 },
    { genero: "masculino", marca: "Tom Ford", nombre: "Ombre Leather", cantidadMl: 60, precio: 21000 },
    { genero: "masculino", marca: "Armani", nombre: "You", cantidadMl: 60, precio: 21000 },
    { genero: "masculino", marca: "Armani", nombre: "Acqua Di Gio", cantidadMl: 60, precio: 21000 },
    { genero: "masculino", marca: "Armani", nombre: "Code", cantidadMl: 60, precio: 21000 },
    { genero: "masculino", marca: "Versace", nombre: "Eros", cantidadMl: 60, precio: 21000 },
    { genero: "masculino", marca: "Versace", nombre: "Blue Jeans", cantidadMl: 60, precio: 21000 },
    { genero: "masculino", marca: "Bvlgary", nombre: "Pour Homme", cantidadMl: 60, precio: 21000 },
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
    for (const perfume of arrayPerfumes) {
        acumulador += perfume.precio;
    }
    return acumulador;
}

console.log("El valor total de los perfumes que eligió es: $" + acumuladorPrecios(perfumesReservados));




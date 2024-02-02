let opcion = parseInt(prompt("Selecciona tu zona: \n1)BUENOS AIRES \n2)NORTE: Jujuy, Formosa, Salta, Chaco, Tucumán, Catamarca, Santiago del Estero, Corrientes, Misiones, La Rioja.  \n3)CENTRO: Entre Ríos, Santa Fé, Córdoba, San Juan, San Luis, Mendoza, La Pampa. \n4)SUR: Neuquén, Río Negro, Chubut, Santa Cruz, Tierra del Fuego."))
switch (opcion) {
    case 1:
        let op = parseInt(prompt("Si es de CABA ingrese 1, si es de GBA ingrese 2"));
        switch (op) {
            case 1:
                let ingresoCABA = parseInt(prompt("Ingrese los km desde Avenida Cabildo 900 hacia su dirección: "));
                if(ingresoCABA <= 0){
                    alert("Error, ingrese un numero de kilómetros valido");
                    break;
                }else{
                    let resultado1 = ingresoCABA * 250;
                    alert ("El valor del envío por motomensajería a su domicilio es: $" + resultado1);
                }
                break;
            case 2:
                let ingresoGBA = parseInt(prompt("Ingrese los km desde Avenida Patricios 200 hacia su dirección: "));
                if(ingresoGBA <= 0){
                    alert("Error, ingrese un numero de kilómetros valido");
                    break;
                }else{
                    let resultado2 = ingresoGBA * 250;
                    alert ("El valor del envío por motomensajería a su domicilio es: $" + resultado2);
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
    default:
        alert("OPCION INVALIDA");
        break;
}


const opcionesEnvios = [
    "Buenos Aires - CABA",
    "Buenos Aires - GBA",
    "Centro",
    "Norte",
    "Sur"
]

const select = document.querySelector("#selectEnvios")
const envioCaba = document.querySelector("#selectCaba");
const contenedorZona = document.querySelector("#contenedorZona");
const btnCalcular = document.querySelector("#btnCalcular");

//--------------------------------------------------------------------------------------
opcionesEnvios.forEach((zona) => {
    let option = document.createElement("option");
    option.value = zona;
    option.innerText = zona;
    select.append(option);
})
//--------------------------------------------------------------------------------------
const arrayPrecio = (arr) => {
    contenedorZona.innerHTML = "";
    let html = `
    <div id="arrayPrecio">
    <h5 id="h5Precio">${arr}</h5>
    </div>`;
    contenedorZona.innerHTML += html;
}

//--------------------------------------------------------------------------------------

const precioEnvio = (arrayDir) => {
    contenedorZona.innerHTML = "";

    let html = `
    <div id="cardZona">
    <h5>Ingrese la cantidad de km desde la siguiente direccion: </h5>
    <h5>${arrayDir}</h5>
    <form id="formKm"> 
        <input type="text" class="inputEnvios" id="inputEnvios">
        <button type="submit" id="btnCantKm" class="btnCantKm">Enviar</button>
    </form>
    </div>
    `;
    contenedorZona.innerHTML += html;

    const cantKm = document.getElementById("inputEnvios");
    console.log(cantKm.value);
    const formKm = document.getElementById("formKm");

    formKm.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("Form enviado");
        console.log(event.target[0].value);
        const retorno = (event.target[0].value)*250;
        arrayPrecio("El valor del envio es: $"+ retorno)
    })

}


//--------------------------------------------------------------------------------------

select.addEventListener("change", () => {
    let option = select.options[select.selectedIndex].value;
    if (option == "Buenos Aires - CABA") {
        btnCalcular.addEventListener("click", () => {
            precioEnvio("Avenida Cabildo 900");
        })

    } else if (option == "Buenos Aires - GBA") {
        btnCalcular.addEventListener("click", () => {
            precioEnvio("Avenida Patricios 200")
        })
    } else if (option == "Centro") {
        btnCalcular.addEventListener("click", () => {
            arrayPrecio("El envío al Centro del país vale $12.000")
        })
    } else if (option == "Norte") {
        btnCalcular.addEventListener("click", () => {
            arrayPrecio("El envío al Norte del país vale $15.000")
        })
    }
    else if (option == "Sur") {
        btnCalcular.addEventListener("click", () => {
            arrayPrecio("El envío al Sur del país vale $15.000")
        })
    }
})


//--------------------------------------------------------------------------------------


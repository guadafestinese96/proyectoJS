const opcionesEnvios = [
    "Buenos Aires - CABA",
    "Buenos Aires - GBA",
    "Centro",
    "Norte",
    "Sur"
]

const select = document.querySelector("#selectEnvios");
opcionesEnvios.forEach((zona) => {
    let option = document.createElement("option");
    option.value = zona;
    option.innerText = zona;
    select.append(option);
})


const contenedorZona = document.querySelector("#contenedorZona");


const precioEnvio = (arrayDir) => {
    contenedorZona.innerHTML = "";


    let html = `
    <div class="cardZona">
    <h2>Ingrese la cantidad de km desde la siguiente direccion: </h2>
    <h2>${arrayDir}</h2>
    <input type="text" class="inputEnvios">
    <button type="submit" id="btnCantKm" class="btnCantKm">Enviar</button>
    </div>
    `;
    contenedorZona.innerHTML += html;

    const cantKm = parseInt(document.querySelector("#inputEnvios"));
    const btnCalcularPrecio = document.querySelector("#btnCantKm")

    btnCalcularPrecio.addEventListener("click", () => {
        alert(cantKm * 250)
    })
}


const btnCalcular = document.querySelector("#btnCalcular");


select.addEventListener("change", () => {
    let option = select.options[selectEnvios.selectedIndex].value;
    if (option == "Buenos Aires - CABA") {
        btnCalcular.addEventListener("click", () => {
            precioEnvio("Avenida Cabildo 900")
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
    } else {
        alert("nada")
    }
})

const arrayPrecio = (arr) => {
    contenedorZona.innerHTML = "";
    let html = `
    <div id="arrayPrecio">
    <h2>${arr}</h2>
    </div>`;
    contenedorZona.innerHTML += html;
}
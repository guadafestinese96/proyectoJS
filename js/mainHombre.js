const contenedorHombre = document.getElementById("contenedorHombre");

//Funcion crear html desestructurada
function crearHtmlHombre(arr) {
    contenedorHombre.innerHTML = "";
    let html;
    const carrito = [];

    for (const perfume of arr) {
        const { genero, marca, nombre, cantidadMl, precio, img } = perfume;
        html = `
        <div class="cardHombre">
        <img src=" ../images/Perfumes/${img}" alt="${nombre}">
                <h3>${nombre}</h3>
                <p>Marca: ${marca}</p>
                <p>Cantidad: ${cantidadMl} ml</p>
                <p>Genero: ${genero}</p>
                <p>Precio: $${precio} </p>
              <button class="btnAgregar" id="${nombre}Btn">Agregar al Carrito</button>
            </div>`;
        contenedorHombre.innerHTML += html;
    }
    const btnAgregar = document.getElementsByClassName("btnAgregar");
    //console.log(btnAgregar[5]);
    
    for (const btn of btnAgregar) {
        //console.log(btn);
        btn.addEventListener("click", ()=>{
            console.log("click "+ btn.id);
            carrito.push(btn.nombre)
            console.log(carrito);
            Swal.fire({
                title: "Agregado al carrito",
                //text: "You clicked the button!",
                icon: "success"
              });
        })
    }
}

fetch('../db/dbHombre.json').then(res=>res.json()).then(data=>{
    const {perfumesHombre}= data;
    console.log(perfumesHombre);
    crearHtmlHombre(perfumesHombre)
})
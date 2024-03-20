const contenedorMujer = document.getElementById("contenedorMujer");

//Funcion crear html desestructurada
function crearHtmlMujer(arr) {
    contenedorMujer.innerHTML = "";
    let html;
    const carrito = [];

    for (const perfume of arr) {
        const { genero, marca, nombre, cantidadMl, precio, img } = perfume;
        html = `
        <div class="cardMujer">
        <img src=" ../images/Perfumes/${img}" alt="${nombre}">
                <h3>${nombre}</h3>
                <p>Marca: ${marca}</p>
                <p>Cantidad: ${cantidadMl} ml</p>
                <p>Genero: ${genero}</p>
                <p>Precio: $${precio} </p>
            
            <button class="btnAgregar" id="${nombre}_btn">Agregar al Carrito</button>
            </div>`;
            
        contenedorMujer.innerHTML += html;
    }
    const btnAgregar = document.getElementsByClassName("btnAgregar");
    //console.log(btnAgregar[5]);
    
    for (const btn of btnAgregar) {
        //console.log(btn);
        btn.addEventListener("click", ()=>{
            console.log("click "+ btn.id);
            carrito.push(btn.nombre)
            console.log(carrito);
        })
    }
    
}

fetch('../db/dbMujer.json').then(res=>res.json()).then(data=>{
    const {perfumesMujer}= data;
    //console.log(perfumesMujer);
    crearHtmlMujer(perfumesMujer);
    
})
//<!--<button class="btnAgregar" id="${nombre}Btn">Agregar al Carrito</button>--!>


const formulario = document.querySelector("#formularioContactoId");
console.log(formulario);

const nombreForm = document.getElementById("nombre");


formulario.addEventListener("submit", (event)=>{
    event.preventDefault();
    console.log("Form enviado");
    console.log(event.target[0]);
    console.log(event.target[0].value);
    console.log(event.target[1].value);
    console.log(event.target[2].value);
    console.log(event.target[3].value);
    console.log(nombreForm.value);
})

/*
const enviar = document.getElementById("boton");
boton.addEventListener("click", ()=>{
     console.log("Apretaste");
})

*/
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
*/
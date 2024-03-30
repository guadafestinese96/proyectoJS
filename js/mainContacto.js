const formulario = document.querySelector("#formularioContactoId");
const nombreForm = document.getElementById("nombre");
const btnEnviar = document.getElementById("boton");
const check = document.querySelector("#checkbox");


formulario.addEventListener("submit", (event)=>{
    event.preventDefault();
    console.log("Form enviado");
    console.log(event.target[0]);
    console.log(event.target[0].value);
    console.log(event.target[1].value);
    console.log(event.target[2].value);
    console.log(event.target[3].value);
    console.log(nombreForm.value);
    
    Swal.fire({
        title: "Gracias por comunicarte con Widistore",
        icon: "success"
    });
    formulario.reset();
})


const inputContactoDatos = document.querySelectorAll(".inputContacto");
const inputNombre = inputContactoDatos[0];
const inputEmail = inputContactoDatos[1];
const inputCelular = inputContactoDatos[2];
const p = document.querySelector("#p")

function guardarEnStorageContacto(storage) {
    let user = { nombre: inputNombre.value, mail: inputEmail.value, celular: inputCelular.value };
    if (inputNombre.value == "" || inputEmail.value == ""|| inputCelular.value =="") {
        p.innerHTML = "Los campos no pueden estar vacíos";
        return;
    }
    console.log(inputCelular.value);
    storage == "local" && localStorage.setItem("user", JSON.stringify(user));
    storage == "session" && sessionStorage.setItem("user", JSON.stringify(user));
    console.log("guardado");
}


formulario.addEventListener("submit", (e) => {
    e.preventDefault();
     check.checked ? guardarEnStorageContacto("local") : guardarEnStorageContacto("session");
})
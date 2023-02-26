
//Creamos un variable que almacena la informacion del elemento btn
const btn = document.querySelector("[data-form-btn]");

//Funcion que escribe el contenido del input y previene la actualizacion de la pagina
const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);
}

//Evento listener cuando se hace click en el boton este agrega el contenido del input
btn.addEventListener("click", createTask);
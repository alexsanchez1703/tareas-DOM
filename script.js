
//Creamos un variable que almacena la informacion del elemento btn
const btn = document.querySelector("[data-form-btn]");


const createTask = (evento) => {
//escribe el contenido del input y previene la actualizacion de la pagina
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]");
//Crea un elemnto li de html dentro de una variable
    const task = document.createElement("li");
//Agregamos una clase a nuetro elemento task
    task.classList.add("card");
 //Lipia el contenido del input
    input.value = '';
//En una variable asignamos un templatestring 
    const content = `<div>
            <i class="far fa-check-square icon"></i>
            <span class="task">${value}</span>
        </div>
        <i class="fas fa-trash-alt trashIcon icon"></i>`
//asiganamos contenido de HTML en una variable
    task.innerHTML = content;
//Se agrega al elemento hijo el contenido de la variable task
    list.appendChild(task);

    console.log(content);
}

//Evento listener cuando se hace click en el boton este agrega el contenido del input
btn.addEventListener("click", createTask);git 
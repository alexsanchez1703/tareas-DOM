( () => {
//Creamos un variable que almacena la informacion del elemento btn
const btn = document.querySelector("[data-form-btn]");
//Funcion crea la tarjata 
const createTask = (evento) => {
//escribe el contenido del input y previene la actualizacion de la pagina
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]");
//Lipia el contenido del input
     input.value = '';
//Crea un elemento de html dentro de una variable
    const task = document.createElement("li");
    const taskContent = document.createElement("div");
 //Agregamos una clase a nuetro elemento task
    task.classList.add("card");
//Se agrega al elemento hijo el contenido de la variable
    taskContent.appendChild(checkComplete());

    const tittleTask = document.createElement("span"); 
    tittleTask.classList.add("task");
    tittleTask.innerText = value;
    taskContent.appendChild(tittleTask);
//En una variable asignamos un templatestring 
    const content = `
        <i class="fas fa-trash-alt trashIcon icon"></i>`
//asiganamos contenido de HTML en una variable
   // task.innerHTML = content;
//Se agrega al elemento hijo el contenido de la variable task
    task.appendChild(taskContent);
    list.appendChild(task);
}
//Evento listener cuando se hace click en el boton este agrega el contenido del input
btn.addEventListener("click", createTask);
//Creamos una funcion que sustituya el elemnto i
const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", completeTask);
    return i;
}
//Crea una funcion que haga un evento; al momento de hacer click al icon de check este cambia de clase 
const completeTask = (event) => {
    const element = event.target;
    //la funcion toogle verifica si la clase no esta la agrega y si esta la elimina
    element.classList.toggle("fas"); 
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
}
})();
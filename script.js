
    import checkComplete from "./components/checkComplete.js";
    import deleteIcon from "./components/deleteIcon.js";
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
   
        const tittleTask = document.createElement("span"); 
        tittleTask.classList.add("task");
        tittleTask.innerText = value;
    //Se agrega al elemento hijo el contenido de la variable
        taskContent.appendChild(checkComplete());
        taskContent.appendChild(tittleTask);

    //Se agrega al elemento hijo el contenido de la variable task
        task.appendChild(taskContent);
        task.appendChild(deleteIcon());
        list.appendChild(task);
    }
    //Evento listener cuando se hace click en el boton este agrega el contenido del input
    btn.addEventListener("click", createTask);

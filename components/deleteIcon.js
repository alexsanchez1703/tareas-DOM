
    //Creamos una funcion que sustituya el elemnto i delete
    const deleteIcon = () => {
        const i = document.createElement("i");
        i.classList.add("fas","fa-trash-alt","trashIcon","icon");
        i.addEventListener("click",deleteTask );
        return i;
    }
    //Funcion que elimina al elemento padre
    const deleteTask = (event) => {
        const parent = event.target.parentElement;
        parent.remove();
    }

    export default deleteIcon
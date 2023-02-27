
//Creamos una funcion que sustituya el elemnto i check
const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", completeTask);
    return i;
}
//Crea una funcion que haga un evento check este cambia de clase 
const completeTask = (event) => {
    const element = event.target;
    //la funcion toogle verifica si la clase no esta la agrega y si esta la elimina
    element.classList.toggle("fas"); 
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
}
export default checkComplete
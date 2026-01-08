let nameInput = document.getElementById("name");
let lastNameInput = document.getElementById("last_name");
let saveButton = document.getElementById("saveButton");
let name = ""; let lastName = ""; id = 0;
const goodJob = document.createElement("div"); goodJob.classList.add("good-job");
/* Good job button */
goodJob.innerHTML = `<h2>¡Buen trabajo!</h2> <p>¡Datos guardados correctamente!</p>`;
goodJob.appendChild(document.createElement("button")).innerText = "Cerrar";
goodJob.querySelector("button").addEventListener("click", ()=> {
    document.body.removeChild(goodJob);
});
/* Bad job button */
const badJob = document.createElement("div"); badJob.classList.add("bad-job");
badJob.innerHTML = `<h2>Error</h2> <p>Por favor, complete todos los campos.</p>`;
badJob.appendChild(document.createElement("button")).innerText = "Cerrar";
badJob.querySelector("button").addEventListener("click", ()=> {
    document.body.removeChild(badJob);
});
function StoreIntable(id, name, last_name){
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${id}</td> <td>${name}</td> <td>${last_name}</td> <td><button>Eliminar</button></td>`;
    tr.querySelector("button").addEventListener("click", ()=> {
        tr.remove();
    });
    return tr;
}
saveButton.addEventListener("click", ()=> {
    name = nameInput.value;
    lastName = lastNameInput.value;
    if(name !== "" && lastName !==""){
        id++;
        lastNameInput.classList.add("nice"); lastNameInput.classList.remove("bad");
        nameInput.classList.add("nice"); nameInput.classList.remove("bad");
        document.body.appendChild(goodJob);
        const table = document.querySelector("table tbody");
        table.appendChild(StoreIntable(id, name, lastName));
    } else {
        nameInput.classList.add("bad"); lastNameInput.classList.remove("nice");
        lastNameInput.classList.add("bad"); nameInput.classList.remove("nice");
        document.body.appendChild(badJob);
    }   
});
let inputEl = document.querySelector("#task-input");
let addEl = document.querySelector("#task-btn");
let listEl = document.querySelector("#task-list");

addEl.addEventListener("click", () => {
    const taskText = inputEl.value.trim();
    if(taskText !== ""){
        createTask(taskText);
        inputEl.value = "";
    }
})

const createTask = text => {
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        <p class= "todoText"> ${text} </p>
        <div>
            <button class = "delete">Delete</button>
        </div>
    `;
    listEl.appendChild(taskItem);

    const deleteEl = taskItem.querySelector(".delete");
    deleteEl.addEventListener("click", () => {
        taskItem.remove();
    })

    // const editEl = taskItem.querySelector(".edit");
    // editEl.addEventListener("click", () => {
    //     // taskItem.innerHTML = `<input type="text" placeholder="${text}">`
    //     // taskItem.replaceWith();
    // })

    const task = taskItem.querySelector(".todoText")
    task.addEventListener("click", () => {
        task.classList.toggle("completed");
    })
}
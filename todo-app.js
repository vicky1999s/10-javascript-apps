const newTask = document.querySelector("input")
const addBtn = document.querySelector("button")
const incompleteTasks = document.querySelector(".incomplete-task-lists")
const completedTasks = document.querySelector(".completed-task-lists")


const getIncompleteTasks = JSON.parse(localStorage.getItem("incomplete-items"))
const getCompletedTasks = JSON.parse(localStorage.getItem("completed-items"))

if(getIncompleteTasks){
    getIncompleteTasks.forEach((task)=>{
        addNewTask(task)
    })
}

if(getCompletedTasks){
    getCompletedTasks.forEach((task)=>{
        moveToCompleted(task)
    })
}

addBtn.addEventListener("click", ()=>{
    const value = newTask.value
    addNewTask(value)
})

function addNewTask(value){
    const task = document.createElement("li")
    task.innerHTML = `<input type="checkbox"><label>${value}</label>`
    const input = task.querySelector("input")
    input.addEventListener("click", ()=>{
        incompleteTasks.removeChild(task)
        moveToCompleted(value)
    })
    newTask.value=""
    incompleteTasks.appendChild(task)
    loadTasks()
}


function moveToCompleted(value){
    const task = document.createElement("li")
    task.innerHTML = `<label>${value}</label><button>Delete</button>`
    const deletebtn = task.querySelector("button")
    deletebtn.addEventListener("click", ()=>{
        completedTasks.removeChild(task)
        loadTasks()
    })
    completedTasks.appendChild(task)
    loadTasks()
}

function loadTasks(){
    const incompeteItems = document.querySelectorAll(".incomplete-task-lists>li")
    const completedItems = document.querySelectorAll(".completed-task-lists>li")
    const incompleteLists = []
    const completedLists = []
    incompeteItems.forEach((e)=>{
        incompleteLists.push(e.lastChild.innerText)
    })
    completedItems.forEach((e)=>{
        completedLists.push(e.firstChild.innerText)
    })
    localStorage.setItem("incomplete-items", JSON.stringify(incompleteLists))
    localStorage.setItem("completed-items", JSON.stringify(completedLists))
}
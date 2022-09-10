const notes = JSON.parse(localStorage.getItem("notes"))
const notesContainter = document.getElementById("content-container")
const addButton = document.getElementsByClassName("btn")

if(notes){
    notes.forEach((note)=>{
        console.log(note)
        addNewNote(note)
    })
}

addButton[0].addEventListener("click", (e)=>{
    addNewNote("")
})

function addNewNote(text){
    const note = document.createElement("div")
    note.classList.add("notes")
    note.innerHTML=`
            <div class="icons">
                <button class="btn edit-icon">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button class="btn trash-icon">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
            <div class="hr"></div>
            <div class="textarea">
                <textarea id="notes1" disabled="true"></textarea>
            </div>
            `
    
    let disabled = true
    const editbtn = note.querySelector(".edit-icon")
    const textarea = note.querySelector("#notes1")
    const editicon = note.querySelector(".edit-icon")
    const deletebtn = note.querySelector(".trash-icon")

    textarea.value = text

    editbtn.addEventListener("click", ()=>{
        disabled = !disabled
        textarea.disabled = disabled
        editicon.classList.toggle("selected")

    })

    deletebtn.addEventListener("click", ()=>{
        notesContainter.removeChild(note)
        updateLS()
    })

    textarea.addEventListener("input", (e)=>{
        const {value} = e.target
        updateLS()
    })

    notesContainter.appendChild(note)

}

function updateLS() {
    const notesText = document.querySelectorAll("#notes1");

    const notes = [];

    notesText.forEach((note) => {
        note.value ? notes.push(note.value):false;
    });

    localStorage.setItem("notes", JSON.stringify(notes));
}
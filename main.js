const addBtn = document.getElementById("add-item"); 
addBtn.addEventListener('click', addItem)

const toDoList = document.getElementById("list")

const textInput = document.getElementById("text-input")

function addItem() {
    // alert(`We're working`)
    const newItem = document.createElement("p");
    newItem.innerText = textInput.value;
    toDoList.appendChild(newItem);
    textInput.value = '';
    
}
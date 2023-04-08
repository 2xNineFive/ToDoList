const addBtn = document.getElementById("add-item"); 
addBtn.addEventListener('click', addItem)

const toDoList = document.getElementById("list")

const textInput = document.getElementById("text-input")


// if (localStorage.storedList) {
//     loadList();
// }


function addItem() {
    // alert(`We're working`)
    const newItem = document.createElement("p");
    newItem.innerText = textInput.value;
    newItem.onclick = removeItem;
    toDoList.appendChild(newItem);
    // saveList();
    textInput.value = '';
    
}


function removeItem() {
    saveList();
    toDoList.removeChild(this);

}

function saveList () {
    localStorage.storedList = toDoList.innerHTML
}

function loadList () {
    toDoList.innerHTML = localStorage.storedList;
    for(i = 0; i < toDoList.children.length; i++) {
    toDoList.children[i].onlclick = removeItem;
    }
}


const electron = require('electron');
const {ipcRenderer} = electron;

cancelButton = document.getElementById('cancel');
addButton = document.getElementById('add-todo');
taskForm = document.querySelector('#add-todo-form')
// alert(cancelButton)
// console.log(cancelButton)

cancelButton.onclick = function(){
    ipcRenderer.send('addTodo:msg', "cancel");
}

taskForm.addEventListener('submit', function(e){
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const date = document.querySelector('#date').value;
    const details = document.querySelector('#details').value;

    ipcRenderer.send('addTodo:data', {
        "title" : title,
        "date" : date,
        "details" : details
    });
});

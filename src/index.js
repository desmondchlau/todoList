const electron = require('electron');
const {ipcRenderer} = electron;


addTodo = document.getElementById("add-todo");


addTodo.onclick = function(){
    ipcRenderer.send("addTodo:msg", "add");
}
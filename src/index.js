const electron = require('electron');
const {ipcRenderer} = electron;


addTodo = document.getElementById("add-todo");
alert(addTodo);


addTodo.onclick = function(){
    alert("todo clicked");
    ipcRenderer.send("addTodo", "add");
}
// "https://api.github.com/users/Taha-mlaiki/repos"

// let scrollTop = document.querySelector(".scroll-btn");

let arrTasks = [];
let form = document.querySelector(".form");
let input = document.querySelector("input");
let btn = document.querySelector(".button");
let tasks = document.querySelector(".tasks-list")
let dele = document.querySelector(".delete")


if(localStorage.getItem("task")){
  arrTasks = JSON.parse(localStorage.getItem("task"))
  addTaskToPageFromArray();
}
btn.onclick = function (){
  
  if(input.value!==""){
      addTaskToArray(input.value);
      input.value = "";
      addTaskToPageFromArray();
      addTaskToLocalStorage();
  }
}

function addTaskToPageFromArray(){
  tasks.innerHTML = "";
  arrTasks.forEach((e)=>{
    let task = document.createElement("div");
    task.className = "task";
    task.setAttribute("data-id",e.id)
    task.appendChild(document.createTextNode(e.title))
    let delet = document.createElement("span");
    delet.appendChild(document.createTextNode("Delete"))
    delet.className = "delete";
    if(e.completed){
      task.className = "task done";
    }
    task.addEventListener("click",function(){
      task.classList.toggle("done")
      arrTasks.forEach((e)=>{
        if(e.completed){

        }
      })
    })
    task.appendChild(delet)
    tasks.appendChild(task)
    
  })
  
  

}

tasks.addEventListener("click",(e)=>{
 if(e.target.classList.contains("delete")){
   deleteTaskWiThId(`${e.target.parentElement.getAttribute("data-id")}`);
    e.target.parentElement.remove();
  
 };

})


function addTaskToArray(value){
  let taskObjet = {
    id : Date.now(),
    title : value,
    completed:false
  }
  arrTasks.push(taskObjet);
  
  
}
function addTaskToLocalStorage(){
  localStorage.setItem("task",JSON.stringify(arrTasks))
}

 function deleteTaskWiThId(taskId){
 arrTasks = arrTasks.filter((e)=> e.id!== parseInt(taskId))
 addTaskToLocalStorage(arrTasks)
}



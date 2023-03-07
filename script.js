import checkComplete from "./assets/components/checkComplete.js"
import deleteIcon from "./assets/components/deleteIcon.js"

const btn= document.querySelector("[data-form-btn]")

const createTask =(evento) => {
    evento.preventDefault();
    const input= document.querySelector("[data-form-input]");
    const value =input.value;
    const list=document.querySelector("[data-list]");
    input.value="";
    const task= document.createElement("li")
    task.classList.add("card")
    const taskContent= document.createElement("div");
    const titleTask= document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerHTML=value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    


  task.appendChild(taskContent);
  task.appendChild(deleteIcon())
  list.appendChild(task);
}

btn.addEventListener("click", createTask);

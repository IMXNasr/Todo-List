// VANILLA JAVASCRIPT:

// SELECTORS:

const txtInpt = document.querySelector("#txt");

const addBtn = document.querySelector(".textCon button");

const app = document.querySelector(".app");

const taskName = document.querySelectorAll(".taskName");

// FUNCTIONS:

// WINDOW LOAD FOCUS ON INPUT:

const funcLoad = () => {

  txtInpt.focus();

};

// ADDING THE TASKS:

const funcAddTask = () => {

  if(txtInpt.value == ''){

    alert("Please add some text");

  }else{

    // CREATE THE TASK ELEMENT:

    const newTask = document.createElement('div');

    newTask.classList.add("task");

    

    // CREATE THE TASK NAME:

    const newTaskName = document.createElement("h5");

    newTaskName.classList.add("taskName");

    newTaskName.innerText = txtInpt.value;

    

    // CREATE THE TASK BTNS:

    const newTaskBtns = document.createElement("div");

    newTaskBtns.classList.add("taskBtns");

    

    // CREATE THE BTNS:

    const checkBtn = document.createElement("button");

    checkBtn.className = 'fas fa-check';

    const trashBtn = document.createElement("button");

    trashBtn.className = 'fas fa-trash';

    

    // APPEND THE BTNS TO THE TASK BTNS:

    newTaskBtns.appendChild(checkBtn);

    newTaskBtns.appendChild(trashBtn);

    

    // APPEND ALL THINGS TO THE TASK ELEMENT:

    newTask.appendChild(newTaskName);

    newTask.appendChild(newTaskBtns);

    

    // APPEND THE TASK TO MY APP:

    app.appendChild(newTask);

    

    // FOCUS ON THE INPUT:

    txtInpt.value = '';

    txtInpt.focus();

  }

};

// EVENT LISTENERS:

window.addEventListener("load", funcLoad);

addBtn.addEventListener("click", funcAddTask);

document.addEventListener("click", (e) => {

  if(e.target.classList.contains('fa-check')){

    e.target.parentElement.parentElement.children[0].classList.toggle("checked");

    e.target.parentElement.parentElement.classList.toggle("checked");

  }else if(e.target.classList.contains('fa-trash')){

    e.target.parentElement.parentElement.remove();

  }

});

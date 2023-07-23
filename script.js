let input = document.querySelector(".input");
let form = document.querySelector(".form-todo");
let ul = document.querySelector(".todo-list");
let li = document.querySelector("li");
let tasks = document.querySelector(".tasks");
let moon = document.querySelector(".fa-moon");
let menu = document.querySelector(".menu");
let body = document.querySelector("body");
let bodydark = document.querySelector(".bodydark");
let btn = document.querySelector(".btn");
let btndark = document.querySelector(".btndark");
let inputdark = document.querySelector(".inputdark");
let inputfocus = document.querySelector(".input:focus");
let inputfocusdark = document.querySelector(".inputdark:focus");
let lidark = document.querySelector(".lidark");

let input_task = input.value;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let input_task = input.value;

  if (input_task == "") {
    alert("Enter task first");
  } else {
    let newLi = document.createElement("li");
    newLi.innerHTML = `
     <span>${input_task}</span>
     <div class="todo-btns">
         <button class="btns done">Done</button>
         <button class="btns remove">Remove</button>
     </div>
     
  `;
    ul.append(newLi);
    input.value = "";
  }
});

ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove")) {
    const removebtn = e.target.parentNode.parentNode;
    removebtn.remove();
  }

  if (e.target.classList.contains("done")) {
    const li = e.target.parentNode.previousElementSibling;
    li.style.textDecoration = "line-through";
  }
});

// logic for dark mode

menu.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target == moon) {
    body.classList.toggle("bodydark");
    btn.classList.toggle("btndark");
    input.classList.toggle("inputdark");
    inputfocus.classList.toggle("inputfocusdark");
    li.classList.toggle("lidark");
  }
});

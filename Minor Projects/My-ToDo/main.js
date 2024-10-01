import render from "./render";
import store from "./store"
import { addTodo, delTodo, toggleCompleted } from "./store";

window.addEventListener("todoschange", () => {
  render();
})

const localStorageItems = JSON.parse(localStorage.getItem("store"))
if (localStorageItems?.todos.length > 0) {
  store.todos = localStorageItems.todos
} else {
  localStorage.setItem("store", JSON.stringify(store))

  render();
}

const form = document.querySelector("form");
const newName = form.querySelector("#new-todo__name")
const newDec = form.querySelector("#new-todo__dec")

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const todoName = newName.value;
  const todoDec = newDec.value;
  if (todoName === '' || todoDec === '') {
    alert("Please enter the both fields");
  } else {
    const newTodo = {
      id: crypto.randomUUID(),
      name: todoName,
      dec: todoDec,
      completed: false
    }

    addTodo(newTodo);
  }
})

const todo = document.querySelector('._todo')

todo.addEventListener('click', (e) => {
  const target = e.target
  if (target.classList.contains("rem__btn")) {

    const id = target.closest(".todo__name").dataset.id


    delTodo(id);
  }

})


todo.addEventListener("click", (e) => {
  const target = e.target
  if (target.classList.contains("check__box__in")) {
    const id = target.closest(".todo__name").dataset.id;
    const completed = target.checked;

    toggleCompleted(id, completed);

  }
})
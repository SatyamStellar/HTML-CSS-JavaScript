
const addTodoBtn = document.querySelector('#add-todo__btn');
const newName = document.getElementById('new-todo__name');
const newDec = document.getElementById('new-todo__dec');



const showtodos = () => {
  const existTodo = JSON.parse(localStorage.getItem("todos")) || [];
  existTodo.forEach(todo => {
    disTodos(todo)
  });
}


const disTodos = () => {
  const div = document.createElement("div");
  div.className = `mt-8 p-4 px-8 rounded-md flex flex-col md:flex-row justify-between items-center bg-zinc-800`

  div.innerHTML = `<div class="w-[80%]">
            <h2 class="text-3xl text-yellow-500 font-medium" id="todo__name">
              Task 1
            </h2>
            <p
              class="text-gray-200 w-full md:w-[80%] mt-1 overflow-y-scroll h-20 md:h-14"
              id="todo__dec"
            >
              Revise thhe notes of chemistryRevise thhe notes of chemistryRevise
              thhe notes of chemistryRevise thhe notes of chemistry
            </p>
          </div>
          <div class="flex gap-4 mr-4 mt-5 md:mt-0">
            <button class="bg-pink-500 active:bg-pink-800 btn com__btn">
              Complete
            </button>
            <button class="bg-blue-500 active:bg-blue-800 btn rem__btn">
              Delete
            </button>
          </div>`;
  document.querySelector('todos__container').appendChild(div)
}


addTodoBtn.addEventListener('click', () => {
  const todoName = newName.value.trim();
  const todoDec = newDec.value.trim();
})
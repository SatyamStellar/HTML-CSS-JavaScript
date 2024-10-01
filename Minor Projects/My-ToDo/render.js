import store from "./store";

const render = () => {
  const todos = document.querySelector('.todo__cont');

  const todoelems = store.todos.map((todos) => `<div class="mt-8 p-4 px-8 rounded-md flex flex-col md:flex-row justify-between items-center bg-zinc-800 todo__name" data-id=${todos.id}>
            <div class="w-[80%]">
              <h2 class="text-3xl text-yellow-500 font-medium ${todos.completed ? "completed" : ""}" id="todo__name">
                ${todos.name}
              </h2>
              <p
                class="text-gray-200 w-full md:w-[80%] mt-1 overflow-y-scroll h-20 md:h-14"
                id="todo__dec"
              >
              ${todos.dec}
              </p>
            </div>
            <div class="flex gap-4 mr-4 mt-5 md:mt-0">
              <div class="flex items-center me-4">
    <input id="custom-checkbox" type="checkbox" class="check__box__in w-8 h-8 bg-red-500 rounded-full appearance-none checked:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 flex justify-center items-center bg-[url('/src/check-line.svg')] bg-[length:20px_20px] bg-no-repeat bg-center" ${todos.completed ? "checked" : ""}>

</div>


              <button class="bg-blue-500 active:bg-blue-800 btn rem__btn">
                Delete
              </button>
            </div>
            </div>
          `).join("")
    ;
  todos.innerHTML = todoelems;
}


export default render;
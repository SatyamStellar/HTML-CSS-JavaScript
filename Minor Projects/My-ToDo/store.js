const store = {
  todos: [
    {
      id: "1",
      name: 'Task 1',
      dec: 'There is noting to do a task',
      complete: false
    },
    {
      id: "2",
      name: 'Task 2',
      dec: 'This is a to-do task',
      complete: true
    }
  ]
};

const storeHandler = {
  get(target, property) {
    return target[property];
  },
  set(target, property, value) {
    target[property] = value;
    if (property == "todos") {
      window.dispatchEvent(new Event("todoschange"))
    }
    return true;
  }
}
const storeProxy = new Proxy(store, storeHandler);


function addTodo(newTodo) {
  storeProxy.todos = [...storeProxy.todos, newTodo];
}

function delTodo(id) {
  storeProxy.todos = storeProxy.todos.filter(todo => todo.id
    !== id);
}

export { addTodo, delTodo };
export default storeProxy;
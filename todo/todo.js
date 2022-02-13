const input = document.getElementById("input");
const container = document.querySelector(".container");

const todos = JSON.parse(localStorage.getItem('todos'));

if(todos) {
    todos.forEach(todo => addTodo(todo));
}

input.addEventListener('keypress', (e) => {
    if(e.key == "Enter" && input.value) {

        addTodo();

        input.value = "";
        input.focus();

        updateLS();

    } else {
        input.focus();
    }
})

function addTodo(todo) {

    let todoText = input.value;

    if(todo) {
        todoText = todo.text;
    }

    if(todoText) {
        const task = document.createElement("div");
        task.classList.add("task");
        task.innerHTML = todoText;
        container.appendChild(task);

        if(todo && todo.completed) {
            task.classList.add("completed");
        }

        task.addEventListener('click', () => {
            task.classList.toggle('completed');
            updateLS();
        })

        task.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            task.remove();
            updateLS();
        });
    }
};


function updateLS() {
    todosEl = document.querySelectorAll(".task");

    const todos = [];

    todosEl.forEach(todoEl => {
        todos.push( {
            text: todoEl.innerText,
            completed: todoEl.classList.contains("completed")
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos));
}
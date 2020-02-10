const DATE_HTML = document.querySelector("#date");
const LIST_HTML = document.querySelector("#list");
const INPUT_HTML = document.querySelector("#input");

const CHECK_STYLE = "fa-pencil";

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};

const today = new Date();
DATE_HTML.innerHTML = today.toLocaleString("en-US", options);

let todoItems = [];
let id = 0;

document.addEventListener("keyup", event => {
  if (event.code === "Enter") {
    const inputValue = INPUT_HTML.value;

    if (inputValue != null) {
      // 1. add the todo
      addTodo(inputValue)
      // 2.  Clear input
      clearInput();
    }
  }
});

function clearInput() {
  INPUT_HTML.value = "";
}

function addTodo(todoName) {
  todoItems.push({ name: todoName, id: id, done: false });
  updateList();
}

function updateList() {
  let code = "";
  for (let item of todoItems) {
    code += `
        <p class="text"><i class="fa fa-pencil" style="font-size:15px; color: purple"></i>&nbsp; ${item.name}</p>
        `;
    LIST_HTML.innerHTML = code;
  }
}
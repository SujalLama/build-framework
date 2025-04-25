import "./style.css";
import { createTodoElement } from "./todo";
import { TODO } from "./types";

/*
 * Main ideas:
 * keep list of the things in a day
 * a todo item can be marked as done, when it's done it
 * should be removed
 * a todo item can be updated
 * */

const lists: TODO[] = [
  { id: 1, name: "Walk the dog" },
  { id: 2, name: "Go to mall" },
  { id: 3, name: "Go to gym" },
];

const todosElm: HTMLDivElement | null = document.querySelector(".js-todos");
const todoInput: HTMLInputElement | null =
  document.querySelector(".todo-form__input");
const addTodoBtn = document.querySelector(".todo-form__btn");

addTodoBtn?.addEventListener("click", (e) => {
  e.preventDefault();

  if (!todoInput?.value) {
    alert("Please provide the value for todo");
    return;
  }

  const newTodo = {
    id: Date.now(),
    name: todoInput.value,
  };

  todoInput.value = "";
  lists.push(newTodo);
  reRenderFn(newTodo);
});

function reRenderFn(element: TODO) {
  const listItem = createTodoElement(element, todosElm);
  todosElm?.insertBefore(listItem, todosElm.firstChild);
  console.log(lists);
}

function initialRender() {
  for (let i = 0; i < lists.length; i++) {
    const listItem = createTodoElement(lists[i], todosElm);
    todosElm?.appendChild(listItem);
  }

  console.log(lists);
}

initialRender();

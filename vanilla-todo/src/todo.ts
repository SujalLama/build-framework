import { TODO } from "./types";

export function createTodoElement(todo: TODO, parentElem: HTMLElement | null) {
  const listItem = document.createElement("li");

  // before the span text pressed
  const doneBtn = document.createElement("button");
  doneBtn.classList.add("todo-item__btn--done");
  doneBtn.innerText = "done";
  doneBtn.addEventListener("click", () => {
    parentElem?.removeChild(listItem);
  });

  const spanItem = document.createElement("span");
  spanItem.innerText = todo.name;
  const parentItemBeforeChange = [spanItem, doneBtn];

  // after the span text pressed
  const inputItem = document.createElement("input");
  inputItem.classList.add("todo-item__input");
  inputItem.value = todo.name;

  const divElem = document.createElement("div");
  divElem.classList.add("todo-item__btns");

  const saveBtn = document.createElement("button");
  saveBtn.classList.add("todo-item__btn--save");
  saveBtn.innerText = "save";
  saveBtn.addEventListener("click", () => {
    todo.name = inputItem.value;
    spanItem.innerText = inputItem.value;
    listItem.replaceChildren(...parentItemBeforeChange);
  });

  const cancelBtn = document.createElement("button");
  cancelBtn.classList.add("todo-item__btn--cancel");
  cancelBtn.innerText = "cancel";
  cancelBtn.addEventListener("click", () => {
    inputItem.value = todo.name;
    listItem.replaceChildren(...parentItemBeforeChange);
  });

  divElem.append(saveBtn, cancelBtn);

  const parentItemAfterChange = [inputItem, divElem];

  spanItem.addEventListener("click", () => {
    if (listItem.contains(parentItemAfterChange[1])) {
      listItem.replaceChildren(...parentItemBeforeChange);
    } else {
      listItem.replaceChildren(...parentItemAfterChange);
    }
  });

  // initial rendering
  listItem.classList.add("todo-item");
  listItem.append(...parentItemBeforeChange);

  return listItem;
}

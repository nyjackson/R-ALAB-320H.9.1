import ToDoItem from "./ToDoItem";
import { useReducer, useState } from "react";
function ToDoList({ list, setList }) {

  const toDos = list.map((entry, i) => (
    <ToDoItem key={entry.id || i} task={entry.title} list = {list} setList = {setList}>
      {i.title}
    </ToDoItem>
  ));
  return (
    <div id="to-do-list">
      <ul>{toDos.reverse()}</ul>
    </div>
  );
}

export default ToDoList;

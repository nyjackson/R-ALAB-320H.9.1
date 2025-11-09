import ToDoList from "./ToDoList";
import { useState } from "react";
import initialState from "../data";

function Form() {
  // const [toDo, dispatch] = useReducer(reducer, [])
  const [newToDo, setNewToDo] = useState("");
  const [toDoList, setToDoList] = useState(initialState);
// [{title: "Sample Entry"}]
function handleNewEntry(e){
    const item = e.target.value !== "" ? e.target.value : null
    setNewToDo({title: item, id: toDoList.length+1})
    console.log("new entry is",item)
}
  function handleToDoAdd(e) {
    e.preventDefault();
    console.log("In handleToDoAdd list:", newToDo)
    //const item = e.target[0].value;
    setToDoList(e => [...e, newToDo]);
    //console.log(item);
  }

  console.log(toDoList);

  return (
    <>
      <form onSubmit={handleToDoAdd}>
        <input type="text" placeholder="Enter a task" onChange = {handleNewEntry}></input>
        <button>Submit</button>
      </form>
      {toDoList.length > 0 ? <ToDoList list={toDoList} setList = {setToDoList} /> : ''}
    </>
  );
}

export default Form;


  // function reducer(state, action){
  // console.log(action)
  // }

  //dispatch("Add")
  // dispatch({type: "Add", payload: "Complete Per Scholas"})
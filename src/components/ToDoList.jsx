import { useRef, useEffect, useReducer } from "react";
import initialState from "../data";
import ToDoListItem from "./ToDoListItem";

function ToDoList() {
  const inputRef = useRef();
  const [listItems, dispatch] = useReducer(reducer, initialState);
  
  useEffect(() => {
    dispatch({ type: "INIT" });
  }, [listItems]);

  function reducer(state, action) {
    // console.log("State: ", state)
    let id = state?.length || 0;
    let newState;
    switch (action.type) {
      case "INIT":
        return state;
      case "ADD":
        const newEntry = { id: ++id, title: action.payload };
        return [...state, newEntry];
      case "DEL":
        newState = state.filter((e) => e.id !== action.payload.id);
        return newState;
      case "EDIT":
        // console.log("In Edit");
        // console.log(action.payload);
        newState = state.map((e) => {
          if (e.id == action.payload.id) {
            e.title = action.payload.data;
          }
          return e;
        });
        return newState;
      default:
        console.log("Invalid action given. Try Again.");
        return state;
    }
  }
  const toDoListEntry = listItems.map((i) => (
    <ToDoListItem key={i.id} toDo={i} dispatch={dispatch} />
  ));
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "ADD", payload: inputRef.current.value });
          inputRef.current.value = "";
        }}
      >
        <input type="text" ref={inputRef} placeholder = "Enter a task"></input>
        <button> Add </button>
      </form>

      <div id="to-do-list">
        {toDoListEntry.length > 0 ? <ul>{toDoListEntry.reverse()}</ul> : <h2>Enter a task to get started</h2>}
      </div>
    </div>
  );
}

export default ToDoList;

import {useState, useRef} from 'react'

function ToDoListItem({ toDo, dispatch }) {
  const [showDelete, setShowDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const editRef = useRef();

  function handleEdit(e) {
    // console.log(e.target.textContent);
    // console.log("Edit Ref:", editRef.current);
    const action = e.target.textContent;
    if (action == "Save") {
      console.log("Saving change...");
      dispatch({
        type: "EDIT",
        payload: { data: editRef.current.value, id: toDo.id },
      });
    }
    setShowEdit(!showEdit);
  }

  function handleDeleteBtn() {
    setShowDelete(!showDelete);
  }

  return (
    <li id="to-do-item">
      <input type="checkbox" onClick={handleDeleteBtn}></input>
      {showEdit ? (
        <input type="text" ref={editRef} defaultValue={toDo.title}></input>
      ) : (
        toDo.title
      )}
      <button onClick={handleEdit}>{showEdit ? "Save" : "Edit"}</button>
      {showEdit ? (
        ""
      ) : (
        <button
          disabled={!showDelete}
          onClick={() => dispatch({ type: "DEL", payload: toDo })}
        >
          Delete
        </button>
      )}{" "}
    </li>
  );
}

export default ToDoListItem;

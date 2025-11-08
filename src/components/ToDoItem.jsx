import {useReducer, useState} from 'react'


function ToDoItem({task}){
//console.log(task)
const [showDelete, setShowDelete] = useState(false)
const [edit, setEdit] = useState(false)
const [toDo, dispatch] = useReducer(useReducer, task)

function reducer(state, action){
    switch(action.type){
        case "delete":
            return
        case "edit":
            return
        default:
            console.log("Invalid action type, try again.")
            return
    }
    
}
function handleShow(){
setShowDelete(!showDelete)
setEdit(!edit)
}

function handleDeleteBtnShow(){
setShowDelete(!showDelete)
}

function handleDelete(e){
// dispatch({type:"delete"})
console.log(e.target)
}
return(
<div id = "to-do-item">
<input type = "checkbox" onClick={handleDeleteBtnShow}></input>
{!edit ? <p>{task}</p>: <input type = "text" placeholder = {task}></input>}
<button onClick = {handleShow} disabled = {showDelete}>Edit</button>
<button disabled = {!showDelete} onClick ={handleDelete}>Delete</button>
</div>)
}

export default ToDoItem
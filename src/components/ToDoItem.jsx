import {useReducer, useState} from 'react'


function ToDoItem({task, list, setList}){
//console.log(task)
const [showDelete, setShowDelete] = useState(false)
const [edit, setEdit] = useState(false)
const [toDo, dispatch] = useReducer(reducer, task)

function reducer(state, action){
    //console.log(toDo)
    console.log(state)
    console.log(action)
    switch(action?.type){
        case "delete":
            console.log("state in delete",state)
            const findDeleteEntryIndex = list.find(e => e.title ==state)
            console.log("found:",findDeleteEntryIndex)

            return
        case "edit":
            console.log("state in edit", state)
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
dispatch(list,{type:"delete", payload: e.target})
console.log(e.target)
}

function handleEdit(e){
console.log(e)
dispatch(list, {type:"edit", payload: e.target})
}

return(
<div id = "to-do-item">
<input type = "checkbox" onClick={handleDeleteBtnShow}></input>
{!edit ? <p>{task}</p>: <input type = "text" placeholder = {task}></input>}
<button onClick = {handleShow} disabled = {edit}>Edit</button>
<button disabled = {!showDelete} onClick ={handleDelete}>Delete</button>
</div>)
}

export default ToDoItem
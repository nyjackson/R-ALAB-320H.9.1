import {useReducer, useState} from 'react'


function ToDoItem({task, list, setList}){
//console.log(task)
const [showDelete, setShowDelete] = useState(false)
const [edit, setEdit] = useState(false)
const [toDo, dispatch] = useReducer(reducer, list)

function reducer(state, action){
    //console.log(toDo)
    console.log("In reducer, state:", state)
    // console.log(action)
    switch(action?.type){
        case "delete":
            console.log("state in delete",action.payload)
            const state = list.filter(e => e.title != action.payload)
            console.log("newList:",state)
            setList(state)
            return
            //removeEntry(findDeleteEntryIndex)
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
dispatch({type:"delete", payload: task})

}

function handleEdit(e){
console.log(e)
dispatch({type:"edit", payload: e.target})
// console.log("The result: ", result)
// setList(result)
}

return(
<div id = "to-do-item">
<input type = "checkbox" onClick={handleDeleteBtnShow}></input>
{!edit ? <p>{task}</p>: <input type = "text" placeholder = {task}></input>}
<button onClick = {handleEdit} disabled = {false && edit}>{edit ? 'Save': 'Edit'}</button>
<button disabled = {!showDelete} onClick ={handleDelete}>Delete</button>
</div>)
}

export default ToDoItem
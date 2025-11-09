import {useReducer, useState} from 'react'


function ToDoItem({task, list, setList}){
//console.log(task)
const [showDelete, setShowDelete] = useState(false)
const [edit, setEdit] = useState(false)
const [editVal, setEditVal] = useState("")
const [toDo, dispatch] = useReducer(reducer, list)

function reducer(state, action){
    //console.log(toDo)
    console.log("In reducer, state:", state)
    // console.log(action)
    switch(action?.type){
        case "delete":
             state = list.filter(e => e.title != action.payload)
            setList(state)
            return
        case "edit":
            console.log("Payload", action.payload)
             state = list.map(entry => {
                if(entry.title == action.payload){
                    console.log("editVal: ", editVal)
                    entry.title = editVal
                }
                return entry
            })
            console.log("new list", state)
            setList(state)
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

function handleDelete(){
dispatch({type:"delete", payload: task})
}

function handleEdit(e){
setEdit(!edit)
dispatch({type:"edit", payload: task})
}
function handleEditChange(e){
   setEditVal(e.target.value)
   console.log("New value", e.target.value)
  // setList(entry => {[...entry]})
}

return(
<div id = "to-do-item">
<input type = "checkbox" onClick={handleDeleteBtnShow}></input>
{!edit ? <p>{task}</p>: <input type = "text" placeholder = {task} defaultValue = {task} onChange = {handleEditChange}></input>}
<button onClick = {handleEdit} disabled = {false && edit}>{edit ? 'Save': 'Edit'}</button>
<button disabled = {!showDelete} onClick ={handleDelete}>Delete</button>
</div>)
}

export default ToDoItem
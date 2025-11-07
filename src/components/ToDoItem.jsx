import {useReducer} from 'react'


function ToDoItem({task}){
return(
<div id = "to-do-item">
<input type = "checkbox"></input>
<p>{task}</p>
<button>Edit</button>
<button>Delete</button>
</div>)
}

export default ToDoItem
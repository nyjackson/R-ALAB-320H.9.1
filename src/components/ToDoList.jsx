import ToDoItem from "./ToDoItem"
import {useReducer} from 'react'
function ToDoList({list}){
const toDos = list.map(i => <ToDoItem task = {i.title}>{i.title}</ToDoItem>)
return(<div id = "to-do-list">
<ul>{toDos}</ul>
</div>)
}

export default ToDoList
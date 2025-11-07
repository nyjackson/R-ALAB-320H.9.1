import ToDoList from './ToDoList'
import {useState} from 'react'

function Form(){
// const [toDo, dispatch] = useReducer(reducer, [])
const [newToDo, setNewToDo] = useState("")
const [toDoList, setToDoList] = useState([])

// function reducer(state, action){
// console.log(action)
// }

//dispatch("Add")
// dispatch({type: "Add", payload: "Complete Per Scholas"})

function handleToDoAdd(e){
e.preventDefault();

console.log(e.target.value)
}

return(
<>
<form onSubmit = {handleToDoAdd}>
<input type = "text" placeholder="Enter a task"></input>
<button>Submit</button>
</form>
<ToDoList/>
</>)
}

export default Form
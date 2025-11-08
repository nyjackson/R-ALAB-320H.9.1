import ToDoList from './ToDoList'
import {useState} from 'react'
import initialState from '../data'


function Form(){
// const [toDo, dispatch] = useReducer(reducer, [])
const [newToDo, setNewToDo] = useState("")
const [toDoList, setToDoList] = useState(initialState)

// function reducer(state, action){
// console.log(action)
// }

//dispatch("Add")
// dispatch({type: "Add", payload: "Complete Per Scholas"})

function handleToDoAdd(e){
e.preventDefault();
const item = e.target[0].value
setNewToDo(item)
const list = []

setToDoList((i) => {console.log(i)})
console.log(e.target[0].value)
}
console.log(toDoList)
return(
<>
<form onSubmit = {handleToDoAdd}>
<input type = "text" placeholder="Enter a task"></input>
<button>Submit</button>
</form>
<ToDoList list = {toDoList}/>
</>)
}

export default Form
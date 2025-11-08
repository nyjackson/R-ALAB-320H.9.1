import { useState, useReducer } from 'react'
import Form from './components/Form'
import './App.css'

function App() {
  return (
    <div id = "app">
      <h1>To Do List</h1>  
      <Form />
    </div>
  )
}

export default App

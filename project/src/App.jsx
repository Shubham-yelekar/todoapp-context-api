import './App.css'
import { TodoForm, TodoItem } from './components'
import { useState, useEffect } from 'react'
import { TodoProvider} from './context/TodoContext'

function App() {
  const [todos,  setTodos] = useState([]) // 1. todo Arraty with empty array

  // 1. made new todo object 
  // 2 .added to the todos list
  const addTodo = (todo) => { 
    
    const newTodo = {
      id : Date.now(),
      todo ,
      completed : false
    }
    setTodos((prev) => [newTodo , ...prev])
  }

  // 3. map the previous todo to find the todo item and update it

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo)=> (prevTodo.id === id ? todo : prevTodo)))
  }

  // delete todo with filter to render 

  const deleteTodo = (id) => {
    setTodos((prev) =>  prev.filter((todo) => todo.id !== id))
  }

  // to edit the seleted object 

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((todo)=> todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }
  
  useEffect(() => {
   const todos = JSON.parse(localStorage.getItem("todos"))
   if (todos && todos.length > 0){
    setTodos(todos)
   }
  }, [])

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  


  return (
    <TodoProvider value={{todos, addTodo , updateTodo, deleteTodo , toggleComplete}}> 
      <h1 className='text-2xl '>Todo App 📃</h1>
      <TodoForm/>
      {todos.map((todo)=>(
        <div key={todo.id}>
          <TodoItem todo={todo}/>
        </div>
      ))}
    </TodoProvider>
  )
}

export default App

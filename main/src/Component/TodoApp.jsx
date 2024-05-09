import React from 'react'
import { useState,useEffect } from 'react'
function TodoApp() {

   const [task,settask]=useState('')
   const [todo,settodo]=useState([])

//    const Todos=[]


   function addTodo(e){
    e.preventDefault()
         const newTodo={task}
        settodo([...todo,newTodo])
        settask('')
   }

   console.log(todo)
   

    return (
        <div>
            <h1>Todo App</h1>
            <form onSubmit={addTodo}>
                <input type="text" value={task} onChange={(e)=>settask(e.target.value)} />
                <button type='submit'>Add Todo</button>
            </form>
            {

                todo.map((todo,index)=>(
                    <li key={index}>{todo.task}</li>
                ))
            }
            
        </div>
    )
}

export default TodoApp

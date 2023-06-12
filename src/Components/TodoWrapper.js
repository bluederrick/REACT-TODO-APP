import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from 'uuid'
import Todo from "./Todo"


const TodoWrapper = () => {
    uuidv4()
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        setTodos((prev) => [...prev, {
            id: uuidv4(), task: todo
        }])
        // setTodos([...todos, todo])
        // console.log(todos)
    }

    return (
        <div className='todo_container'>
            <div className='todo_inner'>
                <TodoForm addTodo={addTodo}></TodoForm>

                <Todo todos={todos}></Todo>
            </div>
        </div>
    )
    //  console.log(addTodo)

    // const deleteTodoList = id => {
    // remove the todo with the id
    // // setTodos(todos.filter(todos => { todos.id !== id })
    // )
    // const EditingTodo =((id)=>{
    //    setTodos(todos.filter(todos => {todos.id == id ? {...todos} }))
    // })
    // }
}

export default TodoWrapper
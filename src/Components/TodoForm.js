import React, { useState } from 'react'
import '../App.css'

const TodoForm = ({ addTodo }) => {
    const [values, setValues] = useState("")
    const inputValue = (e) => {
        setValues(e.target.value)
        // console.log(e.target.value)

        // addTodo(values)
        //  after we sumit the form we set value to empty string 

    }

    const handleSubmit = e => {
        e.preventDefault();
        // console.log(values)
        addTodo(values)
        setValues("")
    }
    
    return (
        // <div className='container'>
        <div className='todo-form'>
            <form className='todo_input' onSubmit={handleSubmit}>

                <input type="text" placeholder='what is the task for today ?' onChange={inputValue} value={values} />
                <button type='submit' className='todo_btn'>Add task</button>

            </form>

        </div>
        // </div>
    )
}
export default TodoForm 

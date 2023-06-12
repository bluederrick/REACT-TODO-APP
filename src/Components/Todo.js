// import React, { useState } from 'react'
// import { v4 as uuidv4 } from 'uuid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faPencil } from '@fortawesome/free-solid-svg-icons'

const Todo = ({ todos }) => {
    // console.log(todos)
    return (
        <div className='todo'>
            <ul className='list'>
                {todos.map((todo, index) => (
                    <li className='listTodo' key={index}>{todo.task}

                        <FontAwesomeIcon icon={faTrashCan} className="icon" />
                        <FontAwesomeIcon icon={faPencil} className="icon" />

                    </li>

                ))
                }
            </ul>

        </div>
    )
}

export default Todo
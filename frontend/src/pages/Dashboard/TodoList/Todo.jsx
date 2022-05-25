import React, { useState } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
import TodoForm from './TodoForm'
import { FaRegEdit } from 'react-icons/fa'
import { RiDeleteBin6Fill } from 'react-icons/ri'

const Todo = ({ todos, removeTodo, completeTodo, updateTodo }) => {
    const [edit, setEdit] = useState({
        id: null,
        value: '',
        isCompleted: false,
    })
    const submitUpdate = (value) => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: '',
            isCompleted: true,
        })
    }
    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    return todos?.map((todo, index) => (
        <div
            className="bg-cartTotal text-white px-4 py-2 rounded-full shadow mb-4 relative focus:outline-none flex items-center justify-start"
            key={index}
        >
            <button
                className="absolute top-3 right-3"
                type="button"
                onClick={() => removeTodo(todo.id)}
            >
                <RiDeleteBin6Fill className="text-red-600" />
            </button>

            <input
                type="checkbox"
                className="h-4 w-4 mr-2 text-gray-500"
                checked={todo.isCompleted}
                onChange={() => completeTodo(todo.id)}
            />
            <span className={todo.isCompleted ? 'line-through' : ''}>
                {todo.text}
            </span>
            <FaRegEdit
                onClick={() => setEdit({ id: todo.id, value: todo.text })}
                className="absolute top-3 right-9 text-white "
            />
        </div>
    ))
}

export default Todo

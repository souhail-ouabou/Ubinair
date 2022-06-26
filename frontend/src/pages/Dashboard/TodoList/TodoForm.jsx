import React, { useState } from 'react'
import { FcPlus } from 'react-icons/fc'
import { ObjectID } from 'bson';
const TodoForm = (props) => {
    const handleChange = (e) => {
        setTodoInput(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        props.onSubmit({
            id: new ObjectID(),
            text: todoInput,
            isCompleted: false
        })
        setTodoInput('')
    }
    const [todoInput, setTodoInput] = useState(
        props.edit ? props.edit.value : ''
    )

    return (
        <form onSubmit={handleSubmit} className="relative text-black">
            {props.edit ? (
                <>
                    <input
                        type="text"
                        placeholder="Update  task"
                        value={todoInput}
                        className="bg-blue-50 p-3 rounded-full mt-2 w-full"
                        onChange={handleChange}
                    />
                    <button
                        type="button"
                        className="text-white font-semibold flex items-center justify-center uppercase rounded-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80  text-sm px-5 py-2.5 text-center m-auto mt-2"
                        onClick={handleSubmit}
                    >
                        Update
                    </button>
                </>
            ) : (
                <>
                    <button
                        className="absolute top-6 right-3"
                        onClick={handleSubmit}
                    >
                        <FcPlus />
                    </button>
                    <input
                        type="text"
                        placeholder="Add new task"
                        value={todoInput}
                        className="p-3 rounded-full mt-2 w-full"
                        onChange={handleChange}
                    />
                </>
            )}
        </form>
    )
}

export default TodoForm

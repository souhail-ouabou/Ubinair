import React, { useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'
import { useSelector, useDispatch } from 'react-redux'
import { UpdateTaskssClient } from '../../../redux/actions/projectActions'

const TodoList = ({ isAdmin, id,taskss }) => {
    const dispatch = useDispatch()
    const [todos, setTodos] = useState([])
    const addTodo = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        const newTodos = [todo, ...todos]
        setTodos(newTodos)

        console.log(newTodos)
        dispatch(UpdateTaskssClient(id, newTodos))
    }
    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }

        setTodos((prev) =>
            prev.map((item) => (item.id === todoId ? newValue : item))
        )
    }

    const removeTodo = (id) => {
        const removedArr = [...todos].filter((todo) => todo.id !== id)

        setTodos(removedArr)
    }
    const completeTodo = (id) => {
        let updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.isCompleted = !todo.isCompleted
            }
            return todo
        })
        setTodos(updatedTodos)
    }
    return (
        <div className="bg-white shadow-md w-2/6 ml-auto p-8 rounded-xl ">
            <h1 className="text-2xl font-bold">Todo List</h1>
            <hr className="mt-2" />
            {isAdmin && <TodoForm onSubmit={addTodo} />}

            <div className="mt-4">
                You have {todos.filter((it) => it.isCompleted === false).length}{' '}
                pending task(s)
            </div>
            <div className="mt-4">
                <Todo
                    todos={todos}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                    completeTodo={completeTodo}
                />
            </div>
        </div>
    )
}

export default TodoList

import React, { useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'
import { useSelector, useDispatch } from 'react-redux'
import { UpdateTaskssClient } from '../../../redux/actions/projectActions'

const TodoList = ({ isAdmin, id : idProjet, taskss }) => {
    const dispatch = useDispatch()
    const [todos, setTodos] = useState(taskss)
    const addTodo = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        const newTodos = [todo, ...todos]
        setTodos(newTodos)

        console.log(newTodos)
        dispatch(UpdateTaskssClient(idProjet, newTodos))
    }
    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }
        const newTodos = todos.map((item) =>
            item.id === todoId ? newValue : item
        )
        setTodos(newTodos)
        console.log('new todos Update ---:', newTodos)
        dispatch(UpdateTaskssClient(idProjet, newTodos))
    }

    const removeTodo = (id) => {
        const removedArr = [...todos].filter((todo) => todo.id !== id)
        setTodos(removedArr)
        console.log('new todos after remove ---:', removedArr)
        dispatch(UpdateTaskssClient(idProjet, removedArr))
    }
    const completeTodo = (id) => {
        let updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.isCompleted = !todo.isCompleted
            }
            return todo
        })
        setTodos(updatedTodos)
        dispatch(UpdateTaskssClient(idProjet, updatedTodos))
    }
    return (
        <div className="glass shadow-md w-2/6 p-8 mt-4 text-slate-100">
            <h1 className="text-2xl font-bold">Todo List</h1>
            <hr className="mt-2" />
            {isAdmin && <TodoForm onSubmit={addTodo} />}

             <div className="mt-4 ">
                You have {todos?.filter((it) => it.isCompleted === false).length}{' '}
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

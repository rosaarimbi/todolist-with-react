import { useState } from 'react'
import './TodoCreate.css'

const TodoCreate = (props) => {
    const [getInputTodo, setInputTodo] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        const newTodo = {
            id: Math.floor(Math.random() * 100) + 1,
            tittle: getInputTodo
        }
        props.onCreateTodo(newTodo)
        setInputTodo('')
    }

    const hanldeInputTodo = (event) => {
        setInputTodo(event.target.value)
        console.log("getInputTodo", getInputTodo)
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" value={getInputTodo} onChange={hanldeInputTodo}/>
            <button type="submit">Add</button>
        </form>
    )
}

export default TodoCreate;
import './Todo.css'
import TodoList from "../todo-list/TodoList";
import TodoCreate from '../todo-create/TodoCreate';
import { useState } from 'react';

const Todo = () => {
    const [getTodos, setTodos] = useState([
        { id: 1, tittle: 'Eat'},
        { id: 2, tittle: 'Sleep'},
        { id: 3, tittle: 'Code'},
    ])

    const eventCreaetTodo = (todo) => {
        setTodos(getTodos.concat(todo))
        console.log(getTodos)
    }

    return (
        <div>
            <h3>Todo List</h3>
            <TodoCreate onCreateTodo={eventCreaetTodo}/>
            <TodoList dataTodos={getTodos} />
        </div>
    )
}

export default Todo
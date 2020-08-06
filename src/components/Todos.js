import React from 'react'
import TodoItem from './TodoItem';
import '../styles/todos.css';

function Todos({ todos, deleteTodo, toggleTodoDone }) {

    return (
        <div className='todos'>
            {todos.map(todo => 
                <TodoItem key={todo.id} data={todo} deleteTodo={deleteTodo} toggleTodoDone={toggleTodoDone} />
            )}
        </div>
    )
}

export default Todos

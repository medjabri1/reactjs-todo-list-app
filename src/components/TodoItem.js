import React from 'react';
import '../styles/todoItem.css';

function TodoItem({ data, deleteTodo, toggleTodoDone }) {

    const { id, title, done } = data;

    let checkClick = () => {
        toggleTodoDone(id);
    }

    let deleteClick = () => {
        deleteTodo(id);
    }

    return (
        <div className={`todoItem ${done && "done"}`}>
            <span className='todoItem__check' onClick={checkClick}></span>

            <p className='todoItem__title'>{title}</p>

            <span className='todoItem__delete' onClick={deleteClick}></span>
        </div>
    )
}

export default TodoItem

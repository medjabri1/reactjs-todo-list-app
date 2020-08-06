import React, { useState } from 'react';
import '../styles/addNewTodo.css';

function AddNewTodo({ addNewTodo }) {

    const [title, setTitle] = useState('');

    let onChange = (e) => {
        setTitle(e.target.value);
    }

    let onSubmit = (e) => {

        e.preventDefault();
        
        if(title.trim() !== '') {
            addNewTodo(title); 
            setTitle('');   
        } 
    }

    return (
        <form className='addNewTodo' onSubmit={onSubmit}>
            <input type="text" placeholder='New item ...' className='addNewTodo__input' value={title} onChange={onChange} />
            <button className='addNewTodo__submit'>Add item</button>
        </form>
    )
    
}

export default AddNewTodo;

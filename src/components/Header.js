import React, { Component } from 'react';
import '../styles/header.css';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <h2 className='header__title'>Todo List App</h2>
            </div>
        );
    }
}

export default Header;

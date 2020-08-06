import React from 'react';
import Header from './components/Header';
import AddNewTodo from './components/AddNewTodo';
import Todos from './components/Todos';
import './styles/app.css';

class App extends React.Component {

    initialTodos = [
        {
            id: 0, title: 'Studying react hooks', done: true
        },
        {
            id: 1, title: 'Get this shit done', done: false
        }
    ];

    constructor(props) {
        super(props);
        this.state = { todos: this.getFromLocalStorage()};
    }

    addNewTodo = (title) => {
        let id = this.state.todos.length ? this.state.todos[this.state.todos.length - 1].id + 1 : 0 ;
        let done = false;

        this.state.todos.push({
            id, title, done
        });

        this.setState({
            todos: this.state.todos
        })

        this.saveLocalStorage();
    }

    deleteTodo = (id) => {

        this.state.todos = this.state.todos.filter(todo => todo.id !== id);

        this.setState({
            todos: this.state.todos
        })

        this.saveLocalStorage();
    }

    toggleTodoDone = (id) => {

        this.state.todos.map(todo => {
            if(todo.id === id) {
                todo.done = !todo.done;
            }
        })

        this.setState({
            todos: this.state.todos
        })

        this.saveLocalStorage();
    }

    saveLocalStorage = () => {
        window.localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }

    getFromLocalStorage = () => {
        let result = window.localStorage.getItem('todos') ? JSON.parse(window.localStorage.getItem('todos')) : [];
        return result;
    }

    render() {
        return (
            <div className='app'>
                <Header />
                <AddNewTodo addNewTodo={this.addNewTodo} />
                <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} toggleTodoDone={this.toggleTodoDone} />
            </div>
        );
    }
}

export default App;

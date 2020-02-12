import React, { Component } from 'react'
import logo from '../logo.svg';
import ToDoItem from './ToDoItem'

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: "",
            list: props.list
        };
    }

    handleTodoChange = (e) => {
        this.setState({ todo: e.target.value });
    }

    createToDoItem = (e) => {
        const todo = this.state.todo;
        const list = this.state.list;
        if ( !todo ) {
            alert("Please enter a todo.");
            return;
        }

        const newId = list.length
            ? Math.max.apply(null, list.map(t => t.id)) + 1
            : 1;
        list.push({ id: newId, text: todo });
        this.setState({ todo: ""});
    }

    removeItem = (id) => {
        let list = this.state.list;
        list = list.filter(item => item.id !== id)
        this.setState({ list: list })
    }

    render() {
        return (
            <div className="todo">
                <img className="logo" src={logo} alt="React logo" />
                <h1>To Do</h1>
                <div className="todo-container">
                    <div>
                        {this.state.list.map((item, key) => 
                            <ToDoItem {...item} deleteItem={this.removeItem} />
                        )}
                    </div>
                    <div className="todo-item">
                        <input className="todo-add-input" type="text" value={this.state.todo} onChange={this.handleTodoChange} />
                        <button className="todo-add" onClick={this.createToDoItem}>+</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ToDo
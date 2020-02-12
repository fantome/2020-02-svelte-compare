import React, { Component } from 'react'

class ToDoItem extends Component {
    render() {
        return (
            <div class="todo-item">
                <p>{this.props.text} <small>[id:{this.props.id}]</small></p>
                <button class="todo-item-delete" onClick={() => this.props.deleteItem(this.props.id)}>-</button>
            </div>
        )
    }
}

export default ToDoItem
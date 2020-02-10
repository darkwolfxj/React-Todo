import React from 'react';

export default function Todo(props){
    return (
        <div onClick={() => props.toggleItem(props.todo.id)} className={`item ${props.todo.completed?' completed' : ''}`}>
            <p>{props.todo.name}</p>
        </div>
        )
    }
import React from 'react';
import './Todo.css';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todoList = [{name: 'Build todoList array', completed: true, id: 1}]

class App extends React.Component {
    constructor() {
        super();
        this.state = {list: todoList};
    }     
             
    toggleItem = (clickedId) => {
        const newList = this.state.list.map(i => {
            if(i.id === clickedId){
                return {...i, completed: !i.completed}
            }
                else {return i}
        })
            this.setState({
                list: newList
            })
    }
    
    addItem = text => {
        const newItem = {
            name: text,
            id: Date.now(),
            completed: false
        }
        this.setState({list: [...this.state.list, newItem]})
    }
    
    filter = () =>{
        const filteredList = this.state.list.filter(i => {
        if(i.completed === false){
            return {i}
        }
            else {return false}
    })
        this.setState({
            list: filteredList
        })
    }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <TodoList list={this.state.list} toggleItem={this.toggleItem}/>
        <TodoForm addItem={this.addItem} filter={this.filter}/>
      </div>
    );
  }
}

export default App;

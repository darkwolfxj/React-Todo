import React from 'react';

class TodoForm extends React.Component{
    constructor(props){
        super();
        this.state = {value: ''}
    }
    handleChanges = e => {
        // update state with each keystroke
        this.setState({
          value: e.target.value
        });
      };
    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state.value);
        this.setState({value: ''})
    }
    render(){
        return(
        <form onSubmit={this.handleSubmit}>
            <input type='text' value={this.state.value} onChange={this.handleChanges}/>
            <button type='submit'>Add Item</button>
            <button onClick={this.props.filter}>Clear All Completed</button>
        </form>
    )
    }
}
export default TodoForm
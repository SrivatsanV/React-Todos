import React, { Component } from 'react'

export default class AddTodo extends Component {
   state = {
       title: ''
   }

   onChange = (e)=>{
       this.setState({[e.target.name]:e.target.value});
   }

   submitForm = (e)=>{
       e.preventDefault();
       this.props.addTodo(this.state.title);
       this.setState({title: ''});
   }
   render() {
    return (
      <div style={{margin: '10px'}}>
        <form onSubmit={this.submitForm} style={{ display: 'flex' }}>
            <input 
            type="text" 
            name="title"
            placeholder="Add To-Do here"
            onChange={this.onChange}
            value={this.state.value}
            style={{flex:'5'}}
            className="input"
            />
            <input
            type="submit"
            value="Add"
            style={btn}
            />
        </form>
      </div>
    )
  }
}

const btn={
    background: '#212121',
    color: '#fff',
    borderRadius: '5px',
    padding: '3px 5px',
    float: 'right',
    border: 'solid 1px #212121',
    margin: '0px 10px'
}

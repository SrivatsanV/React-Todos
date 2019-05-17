import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos'; 
import AddTodo from './components/AddTodo';

class App extends Component {
  state={
    todos:[
      {
        id:1,
        title:'Milk',
        completed:false
      },
      {
        id:2,
        title:'Learn',
        completed:false
      },
      {
        id:3,
        title:'GSOC',
        completed:false
      }
    ]
  }

  markComplete = (id)=>{
      this.setState( {todos: this.state.todos.map(todo => {
        if(todo.id === id)
          todo.completed=!todo.completed;

        return todo;
      }) 
    });
  }

  deleteTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id!==id)]});
  }

  addTodo = (title) => {
      const newTodo = {
        id:4,
        title:title,
        completed:false
      }
      this.setState({todos: [...this.state.todos,newTodo]});
  }
  render() {
    return (
      <div className="App">
        <h1>TodosList</h1>
        <AddTodo addTodo={this.addTodo}/>
        <Todos todos= {this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}

export default App;

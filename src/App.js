import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import axios from "axios";

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/todos")
      .then(res => this.setState({ todos: res.data }));
  }

  markComplete = id => {
    axios.patch(`http://localhost:5000/todos/${id}`).then(res =>
      this.setState({
        todos: this.state.todos.map(todo => {
          if (todo._id === id) todo.completed = !todo.completed;
          return todo;
        })
      })
    );
  };

  deleteTodo = id => {
    axios.delete(`http://localhost:5000/todos/${id}`).then(res =>
      this.setState({
        todos: [...this.state.todos.filter(todo => todo._id !== id)]
      })
    );
  };
  addTodo = title => {
    axios
      .post("http://localhost:5000/todos", {
        title: title
      })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  };
  render() {
    return (
      <div className="App">
        <h1>TodosList</h1>
        <AddTodo addTodo={this.addTodo} />
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;

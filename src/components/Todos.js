import React, { Component } from "react";
import Todoitem from "./Todoitem";
import PropTypes from "prop-types";
export default class Todos extends Component {
  render() {
    return this.props.todos.map(todo => (
      <Todoitem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        deleteTodo={this.props.deleteTodo}
      />
    ));
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired //the props here is an array of todos
};

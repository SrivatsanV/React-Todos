import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Todoitem extends Component {
  applyStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "5px",
      border: "solid 1px #212121",
      borderRadius: "1px",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };
  render() {
    //destructuring
    const { _id, title } = this.props.todo;
    return (
      <div style={this.applyStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, _id)}
          />
          {title}
          <button
            style={buttonStyle}
            onClick={this.props.deleteTodo.bind(this, _id)}
          >
            Delete
          </button>
        </p>
      </div>
    );
  }
}

const buttonStyle = {
  background: "red",
  color: "#fff",
  borderRadius: "5px",
  padding: "3px 5px",
  float: "right",
  border: "solid 1px red",
  margin: "0px 10px"
};

// Proptypes
Todoitem.propTypes = {
  todo: PropTypes.object.isRequired //the prop is one single object here
};

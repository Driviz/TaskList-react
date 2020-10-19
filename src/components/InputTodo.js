import React, { Component } from "react";

class InputTodo extends Component {
  state = { title: "" };

  onChange = (e) => {
    // console.log(e.target.value);
    this.setState({ title: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodoProps(this.state.title);
    this.setState({ title: "" });
    // console.log(this.state.title);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Add Todo... "
          className="input-text"
          value={this.state.title}
          onChange={this.onChange}
        />
        <input type="submit" className="input-submit" value="Submit" />
      </form>
    );
  }
}

export default InputTodo;

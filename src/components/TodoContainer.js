import React from "react";
import Header from "./Header";
import InputTodo from "./InputTodo";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Setup development environment",
        completed: true,
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: false,
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false,
      },
    ],
  };

  handleChange = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  delTodo = (id) => {
    const todos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos });
  };

  addTodoItem = (title) => {
    if (title === "") {
      console.log("enter task first");
      return;
    }
    const newItem = { id: uuidv4(), title: title, completed: false };
    const todos = [...this.state.todos, newItem];
    this.setState({ todos: todos });
    // console.log(title);
  };

  render() {
    return (
      <div className="container">
        <Header />
        <InputTodo addTodoProps={this.addTodoItem} />
        <TodoList
          todos={this.state.todos}
          handleChangeProps={this.handleChange}
          deleteTodoProps={this.delTodo}
        ></TodoList>
      </div>
    );
  }
}

export default TodoContainer;

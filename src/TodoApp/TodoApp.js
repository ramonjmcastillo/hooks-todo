import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Grid from "@material-ui/core/Grid";
import TodoList from "./TodoList/TodoList";
import TodoForm from "./TodoForm/TodoForm";

function TodoApp() {
  const initialTodos = [
    {
      id: 1,
      task: "Finish Dragon Quest",
      completed: false
    },
    {
      id: 2,
      task: "Eat Lunch",
      completed: false
    },
    {
      id: 3,
      task: "Refactor Code",
      completed: true
    }
  ];

  const [todos, setTodos] = useState(initialTodos);

  const addTodo = newTodo => {
    setTodos([...todos, { id: 4, task: newTodo, completed: false }]);
  };

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        width: "100vw",
        backgroundColor: "#fafafa",
        boxSizing: "border-box"
      }}
      elevation={0}
    >
      <AppBar color="primary" style={{ height: "64px" }}>
        <ToolBar>
          <Typography color="inherit"> Todo App with Hooks </Typography>
        </ToolBar>
      </AppBar>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </Paper>
  );
}

export default TodoApp;

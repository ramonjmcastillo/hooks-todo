import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Grid from "@material-ui/core/Grid";
import TodoList from "./TodoList/TodoList";
import TodoForm from "./TodoForm/TodoForm";
import uuid from "uuid/v4";

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
    setTodos([...todos, { id: uuid(), task: newTodo, completed: false }]);
  };

  const removeTodo = todoId => {
    const updateTodos = todos.filter(todo => {
      return todo.id !== todoId;
    });

    setTodos(updateTodos);
  };

  const toggleTodo = todoId => {
    const updateTodos = todos.map(todo => {
      return todo.id === todoId
        ? { ...todo, completed: !todo.completed }
        : todo;
    });

    setTodos(updateTodos);
  };

  const editTodo = (todoId, newTask) => {
    const updateTodos = todos.map(todo => {
      return todo.id === todoId ? { ...todo, task: newTask } : todo;
    });

    setTodos(updateTodos);
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
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
            todos={todos}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;

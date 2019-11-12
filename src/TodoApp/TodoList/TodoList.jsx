import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import Todo from "./Todo";

const TodoList = props => {
  return (
    <Paper style={{ marginTop: "0px" }}>
      <List>
        {props.todos.map((todo, i) => {
          return (
            <>
              <Todo
                id={todo.id}
                removeTodo={props.removeTodo}
                task={todo.task}
                key={todo.id}
                completed={todo.completed}
                toggleTodo={props.toggleTodo}
                editTodo={props.editTodo}
              />
              {i < props.todos.length - 1 && <Divider />}
            </>
          );
        })}
      </List>
    </Paper>
  );
};

export default TodoList;

import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";

const TodoList = props => {
  return (
    <Paper style={{ marginTop: "0px" }}>
      <List>
        {props.todos.map(todo => {
          return (
            <>
              <ListItem>
                <ListItemText>{todo.task}</ListItemText>
              </ListItem>
              <Divider />
            </>
          );
        })}
      </List>
    </Paper>
  );
};

export default TodoList;

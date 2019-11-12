import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import useToggleState from "../../hooks/useToggleState";
import EditForm from "../EditForm.js/EditForm";

const Todo = ({ task, completed, removeTodo, toggleTodo, id, editTodo }) => {
  const [isEditing, toggleIsEditing] = useToggleState(false);

  return (
    <ListItem style={{height: '64px'}}>
      {isEditing ? (
        <EditForm
          id={id}
          editTodo={editTodo}
          task={task}
          toggleIsEditing={toggleIsEditing}
        />
      ) : (
        <>
          <Checkbox
            onClick={() => {
              toggleTodo(id);
            }}
            disabledRipple
            tabIndex={-1}
            checked={completed}
          />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton onClick={() => removeTodo(id)} aria-label="Delete">
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="Edit" onClick={toggleIsEditing}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
};

export default Todo;

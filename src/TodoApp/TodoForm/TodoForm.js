import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import useInputState from "../../hooks/useInputState";

const TodoForm = ({ addTodo }) => {
  const [value, handleValueChange, reset] = useInputState("");

  return (
    <Paper
      style={{ marginTop: "64px", marginBottom: "1rem", padding: "0 1rem" }}
    >
      <form
        onSubmit={e => {
          e.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <TextField
          value={value}
          onChange={handleValueChange}
          margin="normal"
          label="Add New Todo"
          fullWidth
        />
      </form>
    </Paper>
  );
};

export default TodoForm;

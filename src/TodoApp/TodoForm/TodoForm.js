import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import useInputState from "../../hooks/useInputState";

const TodoForm = ({ addTodo }) => {
  const [value, handleValueChange, reset] = useInputState("");

  return (
    <Paper style={{ marginTop: "64px" }}>
      <form
        onSubmit={e => {
          e.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <TextField value={value} onChange={handleValueChange} />
      </form>
    </Paper>
  );
};

export default TodoForm;

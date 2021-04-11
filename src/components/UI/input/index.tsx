import React from 'react';
import TextField from "@material-ui/core/TextField";
import {CONSTANTS} from "../../../config";

export const Input = ({id, name, label, onChange, value, type=CONSTANTS.form.TEXT}: any) => {
  return (
    <>
      <TextField
        type={type}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id={id}
        label={label}
        name={name}
        autoFocus
        onChange={onChange}
        value={value}
      />
    </>
  )
}

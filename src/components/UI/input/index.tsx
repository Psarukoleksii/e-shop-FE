import React from 'react';
import TextField from "@material-ui/core/TextField";
import {CONSTANTS} from "../../../config";
import {FormControl, FormHelperText} from "@material-ui/core";

export const Input = ({id, name, label, onChange, value, type = CONSTANTS.form.TEXT, errors = {}}: any) => {

  return (
    <>
      <TextField
        type={type}
        variant="outlined"
        margin="normal"
        fullWidth
        id="component-error-text"
        label={label}
        name={name}
        autoFocus
        onChange={onChange}
        value={value}
        aria-describedby="component-error-text"
      />
      <FormHelperText id="component-error">{errors[name]}</FormHelperText>
    </>
  )
}

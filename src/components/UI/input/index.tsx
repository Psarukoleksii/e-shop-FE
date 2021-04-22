import React from 'react';
import TextField from "@material-ui/core/TextField";
import {CONSTANTS} from "../../../config";
import {FormHelperText} from "@material-ui/core";

export const Input = ({name, label, onChange, value, type = CONSTANTS.form.TEXT, errors = {}, defaultValue}: any) => {

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
        defaultValue={defaultValue}
      />
      <FormHelperText id="component-error">{errors[name]}</FormHelperText>
    </>
  )
}

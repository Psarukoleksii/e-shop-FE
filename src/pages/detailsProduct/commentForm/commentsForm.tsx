import React from 'react';
import {useAddComment} from "../../../hooks";
import {FormikProvider} from "formik";
import {CONSTANTS} from "../../../config";
import {TextareaAutosize} from "@material-ui/core";

export const CommentsForm = () => {

  const { formik } = useAddComment();

  return (
    <FormikProvider value={formik}>
      <form action={CONSTANTS.form.POST} onSubmit={formik.handleSubmit}>
        <TextareaAutosize
          id="comment"
          name="comment"
          aria-label="minimum height"
          rowsMin={5}
          cols={80}
          onChange={formik.handleChange}
          value={formik.values.comment}
          placeholder="Minimum 3 rows" />
        <button type={"submit"}>Send!</button>
      </form>
    </FormikProvider>
  )
}

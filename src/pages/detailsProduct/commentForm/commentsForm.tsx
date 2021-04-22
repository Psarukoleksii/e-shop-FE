import React from 'react';
import {FormikProvider} from "formik";
import {CONSTANTS, ROUTERS} from "../../../config";
import {Button, FormHelperText, Grid, TextareaAutosize} from "@material-ui/core";
import {ModalWindow} from "../../../components";
import {Link} from "react-router-dom";
import {Alert} from "@material-ui/lab";
import {ICommentForm} from "../../../interfaces";

export const CommentsForm: React.FC<ICommentForm> = ({ formik, setOpenModal, openModal, success }: ICommentForm) => {

  return (
    <FormikProvider value={formik}>
      <form action={CONSTANTS.form.POST} onSubmit={formik.handleSubmit}>
        <Grid container direction="column">
          <Grid>
            <TextareaAutosize
              style={{resize: "none", marginTop: 15}}
              id="comment"
              name="comment"
              aria-label="minimum height"
              rowsMin={5}
              cols={70}
              onChange={formik.handleChange}
              value={formik.values.comment}
              placeholder="Enter your comment" />
            <FormHelperText id="component-error">{formik.errors.comment}</FormHelperText>
          </Grid>
          <Grid container direction="row">
            <Grid>
              <Button type={"submit"} variant="contained" color="primary">Send</Button>
            </Grid>
            <Grid style={{marginLeft: 15}}>
              { success && <Alert severity="success">Comment added!</Alert> }
            </Grid>
          </Grid>
        </Grid>
      </form>
      <ModalWindow openModal={openModal} setOpenModal={setOpenModal}>
        <Link style={{color: "black"}} to={ROUTERS.authorization}>Sign in</Link> {CONSTANTS.errorMessages.signInForThisAction}
      </ModalWindow>
    </FormikProvider>
  )
}

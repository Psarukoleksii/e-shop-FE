import React from 'react';
import {Loading} from "../loading";
import {Button, Grid, Typography} from "@material-ui/core";
import {ICommentItem, ICommentsList, IUser} from "../../interfaces";
import translate from "../../i18n/translate";
const moment = require('moment');

export const CommentsList: React.FC<ICommentsList> = ({loading, comments, handleMoreComments}: ICommentsList) => {

  if (loading) return <Loading/>;

  if (comments.length === 0) {
    return <Grid>
      {translate("noComments")}
    </Grid>
  }

  return (
    <>
      {
        comments.map((value: ICommentItem, index: number) => {
          return (
            <Grid container direction="row" key={index} alignItems="center">
              <Grid xs={2}>
                avatar
              </Grid>
              <Grid xs={10} container direction="column">
                <Grid>
                  {value.user.map((value: IUser, index: number) => {
                    return (
                      <span key={index}>{value.firstName} {value.lastName}</span>
                    )
                  })}
                </Grid>
                <Grid>
                  <p>{value.comment}</p>
                  <Typography variant="subtitle2" gutterBottom>
                    Comment added: {moment(value.createdAt).format("HH:mm, DD MMMM YYYY")}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          )
        })
      }
      <Grid xs={12} container justify="center">
        <Button variant="contained" color="primary" onClick={()=> handleMoreComments()}>Show more</Button>
      </Grid>
    </>
  )
}

import React from 'react';
import {Grid} from "@material-ui/core";
import {CommentsForm} from "../commentForm";

export const DetailsItem = ({items}:any) => {

  return (
    <Grid container direction="column">
      <Grid container direction="row">
        <Grid xs={6}>
          {items.image}
        </Grid>
        <Grid xs={6}>
          <h2>{items.name}</h2>
          <p>{items.producer}</p>
        </Grid>
      </Grid>
      <Grid container>
        <Grid xs={6}>
          <CommentsForm />
        </Grid>
        <Grid xs={6}>
            .............
        </Grid>
      </Grid>
    </Grid>
  )
};

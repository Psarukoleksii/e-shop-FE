import React from 'react';
import {Grid} from "@material-ui/core";
import {CommentsForm} from "../commentForm";
import {RateProduct} from "../../../components";
import {useAddComment} from "../../../hooks";
import {Alert} from "@material-ui/lab";

export const DetailsItem = ({items}:any) => {
  const { success } = useAddComment();

  console.log(success);

  return (
    <Grid container direction="column">
      <Grid container direction="row">
        <Grid xs={6}>
          {items.image}
        </Grid>
        <Grid xs={6}>
          <h2>{items.name}</h2>
          <p>{items.price} $ / {items.mass} {items.weight}</p>
          <p>Producer: {items.producer}</p>
        </Grid>
      </Grid>
      <Grid container>
        <Grid xs={12}>
          <RateProduct />
        </Grid>
        <Grid xs={6}>
           <CommentsForm />
        </Grid>
        <Grid xs={6}>
            all comments
        </Grid>
      </Grid>
    </Grid>
  )
};

import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import {IProductInfo} from "../../../interfaces";

type DetailsItemsProps = {
  items: IProductInfo;
}

export const DetailsInfoProduct: React.FC<DetailsItemsProps> = ({items}:DetailsItemsProps) => {
  return (
    <Grid container direction="row">
      <Grid xs={6}>
        {items.image}
      </Grid>
      <Grid xs={6}>
        <Typography variant="h6" gutterBottom>
          {items.name}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {items.price} $ / {items.mass} {items.weight}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Producer: {items.producer}
        </Typography>
      </Grid>
    </Grid>
  )
}

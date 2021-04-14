import React from 'react';
import Grid from "@material-ui/core/Grid";

export const ProductsListLayout = ({children}: any) => {
  return (
    <Grid container spacing={2}>
      <Grid item sm={3}>
        bar
      </Grid>
      <Grid item xs={12} sm={9} container alignItems="center">
        {children}
      </Grid>
    </Grid>
  )
}

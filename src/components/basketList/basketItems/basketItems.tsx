import React, {useEffect, useState} from 'react';
import {Grid, Typography, Button} from "@material-ui/core";
import {Input} from "../../UI";
import {CONSTANTS} from "../../../config";
import {IBasketProductsItem} from "../../../interfaces";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

export const BasketItems: React.FC<IBasketProductsItem> = ({items, formik, handleDeleteProductFromBasket}: IBasketProductsItem) => {
  const name = items.name;

  return (
    <Grid container>
      <Grid xs={3}>
        {items.image}
      </Grid>
      <Grid xs={2}>
        <Typography variant="subtitle2" gutterBottom>
          {items.name}
        </Typography>
      </Grid>
      <Grid xs={2}>
        <Input
          type={CONSTANTS.form.NUMBER}
          label={name}
          name={name}
          onChange={formik.handleChange}
          value={formik.values.name}
          errors={formik.errors}
          defaultValue={1}
        />
      </Grid>
      <Grid xs={1}>
        <Button type="button" onClick={()=> handleDeleteProductFromBasket(items._id)}><DeleteForeverIcon /></Button>
      </Grid>
      <Grid xs={1}>
        {items.price * formik.values[name]} $
      </Grid>
    </Grid>
  )
};

import React from 'react';
import {useGetProductsWithCategory} from "../../hooks";
import {Loading, ProductList} from "../../components";
import Grid from "@material-ui/core/Grid";

export const CategoryWithProducts = () => {

  const { loading, products } = useGetProductsWithCategory();

  if(loading) return <Loading />;

  return (
    <Grid container>
      <ProductList products={products}/>
    </Grid>
  )
};

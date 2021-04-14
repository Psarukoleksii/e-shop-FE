import React from 'react';
import {useSubCategoriesProducts} from "../../hooks";
import {Loading} from "../loading";
import {ProductList} from "../productList";
import {Grid} from "@material-ui/core";

export const SubCategoryWithProducts = () => {
  const {products, loading} = useSubCategoriesProducts();

  if (loading) return <Loading/>;

  return (
    <Grid container>
      {products && <ProductList products={products}/>}
    </Grid>
  )
};

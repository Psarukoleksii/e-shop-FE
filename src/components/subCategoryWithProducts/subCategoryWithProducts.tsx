import React from 'react';
import {useSubCategoriesProducts} from "../../hooks";
import {Loading} from "../loading";
import {ProductList} from "../productList";
import {Button, Grid} from "@material-ui/core";
import {useStylesPagination} from "../../styles";

export const SubCategoryWithProducts = () => {
  const styles = useStylesPagination();
  const {products, loading, handleGetNextProducts, handleGetPrevProducts} = useSubCategoriesProducts();

  if (loading) return <Loading/>;

  return (
    <Grid container>
      <ProductList products={products}/>
      <Grid xs={12} className={styles.root}>
        <Button variant="contained" color="primary" onClick={handleGetPrevProducts}>Prev</Button>
        <Button variant="contained" color="primary" onClick={handleGetNextProducts}>Next</Button>
      </Grid>
    </Grid>
  )
};

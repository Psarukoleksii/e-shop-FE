import React from 'react';
import {useGetProductsWithCategory} from "../../hooks";
import {Loading, ProductList} from "../../components";
import Grid from "@material-ui/core/Grid";
import {Button} from "@material-ui/core";
import {useStylesPagination} from "../../styles";

export const CategoryWithProducts = () => {
  const styles = useStylesPagination();
  const {loading, products, handleGetNextProducts, handleGetPrevProducts} = useGetProductsWithCategory();

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

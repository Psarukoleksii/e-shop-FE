import React from 'react';
import {useGetProductsWithCategory} from "../../hooks";
import {CardProduct, Loading} from "../../components";
import Grid from "@material-ui/core/Grid";
import { useHistory } from 'react-router-dom';

export const CategoryWithProducts = ({context}: any) => {
  const history = useHistory();
  const { loading, name } = useGetProductsWithCategory({context});

  const handleGetIdProduct = (id:string) => {
    context.handleGetInfoAboutProduct(id);
    history.push(`/categories/${name}/${id}`)
  }

  if (loading) return <Loading/>

  return (
    <Grid container spacing={2} >
      <Grid item sm={3}>
        <h2>Category: {name}</h2>
        bar
      </Grid>
      <Grid item xs={12} sm={9} container alignItems="center">
        {
          context.allProducts[0].products.map((value: any) => {
            return (
              <Grid sm={4}>
                <CardProduct image={value.image} title={value.name} id={value._id} handleGetIdProduct={handleGetIdProduct}/>
              </Grid>
            )
          })
        }
      </Grid>
    </Grid>
  )
}

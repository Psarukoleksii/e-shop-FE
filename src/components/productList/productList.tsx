import React from 'react';
import Grid from "@material-ui/core/Grid";
import {CardProduct} from "../UI";
import {useHistory} from "react-router-dom";
import {ROUTERS} from "../../config";

export const ProductList = ({products}:any) => {
  const history = useHistory();

  const handleGetIdProduct = (id:string) => {
    history.push(`${ROUTERS.products}/${id}`);
  };

  return (
    <>
      {
        products.map((value: any, index: number) => {
          return (
            <Grid key={index} sm={4}>
              <CardProduct image={value.image} title={value.name} id={value._id} handleGetIdProduct={handleGetIdProduct}/>
            </Grid>
          )
        })
      }
    </>
  )
}
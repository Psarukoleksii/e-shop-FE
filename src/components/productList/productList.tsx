import React from 'react';
import Grid from "@material-ui/core/Grid";
import {CardProduct} from "../UI";
import {useHistory} from "react-router-dom";
import {ROUTERS} from "../../config";
import {IProductsList, IProductInfo} from "../../interfaces";

export const ProductList: React.FC<IProductsList> = ({products}:IProductsList) => {
  const history = useHistory();

  const handleGetIdProduct = (id:string) => {
    history.push(`${ROUTERS.products}/${id}`);
  };

  return (
    <>
      {
        products && products.map((value: IProductInfo, index: number) => {
          return (
            <Grid key={index} sm={4}>
              <CardProduct items={value} handleGetIdProduct={handleGetIdProduct}/>
            </Grid>
          )
        })
      }
    </>
  )
}

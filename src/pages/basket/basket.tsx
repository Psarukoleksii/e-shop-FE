import React from 'react';
import {useGetProductsFromBasket} from "../../hooks";
import {BasketList, Loading} from "../../components";
import {Typography} from "@material-ui/core";

export const Basket = () => {
  const { products, loading, handleDeleteProductFromBasket } = useGetProductsFromBasket()

  if(loading) return <Loading />

  return (
    <>
      <Typography gutterBottom variant="h3" component="h2">
        Basket
      </Typography>
      {
        products && <BasketList products={products} handleDeleteProductFromBasket={handleDeleteProductFromBasket} />
      }
    </>
  )
};

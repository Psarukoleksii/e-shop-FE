import React from 'react';
import {useGetProductsFromBasket} from "../../hooks";
import {BasketList, Loading} from "../../components";
import {Typography} from "@material-ui/core";
import translate from "../../i18n/translate";

export const Basket = () => {
  const { products, loading, handleDeleteProductFromBasket } = useGetProductsFromBasket()

  if(loading) return <Loading />

  return (
    <>
      <Typography gutterBottom variant="h3" component="h2">
        {translate('basket')}
      </Typography>
      {
        products && <BasketList products={products} handleDeleteProductFromBasket={handleDeleteProductFromBasket} />
      }
    </>
  )
};

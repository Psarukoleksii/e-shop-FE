import React from 'react';
import {useGetProductsWithCategory} from "../../hooks";
import {Loading} from "../../components";

export const CategoryWithProducts = () => {

  const { products, loading } = useGetProductsWithCategory()

  if(loading) return <Loading />

  console.log(products);
  return (
    <div>
      PROOODUCT
    </div>
  )
}

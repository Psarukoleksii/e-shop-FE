import React from 'react';
import {DetailsItem} from "./detailsItem";
import {useDetailsProducts} from "../../hooks/products/detailsProduct.hook";
import {Loading} from "../../components";

export const DetailsProduct = () => {

  const {loading, details} = useDetailsProducts();

  if (loading) return <Loading/>;

  return (
    <>
      <DetailsItem items={details}/>
    </>
  )
};

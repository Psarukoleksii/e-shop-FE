import React from 'react';
import {DetailsItem} from "./detailsItem";

export const DetailsProduct = ({context}: any) => {
  
  return (
    <>
      {
        context.detailsOfProduct.map((value:any)=> <DetailsItem items={value}/>)
      }
    </>
  )
};

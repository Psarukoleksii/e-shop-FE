import React from 'react';
import {Box} from '@material-ui/core';
import {useGetNewProducts} from "../../hooks";
import {Loading} from "../loading";
import {CSSTransition} from "react-transition-group";

export const NewProductsList = () => {

  const { newProducts, loading } = useGetNewProducts()

  if(loading) return <Loading />

  console.log(newProducts);

  return (
      <Box>
        hello world
      </Box>
  )
}

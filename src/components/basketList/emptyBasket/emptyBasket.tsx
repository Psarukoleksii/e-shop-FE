import React from 'react';
import {Box, Typography} from "@material-ui/core";

export const EmptyBasket = () => {
  return (
    <Box>
      <Typography gutterBottom variant="h6" component="h2">
        Basket is empty
      </Typography>
    </Box>
  )
}

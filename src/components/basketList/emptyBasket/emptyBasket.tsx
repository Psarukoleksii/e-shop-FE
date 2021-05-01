import React from 'react';
import {Box, Typography} from "@material-ui/core";
import translate from "../../../i18n/translate";

export const EmptyBasket = () => {
  return (
    <Box>
      <Typography gutterBottom variant="h6" component="h2">
        {translate('basketIsEmpty')}
      </Typography>
    </Box>
  )
}

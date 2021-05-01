import React from 'react';
import {NewProductsList, SliderSection} from "../../components";
import {Box} from "@material-ui/core";

export const Home = () => {

  return (
    <Box>
      <Box>
        <SliderSection />
      </Box>
      <Box>
        <NewProductsList />
      </Box>
    </Box>
  )
}

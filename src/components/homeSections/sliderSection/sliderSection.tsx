import React from 'react';
import {CONSTANTS} from "../../../config";
import { Slider } from '../../slider';
import {Box} from "@material-ui/core";

export const SliderSection = () => {

  const test = CONSTANTS.sliderPhoto;

  return (
    <Box>
      <Slider items={test}/>
    </Box>
  )
}

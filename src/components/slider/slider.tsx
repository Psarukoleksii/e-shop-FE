import React from 'react';
// @ts-ignore
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export const Slider = ({items}: any) => {

  const styles = {
    image: {
      display: "block",
      margin: "50px auto"
    }
  };

  return (
    <Splide
      options={{
        height: 600
      }}
    >
      {
        items.map((value:string, index: number) => {
          return (
            <SplideSlide key={index}>
              <img style={styles.image} src={value} alt="photoSlider"/>
            </SplideSlide>
          )
        })
      }
    </Splide>
  )
}

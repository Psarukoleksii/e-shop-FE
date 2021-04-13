import React, {useReducer} from 'react';
import {GET_INFO_ABOUT_PRODUCT, SET_ALL_PRODUCTS} from "../actionType";

// @ts-ignore
const {Provider, Consumer} = React.createContext({
  allProducts: [],
  detailsOfProduct: [],
});

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case SET_ALL_PRODUCTS : {
      return {...state, allProducts: action.payload};
    }
    case GET_INFO_ABOUT_PRODUCT : {
      const id = action.payload;
      const findProduct = state.allProducts[0].products.find((v:any)=> v._id === id);
      return {...state, detailsOfProduct: [findProduct]};
    }
    default : {
      return state;
    }
  }
};

const ProductsProvider = ({children}: any) => {
  // @ts-ignore
  const [{allProducts, detailsOfProduct}, dispatch] = useReducer<any>(reducer,
    {allProducts: [], detailsOfProduct: []});

  const handleAllProducts = (products: any) => {
    // @ts-ignore
    dispatch({
      type: SET_ALL_PRODUCTS,
      payload: products,
    })
  };

  const handleGetInfoAboutProduct = (id: string) => {
    // @ts-ignore
    dispatch({
      type: GET_INFO_ABOUT_PRODUCT,
      payload: id
    })
  };

  // @ts-ignore
  return <Provider value={{allProducts, handleAllProducts, detailsOfProduct, handleGetInfoAboutProduct}}>{children}</Provider>
}

export {ProductsProvider, Consumer as ProductsConsumer};

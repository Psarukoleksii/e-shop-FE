import React, {useReducer} from 'react';
import {ADD_PRODUCT_TO_BASKET} from "../actionType";

const ProductsContext = React.createContext({
  basketList: [],
  contextAddProductToBasket: (product: any) => {}
});

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_BASKET: {
      console.log(action.payload);
      return {...state, basketList: [...state.basketList, action.payload]};
    }
    default : {
      return state;
    }
  }
};

const ProductsProvider = ({children}: any) => {
  // @ts-ignore
  const [{basketList}, dispatch] = useReducer<any>(reducer,
    {basketList: []});

  const contextAddProductToBasket = (product: any) => {
    // @ts-ignore
    dispatch({
      type: ADD_PRODUCT_TO_BASKET,
      payload: product
    })
  };

  const providerValues = {
    contextAddProductToBasket,
    basketList
  };

  return <ProductsContext.Provider value={providerValues}>{children}</ProductsContext.Provider>
}

export {ProductsProvider, ProductsContext};

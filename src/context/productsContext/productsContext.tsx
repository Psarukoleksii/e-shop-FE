import React, {useReducer} from 'react';
import {ADD_SUBCATEGORIES, GET_INFO_ABOUT_PRODUCT, SET_ALL_PRODUCTS} from "../actionType";

const ProductsContext = React.createContext({
  allProducts: [],
  detailsOfProduct: [],
  subCategories: [],
});

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case SET_ALL_PRODUCTS : {
      return {...state, allProducts: action.payload};
    }
    case GET_INFO_ABOUT_PRODUCT : {
      const id = action.payload;
      const findProduct = state.allProducts[0].products.find((v: any) => v._id === id);
      return {...state, detailsOfProduct: [findProduct]};
    }
    case ADD_SUBCATEGORIES : {
      return {...state, subCategories: action.payload};
    }
    default : {
      return state;
    }
  }
};

const ProductsProvider = ({children}: any) => {
  // @ts-ignore
  const [{allProducts, detailsOfProduct, subCategories}, dispatch] = useReducer<any>(reducer,
    {allProducts: [], detailsOfProduct: [], subcategories: []});

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

  const handleAddSubcategories = (subcategories: any) => {
    // @ts-ignore
    dispatch({
      type: ADD_SUBCATEGORIES,
      payload: subcategories
    })
  };

  const providerValues = {
    allProducts,
    handleAllProducts,
    detailsOfProduct,
    handleGetInfoAboutProduct,
    subCategories,
    handleAddSubcategories
  };

  return <ProductsContext.Provider value={providerValues}>{children}</ProductsContext.Provider>
}

export {ProductsProvider, ProductsContext};

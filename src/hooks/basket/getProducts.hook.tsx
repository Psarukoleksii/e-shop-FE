import {useEffect, useState} from "react";
import {CONSTANTS} from "../../config";
import {IProductInfo} from "../../interfaces";

export const useGetProductsFromBasket = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<IProductInfo[]>();

  const handleProductBasket = () => {
    setProducts(JSON.parse(localStorage.getItem(CONSTANTS.product.basket) as string));
    setLoading(false);
  };

  const handleDeleteProductFromBasket = (id: string) => {
    if (products) {
      const filterArray = products.filter((value: any) => value._id !== id);
      setProducts(filterArray);
      localStorage.setItem(CONSTANTS.product.basket, JSON.stringify(filterArray));
    }
  }

  useEffect(()=>{
    handleProductBasket();
  }, []);

  return {loading, products, handleDeleteProductFromBasket};
};


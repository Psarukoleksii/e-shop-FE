import {useEffect, useState} from "react";
import {getProductsWithSameSubCategory} from "../../actions";
import {useParams} from "react-router";
import {IProductInfo, MatchParams} from "../../interfaces";

export const useSubCategoriesProducts = () => {
  const {subname}:MatchParams = useParams();
  const [products, setProducts] = useState<IProductInfo[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [skip, setSkip] = useState<number>(0)

  const handleSubCategoriesProductsData = async () => {
    const { data } = await getProductsWithSameSubCategory(subname, 0);
    setProducts(data);
    setLoading(false);
  }

  const handleGetNextProducts = async () => {
    await setSkip(prevState => prevState + 9);
    if(skip >= 0){
      const { data } = await getProductsWithSameSubCategory(subname, +skip);
      if(data.length === 0){
        return ;
      }
      setProducts(data);
    }
  };

  const handleGetPrevProducts = () => {
    setSkip(prevState => prevState - 9);
  };

  useEffect(()=>{
    handleGetPrevProducts();
    handleGetNextProducts();
  }, [skip]);

  useEffect(()=>{
    handleSubCategoriesProductsData();
  }, [subname]);

  return { products, loading, handleGetNextProducts, handleGetPrevProducts };
};

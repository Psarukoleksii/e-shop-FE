import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {getProductsWithSameCategory} from "../../actions";
import {IProductInfo, MatchParams} from "../../interfaces";

export const useGetProductsWithCategory = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<IProductInfo[]>();
  const { name }:MatchParams = useParams();
  const [skip, setSkip] = useState<number>(0);

  const handleGetProductsData = async () => {
    const { data } = await getProductsWithSameCategory(name, 0);
    setProducts(data);
    setLoading(false);
  };

  const handleGetNextProducts = async () => {
    await setSkip(prevState => prevState + 9);
    if(skip >= 0){
      const { data } = await getProductsWithSameCategory(name, +skip);
      if(data.length === 0){
        return ;
      }
      setProducts(data);
    }
  }

  const handleGetPrevProducts = () => {
    setSkip(prevState => prevState - 9);
  }

  useEffect(()=>{
    handleGetPrevProducts()
    handleGetNextProducts()
  }, [skip])

  useEffect(()=>{
    handleGetProductsData();
  }, [name]);

  return { loading, name, products, handleGetNextProducts, handleGetPrevProducts };
};

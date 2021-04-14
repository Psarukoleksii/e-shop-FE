import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {getProductsWithSameCategory} from "../../actions";

export const useGetProductsWithCategory = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<any>();
  const { name }:any = useParams();

  const handleGetProductsData = async () => {
    const { data } = await getProductsWithSameCategory(name);
    setProducts(data);
    setLoading(false);
  };

  useEffect(()=>{
    handleGetProductsData();
  }, [name]);

  return { loading, name, products };
};

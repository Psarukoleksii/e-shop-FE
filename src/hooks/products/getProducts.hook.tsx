import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {getProductsWithSameCategory} from "../../actions";

export const useGetProductsWithCategory = ({context}: any) => {
  const [loading, setLoading] = useState<boolean>(true);
  const { name }:any = useParams();

  const handleGetProductsData = async () => {
    const response = await getProductsWithSameCategory(name);
    context.handleAllProducts(response.data);
    setLoading(false);
  };

  useEffect(()=>{
    handleGetProductsData();
  }, [name]);

  return { loading, name };
};

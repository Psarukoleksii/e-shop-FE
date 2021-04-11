import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {getProductsWithSameCategory} from "../../actions";

export const useGetProductsWithCategory = () => {
  const [products, setProducts] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [params, setParams] = useState<any>();
  const { name }:any = useParams();
  console.log('1')
  const handleGetProductsData = async () => {
    console.log('2')
    const response = await getProductsWithSameCategory(name);
    console.log('3');
    setProducts(response);
    setLoading(false);
  }

  useEffect(()=>{
    handleGetProductsData();
  }, []);

  return { products, loading }
}

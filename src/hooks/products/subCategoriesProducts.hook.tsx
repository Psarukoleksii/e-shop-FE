import {useEffect, useState} from "react";
import {getProductsWithSameSubCategory} from "../../actions";
import {useParams} from "react-router";

export const useSubCategoriesProducts = () => {
  const [products, setProducts] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const {subname}:any = useParams();

  const handleSubCategoriesProductsData = async () => {
    const { data } = await getProductsWithSameSubCategory(subname);
    setLoading(false);
    setProducts(data);
  }

  useEffect(()=>{
    handleSubCategoriesProductsData();
  }, [subname]);

  return { products, loading };
}

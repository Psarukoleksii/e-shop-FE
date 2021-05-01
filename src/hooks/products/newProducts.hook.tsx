import {useEffect, useState} from "react";
import {getNewProducts} from "../../actions";

export const useGetNewProducts = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [newProducts, setNewProducts] = useState<any>();
  const limit = 5;

  const handleGetNewProducts = async () => {
    const {data} = await getNewProducts(limit);
    setNewProducts(data);
    setLoading(false)
  }

  useEffect(()=>{
    handleGetNewProducts()
  }, [])


  return {loading, newProducts};
}

import {useEffect, useState} from "react";
import {getAllCategories} from "../../actions";


export const useGetAllCategories = () => {
  const [allCategories, setAllCategories] = useState<any>();
  const [loading, setLoading] = useState(true);

  const handleGetCategoriesData = async () => {
    const response = await getAllCategories();
    console.log(response);
    setAllCategories(response);
    setLoading(false);
  };

  useEffect(()=>{
    handleGetCategoriesData();
  }, []);

  return { allCategories, loading };
};

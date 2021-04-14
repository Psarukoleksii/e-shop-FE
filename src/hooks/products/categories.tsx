import {useEffect, useState} from "react";
import {getAllCategories} from "../../actions";

export const useGetAllCategories = () => {
  const [allCategories, setAllCategories] = useState<any>();
  const [loading, setLoading] = useState(true);

  const handleGetCategoriesData = async () => {
    const { data } = await getAllCategories();
    setAllCategories(data);
    setLoading(false);
  };

  useEffect(()=>{
    handleGetCategoriesData();
  }, []);

  return { allCategories, loading};
};

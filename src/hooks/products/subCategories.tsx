import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {getSubCategories} from "../../actions";

export const useSubCategories = () => {
  const [ loading, setLoading ] = useState<boolean>(true);
  const [ subCategoriesList,setSubCategoriesList ] = useState<any>();
  const { name }:any = useParams();

  const handleGetOneCategory = async () => {
    const { data } = await getSubCategories(name);
    setSubCategoriesList(data[0].subCategory);
    setLoading(false);
  };

  useEffect(()=>{
    handleGetOneCategory();
  }, [name]);

  return { name, loading, subCategoriesList };
}

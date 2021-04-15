import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {getDetailsProduct} from "../../actions";

export const useDetailsProducts = () => {
  const [details, setDetails] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const { id }:any = useParams();

  const handleGetDetailsData = async () => {
    const {data} = await getDetailsProduct(id);
    setDetails(data[0]);
    setLoading(false);
  };

  useEffect(()=>{
    handleGetDetailsData();
  }, []);

  return { loading, details };
};

import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {getDetailsProduct} from "../../actions";
import {IProductInfo, MatchParams} from "../../interfaces";

export const useDetailsProducts = () => {

  const [details, setDetails] = useState<IProductInfo | any>();
  const [loading, setLoading] = useState<boolean>(true);
  const { id }:MatchParams = useParams();

  const handleGetDetailsData = async () => {
    const {data} = await getDetailsProduct(id);
    setDetails(data[0]);
    setLoading(false);
  };

  useEffect(()=>{
    handleGetDetailsData();
  }, []);

  return { loading, details};
};

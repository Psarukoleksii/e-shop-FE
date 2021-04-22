import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context";
import {useParams} from "react-router";
import {addRateProduct, getRateProduct} from "../../actions/products/rateProducts";
import {MatchParams} from "../../interfaces";

export const useRateProduct = () => {
  const [rate, setRate] = useState<any>();
  const { isLoginUser, userInformation } = useContext(AuthContext);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [rating, setRating] = useState<number>();
  const { id }: MatchParams = useParams();
  console.log(rate);
  const addRate = async () => {
    if(!isLoginUser){
      return setOpenModal(true);
    }
    // @ts-ignore
    const {status} = await addRateProduct(userInformation._id, id, rate);
    if(status === 200){
      setSuccess(true);
    }
  };

  function valuetext(value: number) {
    setRate(value);
    return `${value}`;
  }

  const handleGetRateProduct = async () => {
    const {data} = await getRateProduct(id);
    if(!data.length){
      return ;
    }
    setRating(data[0].avg.toFixed(1))
  }

  useEffect(()=>{
    handleGetRateProduct();
  }, [])

  return {valuetext, addRate, openModal, setOpenModal, success, rating};
};

import {useContext, useState} from "react";
import {AuthContext} from "../../context";
import {useParams} from "react-router";
import {addRateProduct} from "../../actions/products/rateProducts";

export const useRateProduct = () => {
  const [rate, setRate] = useState<any>();
  const { isLoginUser, userInformation } = useContext(AuthContext);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const { id }: any = useParams();

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

  return {valuetext, addRate, openModal, setOpenModal, success};
};

import {useFormik} from "formik";
import * as Yup from 'yup';
import {useContext, useEffect, useState} from "react";
import {CONSTANTS} from "../../config";
import {AuthContext} from "../../context";

export const useDefinitionOrder = (values: any) => {
  const [schema, setSchema] = useState({});
  const [initialValues, setInitialValues] = useState({});
  const {isLoginUser, userInformation} = useContext(AuthContext);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<boolean>(false);
  const [wishList, setWishList] = useState<any>();

  useEffect(() => {
    const schemas = values.reduce((obj: any, current: any) => {
      obj[current.name] = Yup.number().min(1, CONSTANTS.errorMessages.enterValidCountOfProduct);
      return obj;
    }, {});
    setSchema(schemas);

    const initValues = values.reduce((obj: any, current: any) => {
      obj[current.name] = 1;
      return obj;
    }, {});
    setInitialValues(initValues);
  }, [values.length]);

  const handleBuyProducts = (products: any) => {
    // if(!isLoginUser){
    //   setLoginError(true);
    //   return setOpenModal(true);
    // }
    const counters = Object.values(products);
    for (let i = 0; i < values.length; i++) {
      values[i].countInBasket = counters[i];
      setWishList(values);
    }
    setOpenModal(true);
  }

  // @ts-ignore
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object().shape(schema),
    onSubmit: values => {
      handleBuyProducts(values);
    },
    enableReinitialize: true // if dynamic values
  });

  return {formik, loginError, openModal, setOpenModal, wishList, userInformation};
};

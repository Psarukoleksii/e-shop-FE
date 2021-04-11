import React from 'react';
import {useFormik} from "formik";
import {CONSTANTS} from '../../../config';
import {productSchema} from '../../../validators'
import {adminProductService} from "../../../services";

export const useAddProduct = () => {

  // @ts-ignore
  const formik = useFormik({
    initialValues: {
      category : CONSTANTS.EMPTY_STRING,
      name: CONSTANTS.EMPTY_STRING,
      image: CONSTANTS.EMPTY_STRING,
      producer: CONSTANTS.EMPTY_STRING,
      mass: null,
      weight: CONSTANTS.EMPTY_STRING,
      counterInStorage: null,
      counterOfPurchases: null
    },
    validationSchema: productSchema,
    onSubmit: async values => {
      await adminProductService.addProduct(values);
    }
  });

  return { formik };
};

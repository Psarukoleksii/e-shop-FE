import {useFormik} from "formik";
import * as Yup from 'yup';
import {useEffect, useState} from "react";
import {CONSTANTS} from "../../config";

export const useDefinitionOrder = (values:any) => {
  const [schema, setSchema] = useState({});
  const [initialValues, setInitialValues] = useState({});

  useEffect(()=>{
    const schemas = values.reduce((obj:any, current:any)=> {
      obj[current.name] = Yup.number().min(1, CONSTANTS.errorMessages.enterValidCountOfProduct);
      return obj;
    }, {});
    setSchema(schemas);

    const initValues = values.reduce((obj:any, current:any)=> {
      obj[current.name] = 1;
      return obj;
    }, {});
    setInitialValues(initValues);
  }, [values.length]);

  // @ts-ignore
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object().shape(schema),
    onSubmit: values => {
      console.log(values);
    }
  })

  return { formik };
};

import {useFormik} from "formik";
import { CONSTANTS } from '../../config';
import { commentsSchema } from '../../validators';

export const useAddComment = () => {
  // @ts-ignore
  const formik = useFormik({
    initialValues: {
      comment: CONSTANTS.EMPTY_STRING,
    },
    validationSchema: commentsSchema,
    onSubmit: values => {
      console.log(values);
    }
  });

  return { formik };
};

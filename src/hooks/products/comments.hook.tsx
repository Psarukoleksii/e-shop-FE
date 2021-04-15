import {useFormik} from "formik";
import {CONSTANTS} from '../../config';
import {commentsSchema} from '../../validators';
import {useContext, useState} from "react";
import {AuthContext} from "../../context";
import {useParams} from "react-router";
import {addComment} from "../../actions";

export const useAddComment = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const {isLoginUser, userInformation} = useContext(AuthContext);
  const {id}: any = useParams();

  const handleSubmit = async (values: any) => {
    if (!isLoginUser) {
      return setOpenModal(true);
    }
    // @ts-ignore
    const {status} = await addComment(userInformation._id, id, values);
    if(status === 200){
      setSuccess(true);
    }
  };

  // @ts-ignore
  const formik = useFormik({
    initialValues: {
      comment: CONSTANTS.EMPTY_STRING,
    },
    validationSchema: commentsSchema,
    onSubmit: handleSubmit
  });

  return {formik, openModal, setOpenModal, success};
};

import {useFormik} from "formik";
import {CONSTANTS} from '../../config';
import {commentsSchema} from '../../validators';
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context";
import {useParams} from "react-router";
import {addComment, getComments} from "../../actions";
import {ICommentItem, MatchParams} from "../../interfaces";

export const useAddComment = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const {isLoginUser, userInformation} = useContext(AuthContext);
  const [comments, setComments] = useState<ICommentItem | any>();
  const {id}: MatchParams = useParams();
  const [skip, setSkip] = useState<number>(5);

  const handleCommentsData = async () => {
    const { data } = await getComments(id, 0);
    setComments(data);
    setLoading(false);
  };

  const handleMoreComments = async () => {
    setSkip(prevState => prevState + 5);
    const {data} = await getComments(id, +skip);
    if(data.length === 0){
      return ;
    }
    setComments((prevState:ICommentItem[]) => prevState.concat(data));
  };

  const handleSubmit = async (values: any, actions: any) => {
    if (!isLoginUser) {
      return setOpenModal(true);
    }
    // @ts-ignore
    const {status} = await addComment(userInformation._id, id, values);
    if(status === 200){
      // setComments(values)
      setSuccess(true);
    }
    actions.resetForm();
    await handleCommentsData();
  };

  // @ts-ignore
  const formik = useFormik({
    initialValues: {
      comment: CONSTANTS.EMPTY_STRING,
    },
    validationSchema: commentsSchema,
    onSubmit: handleSubmit
  });

  useEffect(()=>{
    handleCommentsData();
  }, [id])


  return {formik, openModal, setOpenModal, success, loading, comments, handleMoreComments};
};


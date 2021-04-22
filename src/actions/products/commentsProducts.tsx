import {AXIOS} from "../../config";

export const addComment = async (user_id: any, product_id: any, {comment}: any) => AXIOS.post('/products/addComment', {
  user_id,
  product_id,
  comment
});

export const getComments = async (id:string, skip: number) => AXIOS.get('/products/getComments', {params: {id, skip}});

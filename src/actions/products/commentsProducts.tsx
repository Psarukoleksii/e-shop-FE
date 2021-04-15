import {AXIOS} from "../../config";

export const addComment = async (user_id: any, product_id: any, {comment}: any) => AXIOS.post('/products/addComment', {
  user_id,
  product_id,
  comment
});

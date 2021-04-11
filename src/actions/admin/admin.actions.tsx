import {AXIOS} from "../../config";

export const handleAddProduct = async (product :any) => {
  await AXIOS.post('/admin/createProduct', product);
}

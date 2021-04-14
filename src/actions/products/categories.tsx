import {AXIOS} from "../../config";

export const getAllCategories = async () => await AXIOS.get('/products/categories');

export const getSubCategories = async (name: any) => {
  return AXIOS.get('/products/subCategories', {params: {name}});
};

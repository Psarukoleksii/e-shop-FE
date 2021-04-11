import {AXIOS} from "../../config";

export const getProductsWithSameCategory = async (name: any) => AXIOS.get('/products/allProductsWithSameCategory', {params: {name}})

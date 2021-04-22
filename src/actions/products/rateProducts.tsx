import {AXIOS} from "../../config";

export const addRateProduct = async (user_id: string, product_id: string, rate: number) => AXIOS.post('/products/rateProduct', {
  user_id,
  product_id,
  rate
});

export const getRateProduct = async (id: any) => AXIOS.get('/products/getRate', {params: {id}})

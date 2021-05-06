import {AXIOS} from "../../config";

export const handleBuyProducts = async (products: any, userId: any) => {
  return AXIOS.post('/basket/buyProducts', {
    products, userId
  })
};

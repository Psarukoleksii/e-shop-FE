import {handleBuyProducts} from "../../actions";
import {useState} from "react";
import {CONSTANTS} from "../../config";

interface IWishProducts {
  product_id: string,
  count: number
}

export const useDoOrder = () => {
  const [success, setSuccess] = useState<boolean>(false);
  const [message, setMessage] = useState<string>(CONSTANTS.EMPTY_STRING);
  const [error, setError] = useState<boolean>(false);

  const handleDoOrder = async (wishList:any, userInformation:any) => {
    const userId = userInformation._id;
    let products: IWishProducts[] = [];
    wishList.map((value:any) => {
      const product = {
        product_id: value._id,
        count: value.countInBasket
      }
      products.push(product)
    });

    try {
      const response = await handleBuyProducts(products, userId);
      setMessage(response.data);
      return setSuccess(true);
    } catch (e) {
      setMessage(e.response.data.text);
      return setError(true);
    }
  }

  return {handleDoOrder, error, message, success};
};

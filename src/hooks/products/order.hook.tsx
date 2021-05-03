import {handleBuyProducts} from "../../actions";

export const useDoOrder = () => {

  const handleDoOrder = async (wishList:any, userInformation:any) => {
    const userId = userInformation._id;
    let products: any[] = [];
    wishList.map((value:any)=> {
      const product = {
        product_id: value._id,
        count: value.countInBasket
      }
      products.push(product)
    });
    const response = await handleBuyProducts(products, userId);
  }

  return {handleDoOrder}
}

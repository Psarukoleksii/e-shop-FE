import {IProductInfo} from "./products";

export interface IBasketProducts {
  products: IProductInfo[],
  handleDeleteProductFromBasket(id: string): void
}

export interface IBasketProductsItem {
  formik: any;
  handleDeleteProductFromBasket(id: string): void,
  items: IProductInfo
}

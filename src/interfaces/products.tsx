export interface IProductInfo {
  _id: string,
  image: string,
  name: string,
  price: number,
  producer: string,
  mass: number,
  weight: string,
  counterInStorage: number,
  counterOfPurchases: number,
  createdAt: string,
}

export interface ICardProduct {
  items: IProductInfo,
  handleGetIdProduct(id: string): void;
}

export interface IProductsList {
  products: IProductInfo[] | undefined;
}

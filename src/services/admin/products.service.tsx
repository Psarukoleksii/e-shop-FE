import {handleAddProduct} from "../../actions";

class AdminProductsService {
  async addProduct ({category, name, image, producer, mass, weight, counterInStorage, counterOfPurchases}:any) {
    const product = {
      category,
      product: { name, image, producer, mass, weight, counterInStorage, counterOfPurchases }
    };
    await handleAddProduct(product);
  }
}

export const adminProductService = new AdminProductsService();

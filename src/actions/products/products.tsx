import {AXIOS} from "../../config";

export const getProductsWithSameCategory = async (name: any, skip: number) => AXIOS.get('/products/allProductsWithSameCategory', {
  params: {
    name,
    skip
  }
});

export const getProductsWithSameSubCategory = async (subname: any, skip: number) => AXIOS.get('/products/productsWithSameSubCategory', {
  params: {
    subname,
    skip
  }
});

export const getDetailsProduct = async (id: any) => AXIOS.get('/products/detailsProduct', {params: {id}});

import {AXIOS} from "../../config";

export const getProductsWithSameCategory = async (name: string, skip: number) => AXIOS.get('/products/allProductsWithSameCategory', {
  params: {
    name,
    skip
  }
});

export const getProductsWithSameSubCategory = async (subname: string, skip: number) => AXIOS.get('/products/productsWithSameSubCategory', {
  params: {
    subname,
    skip
  }
});

export const getDetailsProduct = async (id: string) => AXIOS.get('/products/detailsProduct', {params: {id}});

export const getNewProducts = async (limit: number) => AXIOS.get('/products/getNewProducts', {params: {limit}})

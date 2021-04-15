import {AXIOS} from "../../config";

export const getProductsWithSameCategory = async (name: any) => AXIOS.get('/products/allProductsWithSameCategory', {params: {name}});

export const getProductsWithSameSubCategory = async (subname: any) => AXIOS.get('/products/productsWithSameSubCategory', {params: {subname}});

export const getDetailsProduct = async (id: any) => AXIOS.get('/products/detailsProduct', {params: {id}});

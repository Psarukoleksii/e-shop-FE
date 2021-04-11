import {AXIOS} from "../../config";

export const getAllCategories = async () => await AXIOS.get('/products/categories');

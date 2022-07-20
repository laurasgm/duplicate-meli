import axios from 'axios';

export const getProductsRequest = async (search) =>{
    return await axios.get("http://localhost:4000/products", {params:  {search: search}})
}
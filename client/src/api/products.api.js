import axios from 'axios';

export const getProductsRequest = async (search) =>{
    return await axios.get(process.env.REACT_APP_API, {params:  {search: search}})
}

export const getProductByIdRequest = async (id) =>{
    return await axios.get(`${process.env.REACT_APP_API}/${id}`)
}

export const getProductDescriptionByIdRequest = async (id) =>{
    return await axios.get(`${process.env.REACT_APP_API}/${id}/description`)
}
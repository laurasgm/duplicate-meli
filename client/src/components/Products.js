import './Products.scss';
import React, { useEffect, useState } from 'react';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import {useSearchParams} from 'react-router-dom'
import {getProductsRequest} from '../api/products.api'
import { useNavigate } from "react-router-dom";

/**
 * Component to return the list of products according to a search field.
 * @param {*} props 
 * @returns 
 */
function ProductsComponent(props) {
    let navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams()
    const [products, setProducts] = useState([])
    const [categoriesProduct, setCategoriesProduct] = useState([])
   
    const filter = props.search? props.search : searchParams.get("search")
    
    useEffect(() => {
        setSearchParams({ search: filter })
        props.setBreadCrumb("")
        async function loadProducts (){
            const response = await getProductsRequest(filter)
            if(response.data){
                let categories = response.data.available_filters.filter(filter => filter.id == "category")[0].values
                const result = response.data.results.slice(0,4)
                setProducts(result)
                updateBreadcrumb(categories)
            }
            
        }
        loadProducts()
    },[props.search])

    /**
     * Update the breadCrumb with the max match categories of products.
     * @param {*} categories 
     */
    const updateBreadcrumb = (categories) => {   
        if(categories.length > 0){
            setCategoriesProduct(categories);
            const max_result_categories = Math.max.apply(null,categories.map(category => category.results))
            props.setBreadCrumb(categories.filter(category => category.results == max_result_categories)[0].name)
        }
    }

    /**
     * set the breadcrumb with the category of the selected product and redirect to ProductDetail Component.
     * @param {*} detail 
     */
    const ProductDetail = (detail) => {
        const category_product = categoriesProduct.filter(category => category.id == detail.category_id)
        if(category_product.length > 0){
            props.setBreadCrumb(category_product[0].name)
        }
        navigate(`/item/${detail.id}`)
    }

    return (
        <div className="product-style">
            <Container>
                {products.map(item => {
                    return(
                        <Card key={products.id} className="col-md-12 col-sm-12 card-style" border="light" style={{ maxWidth: '68rem'}} onClick={() => {ProductDetail(item)}} >
                            <Card.Body className="card-body-style">
                                <img
                                alt=""
                                src={item.thumbnail}
                                className="img-style"
                                />
                                <div className="content-card-style">
                                    <span className="price-style">${item.price}</span>
                                    <span className="description-style">{item.title}</span>
                                </div>
                                <span className="subtitle-style">{item.address.state_name}</span>
                            </Card.Body>
                        </Card>
                    )
                    })
                }
            </Container>
        </div>
    );
}

export default ProductsComponent;
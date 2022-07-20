import './Products.scss';
import React, { useEffect, useState } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import {useSearchParams} from 'react-router-dom'
import {getProductsRequest} from '../api/products.api'


function ProductsComponent(props) {
    const [searchParams, setSearchParams] = useSearchParams()
    const [products, setProducts] = useState([])
    const filter = props.search? props.search : searchParams.get("search")
    
    useEffect(() => {
        setSearchParams({ search: filter })
        setProducts([])
        async function loadProducts (){
            const response = await getProductsRequest(filter)
            if(response.data){
                const result = response.data.results.slice(0,4)
                setProducts(result)
            }
        }
        loadProducts()
    },[props.search])


    const ProductDetail = (detail) => {
        console.log(detail)
    }

    return (
        <div className="product-style">
            <Container>
                <Breadcrumb>
                    <Breadcrumb.Item active>Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>
                        Library
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Data</Breadcrumb.Item>
                </Breadcrumb>
                {products.map(item => {
                    return(
                        <Card  className="card-style" border="light" style={{ width: '68rem' }} onClick={() => {ProductDetail(item)}} >
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
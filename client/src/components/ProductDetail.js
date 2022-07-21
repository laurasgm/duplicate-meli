import './Products.scss';
import React, { useEffect, useState } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/esm/Container';
import image from '../assets/coupe.jpeg'
import Button from 'react-bootstrap/Button';
import {getProductByIdRequest, getProductDescriptionByIdRequest} from '../api/products.api'
import { useParams } from 'react-router';

function ProductsDetailComponent() {
    let paramId = useParams();
    const [product, setProduct] = useState({})
    const [description, setDescription] = useState("")

    useEffect(() =>{
        async function loadProductbyid (){
            const responseProduct = await getProductByIdRequest(paramId.id)
            if(responseProduct.data){
                setProduct(responseProduct.data)
            }

            const responseProductDescription = await getProductDescriptionByIdRequest(paramId.id)
            if(responseProductDescription.data){
                setDescription(responseProductDescription.data.plain_text)
            }

        }
        loadProductbyid()
    },[])

    return (
        <div className="product-detail-style">
            <Container className="">
                {product?
                <div className="body">
                    <img
                        alt=""
                        src={product.thumbnail}
                        className="img-style"
                    />
                    <div className="box-detail">
                        <span className="text-subtitle-style">{product.condition == "new"? "Nuevo":""} - {product.sold_quantity} vendidos</span>
                        <br></br>
                        <span className="text-title-style">{product.title}</span>
                        <br></br>
                        <div><span className="text-price-style">$ {product.price}</span></div>
                        <br/>
                        <br/>
                        <div className="d-grid gap-2">
                            <Button variant="primary" size="sl">
                                Comprar
                            </Button>
                        </div>
                    </div>
                    <div className="text-content-description">
                        <p className="text-title-description">Descripcion del producto</p>
                        <p className="text-body-description">{description}</p>
                    </div>
                </div>
                : null}
            </Container>
        </div>
    )
}

export default ProductsDetailComponent;
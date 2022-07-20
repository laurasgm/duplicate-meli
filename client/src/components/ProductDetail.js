import './Products.scss';
import React, { useEffect, useState } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/esm/Container';
import image from '../assets/coupe.jpeg'
import Button from 'react-bootstrap/Button';


function ProductsDetailComponent() {
    return (
        <div className="product-detail-style">
            <Container className="">
                <Breadcrumb>
                    <Breadcrumb.Item active>Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>
                        Library
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Data</Breadcrumb.Item>
                </Breadcrumb>
                <div className="body">
                    <img
                        alt=""
                        src={image}
                        className="img-style"
                    />
                    <div className="box-detail">
                        <span className="text-subtitle-style">Nuevo - 234 vendidos</span>
                        <br></br>
                        <span className="text-title-style">Deco Reverse Sombrero Oxford</span>
                        <br></br>
                        <div><span className="text-price-style">$ 10.000</span><span className="text-price-ceros-style">00</span></div>
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
                        <p className="text-body-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ProductsDetailComponent;
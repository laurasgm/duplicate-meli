import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import ProductsComponent from './components/Products';
import ProductDetailComponent from './components/ProductDetail'
import {Route, Routes} from 'react-router-dom'
import NavbarComponent from './components/Navbar';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/esm/Container';


function App() {
  const [search, setSearch] = useState('')
  const [breadCrumb, setBreadCrumb] = useState("")

  return (
    <div className="col-md-12 col-xs-12 principal-container-style">
      <NavbarComponent setSearch={setSearch}></NavbarComponent>
      <Container className="breadcrumb-style" >
        <Breadcrumb >
          <Breadcrumb.Item active>Home</Breadcrumb.Item>
            <Breadcrumb.Item active>
                {breadCrumb}
            </Breadcrumb.Item>
        </Breadcrumb>
      </Container>
      <Routes>
        <Route path="/items" element={<ProductsComponent search={search} setBreadCrumb={setBreadCrumb}/>}></Route>
        <Route path="/item/:id" element={<ProductDetailComponent/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

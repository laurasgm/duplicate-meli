import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import ProductsComponent from './components/Products';
import ProductDetailComponent from './components/ProductDetail'
import {Route, Routes} from 'react-router-dom'
import NavbarComponent from './components/Navbar';


function App() {
  const [search, setSearch] = useState('')
  return (
    <>
    <NavbarComponent setSearch={setSearch}></NavbarComponent>
    <Routes>
      <Route path="/items" element={<ProductsComponent search={search}/>}></Route>
      <Route path="/item/:id" element={<ProductDetailComponent/>}></Route>
    </Routes>
    </>
  );
}

export default App;

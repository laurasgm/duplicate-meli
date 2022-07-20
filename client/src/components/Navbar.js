import '../App.scss';
import {React} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/Logo_ML.png'
import search_img from '../assets/ic_Search.png'
import { useNavigate, useSearchParams } from "react-router-dom";

function NavbarComponent(props) {
    let navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams()
    const filter = searchParams.get("search") ?? ""


    const LoadSearch = (event) => {
        event.preventDefault();
        props.setSearch(filter)
        navigate(`/items`);
    }

    const HandleInputChange = (event) =>{
        event.preventDefault();
        setSearchParams({ search: event.target.value })
    }

    return (
        <Navbar className="nav-bar">
            <Container>
            <img
                alt=""
                src={logo}
                width="40"
                height="30"
                className="logo"
                />
            <Navbar.Toggle />
            <Navbar.Collapse >
                <Form onSubmit={LoadSearch} className="d-flex">
                    <Form.Control value={filter} onChange={HandleInputChange}
                        type="text"
                        placeholder="Nunca dejes de buscar"
                        className="search"
                    />
                    <Button type="submit" className="search-button">
                        <img
                        alt=""
                        src={search_img}
                        width="20"
                        height="20"
                    />
                    </Button>
                </Form>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
  }
  
  export default NavbarComponent;
  
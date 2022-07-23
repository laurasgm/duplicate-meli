import '../App.scss';
import {React} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/Logo_ML.png'
import search_img from '../assets/ic_Search.png'
import { useNavigate, useSearchParams } from "react-router-dom";


/**
 * return the nav bar with the search field.
 * @param {*} props 
 * @returns 
 */
function NavbarComponent(props) {
    let navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams()
    const filter = searchParams.get("search") ?? ""

    /**
     * set the search and re direct to the Products Component.
     * @param {*} event 
     */
    const SubmitSearchInput = (event) => {
        event.preventDefault();
        props.setSearch(filter)
        navigate(`/items`);
    }

    /**
     * set the search params into the url.
     * @param {*} event 
     */
    const HandleInputChange = (event) =>{
        event.preventDefault();
        setSearchParams({ search: event.target.value })
    }

    return (
        <Navbar className="col-md-12 nav-bar">
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
                <Form onSubmit={SubmitSearchInput} className="col-md-9 d-flex">
                    <Form.Control value={filter} onChange={HandleInputChange}
                        type="text"
                        placeholder="Nunca dejes de buscar"
                        className="col-md-11"
                    />
                    <Button type="submit" className=" col-md-1 search-button">
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
  
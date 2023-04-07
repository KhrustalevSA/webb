import React, {Component} from 'react';
import {Button, Container, Navbar, Nav, FormControl, Form} from "react-bootstrap";
import logo from "../logo.svg"
import {NavLink, Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import UsersPage from "../pages/UsersPage";

class Header extends Component {
    render() {
        return (
            <>
                <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/" >
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="Logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive navbar-nav" >
                            <Nav className="me-auto">
                                <NavLink className="linkButton" to="/" exact>Home</NavLink>
                                <NavLink className="linkButton" to="/about" exact> About </NavLink>
                                <NavLink className="linkButton" to="/users" exact> Users </NavLink>
                            </Nav>

                            <Form className="d-flex" >
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    className="me-sm-2"
                                />
                                <Button variant="outline-info">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Routes>
                    <Route path="/" exact element={<HomePage/>} />
                    <Route path="/about" exact element={<AboutPage/>} />
                    <Route path="/users" exact element={<UsersPage/>} />
                </Routes>
            </>
        );
    }
}

export default Header;
import React, {Component} from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import logo from "../logo.svg"
import {Link, Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";

class Header extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleTokenChange.bind(this);
        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.state = {
            userToken: null,
            userLogin: null,
        }
    }

    handleTokenChange(userToken) {
        this.setState({userToken: userToken})
    }

    handleLoginChange(userLogin) {
        this.setState({userLogin: userLogin})
    }

    render() {
        const userToken = this.state.userToken;
        const userLogin = this.state.userLogin;
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
                                <Link to="/">
                                    <Button
                                        style={linkButtonStyle}
                                        variant="outline-info"
                                    >Домашняя страница</Button>
                                </Link>
                                <Link to="/login">
                                    <Button
                                        style={linkButtonStyle}
                                        variant="outline-info"
                                    >Вход</Button>
                                </Link>
                                <Link to="/registration">
                                    <Button
                                        style={linkButtonStyle}
                                        variant="outline-info"
                                    >Регистрация</Button>
                                </Link>
                                <Link to="/users">
                                    <Button
                                        style={linkButtonStyle}
                                        variant="outline-success"
                                    >Пользователи</Button>
                                </Link>
                            </Nav>
                            {/*<Form className="d-flex" >*/}
                            {/*    <FormControl*/}
                            {/*        type="text"*/}
                            {/*        placeholder="Search"*/}
                            {/*        className="me-sm-2"*/}
                            {/*    />*/}
                            {/*    <Button variant="outline-info">Search</Button>*/}
                            {/*</Form>*/}
                            {this.state.userLogin != null ? <label style={helloUserStyles}> Здравствуйте,{this.state.userLogin}</label> : null}
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Routes>
                    <Route path="/" exact="true" element={
                        <HomePage
                            userToken={this.state.userToken}
                            userLogin={this.state.userLogin}
                        />
                    } />
                    <Route path="/users" exact="true" element={<UsersPage/>} />
                    <Route path="/login" exact="true" element={
                        <LoginPage
                            userToken={" "}
                            userLogin={" "}
                            onUserTokenChange={this.handleChange}
                            onUserLoginChange={this.handleLoginChange}
                        />
                    } />
                    <Route path="/registration" exact="true" element={
                        <RegistrationPage
                            userToken={" "}
                            userLogin={" "}
                            onUserTokenChange={this.handleChange}
                            onUserLoginChange={this.handleLoginChange}
                        />
                    } />
                </Routes>
            </>
        );
    }
}

const helloUserStyles = {
    textColor: "white",
    color: "white",
}

const linkButtonStyle = {
    margin: "0 5px",
}

export default Header;
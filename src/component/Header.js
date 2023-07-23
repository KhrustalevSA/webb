import React, {Component} from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import logo from "../ll.png"
import {Link, Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import AccountPage from "../pages/AccountPage";
import AddGuestPage from "../pages/AddGuestPage";
import StartPage from "../pages/StartPage";
import RemoveGuestPage from "../pages/RemoveGuestPage";

class Header extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleTokenChange.bind(this);
        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handleRoleChange = this.handleRoleChange.bind(this);
        this.state = {
            userToken: null,
            userLogin: null,
            userRole: null,
        }
    }

    handleTokenChange(userToken) {
        this.setState({userToken: userToken})
    }

    handleLoginChange(userLogin) {
        this.setState({userLogin: userLogin})
    }

    handleRoleChange(userRole) {
        this.setState({userRole: userRole})
    }

    render() {
        return (
            <div>
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
                                {this.state.userRole !== "ADMIN" ?
                                <Link to="/home">
                                    <Button
                                        style={linkButtonStyle}
                                        variant="outline-info"
                                    >Номера</Button>
                                </Link> : null
                                }
                                {this.state.userLogin === null ?
                                    <Link to="/login">
                                        <Button
                                            style={linkButtonStyle}
                                            variant="outline-info"
                                        >Вход</Button>
                                    </Link> : null
                                }
                                {this.state.userLogin === null ?
                                    <Link to="/registration">
                                        <Button
                                            style={linkButtonStyle}
                                            variant="outline-info"
                                        >Регистрация</Button>
                                    </Link> :
                                    null
                                }
                                {this.state.userLogin != null ?
                                    <Link to="/account">
                                        <Button
                                            style={linkButtonStyle}
                                            variant="outline-info"
                                        >Аккаунт</Button>
                                    </Link> : null
                                }
                                {this.state.userRole === "ADMIN" ?
                                    <Link to="/admin/addGuest">
                                        <Button
                                            style={linkButtonStyle}
                                            variant="outline-light"
                                        >Внести гостя</Button>
                                    </Link> : null}
                                {this.state.userRole === "ADMIN" ?
                                    <Link to="/admin/removeGuest">
                                        <Button
                                            style={linkButtonStyle}
                                            variant="outline-light"
                                        >Выселить гостя</Button>
                                    </Link> : null}
                                {/*<Link to="/users">*/}
                                {/*    <Button*/}
                                {/*        style={linkButtonStyle}*/}
                                {/*        variant="outline-success"*/}
                                {/*    >Пользователи</Button>*/}
                                {/*</Link>*/}


                            </Nav>
                            {/*<Form className="d-flex" >*/}
                            {/*    <FormControl*/}
                            {/*        type="text"*/}
                            {/*        placeholder="Search"*/}
                            {/*        className="me-sm-2"*/}
                            {/*    />*/}
                            {/*    <Button variant="outline-info">Search</Button>*/}
                            {/*</Form>*/}
                            {this.state.userLogin !== null ? <label style={helloUserStyles}> Здравствуйте, {this.state.userLogin}</label> : null}
                            {this.state.userLogin !== null
                                ?
                                <Link to="/logout">
                                    <Button
                                        style={linkButtonStyle}
                                        variant="outline-secondary"
                                    > Выход</Button>
                                </Link>
                                : null
                            }
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Routes>
                    <Route path="/" exact="true" element={
                        <StartPage
                            userToken={this.state.userToken}
                            userLogin={this.state.userLogin}
                            userRole={this.state.userRole}
                        />
                    } />
                    <Route path="/home" exact="true" element={
                        <HomePage
                            userToken={this.state.userToken}
                            userLogin={this.state.userLogin}
                            userRole={this.state.userRole}
                        />
                    } />
                    <Route path="/users" exact="true" element={<UsersPage/>} />
                    <Route path="/login" exact="true" element={
                        <LoginPage
                            userToken={" "}
                            userLogin={" "}
                            userRole={" "}
                            onUserTokenChange={this.handleChange}
                            onUserLoginChange={this.handleLoginChange}
                            onUserRoleChange={this.handleRoleChange}
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
                    <Route path="/account" exact="true" element={
                        <AccountPage
                            userToken={this.state.userToken}
                            userLogin={this.state.userLogin}
                            onUserTokenChange={this.handleChange}
                            onUserLoginChange={this.handleLoginChange}
                        />
                    } />
                    <Route path="/admin/addGuest" exact="true" element={
                        <AddGuestPage
                            userToken={this.state.userToken}
                            userLogin={this.state.userLogin}
                            userRole={this.state.userRole}
                            onUserTokenChange={this.handleChange}
                            onUserLoginChange={this.handleLoginChange}
                        />
                    } />
                    <Route path="/admin/removeGuest" exact="true" element={
                        <RemoveGuestPage
                            userToken={this.state.userToken}
                            userLogin={this.state.userLogin}
                            userRole={this.state.userRole}
                            onUserTokenChange={this.handleChange}
                            onUserLoginChange={this.handleLoginChange}
                        />
                    } />
                </Routes>
            </div>
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
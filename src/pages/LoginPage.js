import React, {Component} from 'react';
import {LoginForm} from "../component/security/LoginForm";

class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.handleTokenChange = this.handleTokenChange.bind(this);
        this.handleLoginChange = this.handleLoginChange.bind(this);
    }

    handleTokenChange(token) {
        this.props.onUserTokenChange(token);
    }

    handleLoginChange(login) {
        this.props.onUserLoginChange(login);
    }

    render() {
        return (
            <div className="loginPage">
                <LoginForm
                    userToken={" "}
                    userLogin={" "}
                    getUserTokenFromRestApi={this.handleTokenChange}
                    getUserLoginFromRestApi={this.handleLoginChange}
                />
            </div>
        );
    }
}

export default LoginPage;
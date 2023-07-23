import React, {Component} from 'react';
import {LoginForm} from "../component/security/LoginForm";

class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.handleTokenChange = this.handleTokenChange.bind(this);
        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handleRoleChange = this.handleRoleChange.bind(this);
    }

    handleTokenChange(token) {
        this.props.onUserTokenChange(token);
    }

    handleLoginChange(login) {
        this.props.onUserLoginChange(login);
    }

    handleRoleChange(role) {
        this.props.onUserRoleChange(role);
    }

    render() {
        return (
            <div className="loginPage">
                <LoginForm
                    userToken={" "}
                    userLogin={" "}
                    userRole={" "}
                    getUserTokenFromRestApi={this.handleTokenChange}
                    getUserLoginFromRestApi={this.handleLoginChange}
                    getUserRoleFromRestApi={this.handleRoleChange}
                />
            </div>
        );
    }
}

export default LoginPage;
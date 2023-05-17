import React, {Component} from 'react';
import RegistrationForm from "../component/security/registration/RegistrationForm";

class RegistrationPage extends Component {

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
            <div className="registration">
                <RegistrationForm
                    userToken={" "}
                    userLogin={" "}
                    getUserTokenFromRestApi={this.handleTokenChange}
                    getUserLoginFromRestApi={this.handleLoginChange}
                />

            </div>
        );
    }
}

export default RegistrationPage;


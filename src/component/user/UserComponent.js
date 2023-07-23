import React, {Component} from 'react';

class UserComponent extends Component {

    user = this.props.user;

    render() {
        return (
            <div className="form">
                <div className="form-body">
                    <div className="username">
                        <label className="form__label" htmlFor="firstName">Имя: </label>
                        <label className="form__input" type="text" id="firstName" placeholder="Иван"
                               >{this.user.name}</label>
                    </div>
                    <div className="username">
                        <label className="form__label" htmlFor="firstName">Фамилия: </label>
                        <label className="form__input" type="text" id="firstName" placeholder="Иван"
                        >{this.user.surname}</label>
                    </div>
                    <div className="username">
                        <label className="form__label" htmlFor="firstName">Отчество: </label>
                        <label className="form__input" type="text" id="firstName" placeholder="Иван"
                        >{this.user.patronymic}</label>
                    </div>
                </div>
                <div className="form-body">
                    <div className="username">
                        <label className="form__label" htmlFor="firstName">Телефон: </label>
                        <label className="form__input" type="text" id="firstName" placeholder="Иван"
                        >{this.user.phoneNumber}</label>
                    </div>
                    <div className="username">
                        <label className="form__label" htmlFor="firstName">Email: </label>
                        <label className="form__input" type="text" id="firstName" placeholder="Иван"
                        >{this.user.email}</label>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserComponent;
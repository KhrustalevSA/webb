import * as React from 'react';
import {useState} from 'react';
import {Button} from "react-bootstrap";
import axios from "axios";
import HomePage from "../../pages/HomePage";
import {Link} from "react-router-dom";
import {toast} from "react-toastify";

const loginUrl = "http://localhost:8080/authentication/login";

const LoginForm = (props) => {

    const [loginInputValue, setLoginInputValue] = useState('')
    const [passwordInputValue, setPasswordInputValue] = useState('')
    let userToken = props.userToken;
    let userLogin = props.userLogin;
    let userRole = props.userRole;

    const successfulLogin = () => {
        toast.success('Авторизация прошла успешно!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const falseLogin = () => {
        toast.error('Ошибка проверить правильность введенных данных', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const getToken = async () => {
        try {
            await axios({
                url: loginUrl,
                headers: {
                    "Content-type": "application/json"
                },
                method: "POST",
                data: {
                    login: loginInputValue,
                    password: passwordInputValue
                }
            }).then(({data}) => {
                successfulLogin()
                console.log(data);
                userToken = data.token;
                userLogin = data.login;
                userRole = data.role;
                props.getUserTokenFromRestApi(userToken);
                props.getUserLoginFromRestApi(userLogin);
                props.getUserRoleFromRestApi(userRole);
            });
        } catch (e) {
            falseLogin()
            console.log('Sending error', e)
            window.location.assign("http://localhost:3000/login")
        }
    }

    return (
        <form action={<HomePage/>}>
            <div className="form">
                <div className="form-body">

                    <div className="lastname">
                        <label className="form__label" htmlFor="login">Логин </label>
                        <input type="login" name="" id="login" className="form__input" placeholder="login"
                               value={loginInputValue} onChange={e => setLoginInputValue(e.target.value)}/>
                    </div>
                    <div className="password">
                        <label className="form__label" htmlFor="password">Пароль </label>
                        <input className="form__input" type="password" id="password" placeholder="DiFFicult$.Password4"
                               value={passwordInputValue} onChange={e => setPasswordInputValue(e.target.value)}/>
                    </div>
                </div>
                <Link to="/">
                    <Button
                        variant="outline-info"
                        style={buttonStyle}
                        onClick={() => getToken()}
                    >Войти</Button>
                </Link>
            </div>
        </form>
    );
};

const buttonStyle = {
    width: "100%",
}

export {LoginForm};
import React, {useState} from 'react';
import './registrationStyle.css'
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import axios from "axios";
import {toast} from "react-toastify";

const registrationUrl = "http://localhost:8080/authentication/registration";
const loginUrl = "http://localhost:8080/authentication/login";

const RegistrationForm = (props) => {

    const [nameInputValue, setNameInputValue] = useState('')
    const [surnameInputValue, setSurnameInputValue] = useState('')
    const [patronymicInputValue, setPatronymicInputValue] = useState('')
    const [emailInputValue, setEmailInputValue] = useState('')
    const [phoneNumberInputValue, setPhoneNumberInputValue] = useState('')
    const [loginInputValue, setLoginInputValue] = useState('')
    const [passwordInputValue, setPasswordInputValue] = useState('')
    const [repeatPasswordInputValue, setRepeatPasswordInputValue] = useState('')
    const [sexInputValue, setSexInputValue] = useState('')
    let userToken = props.userToken;
    let userLogin = props.userLogin;

    const registration = async () => {
        try {
            await axios({
                url: registrationUrl,
                headers: {
                    "Content-type": "application/json"
                },
                method: "POST",
                data: {
                    name: nameInputValue,
                    surname: surnameInputValue,
                    patronymic: patronymicInputValue,
                    sex: sexInputValue,
                    login: loginInputValue,
                    password: passwordInputValue,
                    phoneNumber: phoneNumberInputValue,
                    email: emailInputValue,
                }
            }).then(async ({data}) => {
                if(data.status.success) {
                    try {
                        axios({
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
                            console.log(data);
                            userToken = data.token;
                            userLogin = data.login;
                            props.getUserTokenFromRestApi(userToken);
                            props.getUserLoginFromRestApi(userLogin);
                        });
                    } catch (e) {
                        console.log('Sending error', e)
                    }

                    successfulReserveRoom();
                    await delay(3000);

                    window.location.assign('http://localhost:3000/');

                }

                if(!data.status.success) {

                    falseReserveRoom();
                    await delay(3000);

                    window.location.assign('http://localhost:3000/registration');

                }

            });
        } catch (e) {
            console.log('Sending error', e)
        }
    }

    const successfulReserveRoom = () => {
        toast.success('Регистрация прошла успешно!', {
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

    const falseReserveRoom = () => {
        toast.error('Данный логин уже занят :(', {
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

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );

    return(
        <div className="form">
            <div className="form-body">
                <div className="username">
                    <label className="form__label" for="firstName">Имя </label>
                    <input className="form__input" type="text" id="firstName" placeholder="Иван" value={nameInputValue} onChange={e => setNameInputValue(e.target.value)}/>
                </div>
                <div className="lastname">
                    <label className="form__label" for="lastName">Фамилия </label>
                    <input  type="text" name="" id="surname"  className="form__input"placeholder="Иванов" value={surnameInputValue} onChange={e => setSurnameInputValue(e.target.value)}/>
                </div>
                <div className="lastname">
                    <label className="form__label" htmlFor="lastName">Отчество </label>
                    <input type="text" name="" id="patronymic" className="form__input" placeholder="Иванович" value={patronymicInputValue} onChange={e => setPatronymicInputValue(e.target.value)}/>
                </div>
                <div className="lastname">
                    <label className="form__label" htmlFor="sex">Пол </label>
                    <input type="text" name="" id="sex" className="form__input" placeholder="М/Ж" value={sexInputValue} onChange={e => setSexInputValue(e.target.value)}/>
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input  type="email" id="email" className="form__input" placeholder="myemail@mail.ru" value={emailInputValue} onChange={e => setEmailInputValue(e.target.value)}/>
                </div>
                <div className="email">
                    <label className="form__label" >Номер телефона </label>
                    <input type="phoneNumber" id="phoneNumber" className="form__input" placeholder="+79211234567" value={phoneNumberInputValue} onChange={e => setPhoneNumberInputValue(e.target.value)}/>
                </div>
                <div className="lastname">
                    <label className="form__label" htmlFor="login">Логин </label>
                    <input type="login" name="" id="login" className="form__input" placeholder="login" value={loginInputValue} onChange={e => setLoginInputValue(e.target.value)}/>
                </div>
                <div className="password">
                    <label className="form__label" for="password">Пароль </label>
                    <input className="form__input" type="password"  id="password" placeholder="DiFFicult$.Password4" value={passwordInputValue} onChange={e => setPasswordInputValue(e.target.value)}/>
                </div>
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword">Повторите пароль </label>
                    <input className="form__input" type="password" id="confirmPassword" placeholder="DiFFicult$.Password4" value={repeatPasswordInputValue} onChange={e => setRepeatPasswordInputValue(e.target.value)}/>
                </div>
            </div>
            <Button
                variant="outline-info"
                style={buttonStyle}
                onClick={() => registration()}
            >Регистрация</Button>

        </div>
    )
}

const buttonStyle = {
    width: "100%",
}

export default RegistrationForm;
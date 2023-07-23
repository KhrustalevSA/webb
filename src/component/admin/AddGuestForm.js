import React, {useState} from "react";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

const addGuestUrl = "http://localhost:8080/admin/addGuest";
const checkUrl = "http://localhost:8080/room/checkRoomIsFreeByDate";


const AddGuestForm = () => {

    const [nameInputValue, setNameInputValue] = useState('')
    const [arrivalDateInputValue, setArrivalDateInputValue] = useState('')
    const [surnameInputValue, setSurnameInputValue] = useState('')
    const [patronymicInputValue, setPatronymicInputValue] = useState('')
    const [emailInputValue, setEmailInputValue] = useState('')
    const [departureDateInputValue, setDepartureDateInputValue] = useState('')
    const [phoneNumberInputValue, setPhoneNumberInputValue] = useState('')
    const [sexInputValue, setSexInputValue] = useState('')
    const [roomIdInputValue, setRoomIdInputValue] = useState('')
    const [birthdateInputValue, setBirthdateInputValue] = useState('')


    const registration = async () => {
        try {
            await axios({
                url: addGuestUrl,
                headers: {
                    "Content-type": "application/json"
                },
                method: "POST",
                data: {
                    userLogin: phoneNumberInputValue,
                    userPassword: phoneNumberInputValue,
                    userEmail: emailInputValue,
                    roomId: roomIdInputValue,
                    userPhoneNumber: phoneNumberInputValue,
                    userName: nameInputValue,
                    userSurname: surnameInputValue,
                    userPatronymic: patronymicInputValue,
                    userBirthDate: birthdateInputValue,
                    userSex: sexInputValue,
                    city: null,
                    arrivalDate: arrivalDateInputValue,
                    departureDate: departureDateInputValue
                }
            }).then(({data}) => {
                console.log(data);
                successfulReserveRoom();
            });
        } catch (e) {
            falseReserveRoom();
            console.log('Sending error', e)
        }
    }

    const checkRoomIsFree = async () => {
        let arrivalDate = arrivalDateInputValue;
        let departureDate = departureDateInputValue;

        try {
            await axios({
                url: checkUrl,
                headers: {
                    "Content-type": "application/json"
                },
                method: "POST",
                data: {
                    roomId: roomIdInputValue,
                    arrivalDate: arrivalDate,
                    departureDate: departureDate
                }
            }).then(({data}) => {
                if (data) {
                    roomIsFreeNotify();
                }
                if (!data) {
                    roomIsNotFreeNotify();
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

    const roomIsFreeNotify = () => {
        toast.success('Номер свободен, скорее бронируй!', {
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

    const roomIsNotFreeNotify = () => {
        toast.warn('К сожалению в выбранные даты этот номер уже забронирован, попробуйте выбрать другие, ' +
            'может быть в другое время номер уже будет свободен!', {
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
                <div className="confirm-password">
                    <label className="form__label" htmlFor="confirmPassword">Дата рождения </label>
                    <input className="form__input" type="date" id="roomNumberId"
                           placeholder="roomId" value={birthdateInputValue}
                           onChange={e => setBirthdateInputValue(e.target.value)}/>
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input  type="email" id="email" className="form__input" placeholder="myemail@mail.ru"
                            value={emailInputValue} onChange={e => setEmailInputValue(e.target.value)}/>
                </div>
                <div className="email">
                    <label className="form__label" >Номер телефона </label>
                    <input type="phoneNumber" id="phoneNumber" className="form__input" placeholder="+79211234567"
                           value={phoneNumberInputValue} onChange={e => setPhoneNumberInputValue(e.target.value)}/>
                </div>
                <div className="confirm-password">
                    <label className="form__label" htmlFor="confirmPassword">Id комнаты </label>
                    <input className="form__input" type="text" id="roomNumberId"
                           placeholder="roomId" value={roomIdInputValue}
                           onChange={e => setRoomIdInputValue(e.target.value)}/>
                </div>
                <div className="confirm-password">
                    <label className="form__label" htmlFor="confirmPassword">Дата заселения </label>
                    <input className="form__input" type="date" id="roomNumberId"
                           placeholder="roomId" value={arrivalDateInputValue}
                           onChange={e => {
                               setArrivalDateInputValue(e.target.value);
                           }}/>
                </div>
                <div className="confirm-password">
                    <label className="form__label" htmlFor="confirmPassword">Дата отбытия </label>
                    <input className="form__input" type="date" id="roomNumberId"
                           placeholder="roomId" value={departureDateInputValue}
                           onChange={e => setDepartureDateInputValue(e.target.value)}/>
                </div>
            </div>
            <Button
                variant="outline-info"
                style={buttonStyle}
                onClick={() => registration()}
            >Зарегистрировать пользователя</Button>
            <Button

                variant="outline-warning"
                style={buttonStyle}
                onClick={() => checkRoomIsFree()}
            >Проверить свободна ли комната</Button>
            <ToastContainer />
        </div>
    )
}

const buttonStyle = {
    width: "100%",
    margin: "10px 0",
}

export default AddGuestForm;
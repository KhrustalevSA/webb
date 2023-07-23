import React, {useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {Button} from "react-bootstrap";

const removeGuestUrl = "http://localhost:8080/admin/removeGuest";

const RemoveGuestForm = () => {


    const [roomIdInputValue, setRoomIdInputValue] = useState('')
    const [departureDateInputValue, setDepartureDateInputValue] = useState('')
    const [departureDateTimeInputValue, setDepartureDateTimeInputValue] = useState('')


    const removeGuest = async () => {
        if (departureDateTimeInputValue == null) {
            setDepartureDateTimeInputValue(new Date().getTime())
        }
        try {
            await axios({
                url: removeGuestUrl,
                headers: {
                    "Content-type": "application/json"
                },
                method: "POST",
                data: {
                    roomId: roomIdInputValue,
                    departureDate: departureDateInputValue,
                    departureDateTime: departureDateTimeInputValue,
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

    const successfulReserveRoom = () => {
        toast.success('ВЫселение прошло успешно!', {
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
        toast.error('Ошибка удаления :(', {
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

                <div className="confirm-password">
                    <label className="form__label" htmlFor="confirmPassword">Id комнаты </label>
                    <input className="form__input" type="text" id="roomNumberId"
                           placeholder="roomId" value={roomIdInputValue}
                           onChange={e => setRoomIdInputValue(e.target.value)}/>
                </div>
                <h6>Если дата выселения не совпадает с текущей датой - введите нужную дату выселения в поле ниже</h6>
                <div className="confirm-password">
                    <label className="form__label" htmlFor="confirmPassword" defaultValue={new Date().getDate()} >Дата выселения </label>
                    <input className="form__input" type="date" id="roomNumberId"
                           placeholder="roomId" value={departureDateInputValue}
                           onChange={e => setDepartureDateInputValue(e.target.value)}/>
                </div>
            </div>
            <Button
                variant="outline-info"
                style={buttonStyle}
                onClick={() => removeGuest()}
            >Выселить пользователя</Button>

        </div>
    )
}

const buttonStyle = {
    width: "100%",
    margin: "10px 0",
}

export default RemoveGuestForm;
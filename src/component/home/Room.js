import React, {Component} from 'react';
import ImageSlider from "../image/ImageSlider";
import {Button} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const checkUrl = "http://localhost:8080/room/checkRoomIsFreeByDate";
const reserveUrl = "http://localhost:8080/room/reserveRoom";

class Room extends Component {

    constructor(props) {
        super(props);
        this.reserve = this.reserve.bind(this);
        this.state = {
            editForm: false,
            departureDate: "0001-00-00",
            arrivalDate: "0001-00-00"
        }
    }

    onArrivalDateChange = (e) => {
        this.setState({arrivalDate: e.target.value});
    }

    onDepartureDateChange = (e) => {
        this.setState({departureDate: e.target.value});
    }

    reserve = async () => {
        const arrivalDate = this.state.arrivalDate;
        const departureDate = this.state.departureDate;

        if ( (this.props.userToken === null || String.prototype.includes(this.props.userToken)) &&
             (this.props.userLogin === null || String.prototype.includes(this.props.userLogin)) ) {
            this.needToRegisterOrSignInNotify();
        } else {
            try {
                await axios({
                    url: reserveUrl,
                    headers: {
                        "Content-type": "application/json"
                    },
                    method: "POST",
                    data: {
                        token: this.props.userToken,
                        userLogin: this.props.userLogin,
                        roomId: this.room.id,
                        arrivalDate: arrivalDate,
                        departureDate: departureDate
                    }
                }).then(({data}) => {
                    if (data) {
                        this.successfulReserveRoom();
                    } else {
                        this.roomIsNotFreeNotify();
                    }
                });
            } catch (e) {
                console.log('Sending error', e)
            }
        }
    }

    checkRoomIsFree = async () => {
        let arrivalDate = this.state.arrivalDate;
        let departureDate = this.state.departureDate;

        try {
            await axios({
                url: checkUrl,
                headers: {
                    "Content-type": "application/json"
                },
                method: "POST",
                data: {
                    roomId: this.room.id,
                    arrivalDate: arrivalDate,
                    departureDate: departureDate
                }
            }).then(({data}) => {
                if (data) {
                    this.roomIsFreeNotify();
                }
                if (!data) {
                    this.roomIsNotFreeNotify();
                }
            });
        } catch (e) {
            console.log('Sending error', e)
        }
    }

    successfulReserveRoom = () => {
        toast.success('Номер успешно зарезервирован! Ждем вас с нетерпением :)', {
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

    needToRegisterOrSignInNotify = () => {
        toast.warn('Для резервирования номера, пожалуйста, перейдите на страницу Логина или Регистрации', {
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

    roomIsFreeNotify = () => {
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

    roomIsNotFreeNotify = () => {
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

    room = this.props.room;

    render() {

        const payMultiply = 15;
        const hotelPriceCost = 2500;

        return (
            <div>
                <div style={blockStyles}>
                    <div style={containerTextStyles}>
                        <h3 >
                            {this.room.header}

                        </h3>
                        <div>
                            Описание: {this.room.description} <br/>
                            Дополнительные услуги: {this.room.additionalServices} <br/>
                            Номер комнаты: {this.room.roomNumber}
                            <br/>
                            <b>Заселение и выселение проводится с 12:00 до 14:00 в день приезда/отъезда</b>
                            {
                                this.room.comfort != null ?
                                    this.state.departureDate !== "0001-00-00" && this.state.arrivalDate !== "0001-00-00" ?
                                        <h3>Цена за выбранные даты: {hotelPriceCost + (this.room.comfort * payMultiply ) *
                                            new Date(new Date(this.state.departureDate).getTime() - new Date(this.state.arrivalDate).getTime()).getDate()}</h3> :
                                        <h3>Цена за один день: {hotelPriceCost + (this.room.comfort * payMultiply)}</h3> :
                                    this.state.departureDate !== "0001-00-00" && this.state.arrivalDate !== "0001-00-00" ?
                                        <h3>Цена за выбранные даты: {hotelPriceCost + (50 * payMultiply + 2500) *
                                            new Date(new Date(this.state.departureDate).getTime() - new Date(this.state.arrivalDate).getTime()).getDate()}</h3> :
                                        <h3>Цена за один день: {hotelPriceCost + (50 * payMultiply + 2500)}</h3>
                            }
                        </div>
                    </div>
                    <div style={containerImageStyles}>
                        <ImageSlider style={containerImageStyles} slides={this.room.imageList} />
                    </div>
                    <div>
                        <Form >
                            <Form.Group controlId="fromArrivalDate">
                                <Form.Label>Дата заселения</Form.Label>
                                <br/>
                                <Form.Control onChange={this.onArrivalDateChange} style={dateStyles} type="date" placeholder="Пример: 14/05/2023"/>
                            </Form.Group>
                            <Form.Group controlId="fromArrivalDate">
                                <Form.Label>Дата выселения</Form.Label>
                                <br/>
                                <Form.Control onChange={this.onDepartureDateChange} style={dateStyles} type="date" placeholder="Пример: 14/05/2023"/>
                            </Form.Group>
                        </Form>
                        <Button style={buttonReserveStyles}
                                variant="outline-info"
                                onClick={() => this.reserve()}
                        >Зарезервировать</Button>
                        <Button style={buttonCheckRoomIsFree}
                                variant="outline-warning"
                                onClick={() => this.checkRoomIsFree()}
                        >Свободна ли комната в выбранный период</Button>
                    </div>

                </div>
                <ToastContainer />
            </div>
        );
    }
}

const dateStyles = {
    width:"200px",
    display: "inline-block",
};

const buttonReserveStyles = {
    width: "25%",
    height: "2%",
    margin: "10px 0",
    display: "inline-block",
};

const buttonCheckRoomIsFree = {
    width: "25%",
    overflowWrap: "normal",
    margin: "0 0",
    display: "inline-block",
};

const containerImageStyles = {
    width: "440px",
    height: "280px",
    margin: "0 0",
    float: "right",
    display: "inline-block",

};

const containerTextStyles = {
    width: "440px",
    height: "260px",
    margin: "10px 4%",
    display: "inline-block",
    float: "left",
}

const blockStyles = {
    height: "1%",
    width: "73%",
    position: "relative",
    border: "3px solid black",
    margin: "10px 10%",
    display: "table",
    backgroundColor: "#fff",
    borderRadius: "15px",
};


export default Room;


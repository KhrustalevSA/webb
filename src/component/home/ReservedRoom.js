import React, {Component} from 'react';
import ImageSlider from "../image/ImageSlider";
import Form from 'react-bootstrap/Form';
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Room extends Component {

    constructor(props) {
        super(props);
        this.onDepartureDateChange = this.onDepartureDateChange.bind(this);
        this.onArrivalDateChange = this.onArrivalDateChange.bind(this);
        this.state = {
            editForm: false,
            arrivalDate: this.props.room.arrivalDateList[0],
            departureDate: this.props.room.departureDateList[0],
            datesMap: [],
        }


    }

    onArrivalDateChange = (e) => {
        this.setState({arrivalDate: e.target.value});
    }

    onDepartureDateChange = (e) => {
        this.setState({departureDate: e.target.value});
    }



    room = this.props.room;

    render() {

        const payMultiply = 15;
        const hotelPriceCost = 2500;

        return (
            <div>
                <div style={blockStyles}>
                    <div style={containerTextStyles}>
                        <h2 >
                            {this.room.header}
                        </h2>
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
                            <h2>Дата заселения</h2>
                            <h3>{(new Date(this.state.arrivalDate).getDay() + 1 ) + "-" + (new Date(this.state.arrivalDate).getMonth() + 1) + "-" + new Date(this.state.arrivalDate).getFullYear()}</h3>
                            <h2>Дата выселения</h2>
                            <h3>{(new Date(this.state.departureDate).getDay() + 1) + "-" + (new Date(this.state.departureDate).getMonth() + 1) + "-" + new Date(this.state.departureDate).getFullYear()}</h3>
                        </Form>
                    </div>

                </div>
                <ToastContainer />
            </div>
        );
    }
}

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
};

export default Room;


import React, {Component} from 'react';
import axios from "axios";
import Rooms from "../component/home/Rooms";

const baseUrl = "http://localhost:8080/room/getAll";

const homePageStyles = {
    height: "auto",
    backgroundImage: `url(http://localhost:3000/images/background_image_Bel.jpg)`,
    backgroundPosition: "left bottom",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
}

class HomePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            rooms: [],
        };

        axios.post(baseUrl).then((response) => {
            console.log(response);
            this.setState({rooms: response.data.roomList});
        })
    }

    render() {

        return (
            <div style={homePageStyles}>
                <main className="mainHomePage" >
                    <Rooms
                        rooms={this.state.rooms}
                        userToken = {this.props.userToken}
                        userLogin = {this.props.userLogin}
                        userRole = {this.props.userRole}
                    />

                </main>
            </div>
        );
    }
}

export default HomePage;
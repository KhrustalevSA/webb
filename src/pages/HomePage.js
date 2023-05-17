import React, {Component} from 'react';
import axios from "axios";
import Rooms from "../component/home/Rooms";

const baseUrl = "http://localhost:8080/room/getAll";

const homePageStyles = {
    height: "auto",
    backgroundImage: `url(http://localhost:3000/images/background_image_Bel.jpg)`,
}

class HomePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            rooms: [],
        };

        axios.post(baseUrl).then((response) => {
            console.log(response.data);
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
                    />

                </main>
            </div>
        );
    }
}

export default HomePage;
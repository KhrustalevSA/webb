import React, {Component} from 'react';
import axios from "axios";
import UserComponent from "../component/user/UserComponent";
import ReservedRoom from "../component/home/ReservedRoom";

const baseUrl = "http://localhost:8080/room/getAll";
const userInfoUrl = "http://localhost:8080/user/get";

const accountPageStyles = {
    height: "1000px",
    backgroundImage: `url(http://localhost:3000/images/background_image_Bel.jpg)`,
    backgroundPosition: "left bottom",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
}

class AccountPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: [],
            userRooms: [],
            dates: [],
            rooms: [],
        }

        axios.post(userInfoUrl, {
            login: this.props.userLogin
        }).then((response) => {
            console.log(response.data);
            this.setState({user: response.data.userList});
            this.setState({userRooms: response.data.roomList});
            this.setState({rooms: response.data.roomList});
        })

    }

    render() {
        return (
            <div style={accountPageStyles}>
                <div>
                    {this.state.user.map((element) => (
                        <UserComponent
                            key={element.id}
                            user={element}
                            userLogin={this.props.userLogin}
                            userToken={this.props.userToken}
                        />
                    ))}
                    {this.state.userRooms.map((element) => (
                        <ReservedRoom key={element.id}
                              room={element}
                              userId={this.state.user[0].id}
                              userLogin={this.props.userLogin}
                              userToken={this.props.userToken}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default AccountPage;
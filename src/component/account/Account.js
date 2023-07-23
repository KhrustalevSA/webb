import React, {Component} from 'react';
import Room from "../home/Room";

const scrollStyle = {
    margin:"4px, 4px",
    padding:"4px",
    width: "70%",
    height: "90%",
    overflowX: "hidden",
    overflowY: "auto",
    textAlign:"justify",
}

class Account extends Component {

    render() {
        if (this.props.rooms.length > 0) {
            return (
                <div style={scrollStyle}>
                    {this.props.rooms.map((element) => (
                        <Room key={element.id}
                              room={element}
                              userLogin={this.props.userLogin}
                              userToken={this.props.userToken}
                        />
                    ))}
                </div>
            );
        }
    }

}

export default Account;
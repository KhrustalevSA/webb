import React, {Component} from 'react';
import Room from "./Room";

const scrollStyle = {
    margin:"4px, 4px",
    padding:"4px",
    width: "100%",
    height: "100%",
    overflowX: "hidden",
    overflowY: "auto",
    textAlign:"justify",
}

class Rooms extends Component {
    render() {
        if (this.props.rooms.length > 0) {
            return (
                <div style={scrollStyle}>
                    {this.props.rooms.map((element) => (
                        <Room key={element.id}
                              room={element}
                              userLogin={this.props.userLogin}
                              userToken={this.props.userToken}
                              userRole={this.props.userRole}
                        />
                    ))}
                </div>
            );
        }
    }
}

export default Rooms;
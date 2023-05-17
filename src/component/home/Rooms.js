import React, {Component} from 'react';
import Room from "./Room";

class Rooms extends Component {
    render() {
        if (this.props.rooms.length > 0) {
            return (
                <div>
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

export default Rooms;
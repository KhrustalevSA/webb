import React, {Component} from 'react';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editForm: false
        }
    }

    user = this.props.user;

    render() {
        return (
            <div className="user">
                <h3>{this.user.name} {this.user.surname} {this.user.patronymic}</h3>
                <p>{this.user.favoriteRecipeList}</p>
            </div>
        )
    }
}

export default User;
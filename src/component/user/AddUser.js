import React, {Component} from 'react';

class AddUser extends Component {
    userAdd={}

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            surname: "",
            bio: "",
            birthdate: 1,
            isHappy: false
        }
    }

    render() {
        return (
            <form ref={(formElement) => this.myForm = formElement}>
                <input placeholder="Имя" onChange={(e) => this.setState({name: e.target.value})} />
                <input placeholder="Фамилия" onChange={(e) => this.setState({surname: e.target.value})} />
                <textarea placeholder="Биография" onChange={(e) => this.setState({bio: e.target.value})} />
                <input placeholder="Возраст" onChange={(e) => this.setState({birthdate: e.target.value})}/>
                <label htmlFor="isHappy">Счастлив?</label>
                <input type="checkbox" id="isHappy" onChange={(e) => this.setState({isHappy: e.target.checked})} />
                <button type="button" onClick={() => {
                    this.myForm.reset();
                    this.userAdd = {
                        name: this.state.name,
                        surname: this.state.surname,
                        bio: this.state.bio,
                        birthdate: this.state.birthdate,
                        isHappy: this.state.isHappy
                    }
                    if(this.props.user) {
                        this.userAdd.id = this.props.user.id;
                    }

                    this.props.onAdd(this.userAdd)
                }
                }>Добавить</button>
            </form>
        )
    }

}

export default AddUser;
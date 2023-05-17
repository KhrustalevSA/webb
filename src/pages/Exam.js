import React, {Component} from 'react';
import Room from "../component/home/Room";
import {Button} from "react-bootstrap";
import ExamElem from "./ExamElem";
import {render} from "@testing-library/react";
import {forEach} from "react-bootstrap/ElementChildren";

let count = 0;
let countBeds = 0;

class Exam extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bol: false
        }
    }

    render() {
        for(let i = 0; i < this.props.rooms.length; i++) {
            countBeds += this.props.rooms[1].bedsNumber;
        }



        return (

            <div>
                <Button onClick={() => bolS}>Check info</Button>
                {
                    this.bol ?
                    <div>
                        <label>{count}</label>
                        <label>{countBeds}</label>
                    </div>
                        :
                        null
                }
            </div>
        );
    }
}

const bolS = (bol) => {
    console.log(bol);
    if (bol) {
        this.bol = false;
    } else {
        bol = true;
    }
    return bol;

}

const getInfo = (rooms) => {

    for(let i = 0; i < rooms.length; i++) {
        countBeds += rooms[1].bedsNumber;
    }

    count = rooms.length;

    return <div>
        <label>{count}</label>
        <label>{countBeds}</label>
    </div>

}

export default Exam;
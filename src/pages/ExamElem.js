import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class ExamElem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editForm: false
        }
    }

    room = this.props.room;

    render() {
        return (
            <div>
                <Container>
                    <Row xs lg="auto">
                        <Col >
                            количество комнат {this.room.roomNumber}
                        </Col>
                        <Col >
                            Количество кроватей в комнате:{this.room.bedsNumber}
                        </Col>
                        <Col >
                            Описание: {this.room.description}
                        </Col>
                    </Row>
                    <p> reserve </p>
                </Container>
            </div>
        );
    }
}

export default ExamElem;
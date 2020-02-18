import React, { Component } from 'react';
import { Row, Col } from "reactstrap";

class Testimony extends Component {
    render() {
        return (
            <div className="Testimony" id="Testimony">
                <Row>
                    <Col md={6}>
                        <div className="Testimony__content">
                            <p className="title">Powerful words from our customers</p>
                            <hr />
                            <p className="description">"Love this company. Such an easy and honest process, and over $4500 dollars saved."</p>
                            <hr />
                            <p className="auth">Jennifer, TX</p>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Testimony;
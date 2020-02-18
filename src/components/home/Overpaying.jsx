import React, { Component } from 'react';
import { Row, Col } from "reactstrap";

class Overpaying extends Component {
    render() {
        return (
            <div className="Overpaying" id="AmiOverpaying">
                <div className="Overpaying__title">
                    <h3>Am I Overpaying?</h3>
                    <p>You might be overpaying for power if</p>
                </div>
                <div className="Overpaying__content">
                    <Row>
                        <Col md={3} sm={12} xs={12} className="item" >
                            <span className="content_num">1</span>
                            <span>You renewed with the <span className="text_bold">same company</span> </span>
                        </Col>
                        <Col md={3} sm={12} xs={12} className="item">
                            <span className="content_num">2</span>
                            <span>Contract <span className="text_bold">Expired</span> </span>
                        </Col>
                        <Col md={3} sm={12} xs={12} className="item">
                            <span className="content_num">3</span>
                            <span>You had bills <span className="text_bold">over $250</span> </span>
                        </Col>
                        <Col md={3} sm={12} xs={12} className="item">
                            <span className="content_num">4</span>
                            <span>The current rate is <span className="text_bold">above</span> 10c/kWh </span>
                        </Col>
                    </Row>
                </div>
                <div className="Overpaying__bottom">
                    <p style={{marginBottom: "5px"}}>Don’t let any of these describes you</p>
                    <p>Our customers have saved upto 50% in the first year!</p>
                </div>
            </div>
        );
    }
}

export default Overpaying;
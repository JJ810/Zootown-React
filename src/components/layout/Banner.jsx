import React, { Component } from 'react';
import { Row, Col, Button } from "reactstrap";

class Banner extends Component {
    render() {
        return (
            <div className="Banner">
                <Row>
                    <Col md={8} sm={12}>
                        <div className="Banner__background">
                            <div className="banner_content">
                                <div className="banner_title">
                                    <h1>The <span>POWER</span> is yours!</h1>
                                    <p>Take control of the price you pay for energy</p>
                                    <Button className="signup_now">Sign Up Now</Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} sm={12}>
                        <div className="Banner__description">
                            <div className="description_content">
                                    <p>We’ll find the right plan to <span>SAVE</span> you the <span>MOST</span> money</p>
                                    <div className="content_check">
                                        <p><i className="fa fa-check-circle" aria-hidden="true"/>No Hidden Cost</p>
                                        <p><i className="fa fa-check-circle"></i>No Commissions Due</p>
                                    </div>

                                    <div>
                                        <p>Just pay a lowest monthly fee of $4.95 and SAVE upto 50% in the first year!!!</p>
                                    </div>
                                   
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Banner;
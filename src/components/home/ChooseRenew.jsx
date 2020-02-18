import React, { Component } from 'react';
import { Row, Col } from "reactstrap";

class ChooseRenew extends Component {
    render() {
        return (
            <div className="ChooseRenew" id="WhyChooseRENEW">
                <h3>Why Choose Renew?</h3>
                <div className="ChooseRenew__content">
                    <Row>
                        <Col md={4} sm={12}>
                            <div className="item_icon">
                                <span><i className="fa fa-dollar-sign"></i></span>
                            </div>
                            <div className="item_content">
                                <h4>We Save You Money</h4>
                                <p>Not only do we find you the
                                    lowest possible rates, we
                                    also don’t charge monthly
                                    subscription fees.</p>
                                <p className="text_bold">You only pay a monthly fee of ONLY $4.95</p>
                            </div>
                        </Col>
                        <Col md={4} sm={12}>
                            <div className="item_icon">
                                <span><i style={{padding: "10px 14px"}} className="fa fa-user-tie"></i></span>
                            </div>
                            <div className="item_content">
                                <h4>We Work For You</h4>
                                <p>Our only compensation comes from you!</p>
                                <div className="item_answer">
                                    <p>+ No broker fees!</p>
                                    <p>+ No referral fees!</p>
                                    <p>+ You’re our only boss!</p>
                                </div>
                                <p className="text_bold">And we want to make sure the boss is happy.</p>
                            </div>
                        </Col>
                        <Col md={4} sm={12}>
                            <div className="item_icon">
                                <span><i className="fa fa-lightbulb"></i></span>
                            </div>
                            <div className="item_content">
                                <h4>We are Consumers Too</h4>
                                <p>We’re energy consumers, too. We know how it feels to
                                    be overcharged for energy.
                                    It feels lousy.</p>
                                <p>We’re out to ensure you never get overcharged again!</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default ChooseRenew;
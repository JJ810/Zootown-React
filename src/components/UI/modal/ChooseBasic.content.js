import React from "react";
import { Row, Col, Icon, Radio } from "antd";
import { _url } from "../../../config/utils";

class ChooseBasic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="ChooseBasic">
                <div className="ChooseBasic__Header">
                    <h3>CHOOSE YOUR PLAN</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
                <div className="ChooseBasic__Content">
                    <Row>
                        <Col className='basic_membeship' span={6}>
                            <div className='content'>
                                <Icon type="pie-chart" theme="filled" />
                                <h2>Basic membership</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <h2>£250</h2>
                            </div>
                        </Col>
                        <Col className='credit_card' span={18}>
                            <Row>
                                <Col span={6}>
                                </Col>
                                <Col span={18}>
                                    <div className='header_choose'>
                                        <Radio>
                                            <img alt='' src={_url('assets/images/common/credit_card.png')}></img>
                                            <span style={{ marginLeft: '10px' }}>Credit Card</span>
                                        </Radio>
                                        <Radio>
                                            <img alt='' src={_url('assets/images/common/paypal.png')}></img>
                                        </Radio>

                                        <div className='bottom_btn'>
                                            <button className='checkout_btn'>Checkout</button>

                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default ChooseBasic;

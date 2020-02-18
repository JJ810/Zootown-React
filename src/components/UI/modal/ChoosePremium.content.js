import React from "react";
import { Input } from "../../../components/UI";
import { Form, Row, Col, Radio } from "antd";
import { _url } from "../../../config/utils";

class ChoosePremium extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="ChoosePremium">
                <div className="ChoosePremium__Header">
                    <h3>CHOOSE YOUR PLAN</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
                <div className="ChoosePremium__Content">
                    <Row type="flex" justify="space-around" align="middle">
                        <Col className='premium_package' span={10}>
                            <div className='content'>
                                {/* <Icon type="wallet" theme="filled" style={{ color: '#FFFFFF' }} /> */}
                                <img alt="premium" src="assets/icons/premium.png" />
                                <h2>Talent Premium Package</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <h2>£350</h2>
                            </div>
                        </Col>
                        <Col className='credit_card' span={14}>
                            <Row>
                                <Col span={6}>
                                </Col>
                                <Col span={18}>
                                    <div className='header_choose'>
                                        <Radio.Group name="radiogroup" >
                                            <Radio value={1}>
                                                <img alt='' src={_url('assets/images/common/credit_card.png')}></img>
                                                <span style={{ marginLeft: '10px' }}>Credit Card</span>
                                            </Radio>
                                            <Radio value={2}>
                                                <img alt='' src={_url('assets/images/common/paypal.png')}></img>
                                            </Radio>
                                        </Radio.Group>
                                        <Form style={{ marginTop: '20px' }}>
                                            <Input
                                                type="number"
                                                placeholder="Input Your Text Here"
                                                label="CARD NUMBER"
                                            />
                                            <br />
                                            <Input
                                                type="text"
                                                placeholder="Input Your Text Here"
                                                label="Card Owner"
                                            />
                                            <br />

                                            <Row gutter={16}>
                                                <Col span={12} >
                                                    <Input
                                                        type="text"
                                                        placeholder="Input Your Text Here"
                                                        label="Expiration Date"
                                                    />
                                                </Col>
                                                <Col span={12} >
                                                    <Input
                                                        type="text"
                                                        placeholder="Input Your Text Here"
                                                        label="CVV"
                                                    />
                                                </Col>
                                            </Row>
                                        </Form>
                                        <button className='checkout_btn'>Checkout</button>
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

export default ChoosePremium;

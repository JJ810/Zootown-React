import React from "react";
import { Input } from "../../../components/UI";
import { Form, Row, Col, Radio } from "antd";
import { PaymentSuccessContent } from '../modal'

class CheckoutContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPaymentSuccess: false
        };
    }

    render() {
        return (
            !this.state.isPaymentSuccess ?
                (<div className="CheckoutContent">
                    <div className="CheckoutContent__Header">
                        <h3>CHECKOUT</h3>
                    </div>
                    <div className="CheckoutContent__Form">
                        <div className='CheckoutContent__Form__Head'>
                            <Radio.Group name="radiogroup" >
                                <Radio value={1}>
                                    <img alt='' src='assets/images/common/credit_card.png'></img>
                                    <span style={{ marginLeft: '10px' }}>Credit Card</span>
                                </Radio>
                                <Radio value={2}>
                                    <img alt='' src='assets/images/common/paypal.png'></img>
                                </Radio>
                            </Radio.Group>

                        </div>
                        <div className='CheckoutContent__Form__Body'>
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
                        </div>
                    </div>
                    <div className="CheckoutContent__Footer">
                        <button>Back</button>
                        <button onClick={() => this.setState({ isPaymentSuccess: true })} >Checkout</button>
                    </div>
                </div>)
                :
                (<div>
                    <PaymentSuccessContent />
                </div>)
        );
    }
}

export default CheckoutContent;

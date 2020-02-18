import React from 'react';
import { Step, Input, Button, DatePicker } from '../../../components/UI';
import { Form, Checkbox, Input as AntdInput, Row, Col, Radio } from 'antd';
import { _url } from '../../../config/utils';
import { Step1, Step2, Step3 } from './signup-freelancer';
import { graphql } from 'react-apollo';

import gql from 'graphql-tag';

class Step4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { option, priceOption } = this.props;
    return (
      <div className="ChoosePlanEmployer">
        <h6 className="ChoosePlanEmployer__Title">{'Plan Payment'}</h6>
        <p className="ChoosePlanEmployer__Description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
        </p>
        <div className="ChoosePlanEmployer__Payment">
          <Row type="flex" justify="space-around" align="middle" style={{ marginBottom: '20px' }}>
            {option === 2 && (
              <Col className="premium_package" span={10}>
                <div className="content">
                  {/* <Icon type="wallet" theme="filled" style={{ color: '#FFFFFF' }} /> */}
                  <img alt="premium" src="assets/icons/premium.png" />
                  <h2>Talent Premium Package</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                  <h2>£350</h2>
                </div>
              </Col>
            )}
            {option === 1 && (
              <Col className="normal_package" span={10}>
                <div className="content">
                  <img alt="normal" src="assets/icons//basic-membership.png" />
                  <h2>Job/Project Poster</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                  <h2>£00 P/M</h2>
                </div>
              </Col>
            )}
            {option === 3 && (
              <Col className="bonus_package" span={10}>
                <div className="content">
                  <img alt="normal" src="assets/icons/bonus.svg" />
                  <h2>Rercuiter Premium Package</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                  <h2>£00 P/M</h2>
                </div>
              </Col>
            )}
            <Col className="credit_card" span={14}>
              <Row>
                <Col span={24}>
                  <div className="header_choose">
                    <Radio.Group name="radiogroup">
                      <Radio value={1}>
                        <img alt="" src={_url('assets/images/common/credit_card.png')} />
                        <span style={{ marginLeft: '10px' }}>Credit Card</span>
                      </Radio>
                      <Radio value={2}>
                        <img alt="" src={_url('assets/images/common/paypal.png')} />
                      </Radio>
                    </Radio.Group>
                    <Form style={{ margin: '20px 0' }}>
                      <Input type="number" placeholder="Input Your Text Here" label="CARD NUMBER" />
                      <br />
                      <Input type="text" placeholder="Input Your Text Here" label="Card Owner" />
                      <br />

                      <Row gutter={16}>
                        <Col span={12}>
                          <Input type="text" placeholder="Input Your Text Here" label="Expiration Date" />
                        </Col>
                        <Col span={12}>
                          <Input type="text" placeholder="Input Your Text Here" label="CVV" />
                        </Col>
                      </Row>
                    </Form>
                    <Button className="checkout_btn" onClick={() => this.props.onClickNext(5, option)} style={{ marginTop: 20 }}>
                      Checkout
                    </Button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <button onClick={() => this.props.onClickNext(3, option)}>Back</button>
        </div>
      </div>
    );
  }
}

class Step5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // const { option } = this.props;
    return (
      <div className="ChoosePlanEmployer">
        <h6 className="ChoosePlanEmployer__Title">PAYMENT MADE SUCCESSFULLY!</h6>
        <h6 className="ChoosePlanEmployer__Title">WELCOME TO THE FAMILY!</h6>
        <div className="ChoosePlanEmployer__Success">
          <img alt="succes" src={_url('assets/images/common/ok.png')} />
        </div>
        <Button onClick={() => window.location.reload()}>OK</Button>
      </div>
    );
  }
}

class SignupFreelancer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      stepDone: 1,
      formData: {}
    };
  }

  onClickNext = (step, values) => {
    this.setState(
      {
        step,
        stepDone: step > this.state.stepDone ? step : this.state.stepDone,
        formData: { ...this.state.formData, ['step' + (step - 1)]: values }
      },
      () => {
        if (step === 4) {
          console.log('data', this.state);
        }
      }
    );
  };

  onClickStep = step => {
    this.setState({ step: step + 1 });
  };

  onMutate = () => {
    console.log('props', this.props);
  };

  render() {
    const FormStep1 = Form.create({ name: 'normal_login' })(Step1);
    const FormStep2 = Form.create({ name: 'normal_login' })(Step2);
    const FormStep3 = Form.create({ name: 'normal_login' })(Step3);
    const FormStep4 = Form.create({ name: 'normal_login' })(Step4);

    const FormStep5 = Form.create({ name: 'normal_login' })(Step5);

    console.log('this.state.formData', this.state.formData);
    return (
      <div className="SignupContent">
        <div className="SignupContent__Header">
          <h3>sign up</h3>
          <span>you're almost there</span>
        </div>
        {this.state.step < 4 && (
          <Step active={this.state.step - 1} numStepDone={this.state.stepDone} steps={['Personal details', 'Education Details', 'About you']} onClickStep={this.onClickStep} />
        )}
        {this.state.step === 1 && <FormStep1 data={this.state.formData.step1 || {}} onClickNext={this.onClickNext} />}
        {this.state.step === 2 && <FormStep2 data={this.state.formData.step2 || {}} onClickNext={this.onClickNext} />}
        {this.state.step === 3 && <FormStep3 data={this.state.formData.step3 || {}} onClickNext={this.onClickNext} />}
        {this.state.step === 4 && <FormStep4 data={this.state.formData.step4 || {}} onClickNext={this.onClickNext} />}
        {this.state.step === 5 && <FormStep5 data={this.state.formData.step5 || {}} onClickNext={this.onClickNext} />}
      </div>
    );
  }
}

export default SignupFreelancer;

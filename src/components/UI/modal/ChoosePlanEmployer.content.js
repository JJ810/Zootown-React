import React from 'react';
import { Button, Input } from '../../../components/UI';
import { Form, Row, Col, Radio } from 'antd';
import { _url } from '../../../config/utils';
import '../../../styles/components/UI/modal-form/_post_job.scss';

class Step1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onNext = option => {
    const { isSignup, type } = this.props;
    if (isSignup) {
      if (option === 1) this.props.onNext(2, option);
      else this.props.onNext(4, option);
    } else {
      if (type === 'job') this.props.onNext(2, option);
      else this.props.onNext(4, option);
    }
  };
  render() {
    return (
      <div className="ChoosePlanEmployer">
        <h6 className="ChoosePlanEmployer__Title">CHOOSE YOUR PLAN</h6>
        <p className="ChoosePlanEmployer__Description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an
        </p>
        <div className="ChoosePlanEmployer__Plans">
          {!this.props.isPlan && (
            <div className="ChoosePlanEmployer__Plans__Item ">
              <div className="ChoosePlanEmployer__Plans__Item__Content ChoosePlanEmployer__Plans__Poster">
                <img className="ChoosePlanEmployer__Plans__Item--Img--Medium" alt="basic" src="assets/icons/basic-membership.png" />
                <p className="ChoosePlanEmployer__Plans__Item--Title">Job/Project Poster</p>
                <p className="ChoosePlanEmployer__Plans__Item--Description">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an
                </p>
                <p className="ChoosePlanEmployer__Plans__Item--Price">£275 per cost</p>
              </div>
              <Button onClick={() => this.onNext(1)} className="ChoosePlanEmployer__Plans__Item__Button">
                Choose plan
              </Button>
            </div>
          )}
          <div className="ChoosePlanEmployer__Plans__Item ">
            <div className="ChoosePlanEmployer__Plans__Item__Content ChoosePlanEmployer__Plans__Talent">
              <img className="ChoosePlanEmployer__Plans__Item--Img" alt="premium" src="assets/icons/premium.png" />
              <p className="ChoosePlanEmployer__Plans__Item--Title">Talent Premium Package</p>
              <p className="ChoosePlanEmployer__Plans__Item--Description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an
              </p>
              <p className="ChoosePlanEmployer__Plans__Item--Price">£00 P/M</p>
            </div>
            <Button onClick={() => this.onNext(2)} className="ChoosePlanEmployer__Plans__Item__Button">
              Choose plan
            </Button>
          </div>
          <div className="ChoosePlanEmployer__Plans__Item ">
            <div className="ChoosePlanEmployer__Plans__Item__Content ChoosePlanEmployer__Plans__Recruiter">
              <img className="ChoosePlanEmployer__Plans__Item--Img" alt="premium" src="assets/icons/bonus.svg" />
              <p className="ChoosePlanEmployer__Plans__Item--Title">Rercuiter Premium Package</p>
              <p className="ChoosePlanEmployer__Plans__Item--Description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an
              </p>
              <p className="ChoosePlanEmployer__Plans__Item--Price">£00 P/M</p>
            </div>
            <Button onClick={() => this.onNext(3)} className="ChoosePlanEmployer__Plans__Item__Button">
              Choose plan
            </Button>
          </div>
        </div>
        {this.props.isSignup && (
          <div style={{ paddingTop: '20px' }}>
            <Button onClick={() => this.props.onBack()} className="ChoosePlanEmployer__Plans__Item__Button">
              Back
            </Button>
          </div>
        )}
      </div>
    );
  }
}

class Step2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { option } = this.props;
    return (
      <div className="ChoosePlanEmployer">
        <h6 className="ChoosePlanEmployer__Title">POST A JOB OR PROJECT</h6>
        <p className="ChoosePlanEmployer__Description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
        </p>
        <div className="ChoosePlanEmployer__Posts">
          <Row>
            <Col span={12}>
              <div className="ChoosePlanEmployer__Posts__Post">
                <img alt="post-a-jpb" src="assets/icons/post-a-job.svg" />
                <p className="post-plan-title">I WOULD LIKE TO POST A JOB</p>
                <p className="post-plan-desc">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an,
                  when an{' '}
                </p>
              </div>
              <Button onClick={() => this.props.onNext(3, option)} className="ChoosePlanEmployer__Posts__Item__Button">
                Choose
              </Button>
            </Col>
            <Col span={12}>
              <div className="ChoosePlanEmployer__Posts__Post">
                <img style={{ marginBottom: '10px' }} alt="post-a-jpb" src="assets/icons/post-a-project.svg" />
                <p className="post-plan-title">I WOULD LIKE TO POST A PROJECT</p>
                <p className="post-plan-desc">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an,
                  when an{' '}
                </p>
              </div>
              <Button onClick={() => this.props.onNext(3, option)} className="ChoosePlanEmployer__Posts__Item__Button">
                Choose
              </Button>
            </Col>
          </Row>
          {(this.props.type !== 'job' || this.props.isSignup) && <Button onClick={() => this.props.onBack()}>Back</Button>}
        </div>
      </div>
    );
  }
}

const options = [
  {
    title: 'SINGLE POST',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an",
    price: '£0.00'
  },
  {
    title: '3 X EVENT POST',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an",
    price: '£0.00'
  },
  {
    title: '6 X EVENT POST',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an",
    price: '£0.00'
  },
  {
    title: '10 X EVENT POST',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an",
    price: '£0.00'
  },
  {
    title: 'UNLIMITED',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an",
    price: '£0.00'
  }
];
class Step3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { option, type } = this.props;
    return (
      <div className="ChoosePlanEmployer">
        <h6 className="ChoosePlanEmployer__Title">POST A {type === 'event' ? 'EVENT' : 'JOB'}</h6>
        <p className="ChoosePlanEmployer__Description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an
        </p>
        <div className="ChoosePlanEmployer__Jobs">
          {options.map((item, index) => (
            <Row type="flex" justify="space-between" align="middle" className="option">
              <Col span={6} style={{ textAlign: 'left' }}>
                <span className="option-title">{item.title}</span>
              </Col>
              <Col span={11}>
                <p className="option-desc">{item.desc}</p>
              </Col>
              <Col span={3}>
                <span className="option-title">{item.price}</span>
              </Col>
              <Col span={4}>
                <Button onClick={() => this.props.onNext(4, option, index)}>Choose</Button>
              </Col>
            </Row>
          ))}

          {this.props.type !== 'event' && <Button onClick={() => this.props.onBack()}>Back</Button>}
        </div>
      </div>
    );
  }
}

class Step4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { option, priceOption } = this.props;
    return (
      <div className="ChoosePlanEmployer">
        <h6 className="ChoosePlanEmployer__Title">{priceOption >= 0 ? `${options[priceOption].title + '-' + options[priceOption].price}` : 'Plan Payment'}</h6>
        <p className="ChoosePlanEmployer__Description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an
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
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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
                    <Button className="checkout_btn" onClick={() => this.props.onNext(5, option)} style={{ marginTop: 20 }}>
                      Checkout
                    </Button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          {<button onClick={() => (this.props.isSignup ? this.props.onNext(1, option) : this.props.onBack())}>Back</button>}
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

class ChoosePlanEmployer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      option: '',
      step: props.step || 1
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  onNext = (step, option, priceOption) => {
    this.setState({ step, option, priceOption });
  };

  onBack = step => {
    if (this.props.onBack && step === 0) {
      this.props.onBack();
    } else {
      this.setState({ step });
    }
  };
  render() {
    return (
      <div className="ChoosePlanEmployerContent">
        {this.state.step === 1 && <Step1 onNext={this.onNext} isSignup={this.props.isSignup} type={this.props.type} onBack={() => this.onBack(0)} isPlan={this.props.isPlan} />}
        {this.state.step === 2 && <Step2 onNext={this.onNext} isSignup={this.props.isSignup} option={this.state.option} onBack={() => this.onBack(1)} type={this.props.type} />}
        {this.state.step === 3 && (
          <Step3 onNext={this.onNext} isSignup={this.props.isSignup} option={this.state.option} onBack={() => this.setState({ step: 2 })} type={this.props.type} />
        )}
        {this.state.step === 4 && (
          <Step4
            onNext={this.onNext}
            isSignup={this.props.isSignup}
            option={this.props.option ? this.props.option : this.state.option}
            priceOption={this.state.priceOption}
            onBack={() => {
              if (this.props.type === 'job') this.setState({ step: 3 });
              else this.setState({ step: 1 });
            }}
            type={this.props.type}
          />
        )}
        {this.state.step === 5 && <Step5 onNext={this.onNext} option={this.state.option} onBack={() => this.setState({ step: 4 })} onOk={this.props.onOk} />}
      </div>
    );
  }
}

export default ChoosePlanEmployer;

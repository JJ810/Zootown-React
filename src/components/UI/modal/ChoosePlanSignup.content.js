import React from 'react';
import { Row, Col } from 'antd';

class ChoosePlanSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // handleSubmit = e => {
  //     e.preventDefault();
  //     this.props.form.validateFields((err, values) => {
  //         if (!err) {
  //             console.log("Received values of form: ", values);
  //         }
  //     });
  // };

  render() {
    return (
      <div className="ChoosePlanSignupContent">
        <div className="ChoosePlanSignupContent__Header">
          <h3>CHOOSE YOUR PLAN</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
        <div className="ChoosePlanSignupContent__Content">
          <Row style={{ maxWidth: '70%' }}>
            <Col className="basic_membeship" span={12}>
              <div className="content">
                {/* <Icon type="pie-chart" theme="filled" /> */}
                <img alt="basic" src="assets/icons/basic-membership.png" />
                <h2>Basic membership</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <h2 className="price">£250</h2>
              </div>
              <button onClick={() => this.props.onChoosePlan('cjxad0ldaqnsz0b42m5qa0zox')}>Choose Plan</button>
            </Col>
            <Col className="premium_package" span={12}>
              <div className="content">
                {/* <Icon type="wallet" theme="filled" style={{ color: '#FFFFFF' }} /> */}
                <img alt="premium" src="assets/icons/premium.png" />
                <h2>Talent Premium Package</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <h2 className="price">£350</h2>
              </div>
              <button onClick={() => this.props.onChoosePlan('cjxad0mel1j4x0b12l1i3pawh')}>Choose Plan</button>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default ChoosePlanSignup;

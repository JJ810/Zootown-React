import React from 'react';
import { Step, Input, Button } from '../../../components/UI';
import { Form, Checkbox, Input as AntdInput, Radio } from 'antd';
import Modal from './Modal';
import ChoosePlanEmployer from './ChoosePlanEmployer.content';

const AntdTextArea = AntdInput.TextArea;
class Step0 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { step: 0, option: 0 };
  }
  render() {
    return (
      <div className="ChoosePlanEmployer">
        <h6 className="ChoosePlanEmployer__Title">CHOOSE YOUR PLAN</h6>
        <p className="ChoosePlanEmployer__Description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
        </p>
        <div className="ChoosePlanEmployer__Plans">
          <div className="ChoosePlanEmployer__Plans__Item ">
            <div className="ChoosePlanEmployer__Plans__Item__Content ChoosePlanEmployer__Plans__Poster">
              <img className="ChoosePlanEmployer__Plans__Item--Img--Medium" alt="basic" src="assets/icons/basic-membership.png" />
              <p className="ChoosePlanEmployer__Plans__Item--Title">Job/Project Poster</p>
              <p className="ChoosePlanEmployer__Plans__Item--Description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
              </p>
              <p className="ChoosePlanEmployer__Plans__Item--Price">£275 per cost</p>
            </div>
            <Button onClick={() => this.props.onNext(1, 1)} className="ChoosePlanEmployer__Plans__Item__Button">
              Choose plan
            </Button>
          </div>
          <div className="ChoosePlanEmployer__Plans__Item ">
            <div className="ChoosePlanEmployer__Plans__Item__Content ChoosePlanEmployer__Plans__Talent">
              <img className="ChoosePlanEmployer__Plans__Item--Img" alt="premium" src="assets/icons/premium.png" />
              <p className="ChoosePlanEmployer__Plans__Item--Title">Talent Premium Package</p>
              <p className="ChoosePlanEmployer__Plans__Item--Description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
              </p>
              <p className="ChoosePlanEmployer__Plans__Item--Price">£00 P/M</p>
            </div>
            <Button onClick={() => this.props.onNext(1, 2)} className="ChoosePlanEmployer__Plans__Item__Button">
              Choose plan
            </Button>
          </div>
          <div className="ChoosePlanEmployer__Plans__Item ">
            <div className="ChoosePlanEmployer__Plans__Item__Content ChoosePlanEmployer__Plans__Recruiter">
              <img className="ChoosePlanEmployer__Plans__Item--Img" alt="premium" src="assets/icons/bonus.svg" />
              <p className="ChoosePlanEmployer__Plans__Item--Title">Rercuiter Premium Package</p>
              <p className="ChoosePlanEmployer__Plans__Item--Description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
              </p>
              <p className="ChoosePlanEmployer__Plans__Item--Price">£00 P/M</p>
            </div>
            <Button onClick={() => this.props.onNext(1, 3)} className="ChoosePlanEmployer__Plans__Item__Button">
              Choose plan
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
class Step1 extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onClickNext(2, values);
      }
    });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    let { data } = this.props;
    console.log('dataatatatatata', data);
    return (
      <Form onSubmit={this.handleSubmit} className="SignupContent__Form login-form">
        <div className="text-center">
          I am a:
          <Form.Item>
            <Radio.Group name="radiogroup" defaultValue={0} onChange={this.onChangeOption}>
              <Radio value={0}>Education Institution</Radio>
              <Radio value={1}>Apprenticeship Body</Radio>
              <Radio value={2}>Employer</Radio>
              <Radio value={3}>Recruiter</Radio>
            </Radio.Group>
          </Form.Item>
        </div>
        <div className="SignupContent__Form__Head">
          <div className="SignupContent__Form__Head--Col">
            <Form.Item>
              {getFieldDecorator('first_name', {
                initialValue: data.first_name,
                rules: [{ required: true, message: 'Please input your first name' }]
              })(<Input type="text" placeholder="first name" label="first_name" />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('last_name', {
                initialValue: data.last_name,
                rules: [{ required: true, message: 'Please input your last name' }]
              })(<Input type="text" placeholder="last name" label="last_name" />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                initialValue: data.password,
                rules: [{ required: true, message: 'Please input your password' }]
              })(<Input type="password" placeholder="password" label="password" />)}
            </Form.Item>
          </div>
          <div className="SignupContent__Form__Head--Col">
            <Form.Item>
              {getFieldDecorator('company_name', {
                initialValue: data.company_name,
                rules: [{ required: true, message: 'Please input company name' }]
              })(<Input type="text" placeholder="company name" label="company name" />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('company_number', {
                initialValue: data.company_number,
                rules: [
                  {
                    required: true,
                    message: 'Please input your company number'
                  }
                ]
              })(<Input type="text" placeholder="company number" label="company number" />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('repassword', {
                initialValue: data.repassword,
                rules: [{ required: true, message: 'Please input your repassword' }, { validator: this.compareToFirstPassword }]
              })(<Input type="password" placeholder="repassword" label="confirm password" />)}
            </Form.Item>
          </div>
          <div className="SignupContent__Form__Head--Col">
            <Form.Item>
              {getFieldDecorator('email', {
                initialValue: data.email,
                rules: [{ required: true, message: 'Please input your email' }]
              })(<Input type="email" placeholder="email" label="email address" />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('phone_number', {
                initialValue: data.phone_number,
                rules: [{ required: true, message: 'Please input your phone number' }]
              })(<Input type="number" placeholder="phone number" label="phone number" />)}
            </Form.Item>
          </div>
        </div>
        <div className="SignupContent__Form__Body--Row text-center pb-4">
          <Checkbox onChange={this.onChange}>I am a charity / Non profit organization</Checkbox>
        </div>
        <div className="SignupContent__Form__Footer">
          <Button type="primary" htmlType="submit">
            Next Step
          </Button>
        </div>
      </Form>
    );
  }
}

class Step2 extends React.Component {
  state = {};
  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.avatar) {
      this.setState({ avatarMessage: 'Please select profile photo.' });
      return;
    }
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onClickNext(3, values);
      }
    });
  };
  onChangeAvatar = e => {
    var file = e.target.files[0];
    let that = this;
    var reader = new FileReader();
    reader.onloadend = function() {
      that.setState({ avatar: file, avatarThumb: reader.result });
    };
    reader.readAsDataURL(file);
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    let { data } = this.props;
    return (
      <Form onSubmit={this.handleSubmit} className="SignupContent__Form login-form">
        <div className="SignupContent__Form__Body">
          <div className="SignupContent__Form__Body--Row SignupContent__Form__Body--Flex">
            <div className="SignupContent__Profile__Left">
              <Form.Item>
                {getFieldDecorator('company_address', {
                  initialValue: data.company_address,
                  rules: [
                    {
                      required: true,
                      message: 'Please input your company address'
                    }
                  ]
                })(<Input type="text" placeholder="company address" label="company address" />)}
              </Form.Item>
              {/* <Form.Item>
                {getFieldDecorator('company_number', {
                  initialValue: data.company_number,
                  rules: [
                    {
                      required: true,
                      message: 'Please input your company number'
                    }
                  ]
                })(<Input type="text" placeholder="company number" label="company number" />)}
              </Form.Item> */}
            </div>
            <div className="SignupContent__Profile__Right">
              <p className="form-title">profile photo</p>
              <label htmlFor="upload-avatar">
                {this.state.avatar ? (
                  <img className="profile-photo" src={this.state.avatarThumb} alt="avatar" />
                ) : (
                  <div className="profile-photo" htmlFor="upload-avatar">
                    <img alt="" className="form-upload-item-icon" src="assets/images/document.png" />
                    <p>Click here to upload photo</p>
                  </div>
                )}
              </label>
              {this.state.avatarMessage && <p className="warning">{this.state.avatarMessage}</p>}
              <input onChange={this.onChangeAvatar} name="upload-avatar" style={{ display: 'none' }} type="file" id="upload-avatar" />
            </div>
          </div>

          <div className="SignupContent__Form__Body--Row SignupContent__Form__Body--Flex pt-4">
            <div className="SignupContent__Profile__Left">
              <p className="form-title">About your company</p>
              <Form.Item>
                {getFieldDecorator('aboutUs', {
                  initialValue: data.aboutUs,
                  rules: [{ required: true, message: 'Please input your first name' }]
                })(<AntdTextArea rows={4} />)}
              </Form.Item>
            </div>
            <div className="SignupContent__Profile__Right">
              <p className="form-title">why have chosen to use us</p>
              <Form.Item>
                {getFieldDecorator('whyus', {
                  initialValue: data.whyus,
                  rules: [{ required: true, message: 'Please input your first name' }]
                })(<AntdTextArea rows={4} />)}
              </Form.Item>
            </div>
          </div>
          <div className="SignupContent__Form__Body--Row">
            <div className="SignupContent__About--How">
              <p className="form-title">where did you hear about us</p>
              <Form.Item>
                {getFieldDecorator('hearUs', {
                  initialValue: data.hearUs,
                  rules: [{ required: true, message: 'Please input your first name' }]
                })(<AntdTextArea rows={4} />)}
              </Form.Item>
            </div>
          </div>
          <div className="SignupContent__Form__Body--Row text-center">
            <Checkbox onChange={this.onChange}>Term and conditions</Checkbox>
          </div>

          <div className="SignupContent__Form__Body--Row text-center SignupContent__Submit">
            {/* <Modal className="ModalChoosePlan" content={<ChoosePlanEmployer />}> */}
            <Button type="primary" htmlType="submit">
              Next Step
            </Button>
            {/* </Modal> */}
          </div>
        </div>
      </Form>
    );
  }
}

class SignupEmployer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      stepDone: 1,
      formData: {},
      data: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.step !== nextProps.step) {
      this.setState({ step: nextProps.step });
    }
  }

  onClickNext = (step, values) => {
    this.setState(
      {
        step,
        stepDone: step > this.state.stepDone ? step : this.state.stepDone,
        formData: { ...this.state.formData, ...values }
      },
      () => {
        if (step === 3) {
          console.log('data', this.state.formData);
        }
      }
    );
  };

  onClickStep = step => {
    this.setState({ step: step + 1 });
  };

  render() {
    const FormStep3 = Form.create({ name: 'normal_login' })(ChoosePlanEmployer);
    const FormStep1 = Form.create({ name: 'normal_login' })(Step1);
    const FormStep2 = Form.create({ name: 'normal_login' })(Step2);
    return (
      <div className="SignupContent">
        {this.state.step !== 3 && (
          <div>
            <div className="SignupContent__Header">
              <h3>sign up</h3>
              <span>you're almost there</span>
            </div>
            <Step active={this.state.step - 1} numStepDone={this.state.stepDone} steps={['First Stage', 'Final Stage']} onClickStep={this.onClickStep} />
          </div>
        )}

        {this.state.step === 1 && <FormStep1 data={this.state.formData} onClickNext={this.onClickNext} />}
        {this.state.step === 2 && <FormStep2 data={this.state.formData} onClickNext={this.onClickNext} />}
        {this.state.step === 3 && (
          <FormStep3
            data={this.state.formData}
            step={1}
            isSignup={true}
            isPlan={this.props.isPlan}
            onBack={() => {
              this.setState({ step: 2 });
            }}
            onChoosePlan={() => this.onClickNext(4)}
          />
        )}
      </div>
    );
  }
}

export default SignupEmployer;

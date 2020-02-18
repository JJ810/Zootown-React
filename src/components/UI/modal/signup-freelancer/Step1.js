import React from "react";
import { Input, Button } from "../../../../components/UI";
import {
  Form,
} from "antd";

class Step1 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      confirmDirty: false,
      autoCompleteResult: [],
    };
  }
 
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('value step1', values);
        this.props.onClickNext(2, values);
      }
    });
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['repassword'], { force: true });
    }
    callback();
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    
    let { data } = this.props;
    return (
      <Form
        onSubmit={this.handleSubmit}
        className="SignupContent__Form login-form"
      >
        <div className="SignupContent__Form__Head">
          <div className="SignupContent__Form__Head--Col">
            <Form.Item>
              {getFieldDecorator("first_name", {
                initialValue: data.first_name,
                rules: [
                  { required: true, message: "Please input your first name" },
                ]
              })(
                <Input
                  type="text"
                  placeholder="Input Your Text Here"
                  label="first name"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("last_name", {
                initialValue: data.last_name,
                rules: [
                  { required: true, message: "Please input your last name" }
                ]
              })(
                <Input
                  type="text"
                  placeholder="Input Your Text Here"
                  label="last name"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                initialValue: data.password,
                rules: [
                  { required: true, message: "Please input your password" },
                  { validator: this.validateToNextPassword }
                ]
              })(
                <Input
                  type="password"
                  placeholder="Input Your Text Here"
                  label="password"
                  onBlur={this.handleConfirmBlur}
                />
              )}
            </Form.Item>
          </div>
          <div className="SignupContent__Form__Head--Col">
            <Form.Item>
              {getFieldDecorator("repassword", {
                initialValue: data.repassword,
                rules: [
                  { required: true, message: "Please confirm your password" },
                  { validator: this.compareToFirstPassword }
                ]
              })(
                <Input
                  type="password"
                  placeholder="Input Your Text Here"
                  label="confirm password"
                  onBlur={this.handleConfirmBlur}
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("mobile_number", {
                initialValue: data.mobile_number,
                rules: [
                  { required: true, message: "Please input your mobile number" }
                ]
              })(
                <Input
                  type="number"
                  min="0"
                  placeholder="Input Your Text Here"
                  label="mobile number"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("permanent_home_address", {
                initialValue: data.permanent_home_address,
                rules: [
                  {
                    required: true,
                    message: "Please input your permanent home address"
                  }
                ]
              })(
                <Input
                  type="text"
                  placeholder="Input Your Text Here"
                  label="permanent home address"
                />
              )}
            </Form.Item>
          </div>
          <div className="SignupContent__Form__Head--Col">
            <Form.Item>
              {getFieldDecorator("email", {
                initialValue: data.email,
                rules: [{ required: true, message: "Please input your email" }]
              })(
                <Input
                  type="email"
                  placeholder="Input Your Text Here"
                  label="email address"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("borough", {
                initialValue: data.borough,
                rules: [
                  {
                    required: true,
                    message: "Please input your borough"
                  }
                ]
              })(
                <Input
                  type="text"
                  placeholder="Input Your Text Here"
                  label="WHAT BOROUGH DO YOU LIVE IN?"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("rthnic_origin", {
                initialValue: data.rthnic_origin,
                rules: [
                  {
                    required: true,
                    message: "Please input your rthnic origin"
                  }
                ]
              })(
                <Input
                  type="text"
                  placeholder="Input Your Text Here"
                  label="RTHNIC ORIGIN"
                />
              )}
            </Form.Item>
          </div>
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

export default Step1;

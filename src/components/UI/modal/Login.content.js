import React from "react";
import { Input, Button } from "../../../components/UI";
import { Form, message } from "antd";
import { _url } from "../../../config/utils";
import { Modal, SignupFreelancer, ForgotPasswordContent } from "./index";
import { login, LOGIN } from "../../../actions/auth";
import { connect } from "react-redux";
import { Mutation } from "react-apollo";
import { withRouter } from "react-router";

class LoginContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onLogin = (login, data) => {
    login({ variables: { email: data.email, password: data.password } });
  };

  onComplete = data => {
    message.success('Login successful!');
    localStorage.setItem('token', data.login.token)
    this.props.dispatch(login(data));
    this.props.history.push('/');
  };

  render() {
    return (
      <Mutation mutation={LOGIN} onCompleted={this.onComplete} onError={()=>message.error('Login fail, please try again!')}>
        {(login, { loading, data }) => (
          <div className="LoginContent">
            <div className="LoginContent__Header">
              <h3>log in</h3>
              <span>you're almost there</span>
            </div>
            <WrappedNormalLoginForm onSubmit={e => this.onLogin(login, e)} loading={loading}/>
            <div className="LoginContent__Footer">
              <Modal
                content={<ForgotPasswordContent />}
                className="ModalForgotPassword"
              >
                <h5>Forgot password?</h5>
              </Modal>
              <p>
                Don’t have Account? Please{" "}
                <Modal content={<SignupFreelancer />} className="ModalSignup">
                  <span>Sign up</span>
                </Modal>
              </p>
              <h5>Or Use Social Networks</h5>
              <div className="social">
                <img
                  alt="google"
                  onClick={() => this.goToLink("https://google.com/")}
                  src={_url("assets/icons/google-round.png")}
                />
                <img
                  alt="linkedin"
                  onClick={() => this.goToLink("https://linkedin.com/")}
                  src={_url("assets/icons/linkedin-round.png")}
                />
              </div>
            </div>
          </div>
        )}
      </Mutation>
    );
  }
}

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onSubmit(values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form
        onSubmit={this.handleSubmit}
        className="LoginContent__Form login-form"
      >
        <div className="LoginContent__Form__Head">
          <div className="LoginContent__Form__Head--Col">
            <Form.Item>
              {getFieldDecorator("email", {
                rules: [{ required: true, message: "Please input your email" }]
              })(
                <Input
                  type="email"
                  placeholder="Input Your Text Here"
                  label="email"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [
                  { required: true, message: "Please input your password" }
                ]
              })(
                <Input
                  type="password"
                  placeholder="Input Your Text Here"
                  label="password"
                />
              )}
            </Form.Item>
          </div>
        </div>
        <div className="LoginContent__Form__Footer">
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            background="#FED008"
            loading={this.props.loading}
          >
            Log in
          </Button>
        </div>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  NormalLoginForm
);

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};
export default withRouter(connect(
  null,
  mapDispatchToProps
)(LoginContent));

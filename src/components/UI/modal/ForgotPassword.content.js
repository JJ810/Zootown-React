import React from "react";
import { Input, Button } from "../../../components/UI";
import { Form } from "antd";

class ForgotPasswordContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);
            }
        });
    };

    render() {
        return (
            <div className="ForgotPasswordContent">
                <div className="ForgotPasswordContent__Header">
                    <h3>forgot your password?</h3>
                    <span>Recover your password quickly</span>
                </div>
                <WrappedNormalForgotPasswordForm />
            </div>
        );
    }
}

class NormalForgotPasswordForm extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form
                onSubmit={this.handleSubmit}
                className="ForgotPasswordContent__Form ForgotPassword-form"
            >
                <div className="ForgotPasswordContent__Form__Head">
                    <div className="ForgotPasswordContent__Form__Head--Col">
                        <Form.Item>
                            {getFieldDecorator("email", {
                                rules: [
                                    { required: true, message: "Please input your email" }
                                ]
                            })(
                                <Input
                                    type="email"
                                    placeholder="email"
                                    label="email"
                                />
                            )}
                        </Form.Item>
                    </div>
                </div>
                <div className="ForgotPasswordContent__Form__Footer">
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="ForgotPassword-form-button"
                        background="#FED008"
                        width={150}
                    >
                        Recover Password
          </Button>
                </div>
            </Form>
        );
    }
}

const WrappedNormalForgotPasswordForm = Form.create({ name: "normal_ForgotPassword" })(
    NormalForgotPasswordForm
);

export default ForgotPasswordContent;

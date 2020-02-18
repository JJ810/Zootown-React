import React from "react";
import { Input, Button } from "../../../../components/UI";
import Modal from "../Modal";
import ChoosePlanSignup from "../ChoosePlanSignup.content";
import { Form, Radio, Checkbox, Input as AntdInput } from "antd";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Dropzone from "react-dropzone";
import { graphql } from "react-apollo";
import { Upload, Icon, message } from "antd";
import UploadA from "./UploadA.jsx";
const UPLOAD_FILE = gql`
  mutation($file: Upload!) {
    uploadCvFile(file: $file) {
      id
      filename
      mimetype
      encoding
      url
    }
  }
`;

const handleChange = async (event, mutation) => {
  const {
    target: {
      validity,
      files: [file]
    }
  } = event;

  if (validity.valid) {
    console.log("file1", file);
    const {
      data: { uploadSingleFile }
    } = await mutation({
      mutation: UPLOAD_FILE,
      variables: { file },
      context: { useMultipart: true },
      fetchPolicy: "no-cache"
    });
  }
};

const UploadFile = ({ onChange, ...rest }) => {
  return (
    <Mutation
      mutation={UPLOAD_FILE}
      context={{ useMultipart: true }}
      fetchPolicy="no-cache"
    >
      {(mutation, { loading }) => (
        <input
          type="file"
          required
          onChange={event => handleChange(event, mutation)}
        />
      )}
    </Mutation>
  );
};

const UploadFile2 = () => (
  <Mutation mutation={UPLOAD_FILE} context={{ useMultipart: true }}>
    {mutate => (
      <input
        type="file"
        required
        onChange={({
          target: {
            validity,
            files: [file]
          }
        }) =>
          validity.valid &&
          mutate({
            context: { useMultipart: true },
            body: { file, file: file },
            variables: { file, body: file }
          })
        }
      />
    )}
  </Mutation>
);
class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Mutation
        mutation={UPLOAD_FILE}
        fetchPolicy="no-cache"
        context={{ useMultipart: true }}
      >
        {(mutation, { loading }) => (
          <Dropzone
            onDrop={acceptedFiles =>
              mutation({
                context: { useMultipart: true },
                params: {},
                body: { acceptedFiles, file: acceptedFiles },
                variables: {
                  file: acceptedFiles,
                  body: acceptedFiles,
                  params: {}
                }
              })
            }
          >
            {({ getRootProps, getInputProps }) => (
              <section>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p>Drag 'n' drop some files here, or click to select files</p>
                </div>
              </section>
            )}
          </Dropzone>
        )}
      </Mutation>
    );
  }
}
const AntdTextArea = AntdInput.TextArea;

class Step3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onClickNext(4, values);
      }
    });
  };

  onChange = ({
    target: {
      validity,
      files: [file]
    }
  }) => {
    this.props.mutate({
      mutation: UPLOAD_FILE,
      context: {
        useMultipart: true
      },
      body: {},
      variables: { file }
    });
  };

  handleChange = info => {
    if (info.file.status === "uploading") {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      this.getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false
        })
      );
    }
  };

  getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  beforeUpload = file => {
    const isImage = file.type === "image/jpeg" || file.type === "image/png";
    if (!isImage) {
      message.error("You can only upload JPG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    if (isImage && isLt2M) {
      this.props.mutate({
        mutation: UPLOAD_FILE,
        context: {
          useMultipart: true
        },
        body: { file },
        variables: { file, body: file }
      });
    }
    return isImage && isLt2M;
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    let { data } = this.props;
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? "loading" : "plus"} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { imageUrl } = this.state;
    return (
      <Form
        onSubmit={this.handleSubmit}
        className="SignupContent__Form login-form"
      >
        <div className="SignupContent__Form__Body">
          <div className="SignupContent__Form__Body--Row SignupContent__Form__Body--Flex">
            <div className="SignupContent__About--Hobbies--Left">
              <Form.Item>
                {getFieldDecorator("hobbies", {
                  initialValue: data.hobbies,
                  rules: [
                    { required: true, message: "Please input your hobbies" }
                  ]
                })(
                  <Input
                    type="text"
                    placeholder="Input Your Text Here"
                    label="hobbies"
                  />
                )}
              </Form.Item>
            </div>
            <div className="SignupContent__About--Hobbies--Right">
              <div className="button-action">
                <span className="left">{"<"}</span>
                <span className="right">{">"}</span>
              </div>
              <div className="hobbies-list">
                <div className="hobbies-list-wrap">
                  <div className="hobbies-item">Sky Jumping</div>
                  <div className="hobbies-item">Sky Jumping</div>
                  <div className="hobbies-item">Sky rdgdfh fgdgd Jumping</div>
                  <div className="hobbies-item">Sky Jumping</div>
                </div>
              </div>
            </div>
          </div>
          <div className="SignupContent__Form__Body--Row SignupContent__Form__Body--Flex">
            <div className="SignupContent__About--Anylinks--Left">
              <Form.Item>
                {getFieldDecorator("first_name", {
                  initialValue: data.first_name,
                  rules: [{ required: true, message: "Please input your link" }]
                })(
                  <Input
                    type="text"
                    placeholder="Input Your Text Here"
                    label="any link to your work?"
                  />
                )}
              </Form.Item>
            </div>
            <div className="SignupContent__About--Anylinks--Right">
              <div className="button-action">
                <span className="left" />
                <span className="right" />
              </div>
              <div className="anylinks-list">
                <div className="anylinks-item">Sky Jumping</div>
                <div className="anylinks-item">Sky Jumping</div>
                <div className="anylinks-item">Sky Jumping</div>
                <div className="anylinks-item">Sky Jumping</div>
              </div>
            </div>
          </div>
          <div className="SignupContent__Form__Body--Row">
            <div className="SignupContent__About--Why">
              <p className="form-title">
                why do you want to sign up to zoo town?
              </p>
              <Form.Item>
                {getFieldDecorator("first_name", {
                  initialValue: data.first_name,
                  rules: [
                    { required: true, message: "Please input your first name" }
                  ]
                })(<AntdTextArea rows={4} />)}
              </Form.Item>
            </div>
          </div>
          <div className="SignupContent__Form__Body--Row SignupContent__Form__Body--Flex">
            <div className="SignupContent__Profile__Left">
              <p className="form-title">
                upload a valid student confirmation letter
              </p>
              <p className="form-hint">
                (Please ensure your university stamps and dates this letter)
              </p>
              <div className="form-upload">
                <span className="form-upload-btn">+</span>
                <span>Upload File</span>
              </div>
              <div className="form-upload-list">
                <div className="form-upload-item">
                  <img
                    alt=""
                    className="form-upload-item-icon"
                    src="assets/images/document.png"
                  />
                  <span className="form-upload-item-name">
                    GIT Release Note.pdf
                  </span>
                  <span className="form-upload-item-delete">X</span>
                </div>
                <div className="form-upload-item">
                  <img
                    alt=""
                    className="form-upload-item-icon"
                    src="assets/images/document.png"
                  />
                  <span className="form-upload-item-name">
                    GIT Release Note.pdf
                  </span>
                  <span className="form-upload-item-delete">X</span>
                </div>
                <div className="form-upload-item">
                  <img
                    alt=""
                    className="form-upload-item-icon"
                    src="assets/images/document.png"
                  />
                  <span className="form-upload-item-name">
                    GIT Release Note.pdf
                  </span>
                  <span className="form-upload-item-delete">X</span>
                </div>
              </div>
            </div>
            <div className="SignupContent__Profile__Right">
              <p className="form-title">profile photo</p>
              <div className="profile-photo">
                <img
                  alt=""
                  className="form-upload-item-icon"
                  src="assets/images/document.png"
                />
                <p>Click here to upload photo</p>
              </div>
            </div>
          </div>
          <div className="SignupContent__Form__Body--Row">
            <div className="SignupContent__About--How">
              <p className="form-title">How did you hear about us?</p>
              <Form.Item>
                {getFieldDecorator("first_name", {
                  initialValue: data.first_name,
                  rules: [
                    { required: true, message: "Please input your first name" }
                  ]
                })(<AntdTextArea rows={4} />)}
              </Form.Item>
            </div>
          </div>
          <div className="SignupContent__Form__Body--Row SignupContent__About__Footer">
            <div className="resident">
              <p className="form-title">are you a uk resident?</p>
              <Form.Item>
                <Radio.Group
                  name="radiogroup"
                  defaultValue={1}
                  onChange={this.onChangeOption}
                >
                  <Radio value={1}>Yes</Radio>
                  <Radio value={2}>No</Radio>
                </Radio.Group>
              </Form.Item>
            </div>
            <div className="legal">
              <p className="form-title">
                have the legal right to work in the uk?
              </p>
              <Form.Item>
                <Radio.Group
                  name="radiogroup"
                  defaultValue={1}
                  onChange={this.onChangeOption}
                >
                  <Radio value={1}>Yes</Radio>
                  <Radio value={2}>No</Radio>
                </Radio.Group>
              </Form.Item>
            </div>
          </div>
          <div className="SignupContent__Form__Body--Row text-center">
            <Checkbox onChange={this.onChange}>Term and conditions</Checkbox>
          </div>
          <div className="SignupContent__Form__Body--Row text-center SignupContent__Submit">
            <Modal content={<ChoosePlanSignup />}>
              <Button type="primary" htmlType="submit">
                Next Step
              </Button>
            </Modal>
          </div>
          <UploadFile />
          <hr />
          <Test />
          <hr />
          <UploadFile2 />
          <hr />
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            beforeUpload={this.beforeUpload}
            onChange={this.handleChange}
          >
            {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
          </Upload>
          <hr />
          <input multiple type="file" name="file" onChange={this.onChange} />\
          <hr />
          <div className="SignupContent__Form__Body--Row text-center">
            <span>
              <b>Back</b>
            </span>
            <UploadA />
          </div>
        </div>
      </Form>
    );
  }
}

const Step3WithGraph = graphql(UPLOAD_FILE)(Step3);
export default Step3WithGraph;

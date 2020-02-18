import React from 'react';
import { Input, Button } from '../../../../components/UI';
import { Form, Radio, Checkbox, Input as AntdInput, Modal as AntdModal, DatePicker } from 'antd';
import uuid from 'uuid';
import ChoosePlanSignup from '../ChoosePlanSignup.content';
import moment from 'moment';
const AntdTextArea = AntdInput.TextArea;

class Step3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hobbies: [],
      links: [],
      files: [],
      skills: [],
      work_in_uk: true,
      uk_resident: true,
      isShowChoosePlanModal: false,
      form: null
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({ isShowChoosePlanModal: true, form: values });
      }
    });
  };
  handleKeyDown = (e, type) => {
    if (e.key === 'Enter') {
      this.setState({
        [type]: [...this.state[type], this['_' + type].props.value]
      });
    }
  };

  onRemoveItem = (item, type) => {
    let arr = this.state[type].filter(tmp => {
      return item !== tmp;
    });
    this.setState({ [type]: arr });
  };

  onUploadFile = (e, b) => {
    this.setState({ files: [...this.state.files, ...e.target.files] });
  };

  onRemoveFile = name => {
    let arr = this.state.files.filter(tmp => {
      return name !== tmp.name;
    });
    this.setState({ files: arr });
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

  onChangeOption = (e, type) => {
    this.setState({ [type]: e.target.value });
  };

  checkTerm = (rule, value, callback) => {
    if (!value) {
      callback('Please read and accept terms and conditions');
    } else {
      callback();
    }
  };

  onChoosePlan = plan => {
    this.setState({ plan, isShowChoosePlan: true }, () => {
      if (plan === 'cjxad0ldaqnsz0b42m5qa0zox') this.props.onClickNext(5, this.state);
      else this.props.onClickNext(4, this.state);
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    let { data } = this.props;
    console.log('Daaatatatat', data);
    return (
      <Form onSubmit={this.handleSubmit} className="SignupContent__Form login-form">
        <div className="SignupContent__Form__Body">
          <div className="SignupContent__Form__Body--Row SignupContent__Form__Body--Flex">
            <div className="SignupContent__About--Hobbies--Left">
              <Form.Item key={this.state.hobbies.length}>
                {getFieldDecorator('hobbies', {
                  initialValue: '',
                  rules: [{ message: 'Please input your hobbies' }]
                })(<Input type="text" placeholder="Input Your Text Here" label="hobbies" onKeyDown={e => this.handleKeyDown(e, 'hobbies')} ref={ref => (this._hobbies = ref)} />)}
              </Form.Item>
            </div>
            <div className="SignupContent__About--Hobbies--Right">
              <div className="button-action">
                <span className="left">{'<'}</span>
                <span className="right">{'>'}</span>
              </div>
              <div className="hobbies-list">
                <div className="hobbies-list-wrap">
                  {this.state.hobbies.map(item => {
                    return (
                      <div key={uuid()} className="hobbies-item" onClick={() => this.onRemoveItem(item, 'hobbies')}>
                        {item}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="SignupContent__Form__Body--Row SignupContent__Form__Body--Flex">
            <div className="SignupContent__About--Hobbies--Left">
              <Form.Item key={this.state.skills.length}>
                {getFieldDecorator('skills', {
                  initialValue: '',
                  rules: [{ message: 'Please input your skills' }]
                })(<Input type="text" placeholder="Input Your Text Here" label="skills" onKeyDown={e => this.handleKeyDown(e, 'skills')} ref={ref => (this._skills = ref)} />)}
              </Form.Item>
            </div>
            <div className="SignupContent__About--Hobbies--Right">
              <div className="button-action">
                <span className="left">{'<'}</span>
                <span className="right">{'>'}</span>
              </div>
              <div className="hobbies-list">
                <div className="hobbies-list-wrap">
                  {this.state.skills.map(item => {
                    return (
                      <div key={uuid()} className="hobbies-item" onClick={() => this.onRemoveItem(item, 'skills')}>
                        {item}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="SignupContent__Form__Body--Row SignupContent__Form__Body--Flex">
            <div className="SignupContent__About--Anylinks--Left">
              <Form.Item key={this.state.links.length}>
                {getFieldDecorator('links', {
                  initialValue: '',
                  rules: [{ required: false, message: 'Please input your links' }]
                })(<Input type="text" placeholder="Input Your Text Here" label="links" onKeyDown={e => this.handleKeyDown(e, 'links')} ref={ref => (this._links = ref)} />)}
              </Form.Item>
            </div>
            <div className="SignupContent__About--Anylinks--Right">
              <div className="button-action">
                <span className="left" />
                <span className="right" />
              </div>
              <div className="anylinks-list">
                {this.state.links.map(item => {
                  return (
                    <div key={uuid()} className="anylinks-item" onClick={() => this.onRemoveItem(item, 'links')}>
                      {item}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="SignupContent__Form__Body--Row">
            <div className="SignupContent__About--Why">
              <p className="form-title">why do you want to sign up to zoo town?</p>
              <Form.Item>
                {getFieldDecorator('why', {
                  initialValue: data.form ? data.form.why : '',
                  rules: [{ required: true, message: 'Please input your reason' }]
                })(<AntdTextArea rows={4} />)}
              </Form.Item>
            </div>
          </div>

          <div className="SignupContent__Form__Body--Row SignupContent__Form__Body--Flex">
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
              <input onChange={this.onChangeAvatar} name="upload-avatar" style={{ display: 'none' }} type="file" id="upload-avatar" />
            </div>
            <div className="SignupContent__Profile__Left">
              <p className="form-title">your work</p>
              <p className="form-hint">(Upload any work you would like to add to your profile)</p>
              <div className="form-upload">
                <label htmlFor="upload-letter">
                  <span className="form-upload-btn">+</span>
                  <span>Upload File</span>
                </label>
                <input type="file" multiple="multiple" name="upload-letter" id="upload-letter" style={{ display: 'none' }} onChange={this.onUploadFile} />
              </div>
              <div className="form-upload-list">
                {this.state.files.map(item => {
                  return (
                    <div className="form-upload-item" key={uuid()}>
                      <img alt="" className="form-upload-item-icon" src="assets/images/document.png" />
                      <span className="form-upload-item-name">{item.name}</span>
                      <span className="form-upload-item-delete" onClick={() => this.onRemoveFile(item.name)}>
                        X
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="SignupContent__Form__Body--Row">
            <div className="SignupContent__About--How">
              <p className="form-title">How did you hear about us?</p>
              <Form.Item>
                {getFieldDecorator('how', {
                  initialValue: data.form ? data.form.how : '',
                  rules: [{ required: true, message: 'Please input your anwser' }]
                })(<AntdTextArea rows={4} />)}
              </Form.Item>
            </div>
          </div>

          <div className="SignupContent__Form__Body--Row SignupContent__About__Footer">
            <div className="resident">
              <p className="form-title">are you a uk resident?</p>
              <Form.Item>
                <Radio.Group name="uk_resident" defaultValue={data.uk_resident} onChange={e => this.onChangeOption(e, 'uk_resident')}>
                  <Radio value={true}>Yes</Radio>
                  <Radio value={false}>No</Radio>
                </Radio.Group>
              </Form.Item>
            </div>
            <div className="legal">
              <p className="form-title">have the legal right to work in the uk?</p>
              <Form.Item>
                <Radio.Group name="work_in_uk" defaultValue={data.work_in_uk} onChange={e => this.onChangeOption(e, 'work_in_uk')}>
                  <Radio value={true}>Yes</Radio>
                  <Radio value={false}>No</Radio>
                </Radio.Group>
              </Form.Item>
            </div>
            <div className="birthday">
              <p className="form-title">WHEN IS YOUR BIRTHDAY?</p>
              <Form.Item>
                {getFieldDecorator('birth', {
                  required: true,
                  initialValue: data.birth
                })(
                  <DatePicker
                    onChange={e => this.setState({ birth: e })}
                    defaultValue={moment('01/01/2015', ['DD/MM/YYYY', 'DD/MM/YY'][0])}
                    label="Your birthday"
                    format={['DD/MM/YYYY', 'DD/MM/YY']}
                  />
                )}
              </Form.Item>
            </div>
          </div>

          <div className="SignupContent__Form__Body--Row text-center">
            <Form.Item>
              {getFieldDecorator('isAccepTerm', {
                initialValue: data.isAccepTerm,
                rules: [{ validator: this.checkTerm }]
              })(<Checkbox autoFocus>Term and conditions</Checkbox>)}
            </Form.Item>
          </div>

          <div className="SignupContent__Form__Body--Row text-center SignupContent__Submit">
            <Button type="primary" htmlType="submit">
              Next Step
            </Button>
          </div>

          <div className="SignupContent__Form__Body--Row text-center">
            <span>
              <b onClick={() => this.props.onClickNext(2, this.state)}>Back</b>
            </span>
          </div>
        </div>
        <AntdModal style={{ top: 100 }} visible={this.state.isShowChoosePlanModal} footer={[null, null]} className={`Modal ModalChoosePlanSignup`}>
          <ChoosePlanSignup onChoosePlan={this.onChoosePlan} />
        </AntdModal>
      </Form>
    );
  }
}
export default Step3;

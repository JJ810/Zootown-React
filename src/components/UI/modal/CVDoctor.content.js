import React from "react";
import { Row, Col, Upload } from "antd";
import { CheckoutContent } from '../modal'

class Step1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <div className="CVDoctorContent__Header">
          <h3>Cv Doctor</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
      </p>
        </div>
        <div className='CVDoctorContent__Footer'>
          <Row type="flex" justify="center">
            <Col span={6} className="item">
              <p>£350</p>
              <button onClick={() => this.props.onSelect(1)}>Super Saver</button>
            </Col>
            <Col span={6} className="item">
              <p>£450</p>
              <button onClick={() => this.props.onSelect(2)}>Super Check</button>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
class Step2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    const opts = {
      name: 'file',
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      headers: {
        authorization: 'authorization-text',
      },
    }
    return (
      <div>
        <div className="CVDoctorContent__Header">
          {
            this.props.option === 1 &&
            <h3>You have selected Super Saver</h3>
          }
          {
            this.props.option === 2 &&
            <h3>You have selected Super Check</h3>
          }

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book
          </p>
        </div>

        <div className='CVDoctorContent__Footer'>
          <div className="form-upload">
            {/* <span className="form-upload-btn">+</span>
            <span>Upload File</span> */}
            <Upload {...opts}>
              <div type="upload">
                {/* <Icon type="upload" /> Upload File */}
                <span className="form-upload-btn">+</span>
                <span>Upload File</span>
              </div>
            </Upload>
          </div>
          <button onClick={() => this.props.onBack()}>Back</button>
          <button onClick={() => this.props.onNext()}>Next</button>
        </div>
      </div>
    );
  }
}

class Step3 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <CheckoutContent />
      </div>
    );
  }
}

class CVDoctorContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      option:''
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  onSelect = (option) => {
    this.setState({ step: 2, option });

  }

  onNext = () => {
    this.setState({
      step: this.state.step + 1
    })
  }

  onBack = () => {
    this.setState({
      step: this.state.step - 1
    })
  }

  render() {
    return (
      <div className="CVDoctorContent">
        {
          this.state.step === 1 && <Step1 onSelect={this.onSelect} />
        }
        {
          this.state.step === 2 && <Step2 option={this.state.option} onNext={this.onNext} onBack={this.onBack} />
        }
        {
          this.state.step === 3 && <Step3 onNext={this.onNext} onBack={this.onBack} />
        }
      </div>
    );
  }
}

export default CVDoctorContent;

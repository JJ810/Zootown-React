import React from 'react';
import { Modal as AntdModal } from 'antd';
import { connect } from 'react-redux';
class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal1Visible: false
    };
  }

  setModal1Visible = modal1Visible => {
    if (modal1Visible) this.props.dispatch({ type: 'CHANGE_MODAL', className: this.props.className });
    this.setState({ modal1Visible });
  };

  componentWillReceiveProps(props) {
    if (this.props.isKeepShow || props.isKeepShow) {
    } else if (props.currentModal !== this.props.className) this.setState({ modal1Visible: false });
  }

  render() {
    return (
      <span>
        <span type="primary" onClick={() => this.setModal1Visible(true)}>
          {this.props.children}
        </span>
        <AntdModal
          title={this.props.title}
          style={{ top: this.props.top || 100, width: this.props.width || 900 }}
          visible={this.state.modal1Visible}
          onOk={() => this.setModal1Visible(false)}
          onCancel={() => this.setModal1Visible(false)}
          footer={[null, null]}
          className={`Modal ${this.props.className}`}
        >
          {this.props.content}
        </AntdModal>
      </span>
    );
  }
}
const mapStateToProps = state => {
  return {
    currentModal: state.common.currentModal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);

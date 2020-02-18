import React from "react";
import { Input as AntdInput } from "antd";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Input">
        <div className="Input__Label">{this.props.label}</div>
        <AntdInput {...this.props} />
      </div>
    );
  }
}
export default Input;

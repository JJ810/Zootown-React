import React from "react";
import { Select as AntdSelect } from "antd";

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Select">
        <div className="Select__Label">{this.props.label}</div>
        <AntdSelect
          {...this.props}
        >
          {this.props.children}
        </AntdSelect>
      </div>
    );
  }
}
export default Select;

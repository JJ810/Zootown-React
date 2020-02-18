import React from "react";
import { DatePicker as AntdDatePicker } from "antd";

class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="DatePicker">
        <div className="DatePicker__Label">{this.props.label}</div>
        <AntdDatePicker {...this.props} />
      </div>
    );
  }
}
export default DatePicker;

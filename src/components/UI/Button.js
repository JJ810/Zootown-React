import React from "react";
import { Button as AntdButton } from "antd";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      background: props.background || "#FED008",
      color: props.color || "black",
      width: props.width || 137,
      height: props.height || 40
    };
  }

  onHover = () => {
    this.setState({
      background: this.props.backgroundHover || "#C5A207"
    });
  };

  onUnHover = () => {
    this.setState({
      background: this.props.background || "#FED008"
    });
  };

  render() {
    return (
      <AntdButton
        {...this.props}
        className={`Button ${this.props.className}`}
        style={{ ...this.state }}
        onMouseEnter={this.onHover}
        onMouseLeave={this.onUnHover}
      />
    );
  }
}
export default Button;

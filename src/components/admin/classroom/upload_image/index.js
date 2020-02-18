import React, { Component } from "react";
import ImgAdd from "./../../../../assets/addbtn.png";
import "./style.scss";
export class UploadPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      file: event.target.files[0]
        ? URL.createObjectURL(event.target.files[0])
        : this.state.file
    });

    this.props.parentCallback(
      window.URL.createObjectURL(event.target.files[0])
    );
  }

  render() {
    return (
      <div className="uploadpreview">
        <div
          className="uploadpreview-imagecontainer"
          style={{ width: this.props.width, height: this.props.height }}
        >
          <input
            type="file"
            onChange={this.handleChange}
            style={{ width: "30px", height: "30px" }}
          />
          <img
            src={this.state.file == null ? ImgAdd : this.state.file}
            className="uploadpreview-image"
          />
        </div>
      </div>
    );
  }
}

export default UploadPreview;

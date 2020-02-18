import React, { Component } from "react";
import Navbar from "./Navbar";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  render() {
    return (
      <div className="Header">
        <Navbar
          parent={this.props.parent}
          aboutUs={this.props.aboutUs}
          page={this.props.page}
        />
      </div>
    );
  }
}

export default Header;

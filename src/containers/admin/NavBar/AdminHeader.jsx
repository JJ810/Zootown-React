import React, { Component } from 'react';
import AdminNavBar from './AdminNavBar';

class AdminHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  render() {
    return (
      <div className="Header">
        <AdminNavBar page={this.props.page} />
      </div>
    );
  }
}

export default AdminHeader;
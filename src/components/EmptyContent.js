import React from 'react';
import { Row, Col } from 'antd';
import { _url } from '../config/utils';
import Event from '../containers/Event';

class EmptyContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ minHeight: '300px', textAlign: 'center', padding: '100px 20px' }}>
        <h3>We are cooking up some exciting events!</h3>
        <h3>Come back soon.</h3>
      </div>
    );
  }
}

export default EmptyContent;

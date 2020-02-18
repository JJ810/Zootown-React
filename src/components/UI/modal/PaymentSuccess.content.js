import React from 'react';

class PaymentSuccessContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="PaymentSuccessContent">
        <div className="PaymentSuccessContent__Header">
          <h3>Payment made successfuly</h3>
          <img alt="" src="assets/images/payment_success.png" />
        </div>
        <div className="PaymentSuccessContent__Footer">
          <button className="checkout_btn" onClick={() => window.location.reload()}>
            OK
          </button>
        </div>
      </div>
    );
  }
}

export default PaymentSuccessContent;

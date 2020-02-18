import React from 'react';
import { Footer, Header } from '../components/index';
import { ProfileSideBar,StudentSideBar,OurServicesSection, PricePlan, StudentJumbotron, BlogSection, BenefitsSection, Reviews } from '../components/home';
import gpl from 'graphql-tag';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import {
        Switch, Icon, Checkbox } from 'antd';
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col,
    CardHeader,
    CardFooter,
    UncontrolledDropdown,
DropdownToggle,
DropdownMenu,
DropdownItem,
      FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
    Container
} from "reactstrap";
import classnames from "classnames";
import { graphql } from 'react-apollo';
import { getPlans } from '../actions/plans';
import { connect } from 'react-redux';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import '../assets/css/job.css';
class MyPaymentMethods extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: props.page,
    iconTabs: 2,
        handleCardNumber:'',
        handleExpire:'',
        handleCVV:'',
    plainTabs: 2,
        handleCardHolderL:'',
        togglestate:true,
        filter:false,
  };
      this.handleClick = this.handleClick.bind(this);
      this.handleCardNumber = this.handleCardNumber.bind(this);
      this.handleCardHolder = this.handleCardHolder.bind(this);
      this.handleExpire = this.handleExpire.bind(this);
      this.handleCVV = this.handleCVV.bind(this);
  }
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index
    });
  };

handleCardNumber(e){
  this.setState({
      handleCardNumber:e.target.value

  })

}
handleExpire(e){
  this.setState({
      handleExpire:e.target.value

  })

}
handleCVV(e){
  this.setState({
      handleCVV:e.target.value

  })

}
handleCardHolder(e){
  this.setState({
      handleCardHolder:e.target.value

  })

}
addCard(){
    console.log('card Addded')
}
showfilter(){
    this.setState({
        filter:true
    })

}
hidefilter(){
    this.setState({
        filter:false
    })

}
 handleClick() {
    this.setState({
        togglestate:!this.state.togglestate
    })
    console.log(this.state.togglestate)
}
render() {
    const { page } = this.state;
      const settings = {
      dots: true,
      infinite: true,
      speed: 500,
    autoplay:true,
      slidesToShow: 3,
      slidesToScroll: 1
    };
      const settingrecommendation = {
      dots: false,
      infinite: true,
      speed: 500,
    autoplay:true,
      slidesToShow: 2,
      slidesToScroll: 1
    };
      var style = {
          fontSize: 16,
      }
    return (
      <div>
        <Header parent="home" page={page} />
        <main ref="main" >
        <section>
            <Container fluid>
                <Row>
         <StudentSideBar page={page} />
                    <Col className="mt-5" md="9">
                        <Row>
                             <Col md={4} className="mr-auto">
                                <h3><b>MY PAYMENTS</b></h3>
                            </Col>
                        <Col md={12}>
                            <Row>
                             <Col md={4} className="w-90 card-bg h-200 br-20">
                                 <div className="mt-60">
                                     <div className="primary-color w-50-icon radius-50  ml-auto  mr-auto">
                                          <i className="fa fa-plus f-28 mt-13 text-white font-weight-300"></i>
                                     </div>
                                   <div className="text-center mt-2 ml-auto  mr-auto">
                                          <p className="ml-auto mr-auto text-muted-jobs ">Add New Card</p>
                                     </div>

                                    </div>
                            </Col>
                             <Col md={8} className="">
                                 <Row  className="mt-4">
                                     <Col md={5} className="">
                                         <p className="f-13 font-weight-700 ml-1 text-black ">CARD NUMBER</p>
                                          <input  type="text" className=" text-muted-jobs form-control border-top-0 border-left-0 border-right-0" placeholder="Card Number" onChange={this.handleCardNumber} />

                                    </Col>
                                     <Col md={5} className="">
                                         <p className="f-13 font-weight-700 ml-1 text-black ">CARD HOLDER</p>
                                          <input  type="text" className=" text-muted-jobs form-control border-top-0 border-left-0 border-right-0" placeholder="Card Holder" onChange={this.handleCardHolder} />

                                    </Col>
                                </Row>
                                <Row  className="mt-4">
                                     <Col md={3} className="">
                                         <p className="f-13 font-weight-700 ml-1 text-black ">EXPIRATION DATE</p>
                                          <input  type="text" className=" text-muted-jobs form-control border-top-0 border-left-0 border-right-0" placeholder="MM/YY" onChange={this.handleExpire} />

                                    </Col>
                                     <Col md={2} className="">
                                         <p className="f-13 font-weight-700 ml-1  text-black">CVV</p>
                                          <input  type="text" className=" text-muted-jobs form-control border-top-0 border-left-0 border-right-0" placeholder="CVV" onChange={this.handleCVV} />

                                    </Col>
                                </Row>
                             </Col>
                            <Col md="4 ml-lg mt-5">
                                <button className="btn badge-pill w-150 f-16 font-weight-500 mt-2 primary-color"  type="button" primary={false} onClick={()=>{this.addCard()}}>Add Card</button>
                            </Col>
                            </Row>
                            </Col>
                                <Col md={12} className="mt-md">
                                  <table className="w-100 text-center">
                                  <thead className="f-14-xs text-muted-jobs py-2 my-family-bold t-c">
                                      <th className="h-56">

                                      </th>
                                      <th>

                                      </th>
                                      <th>

                                      </th>
                                      <th>

                                      </th>
                                      <th>

                                      </th>
                                      <th>

                                      </th>
                                  </thead>
                                  <tbody>
                                      <tr className="h-56">
                                          <td className="w-20p">
                                            <p className="text-black font-weight-400 f-16-xs-xs">Faheem Ahmed</p>
                                            <span className="text-muted font-weight-400 f-16-xs-xs">Holder</span>
                                          </td>
                                          <td className="w-20p">
                                            <img className="w-40-icon" src={require('../assets/visa.png')} /><br />
                                            <span className="text-muted font-weight-400 f-16-xs-xs">Type</span>
                                          </td>
                                          <td className="w-20p">
                                            <span className="text-black font-weight-400 f-16-xs-xs">XXXX ..... 4356</span><br />
                                            <span className="text-muted font-weight-400 f-16-xs-xs">Card Number</span>
                                          </td>
                                          <td className="w-20p">
                                            <span className="text-black font-weight-400 f-16-xs-xs">12/23</span><br />
                                            <span className="text-muted font-weight-400 f-16-xs-xs">Exp Date</span>
                                          </td>
                                          <td className="w-20p">
                                            <img className="w-30-icon-xs" src={require('../assets/deletecard.png')} />
                                          </td>
                                      </tr>
                                    </tbody>
                              </table>
                                </Col>
                        </Row>


                    </Col>
                </Row>
            </Container>

        </section>
        <Footer page={this.props.page} />
        </main>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    plans: state.common.plans
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
)(MyPaymentMethods);

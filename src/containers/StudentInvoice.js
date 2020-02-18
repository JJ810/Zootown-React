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
                                <p className="text-center-mobile my-family-bold f-24 text-black"><b>MY INVOICES</b></p>
                            </Col>
                                  <Col md={12} className="mt-3 pr-1 pl-1">
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
                                          <td className="w-22p text-left">
                                            <span className="text-black my-family font-weight-400 f-14-mobile">Wordpress Designer</span>
                                            <span className="linebreak f-11-mobile">25.12.19</span>
                                          </td>
                                          <td className="w-20p">
                                            <img className=" w-35-icon-xs" src={require('../assets/images/employer/1.png')} />
                                            <span className="ml-1 f-14-mobile font-weight-400 text-black mt-1 my-family" > Plum Guide</span>
                                          </td>
                                          <td className="w-12p text-left">
                                            <span className="text-black font-weight-500 my-family f-14-mobile">$426.75</span>
                                            <span className="f-11-mobile linebreak">Invoice Value</span>
                                          </td>
                                          <td className="w-12p text-left">
                                            <span className="text-black font-weight-500 my-family f-14-mobile">$426.75</span>    
                                            <span className="f-11-mobile linebreak">With Tax</span>
                                          </td>
                                          <td className="w-20p">
                                              <span className="p-xs-xs btn badge-pill mt-2 py-1-mobile  invoice-bg"><img className="mt-2-mobile float-left w-15-icon " src={require('../assets/success.png')} /><span className="mt-1 f-14-mobile-button ml-1 font-weight-300 text-white float-right"> Paid: 28.9.2019</span> </span>
                                    
                                          </td>
                                             <td className="w-7p">
                                            <img className="w-18-icon-xs" src={require('../assets/deletecard.png')} />
                                          </td>
                                             <td className="w-7p">
                                            <div className="custom-control custom-checkbox mb-1">
                                                          <input
                                                            className="custom-control-input"
                                                            id="customCheck2"
                                                            type="checkbox"
                                                          />
                                                          <label className="custom-control-label" htmlFor="customCheck2">
                                                          </label>
                                            </div>
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

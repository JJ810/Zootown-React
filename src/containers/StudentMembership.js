import React from 'react';
import { Footer, Header } from '../components/index';
import { ProfileSideBar,StudentSideBar ,OurServicesSection, PricePlan, StudentJumbotron, BlogSection, BenefitsSection, Reviews } from '../components/home';
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
class StudentMembership extends React.Component {
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
                                <p className="f-24 my-family-bold text-black"><b>MY MEMBERSHIP</b></p>
                            </Col>
                            <Col md={12} className="mt-3 shadow py-2">
                                <Row className="row  py-2">
                                    <Col md={3} className="mt-3 col-3">
                                        <Row>
                                            <Col md={3} className="col-3">
                                                <img className="    w-30-icon" src={require('../assets/friends.png')} />
                                            </Col>
                                            <Col md={9} className="col-9">
                                                <span className=" f-13-xs my-family-cond-bold text-black">BASIC MEMBERSHIP</span><br />
                                                <span className=" f-24-xs my-family-cond-bold text-black">FREE</span>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md={7} className="col-7">
                                        <p className="f-12-xs my-family mt-mobile">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                            </p>
                                    </Col>
                                    <Col md={2} className="mt-3 col-2">
                                         <img className=" w-26-icon" src={require('../assets/membership.png')} />
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={12} className="primary-color shadow mt-4 br-6 py-2">
                                <Row className="row  py-2">
                                    <Col md={3} className="mt-3 col-2">
                                        <Row>
                                            <Col md={3} className="col-3">
                                                <img className="w-30-icon" src={require('../assets/starpro.png')} />
                                            </Col>
                                            <Col md={9} className="col-9">
                                                <span className=" f-13-xs my-family-cond-bold  text-white">TALENT PREMIUN PACKAGE</span><br />
                                                <span className="f-24-xs my-family-cond-bold  text-white">£350</span>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md={7} className="mt-1 col-6">
                                        <p className="f-12-xs my-family text-white mt-mobile">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                            </p>
                                    </Col>
                                    <Col md={2} className="mt-3 col-4">
                                         <button className="btn badge-pill text-black shadow w-100 f-13-xs  bg-white">
                                             Upgrade</button>
                                    </Col>
                                </Row>
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
)(StudentMembership);

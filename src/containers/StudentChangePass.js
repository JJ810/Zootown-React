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
class StudentChangePass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: props.page,
    iconTabs: 2,
        handleConfirmEmail:'',
        handleConfirmPassword:'',
        handlePassword:'',
        
        handleEmail:'',
       
    plainTabs: 2,
        togglestate:true,
        filter:false,
  };
      this.handleClick = this.handleClick.bind(this);
      this.handleConfirmEmail = this.handleConfirmEmail.bind(this);
      this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
      this.handlePassword = this.handlePassword.bind(this);
      this.handleEmail = this.handleEmail.bind(this);
     
      
  }
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index
    });
  };
 
handleConfirmEmail(e){
    this.setState({
      handleConfirmEmail:e.target.value

  })
    
}
handleConfirmPassword(e){
    this.setState({
      handleConfirmPassword:e.target.value

  })
    
}
handlePassword(e){
    this.setState({
      handlePassword:e.target.value

  })
    
}
handleEmail(e){
    this.setState({
      handleEmail:e.target.value

  })
    
}


changePass(){
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
uploadprofile(){
    
}
 handleClick() {
    this.setState({
        togglestate:!this.state.togglestate
    })
    console.log(this.state.togglestate)
}
deletephoto(){
    
}
UpdateProfile(){
    
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
        <span className="ml-4 mt-1  my-family-bold f-24 text-black">EMAIL & PASSWORD </span>
                              
                            </Col>
                        <Col md={12}>
                            <Row>
                                <Col md={12} className="mt-3">
                                     <Row className="mt-5">
                                         <Col md={4} className="">
                                             <p className="f-13 font-weight-700 text-black ml-2 ">EMAIL ADDRESS</p>
                                          <input  type="email" className=" text-muted-jobs form-control border-top-0 border-left-0 border-right-0" placeholder="Email" onChange={this.handleEmail} />
                                        </Col>
                                         <Col md={4} className="">
                                              <p className="f-13 font-weight-700 text-black ml-2 ">PASSWORD</p>
                                          <input  type="password" className=" text-muted-jobs form-control border-top-0 border-left-0 border-right-0" placeholder="Password" onChange={this.handlePassword} />
                                        </Col>
                                         
                                    </Row>
                                     <Row className="mt-5">
                                         <Col md={4} className="">
                                             <p className="f-13 font-weight-700 text-black ml-2 ">CONFIRM EMAIL ADDRESS</p>
                                          <input  type="email" className=" text-muted-jobs form-control border-top-0 border-left-0 border-right-0" placeholder="Confirm Email" onChange={this.handleConfirmEmail} />
                                        </Col>
                                         <Col md={4} className="">
                                              <p className="f-13 font-weight-700 text-black ml-2 ">CONFIRM PASSWORD</p>
                                          <input  type="password" className=" text-muted-jobs form-control border-top-0 border-left-0 border-right-0" placeholder="Confirm Password" onChange={this.handleConfirmPassword} />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md="4 ml-auto mr-auto mt-5">
                                <button className="btn badge-pill w-150 f-16 font-weight-500 mt-2 primary-color"  type="button" primary={false} onClick={()=>{this.UpdateProfile()}}>Update</button>
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
)(StudentChangePass);

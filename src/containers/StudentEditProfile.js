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
class StudentEditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: props.page,
    iconTabs: 2,
        handleFirstName:'',
        handleLastName:'',
        handleUTRNUMBER:'',
        handleEmail:'',
        handleHomeAddress:'',
        handlePhone:'',
        handleHobies:[],
        handleSkills:[],
        handleAboutU:'',
        handleExpire:'',
        handleCVV:'',
    plainTabs: 2,
        handleCardHolderL:'',
        togglestate:true,
        filter:false,
  };
      this.handleClick = this.handleClick.bind(this);
      this.handleFirstName = this.handleFirstName.bind(this);
      this.handleLastName = this.handleLastName.bind(this);
      this.handleUTRNUMBER = this.handleUTRNUMBER.bind(this);
      this.handleEmail = this.handleEmail.bind(this);
      this.handleHomeAddress = this.handleHomeAddress.bind(this);
      this.handlePhone = this.handlePhone.bind(this);
      this.handleHobies = this.handleHobies.bind(this);
      this.handleSkills = this.handleSkills.bind(this);
      this.handleAboutU = this.handleAboutU.bind(this);
      
  }
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index
    });
  };
 
handleFirstName(e){
    this.setState({
      handleFirstName:e.target.value

  })
    
}
handleLastName(e){
    this.setState({
      handleLastName:e.target.value

  })
    
}
handleUTRNUMBER(e){
    this.setState({
      handleUTRNUMBER:e.target.value

  })
    
}
handleEmail(e){
    this.setState({
      handleEmail:e.target.value

  })
    
}
handleHomeAddress(e){
    this.setState({
      handleHomeAddress:e.target.value

  })
    
}
handlePhone(e){
    this.setState({
      handlePhone:e.target.value

  })
    
}
handleHobies(e){
    this.setState({
      handleHobies:e.target.value

  })
    
}
handleSkills(e){
    this.setState({
      handleSkills:e.target.value

  })
    
}
handleAboutU(e){
  this.setState({
      handleAboutU:e.target.value

  })
    
}

editProfile(){
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
                                 <p className="text-center-mobile my-family-bold f-24 text-black"><b>MY DETAILS</b></p>
                            </Col>
                        <Col md={12}>
                            <Row>
                                 <Col md={7} className="">
                                     <Row>
                                         <Col md={4} className="col-4">
                                              <img className="rounded-circle h-91 mt-mobile-10 img-center img-fluid" src={require('../assets/img/theme/team-1-800x800.jpg')} />
                                        </Col>
                                         <Col md={4} className="mt-3 col-4">
                                             <button className="btn badge-pill f-14-xs my-family font-weight-500 mt-2 primary-color"  type="button" primary={false} onClick={()=>{this.uploadprofile()}}>Upload New Picture</button>

                                        </Col>
                                         <Col md={4} className="mt-4 col-4">
                                            <a onClick={()=>{this.deletephoto()}} className="text-danger font-weight-500 f-14 my-family"> Delete</a>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={12} className="mt-3">
                                     <Row className="mt-5">
                                         <Col md={4} className="mt-mobile">
                                             <p className="f-12 my-family-bold text-black ml-2 ">FIRST NAME</p>
                                          <input  type="text" className=" text-muted-jobs form-control border-top-0 border-left-0 border-right-0" placeholder="First Name" onChange={this.handleCardNumber} />
                                        </Col>
                                         <Col md={4} className="mt-mobile">
                                              <p className="f-12 my-family-bold text-black ml-2 ">UTR NUMBER</p>
                                          <input  type="text" className=" text-muted-jobs form-control border-top-0 border-left-0 border-right-0" placeholder="Utr Number" onChange={this.handleCardNumber} />
                                        </Col>
                                         <Col md={4} className="mt-mobile">
                                             <p className="f-12 my-family-bold text-black ml-2 ">Email</p>
                                          <input  type="email" className=" text-muted-jobs form-control border-top-0 border-left-0 border-right-0" placeholder="Email" onChange={this.handleCardNumber} />
                                        </Col>
                                    </Row>
                                    <Row className="mt-5">
                                         <Col md={4} className="mt-mobile">
                                             <p className="f-12 my-family-bold text-black ml-2 ">LAST NAME</p>
                                          <input  type="text" className=" text-muted-jobs form-control border-top-0 border-left-0 border-right-0" placeholder="Last Name" onChange={this.handleCardNumber} />
                                        </Col>
                                         <Col md={4} className="mt-mobile">
                                              <p className="f-12 my-family-bold text-black ml-2 ">HOME ADDRESS</p>
                                          <input  type="text" className=" text-muted-jobs form-control border-top-0 border-left-0 border-right-0" placeholder="Home Address" onChange={this.handleCardNumber} />
                                        </Col>
                                         <Col md={4} className="mt-mobile">
                                             <p className="f-12 my-family-bold text-black ml-2 ">PHONE</p>
                                          <input  type="email" className=" text-muted-jobs form-control border-top-0 border-left-0 border-right-0" placeholder="PHONE NO." onChange={this.handleCardNumber} />
                                        </Col>
                                    </Row>
                                    <Row className="mt-5">
                                         <Col md={3} className="">
                                             <p className="f-12 my-family-bold text-black ml-2 ">HOBBIES</p>
                                          <input  type="text" className=" text-muted-jobs form-control border-top-0 border-left-0 border-right-0" placeholder="My Hobbies" onChange={this.handleCardNumber} />
                                        </Col>
                                         <Col md={9} className="mt-2">
                                             <span className="btn badge-pill mt-2 primary-color px-3 mr-2"><span className="f-14 fontweight-300 text-black float-left"> Lahore</span> <img className="ml-2" src={require('../assets/delete.png')} /></span>
                                             <span className="btn badge-pill mt-2 primary-color px-3 mr-2"><span className="f-14 fontweight-300 text-black float-left"> Lahore</span> <img className="ml-2" src={require('../assets/delete.png')} /></span>
                                             <span className="btn badge-pill mt-2 primary-color px-3 mr-2"><span className="f-14 fontweight-300 text-black float-left"> Lahore</span> <img className="ml-2" src={require('../assets/delete.png')} /></span>
                                             <span className="btn badge-pill mt-2 primary-color px-3 mr-2"><span className="f-14 fontweight-300 text-black float-left"> Lahore</span> <img className="ml-2" src={require('../assets/delete.png')} /></span>
                                             <span className="btn badge-pill mt-2 primary-color px-3 mr-2"><span className="f-14 fontweight-300 text-black float-left"> Lahore</span> <img className="ml-2" src={require('../assets/delete.png')} /></span>
                                        </Col>
                                    </Row>
                                    <Row className="mt-5">
                                         <Col md={3} className="">
                                             <p className="f-12 my-family-bold text-black ml-2 ">SKILLS</p>
                                          <input  type="text" className=" text-muted-jobs form-control border-top-0 border-left-0 border-right-0" placeholder="My Skills" onChange={this.handleCardNumber} />
                                        </Col>
                                         <Col md={9} className="mt-2">
                                            <span className="btn badge-pill mt-2 primary-color px-3 mr-2"><span className="f-14 fontweight-300 text-black float-left"> Lahore</span> <img className="ml-2" src={require('../assets/delete.png')} /></span>
                                            <span className="btn badge-pill mt-2 primary-color px-3 mr-2"><span className="f-14 fontweight-300 text-black float-left"> Lahore</span> <img className="ml-2" src={require('../assets/delete.png')} /></span>
                                            <span className="btn badge-pill mt-2 primary-color px-3 mr-2"><span className="f-14 fontweight-300 text-black float-left"> Lahore</span> <img className="ml-2" src={require('../assets/delete.png')} /></span>

                                        </Col>
                                    </Row>
                                    <Row className="mt-5">
                                         <Col md={12} className="">
                                             <p className="f-12 my-family-bold text-black ml-2 ">About You</p>
                                          <input  type="text" className="py-5 text-muted-jobs form-control border-top-0 border-left-0 border-right-0" placeholder="About My Self" onChange={this.handleCardNumber} />
                                        </Col>
                                         
                                    </Row>
                                </Col>
                                <Col md="4 ml-auto mr-auto mt-5 col-6">
                                <button className="btn badge-pill w-150 f-14 my-family font-weight-500 mt-2 primary-color"  type="button" primary={false} onClick={()=>{this.UpdateProfile()}}>Update</button>
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
)(StudentEditProfile);

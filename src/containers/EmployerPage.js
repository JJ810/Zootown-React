import React from 'react';
import { Footer, Header } from '../components/index';
import { OurServicesSection, PricePlan, StudentJumbotron, BlogSection, BenefitsSection, Reviews } from '../components/home';
import gpl from 'graphql-tag';
import { Link } from 'react-router-dom';
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
import '../assets/css/studentpage.css';
class EmployerPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: props.page,
    iconTabs: 2,
    plainTabs: 2,
        filter:true,
  };
  }
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index
    });
  };
 
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
  componentDidMount() {
    
  }

  render() {
    const { page } = this.state;

    return (
      <div>
        <Header parent="home" page={page} />
        <main ref="main" >
        <section>
            <Container fluid className=" ml-lg mr-lg"> 
                <Row>
                      <Col className="mt-1" lg="12">
 
            
                    <Row className="mt-5">
                        
                     
                        <Col md={8}>
                        <p className="my-family-bold f-24 font-weight-700 text-black">SEARCH RESULTS</p>
                          <Row>
                            <Col md={12} className="mt-3">
                                <Card className="">
                                    <CardBody>
                                        <Row>
                                            <Col md={2}>
                                                <img
                                                  alt="..."
                                                  className="rounded-circle img-center img-fluid shadow shadow-lg--hover h-70 "
                                                  src={require("../assets/img/theme/team-1-800x800.jpg")}
                                                /> 
                                            </Col>
                                           <Col md={7} className="mt-3">
                                                      <span className=" f-16 text-black font-weight-600 my-family-bold">David Warner</span>
                                                      <br />
                                                        <span className="f-12 font-weight-500 text-black"><i className="primary-color-text fa fa-map-marker"></i> San Francisco</span>
                                            </Col>
                                            <Col md={3}>
                                                <p className="f-17 my-family-medium text-black   ">$55.6 <span className="f-14 my-family hourly-text">Hourly Rate</span>
                                                        </p>
                                                        <p className="text-black my-family-medium  f-13">Product Designer</p>
                                                        <p className="my-family f-12 expire-text">Expired: <span className="my-family f-12 text-black">29/06/2019</span></p>
                                            </Col>
                                             <Col md={12} className="mt-3">
                                                <p className="desc-text my-family border-b-light f-15 pb-2">Raw denim you probably haven't heard of them jean shorts
                                                  Austin. Nesciunt tofu stumptown aliqua, retro synth master
                                                  cleanse. Mustache cliche tempor, williamsburg carles vegan
                                                  helvetica. Reprehenderit butcher retro keffiyeh
                                                  dreamcatcher synth.</p>
                                            </Col>
                                     </Row>
                                    
                                      <Row className="mt-2">
                                        <Col md={3}>
                                           <Link  to="/" className=" my-family-bold  primary-color-text f-13 font-weight-500">Get to know more </Link>
                                        </Col>
                                       <Col md={3}>
                                                  <Link  to="/" className=" my-family-bold  primary-color-text f-13 font-weight-500">Show me more </Link>
                                        </Col>
                                        <Col md={3} className="ml-auto">
                                           <NavItem className="btn btn-primary badge-pill w-75 text-black f-14 primary-color">Contact Now</NavItem>
                                        </Col>  
                                     </Row>                
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={12} className="mt-3">
                                <Card className="">
                                    <CardBody>
                                        <Row>
                                            <Col md={2}>
                                                <img
                                                  alt="..."
                                                  className="rounded-circle img-center img-fluid shadow shadow-lg--hover h-70 "
                                                  src={require("../assets/img/theme/team-1-800x800.jpg")}
                                                /> 
                                            </Col>
                                           <Col md={7} className="mt-3">
                                                      <span className=" f-16 text-black font-weight-600 my-family-bold">David Warner</span>
                                                      <br />
                                                        <span className="f-12 font-weight-500 text-black"><i className="primary-color-text fa fa-map-marker"></i> San Francisco</span>
                                            </Col>
                                            <Col md={3}>
                                                <p className="f-17 my-family-medium text-black   ">$55.6 <span className="f-14 my-family hourly-text">Hourly Rate</span>
                                                        </p>
                                                        <p className="text-black my-family-medium  f-13">Product Designer</p>
                                                        <p className="my-family f-12 expire-text">Expired: <span className="my-family f-12 text-black">29/06/2019</span></p>
                                            </Col>
                                             <Col md={12} className="mt-3">
                                                <p className="desc-text my-family border-b-light f-15 pb-2">Raw denim you probably haven't heard of them jean shorts
                                                  Austin. Nesciunt tofu stumptown aliqua, retro synth master
                                                  cleanse. Mustache cliche tempor, williamsburg carles vegan
                                                  helvetica. Reprehenderit butcher retro keffiyeh
                                                  dreamcatcher synth.</p>
                                            </Col>
                                     </Row>
                                    
                                      <Row className="mt-2">
                                        <Col md={3}>
                                           <Link  to="/" className=" my-family-bold  primary-color-text f-13 font-weight-500">Get to know more </Link>
                                        </Col>
                                       <Col md={3}>
                                                  <Link  to="/" className=" my-family-bold  primary-color-text f-13 font-weight-500">Show me more </Link>
                                        </Col>
                                        <Col md={3} className="ml-auto">
                                           <NavItem className="btn btn-primary badge-pill w-75 text-black f-14 primary-color">Contact Now</NavItem>
                                        </Col>  
                                     </Row>                
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={12} className="mt-3">
                                <Card className="">
                                    <CardBody>
                                        <Row>
                                            <Col md={2}>
                                                <img
                                                  alt="..."
                                                  className="rounded-circle img-center img-fluid shadow shadow-lg--hover h-70 "
                                                  src={require("../assets/img/theme/team-1-800x800.jpg")}
                                                /> 
                                            </Col>
                                           <Col md={7} className="mt-3">
                                                      <span className=" f-16 text-black font-weight-600 my-family-bold">David Warner</span>
                                                      <br />
                                                        <span className="f-12 font-weight-500 text-black"><i className="primary-color-text fa fa-map-marker"></i> San Francisco</span>
                                            </Col>
                                            <Col md={3}>
                                                <p className="f-17 my-family-medium text-black   ">$55.6 <span className="f-14 my-family hourly-text">Hourly Rate</span>
                                                        </p>
                                                        <p className="text-black my-family-medium  f-13">Product Designer</p>
                                                        <p className="my-family f-12 expire-text">Expired: <span className="my-family f-12 text-black">29/06/2019</span></p>
                                            </Col>
                                             <Col md={12} className="mt-3">
                                                <p className="desc-text my-family border-b-light f-15 pb-2">Raw denim you probably haven't heard of them jean shorts
                                                  Austin. Nesciunt tofu stumptown aliqua, retro synth master
                                                  cleanse. Mustache cliche tempor, williamsburg carles vegan
                                                  helvetica. Reprehenderit butcher retro keffiyeh
                                                  dreamcatcher synth.</p>
                                            </Col>
                                     </Row>
                                    
                                      <Row className="mt-2">
                                        <Col md={3}>
                                           <Link  to="/" className=" my-family-bold  primary-color-text f-13 font-weight-500">Get to know more </Link>
                                        </Col>
                                       <Col md={3}>
                                                  <Link  to="/" className=" my-family-bold  primary-color-text f-13 font-weight-500">Show me more </Link>
                                        </Col>
                                        <Col md={3} className="ml-auto">
                                           <NavItem className="btn btn-primary badge-pill w-75 text-black f-14 primary-color">Contact Now</NavItem>
                                        </Col>  
                                     </Row>                
                                    </CardBody>
                                </Card>
                            </Col>
                          </Row>
                        </Col>
                       
                        <Col md={4}>
                             
                            <Row className="mt-4">
                                <Col md={6}>
                                      <span className="ml-3 text-center f-19 my-family text-black font-weight-600">Filter</span>
                                </Col>
                                <Col md={6} className="text-center">
                                    {this.state.filter
                                    ?<a className="f-19 mr-3 text-muted" onClick={()=> this.hidefilter()}>Clear</a>
                                    :<a className="f-19 mr-3 primary-color-text " onClick={()=> this.showfilter()}>Show</a>
                                    }
                                    
                                </Col>
                             </Row>
                                 {this.state.filter
                        ?
                                <div>
                            <Row className="mt-4">
                                <Col md={12}>
                                    <p className=" mt-3 mb-3 f-19 my-family text-black font-weight-600">Locations</p>
                                      <InputGroup className="input-group-alternative mb-4">
                                          <Input
                                      className="border-b-l-r border-bottom-0 border-left-0 border-right-0 border-t-l-r border-top-0 form-control input-bc"
                                            placeholder="Your current location"
                                            type="text"
                                            onFocus={e =>
                                              this.setState({ birthdayAltFocused: true })
                                            }
                                            onBlur={e =>
                                              this.setState({ birthdayAltFocused: false })
                                            }
                                          />
                                          <InputGroupAddon addonType="append" >
                                            <InputGroupText className="border-b-r-r border-t-r-r">
                                              <i className="ni ni-pin-3 primary-color-text" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </Col>
                                <Col md={12}>
                                     <span className="btn badge-pill mt-2 primary-color px-3 mr-2"><span className="f-14 fontweight-300 text-black float-left"> Lahore</span> <img className="ml-2" src={require('../assets/delete.png')} /></span>
                                      <span className="btn badge-pill mt-2 primary-color px-3 mr-2"><span className="f-14 fontweight-300 text-black float-left"> Lahore</span> <img className="ml-2" src={require('../assets/delete.png')} /></span>
                                       <span className="btn badge-pill mt-2 primary-color px-3 mr-2"><span className="f-14 fontweight-300 text-black float-left"> Lahore</span> <img className="ml-2" src={require('../assets/delete.png')} /></span>
                                        <span className="btn badge-pill mt-2 primary-color px-3 mr-2"><span className="f-14 fontweight-300 text-black float-left"> Lahore</span> <img className="ml-2" src={require('../assets/delete.png')} /></span>
                                   
                                </Col>
                             </Row>
                            <Row>
                                <Col md={12}>
                                    <p className=" mt-3 mb-3 f-19 my-family text-black font-weight-600">Availbility </p>
                                        <div className="custom-control custom-checkbox mb-3">
                                          <input
                                            className="custom-control-input"
                                            defaultChecked
                                            id="customCheck2"
                                            type="checkbox"
                                          />
                                          <label className="custom-control-label" htmlFor="customCheck2">
                                            <span className="ml-3 text-black">Available ASAP</span>
                                          </label>
                                        </div>
                                        <div className="custom-control custom-checkbox mb-3">
                                          <input
                                            className="custom-control-input"
                                            defaultChecked
                                            id="customCheck2"
                                            type="checkbox"
                                          />
                                          <label className="custom-control-label" htmlFor="customCheck2">
                                            <span className="ml-3 text-black">Freelancers</span>
                                          </label>
                                        </div>
                                       <div className="custom-control custom-checkbox mb-3">
                                          <input
                                            className="custom-control-input"
                                            defaultChecked
                                            id="customCheck2"
                                            type="checkbox"
                                          />
                                          <label className="custom-control-label" htmlFor="customCheck2">
                                            <span className="ml-3 text-black">Permanent Roles</span>
                                          </label>
                                        </div>
                                      <div className="custom-control custom-checkbox mb-3">
                                          <input
                                            className="custom-control-input"
                                            defaultChecked
                                            id="customCheck2"
                                            type="checkbox"
                                          />
                                          <label className="custom-control-label" htmlFor="customCheck2">
                                            <span className="ml-3 text-black">Internships</span>
                                          </label>
                                        </div>
                                      <div className="custom-control custom-checkbox mb-3">
                                          <input
                                            className="custom-control-input"
                                            defaultChecked
                                            id="customCheck2"
                                            type="checkbox"
                                          />
                                          <label className="custom-control-label" htmlFor="customCheck2">
                                            <span className="ml-3 text-black">Temp Roles</span>
                                          </label>
                                        </div>
                                         
                                         
                                         
                                </Col>
                             </Row>
                             <Row>
                                <Col md={12}>
                                    <p className=" mt-3 mb-3 f-19 my-family font-weight-600">Sector</p>
                                        <div className="custom-control custom-checkbox mb-3">
                                          <input
                                            className="custom-control-input"
                                            defaultChecked
                                            id="customCheck2"
                                            type="checkbox"
                                          />
                                          <label className="custom-control-label" htmlFor="customCheck2">
                                            <span className="ml-3">Advertising</span>
                                          </label>
                                        </div>
                                         <div className="custom-control custom-checkbox mb-3">
                                              <input
                                                className="custom-control-input"
                                                defaultChecked
                                                id="customCheck2"
                                                type="checkbox"
                                              />
                                              <label className="custom-control-label" htmlFor="customCheck2">
                                                <span className="ml-3">Consulting</span>
                                              </label>
                                        </div>
                                         <div className="custom-control custom-checkbox mb-3">
                                              <input
                                                className="custom-control-input"
                                                defaultChecked
                                                id="customCheck2"
                                                type="checkbox"
                                              />
                                              <label className="custom-control-label" htmlFor="customCheck2">
                                                <span className="ml-3">Data</span>
                                              </label>
                                        </div>
                                         <div className="custom-control custom-checkbox mb-3">
                                              <input
                                                className="custom-control-input"
                                                defaultChecked
                                                id="customCheck2"
                                                type="checkbox"
                                              />
                                              <label className="custom-control-label" htmlFor="customCheck2">
                                                <span className="ml-3">Digital media</span>
                                              </label>
                                        </div>
                                        <div className="custom-control custom-checkbox mb-3">
                                              <input
                                                className="custom-control-input"
                                                defaultChecked
                                                id="customCheck2"
                                                type="checkbox"
                                              />
                                              <label className="custom-control-label" htmlFor="customCheck2">
                                                <span className="ml-3">Engineering</span>
                                              </label>
                                        </div>
                                        <div className="custom-control custom-checkbox mb-3">
                                              <input
                                                className="custom-control-input"
                                                defaultChecked
                                                id="customCheck2"
                                                type="checkbox"
                                              />
                                              <label className="custom-control-label" htmlFor="customCheck2">
                                                <span className="ml-3">Fashion</span>
                                              </label>
                                        </div>
                                        <div className="custom-control custom-checkbox mb-3">
                                              <input
                                                className="custom-control-input"
                                                defaultChecked
                                                id="customCheck2"
                                                type="checkbox"
                                              />
                                              <label className="custom-control-label" htmlFor="customCheck2">
                                                <span className="ml-3">Environmental</span>
                                              </label>
                                        </div>
                                </Col>
                             </Row>
                            <Row>
                                <Col md={12}>
                                    <p className=" mt-3 mb-3 f-19 my-family font-weight-600">Salary</p>
                                        <div className="custom-control custom-checkbox mb-3">
                                          <input
                                            className="custom-control-input"
                                            defaultChecked
                                            id="customCheck2"
                                            type="checkbox"
                                          />
                                          <label className="custom-control-label" htmlFor="customCheck2">
                                            <span className="ml-3">£12k+</span>
                                          </label>
                                        </div>
                                         <div className="custom-control custom-checkbox mb-3">
                                              <input
                                                className="custom-control-input"
                                                defaultChecked
                                                id="customCheck2"
                                                type="checkbox"
                                              />
                                              <label className="custom-control-label" htmlFor="customCheck2">
                                                <span className="ml-3">£20k+</span>
                                              </label>
                                        </div>
                                         <div className="custom-control custom-checkbox mb-3">
                                              <input
                                                className="custom-control-input"
                                                defaultChecked
                                                id="customCheck2"
                                                type="checkbox"
                                              />
                                              <label className="custom-control-label" htmlFor="customCheck2">
                                                <span className="ml-3">£25k+</span>
                                              </label>
                                        </div>
                                         <div className="custom-control custom-checkbox mb-3">
                                              <input
                                                className="custom-control-input"
                                                defaultChecked
                                                id="customCheck2"
                                                type="checkbox"
                                              />
                                              <label className="custom-control-label" htmlFor="customCheck2">
                                                <span className="ml-3">£35k+</span>
                                              </label>
                                        </div>
                                </Col>
                             </Row>
                            <Row className="mt-4">
                                <Col md={12}>
                                    <p className=" mt-3 mb-3 f-19 my-family font-weight-600">Locations</p>
                                      <InputGroup className="input-group-alternative mb-4">
                                          <Input
                                      className="input-bc border-t-l-r border-b-l-r"
                                            placeholder="Keyword"
                                            type="text"
                                            onFocus={e =>
                                              this.setState({ birthdayAltFocused: true })
                                            }
                                            onBlur={e =>
                                              this.setState({ birthdayAltFocused: false })
                                            }
                                          />
                                          <InputGroupAddon addonType="append" >
                                            <InputGroupText className="border-b-r-r border-t-r-r">
                                              <i className="ni ni-tag primary-color-text" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </Col>
                                <Col md={12}>
                                     <span className="btn badge-pill mt-2 primary-color px-3 mr-2"><span className="f-14 fontweight-300 text-black float-left"> Lahore</span> <img className="ml-2" src={require('../assets/delete.png')} /></span>
                                      <span className="btn badge-pill mt-2 primary-color px-3 mr-2"><span className="f-14 fontweight-300 text-black float-left"> Lahore</span> <img className="ml-2" src={require('../assets/delete.png')} /></span>
                                       <span className="btn badge-pill mt-2 primary-color px-3 mr-2"><span className="f-14 fontweight-300 text-black float-left"> Lahore</span> <img className="ml-2" src={require('../assets/delete.png')} /></span>
                                        <span className="btn badge-pill mt-2 primary-color px-3 mr-2"><span className="f-14 fontweight-300 text-black float-left"> Lahore</span> <img className="ml-2" src={require('../assets/delete.png')} /></span>
                                </Col>
                             </Row>
                            </div>
                            :null
                        }
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
)(EmployerPage);

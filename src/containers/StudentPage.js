import React, {useEffect, useState} from 'react';  
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
import Classroom from "./ClassroomPage";
import { graphql } from 'react-apollo';
import { getPlans } from '../actions/plans';
import { connect } from 'react-redux';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import '../assets/css/studentpage.css';
import {useDropzone} from 'react-dropzone';
import ClassroomPage from './ClassroomPage';
const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};


function Previews(props) {
  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });
  
  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
        />
      </div>
    </div>
  ));

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <section className="container" >
      <div {...getRootProps({className: 'dropzone py-5 text-center cursor-pointer'})}>
        <input {...getInputProps()} />
        <p>Upload Image....</p>
      </div>
      <aside style={thumbsContainer}>
        {thumbs}
      </aside>
    </section>
  );
}
class StudentPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: props.page,
    iconTabs: 2,
    plainTabs: 2,
    subiconTabs: 1,
    subplainTabs: 1,
        mobile:false,
        filter:true,
        width: 0, height: 0,
  };

  this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
}

componentDidMount() {
  this.updateWindowDimensions();
  window.addEventListener('resize', this.updateWindowDimensions);
}

componentWillUnmount() {
  window.removeEventListener('resize', this.updateWindowDimensions);
}

updateWindowDimensions() {
    if(window.innerWidth <= 544 ){
        this.setState({ iconTabs:2,mobile:true,
plainTabs: 2});
    }else{
         this.setState({ iconTabs:2,mobile:false,
plainTabs: 2});
    }
  this.setState({ width: window.innerWidth, height: window.innerHeight });
}
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index
    });
  };
subtoggleNavs = (e, state, index) => {
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


  render() {
    const { page } = this.state;

    return (
      <div>
        <Header parent="home" page={page} />
        <main ref="main" >
        <section>
            <Container fluid className=""> 
                <Row>
       
        <Col className="mt-1 ml-auto mr-auto col-12" lg="5">
            {/* Menu */}

            <div className="nav-wrapper">
              <Nav
                className="nav-fill flex-column flex-md-row"
                id="tabs-icons-text"
                pills
                role="tablist"
              >
                <NavItem>
                  <NavLink
                    aria-selected={this.state.plainTabs === 1}
                    className={classnames("mb-sm-3 mb-md-0 my-family-bold f-15 ", {
                      active: this.state.plainTabs === 1
                    })}
                    onClick={e => this.toggleNavs(e, "plainTabs", 1)}
                    href="#pablo"
                    role="tab"
                  >
                    BLOGS
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.plainTabs === 2}
                    className={classnames("mb-sm-3 f-15 my-family-bold mb-md-0", {
                      active: this.state.plainTabs === 2
                    })}
                    onClick={e => this.toggleNavs(e, "plainTabs", 2)}
                    href="#pablo"
                    role="tab"
                  >
                    JOBS
                  </NavLink>
                </NavItem>
                <NavItem>
                  <Link to="/classroompage"
                    aria-selected={this.state.plainTabs === 4}
                    className={classnames("nav-link", "mb-sm-3 f-15 my-family-bold mb-md-0", {
                      active: this.state.plainTabs === 4
                    })}
                    // onClick={e => this.toggleNavs(e, "plainTabs", 4)}
                  //    onClick={(e) => {
                  //     alert('Its alive!')
                  // }}
                     //onClick={}
                  >
                    ZT Classroom
                  </Link>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.plainTabs === 3}
                    className={classnames("mb-sm-3 f-15 my-family-bold mb-md-0", {
                      active: this.state.plainTabs === 3
                    })}
                    onClick={e => this.toggleNavs(e, "plainTabs", 3)}
                    href="#pablo"
                    role="tab"
                  >
                    EVENTS
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
            </Col>
        
             <Col className="mt-1" lg="12">
            <Card className="border-0">
              <CardBody>
                <TabContent activeTab={"plainTabs" + this.state.plainTabs}>
                  <TabPane tabId="plainTabs1">
                    <p className="description">
                      Raw denim you probably haven't heard of them jean shorts
                      Austin. Nesciunt tofu stumptown aliqua, retro synth master
                      cleanse. Mustache cliche tempor, williamsburg carles vegan
                      helvetica. Reprehenderit butcher retro keffiyeh
                      dreamcatcher synth.
                    </p>
                    <p className="description">
                      Raw denim you probably haven't heard of them jean shorts
                      Austin. Nesciunt tofu stumptown aliqua, retro synth master
                      cleanse.
                    </p>
                  </TabPane>
                  <TabPane tabId="plainTabs2">
                       <Row>
                        <Col md={3} className="order-1-sm text-center mb-5">
                            <Card className="shadow pt-4 pb-4 border-0">
                                <div>
                                    <div className="col-12">
                                        <img
                                          alt="..."
                                          className="rounded-circle img-center border-zoo img-fluid shadow shadow-lg--hover hei-100"
                                          src={require("../assets/img/theme/team-1-800x800.jpg")}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <p className="f-17 my-family text-black font-weight-500 text-center mt-3">Eugen Bardill</p>
                                        <p className="f-12 text-mutedd my-family  text-center mt-2"><i className="fa fa-map-marker"></i> San Francisco</p>
                                    </div>
                                    <div className="col-12 pt-3">
                                         <Link  to="/studentprofile" className="  primary-color-text f-14 my-family-medium font-weight-500">View Profile </Link>
                                    </div>
                                </div>
                                   </Card>
                        </Col>
                                   
                        <Col md={6} className="order-3-sm">
                          <Row>
                              <Col md={12} className="mr-auto">
                                    <div className="nav-wrapper">
                                          <Nav
                                            className="row nav-fill flex-column flex-md-row"
                                            id="tabs-icons-text"
                                            pills
                                            role="tablist"
                                          >
                                            
                                        </Nav>
                                </div>

                                </Col>
                          </Row>
                          <Row>
                                                  
                              
                            <Col md={12} className="mt-3">
                                <Card className="border-jobs">
                                    <CardBody  >
                                        <Row>
                                            <Col md={2} className="mt-mobile">
                                                <img
                                                  alt="..."
                                                  className="rounded-circle img-center border-zoo img-fluid shadow shadow-lg--hover h-70 "
                                                  src={require("../assets/img/theme/team-1-800x800.jpg")}
                                                />
                                            </Col>
                                           <Col md={6} className="mt-3 col-6 ">
                                                      <span className=" f-16 text-black my-family-bold ml-mobile">David Warner</span>
                                                      <br />
                                                        <span className=" ml-mobile f-12 my-family text-black"><i className="primary-color-text  fa fa-map-marker"></i> San Francisco</span>
                                            </Col>
                                            <Col md={3} className="col-6 ">
                                                <h5 className=" mt-mobile f-15  my-family-medium"><i className="primary-color-text fa fa-dollar-sign"></i> £12 - £25K
                                                        </h5>
                                                        <p className="text-black f-13  my-family-medium">Product Designer</p>
                                                        <p className="text-muted f-12  my-family">Expired: 29/06/2019</p>
                                            </Col>
                                             <Col md={12}>
                                                <p className=" px-1 desc-text my-family font-weight-550 f-15">Raw denim you probably haven't heard of them jean shorts
                                                  Austin. Nesciunt tofu stumptown aliqua, retro synth master
                                                  cleanse. Mustache cliche tempor, williamsburg carles vegan
                                                  helvetica. Reprehenderit butcher retro keffiyeh
                                                  dreamcatcher synth.</p>
                                            </Col>
                                     </Row>
                                      <hr className="text-muted h-1 mt-0 mb-1 mx-2" />
                                      <Row className="mt-3">
                                        <Col md={4} className="col-6">
                                           <Link  to="/" className="  ml-mobile mb-mobile primary-color-text my-family-bold f-13 ">Get to know more </Link>
                                        </Col>
                                       <Col md={5} className="col-6">
                                                  <Link  to="/" className="ml-mobile   mb-mobile primary-color-text my-family-bold f-13">Show me more </Link>
                                        </Col>
                                        <Col md={3} className="col-4 ml-auto mr-auto">
                                           <NavItem className="btn btn-primary mt-mobile mb-mobile badge-pill my-family-medium f-13 w-100 text-dark primary-color">Quick Apply </NavItem>
                                        </Col>
                                     </Row>
                                    </CardBody>
                                </Card>
                            </Col>                                      
                          </Row>
                        </Col>

                        <Col md={3} className="card shadow order-2-sm pb-3 border-0">
                            
                             <Row className="mt-3">
                                <div className="col-4 p-2  mt-1 mt-mobile ">
                                      <span className="float-right f-15 my-family-bold text-black">PROJECTS</span>
                                </div>
                                <div className="text-center col-3">
                                    <label className="mt-2 custom-toggle">
                                      <input defaultChecked type="checkbox" />
                                      <span className="custom-toggle-slider " />
                                    </label>
                                </div>
                                <div  className="col-4 p-2 mt-1 ">
                                    <span className=" f-15 my-family-bold text-black">JOBS</span>

                                </div>
                             </Row>
                            <Row className="mt-4">
                                <Col md={6} className="col-6">
                                      <span className="text-center f-12 my-family-bold text-black">FILTER</span>
                                </Col>
                                <Col md={6} className="col-6 text-center">
                                    {this.state.filter
                                    ?<a className="f-12 my-family-bold primary-color-text " onClick={()=> this.hidefilter()}>CLEAR</a>
                                    :<a className="f-12 my-family-bold  text-muted" onClick={()=> this.showfilter()}>SHOW</a>
                                    }

                                </Col>
                             </Row>
                                 {this.state.filter
                        ?
                                <div>
                            <Row className="mt-4">
                                <Col md={12}>
                                    <p className=" mt-3 mb-3 f-18 my-family text-black font-weight-400">Location</p>
                                      <InputGroup className="input-group-alternative mb-4">
                                          <Input
                                      className="input-bc border-t-l-r border-b-l-r border-right-0 border-top-0 border-left-0 border-bottom-0"
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
                                </Col>
                             </Row>
                            <Row>
                                <Col md={12}>
                                    <p className=" mt-3 mb-3 f-17 tex-black my-family font-weight-600">Job Type       </p>
                                        <div className="custom-control custom-checkbox mb-3">
                                          <input
                                            className="custom-control-input"
                                            defaultChecked
                                            id="customCheck2"
                                            type="checkbox"
                                          />
                                          <label className="custom-control-label" htmlFor="customCheck2">
                                            <span className="ml-3">Graduate Job</span>
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
                                                <span className="ml-3">Experienced Job</span>
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
                                                <span className="ml-3">Graduate Internship</span>
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
                                                <span className="ml-3">Student Summer Internship</span>
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

                  </TabPane>
                  <TabPane tabId="plainTabs3">
                    <p className="description">
                      Raw denim you probably haven't heard of them jean shorts
                      Austin. Nesciunt tofu stumptown aliqua, retro synth master
                      cleanse. Mustache cliche tempor, williamsburg carles vegan
                      helvetica. Reprehenderit butcher retro keffiyeh
                      dreamcatcher synth.
                    </p>
                  </TabPane>
                  {/* <TabPane tabId="plainTabs4">
                    <ClassroomPage></ClassroomPage>
                  </TabPane> */}
                </TabContent>
              </CardBody>
            </Card>
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
)(StudentPage);

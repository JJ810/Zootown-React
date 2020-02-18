import React from 'react';
import { _url } from '../../config/utils';
import { Link } from 'react-router-dom';
import Headroom from "headroom.js";
import classnames from "classnames";
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar as ZooNavBar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
    Collapse, CardBody, Card
} from "reactstrap";
import { FaSearch } from "react-icons/fa";
import { Modal, SignupFreelancer, LoginContent, CVDoctorContent, SignupEmployer, ChoosePlanEmployer } from '../../components/UI/modal';
import { connect } from 'react-redux';
import { logoutAuth } from '../../actions/auth';
import { withRouter } from 'react-router';
import '../../assets/css/classroom-nav.css';
 let headroom = new Headroom(document.getElementById("navbar-main"));
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
      collapse: false,
      scrolled: false,
        EmployeerLoggedin:false,
        freelancerLoggedin:false,
      page: props.page || 'students'
    };
  }
  handleScroll = () => {
    if (window.scrollY > 0 && !this.state.scrolled) {
      this.setState({
        scrolled: true
      });
    }
    if (window.scrollY < 1 && this.state.scrolled) {
      this.setState({
        scrolled: false
      });
    }
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  componentWillReceiveProps(props) {
    this.setState({ page: props.page });
  }

  isLogin = () => {
    return this.props.auth.user && this.props.auth.user.id;
  };
  componentDidMount() {

    // initialise
//    headroom.init();
    window.addEventListener('scroll', this.handleScroll);
  }
  onClickLogout = e => {
    this.props.dispatch(logoutAuth());
    this.props.history.push('/');
  };

  toggleCollapse = () => {
    this.setState(state => ({ collapse: !state.collapse }));
  };

  handleClick = () => {
    if (!this.state.isMobile) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }
    this.setState(prevState => ({
      isMobile: !prevState.isMobile
    }));
  };

  handleOutsideClick = e => {
    if (this.node && this.node.contains(e.target)) {
      return;
    }
    this.handleClick();
  };

  closeMenu = () => {
    this.setState({ isMobile: false });
    document.removeEventListener('click', this.handleOutsideClick, false);
  };

  onScroll = e => {
    let height = document.getElementById(e);
    window.scrollTo(0, height.offsetTop - 200);
    this.setState({
      isMobile: false
    });
    document.removeEventListener('click', this.handleOutsideClick, false);
  };
logout (){
    console.log('hello')
    this.setState({
        freelancerLoggedin:false
    })
}
  render() {
    const { page, scrolled } = this.state;
    const { aboutUs } = this.props;
    const backgroundColor = aboutUs ? { backgroundColor: 'transparent' } : {};
    const scrolledCheck = aboutUs && scrolled ? 'scrolled' : '';
    const colorTagA = aboutUs ? 'Navbar__Menu__Item_Aboutus' : 'Navbar__Menu__Item';
    
    return (
        <header className="header-global 	">
          <ZooNavBar
            className=" mobile-hide navbar-main navbar-transparent navbar-light headroom pb-0 pl-0 pr-0 "
            expand="lg"
            id="navbar-main"
          >
            { page != 'classroompage' && page != "coursepage" ?
              (
                <Container fluid className="ml-md-lg mr-md-lg">
                <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                  <img className="h-110"
                    alt="..."
                    src={require('../../assets/images/logo-1.png')}
                  />
                </NavbarBrand>
                <button className="navbar-toggler" id="navbar_global">
                  <span className="navbar-toggler-icon" />
                </button>
                <UncontrolledCollapse navbar toggler="#navbar_global">
                  <div className="navbar-collapse-header">
                    <Row>
                      <Col className="collapse-brand" xs="6">
                        <Link to="/">
                          <img
                            alt="..."
                            src={require('../../assets/images/logo-1.png')}
                          />
                        </Link>
                      </Col>
                      <Col className="collapse-close" xs="6">
                        <button className="navbar-toggler" id="navbar_global">
                          <span />
                          <span />
                        </button>
                      </Col>
                    </Row>
                  </div>
  
                      {page === 'students' && (
                        
                        <Nav className="navbar-nav-hover align-items-lg-center w-100" navbar>
                          <NavItem>
                              <Link className="nav-link-icon f-14 font-weight-600 my-family text-dark" to="/admin">Admin</Link>
  
                    </NavItem>
                      <NavItem>
                          <Link className="nav-link-icon f-14 font-weight-600 my-family text-dark" to="/studentpage">Job Boards</Link>
                    </NavItem>
                    <NavItem>
                          <Link className="nav-link-icon f-14 font-weight-600 my-family text-dark" to="/blog">Blogs</Link>
                    </NavItem>
                      <NavItem>
                          <Link className="nav-link-icon f-14 font-weight-600 my-family text-dark" to="/events">Events</Link>
                    </NavItem>
                              {!this.state.freelancerLoggedin
                      ?
                      <NavItem>
                          <Link className="nav-link-icon f-14 font-weight-600 my-family text-yellow" to="/employer">Employer</Link>
                    </NavItem>
                                :null}
                        
                          <NavItem className="ml-auto">
                              <Modal content={<CVDoctorContent />} className="ModalCVDoctor">
                                  <span className="Navbar__Menu__Cv">
                                    <span className="cv-doctor f-15 my-family-medium font-weight-500">
                                        <img alt="" className="doc_img cv-doc" src={require("../../assets/images/document.png")} />
                                        <img alt="" className="circle-upload cv-doc" src={require("../../assets/images/circle_upload.png")} />
                                        CV Doctor
                                    </span>
                                  </span>
                            </Modal>
                          </NavItem>
                          <NavItem className="">
                            {/*<Modal content={<LoginContent  />} className="ModalLogin">
                            <a className="nav-link-icon text-dark">Login</a>
  
                            </Modal>
                            */}
                               {this.state.page === 'students' ? (
                               <Link to="/studentpage" className="nav-link-icon  text-dark">Login</Link>
                                    ):
                                (
                                 <Link to="/employerprofile" className=" nav-link-icon text-dark">Login</Link>
                                )}
                          </NavItem>
                          {this.state.page === 'students' ? (
                                <span className="signup-btn  px-3">
                                <NavItem className=" mt-2 text-center text-white f-14   my-family-bold ">
                                          <Modal isKeepShow content={<SignupFreelancer />} className="ModalSignup">
                                      Sign Up
                                          </Modal>
                                </NavItem>
                                </span>
                                      ):
                                  (
                                   <span className="signup-btn  px-3">
                                <NavItem className=" mt-2 text-center text-white f-14   my-family-bold ">
                                          <Modal content={<SignupEmployer step={0} signup={true} />} className="ModalSignup">
                                      Sign Up
                                          </Modal>
                               </NavItem>
                                </span>
                            )}
                          </Nav>
                          
                          )}
                      {page === 'employer' && (
                       
                                <Nav className="navbar-nav-hover align-items-lg-center w-100" navbar>
                          <NavItem>
                      <Link className="nav-link-icon f-14 font-weight-600 my-family text-dark" to="/admin">Admin</Link>
                    </NavItem>
                      <NavItem>
                          <Link className="nav-link-icon f-14 font-weight-600 my-family text-dark" to="/events">Events</Link>
  
                    </NavItem>
                          <NavItem>
                      <Link className="nav-link-icon f-14 font-weight-600 my-family text-yellow" to="/students">Students</Link>
  
                    </NavItem>
                           
                          <NavItem className="ml-auto">
                              <Modal content={<CVDoctorContent />} className="ModalCVDoctor">
                                  <span className="Navbar__Menu__Cv">
                                    <span className="cv-doctor f-15 my-family-medium font-weight-500">
                                        <img alt="" className="doc_img cv-doc" src={require("../../assets/images/document.png")} />
                                        <img alt="" className="circle-upload cv-doc" src={require("../../assets/images/circle_upload.png")} />
                                        CV Doctor
                                    </span>
                                  </span>
                            </Modal>
                          </NavItem>
                          <NavItem className="">
                            {/*<Modal content={<LoginContent  />} className="ModalLogin">
                            <a className="nav-link-icon text-dark">Login</a>
  
                            </Modal>
                            */}
                               {this.state.page === 'students' ? (
                               <Link to="/studentpage" className="nav-link-icon  text-dark">Login</Link>
                                    ):
                                (
                                 <Link to="/employerprofile" className=" nav-link-icon text-dark">Login</Link>
                                )}
                          </NavItem>
                          {this.state.page === 'students' ? (
                                <span className="signup-btn  px-3">
                                <NavItem className=" mt-2 text-center text-white f-14   my-family-bold ">
                                          <Modal isKeepShow content={<SignupFreelancer />} className="ModalSignup">
                                      Sign Up
                                          </Modal>
                                </NavItem>
                                </span>
                                      ):
                                  (
                                   <span className="signup-btn  px-3">
                                <NavItem className=" mt-2 text-center text-white f-14   my-family-bold ">
                                          <Modal content={<SignupEmployer step={0} signup={true} />} className="ModalSignup">
                                      Sign Up
                                          </Modal>
                               </NavItem>
                                </span>
                            )}
                          </Nav>
                         
                          )}
                    {/*{this.state.freelancerLoggedin */}
                    { page != 'studentpage' && page != 'employerpage' && page != 'employer' && page != 'students'
                      ?
                        (
                        <Nav className="row w-100">
                            {page === 'students' || page === 'studentpage' || page === 'studentprofile' || page === 'studentreviews' || page === 'my-jobs-detail-student' || page === 'mypaymentmethodsstudent' || page === 'edit-profile-student' || page === 'my-memberships' || page === 'my-invoices-student'
              ?
                        <div className=" col-md-12 row">
                        <div className="col-md-6">
                        <NavItem className="col-md-7 ml-auto mr-auto">
                            
                      <Link className="text-center nav-link-icon" to="/admin"><span className="  f-13 my-family-medium text-dark">Student</span> <span className="linebreak my-family-light text-left f-32 text-black">Eugen Bardill</span></Link>
                    </NavItem>
                    </div>
                        <NavItem className="col-md-2">
                      <Link className="nav-link-icon f-13 my-family-medium  text-dark" to="/admin"><span className="f-32">. </span> My Application</Link>
                    </NavItem>
                        <NavItem className="col-md-2">
                      <Link className="nav-link-icon f-13 my-family-medium  text-dark" to="/admin"><span className="f-32">. </span> My Settings</Link>
                    </NavItem>
                        <NavItem className="col-md-2">
                      <Link className="nav-link-icon f-13 my-family-medium  text-dark" to="/admin"> <span className="f-32">. </span> My Jobs</Link>
                    </NavItem>
                            </div>
                  :
                            <div className="col-md-12 row">
                        <div className="col-md-4">
                        <NavItem className="col-md-9 ml-auto mr-auto">
                            
                      <Link className="text-center nav-link-icon" to="/admin"><span className=" my-family-light f-32 text-black">Eugen Bardill</span><span className=" text-left linebreak f-13 my-family-medium text-dark">San Francisco</span> </Link>
                    </NavItem>
                    </div>
                        <NavItem className="col-md-2">
                      <Link className="nav-link-icon f-13 my-family-medium  text-dark" to="/admin"><span className="f-32">. </span> Manage My Job</Link>
                    </NavItem>
                        <NavItem className="col-md-2">
                      <Link className="nav-link-icon f-13 my-family-medium  text-dark" to="/admin"><span className="f-32">. </span> Payments</Link>
                    </NavItem>
                        <NavItem className="col-md-2">
                      <Link className="nav-link-icon f-13 my-family-medium  text-dark" to="/admin"> <span className="f-32">. </span> My Jobs</Link>
                    </NavItem>
                       <NavItem className="col-md-2">
                      <Link className="nav-link-icon f-13 my-family-medium  text-dark" to="/admin"> <span className="f-32">. </span> Settings</Link>
                    </NavItem>
                            </div>
                            }
                            </Nav>
                          
                    ): page != 'employer' && page != 'students'
                    ?
                      (
                      <Nav className="align-items-lg-center ml-lg-auto" navbar>
                            <UncontrolledDropdown nav>
                      <DropdownToggle nav>
                       <img
                        alt="..."
                        className=""
                        src={require("../../assets/message.png")}
                      />
                      </DropdownToggle>
                      <DropdownMenu className="mt-lg ml-lg-n3 w-320 noti-bg-dark">
                          <Row className="py-2" >
                             <div className="col-3">
                               <img
                                alt="..."
                                className="ml-2 circle-noti img-center img-fluid shadow shadow-lg--hover"
                                src={require("../../assets/img/theme/team-1-800x800.jpg")}
                              />
                              </div>
                              <div className="col-6">
                                  <span className="primary-color-text f-14 ">New message from</span>
                                  <p className="text-white f-12 "> David Warner</p>
                              </div>
                                  <div className="col-3">
                                  <span className="text-muted f-9 ">12:20 pm</span>
                              </div>
                          </Row>
                          <hr className=" h-1 hr-bg mt-0 mb-1 mx-2" />
                          <Row className="py-2" >
                             <div className="col-3">
                               <img
                                alt="..."
                                className="ml-2 circle-noti img-center img-fluid shadow shadow-lg--hover"
                                src={require("../../assets/img/theme/team-1-800x800.jpg")}
                              />
                              </div>
                              <div className="col-6">
                                  <span className="primary-color-text f-14 ">New message from</span>
                                  <p className="text-white f-12 "> David Warner</p>
                              </div>
                                  <div className="col-3">
                                  <span className="text-muted f-9 ">12:20 pm</span>
                              </div>
                          </Row>
                          <hr className=" h-1 hr-bg mt-0 mb-1 mx-2" />
                          <Row className="py-2" >
                             <div className="col-3">
                               <img
                                alt="..."
                                className="ml-2 circle-noti img-center img-fluid shadow shadow-lg--hover"
                                src={require("../../assets/img/theme/team-1-800x800.jpg")}
                              />
                              </div>
                              <div className="col-6">
                                  <span className="primary-color-text f-14 ">New message from</span>
                                  <p className="text-white f-12 "> David Warner</p>
                              </div>
                                  <div className="col-3">
                                  <span className="text-muted f-9 ">12:20 pm</span>
                              </div>
                          </Row>
                          <hr className=" h-1 hr-bg mt-0 mb-1 mx-2" />
                          <Row className="py-2" >
                             <div className="col-3">
                               <img
                                alt="..."
                                className="ml-2 circle-noti img-center img-fluid shadow shadow-lg--hover"
                                src={require("../../assets/img/theme/team-1-800x800.jpg")}
                              />
                              </div>
                              <div className="col-6">
                                  <span className="primary-color-text f-14 ">New message from</span>
                                  <p className="text-white f-12 "> David Warner</p>
                              </div>
                                  <div className="col-3">
                                  <span className="text-muted f-9 ">12:20 pm</span>
                              </div>
                          </Row>
                          <hr className=" h-1 hr-bg mt-0 mb-1 mx-2" />
  
                             <Row >
  
  
                              <div className="col-12">
                               <NavItem className="text-center">
                          <Link className="nav-link-icon text-white" to="/messages">See all messages</Link>
                    </NavItem>
                          </div>
  
                          </Row>
  
  
                      </DropdownMenu>
                    </UncontrolledDropdown>
                            <UncontrolledDropdown nav className="pr-5">
                      <DropdownToggle nav>
                       <img
                        alt="..."
                        className=""
                        src={require("../../assets/notify.png")}
                      />
                      </DropdownToggle>
                      <DropdownMenu className="mt-lg ml-lg-n3 w-320 noti-bg-dark">
                          <Row className="mt-1 py-2">
                               <div className="col-3">
                               <img
                                    alt="..."
                                    className="ml-2 circle-noti img-center img-fluid "
                                    src={require("../../assets/img/theme/team-1-800x800.jpg")}
                                  />
                          </div>
                          <div className="col-9">
                                <div className="col-12"><span className="text-white f-15">Jonathan Jones</span></div>
                                <div className="col-12"><span className="primary-color-text f-13">Send Job Request For You</span></div>
                                <div className="col-12"><span className="text-muted f-10">5 min ago</span></div>
                          </div>
                          </Row>
                           <hr className="text-muted h-1 hr-bg mt-0 mb-1 mx-2" />
                          <Row className="mt-1 py-2">
                               <div className="col-3">
                               <img
                                    alt="..."
                                    className="ml-2 circle-noti img-center img-fluid "
                                    src={require("../../assets/img/theme/team-1-800x800.jpg")}
                                  />
                          </div>
                          <div className="col-9">
                                <div className="col-12"><span className="text-white f-15">Jonathan Jones</span></div>
                                <div className="col-12"><span className="primary-color-text f-13">Send Job Request For You</span></div>
                                <div className="col-12"><span className="text-muted f-10">5 min ago</span></div>
                          </div>
                          </Row>
                           <hr className="text-muted h-1 hr-bg mt-0 mb-1 mx-2" />
                          <Row className="mt-1 py-2">
                               <div className="col-3">
                               <img
                                    alt="..."
                                    className="ml-2 circle-noti img-center img-fluid "
                                    src={require("../../assets/img/theme/team-1-800x800.jpg")}
                                  />
                          </div>
                          <div className="col-9">
                                <div className="col-12"><span className="text-white f-15">Jonathan Jones</span></div>
                                <div className="col-12"><span className="primary-color-text f-13">Send Job Request For You</span></div>
                                <div className="col-12"><span className="text-muted f-10">5 min ago</span></div>
                          </div>
                          </Row>
                           <hr className="text-muted h-1 hr-bg mt-0 mb-1 mx-2" />
  
                          <Row >
                              <div className="col-12">
                               <NavItem className="text-center">
                          <Link className="nav-link-icon text-white" to="/notifications">See all notifications</Link>
                    </NavItem>
                          </div>
  
                          </Row>
  
  
  
  
                      </DropdownMenu>
                    </UncontrolledDropdown>
                            <UncontrolledDropdown nav >
                      <DropdownToggle nav>
                       <img
                        alt="..."
                        className="rounded-circle img-center border-zoo img-fluid shadow shadow-lg--hover h-70"
                        src={require("../../assets/img/theme/team-1-800x800.jpg")}
                      />
                      </DropdownToggle>
                      <DropdownMenu className="mt-lg noti-bg-dark ">
                        <DropdownItem to="/studentprofile" className="primary-color-text" tag={Link}>
                          My Profile
                        </DropdownItem>
                        <DropdownItem to="/my-jobs" className="primary-color-text"   tag={Link}>
                          My Jobs
                        </DropdownItem>
                        <DropdownItem to="/edit-profile"  className="primary-color-text"  tag={Link}>
                          Settings
                        </DropdownItem>
                             <DropdownItem to="/"  className="primary-color-text"  tag={Link}>
                          Logout
                        </DropdownItem>  
  
                      </DropdownMenu>
                    </UncontrolledDropdown>  
  
                        </Nav>
                   
                        ):null
                      }
  
                </UncontrolledCollapse>
              </Container>
              ):(<div>
                  <ZooNavBar
                  className=" mobile-hide navbar-main navbar-transparent navbar-light headroom"
                  expand="lg"
                  id="navbar-main"                  
                  >
                <Container fluid className="ml-md-lg mr-md-lg">
                <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                  <img className="h-56"
                    alt="..."
                    src={require('../../assets/images/logo.png')}
                  />
                </NavbarBrand>
                <button className="navbar-toggler" id="navbar_global">
                  <span className="navbar-toggler-icon" />
                </button>
                {page == "coursepage" ?         
                  <div className="offset-md-4 p-2">
                    <div>
                      <FaSearch type="search" size={25} color={"black"} />
                      <input className="ml-3" placeholder="Search for a course" />
                    </div>
                  </div>: <div></div>}
                
                <UncontrolledCollapse navbar toggler="#navbar_global">
                  <Nav className="align-items-lg-center ml-lg-auto" navbar>
                    <UncontrolledDropdown nav>
                      <DropdownToggle nav>
                       <img
                        alt="..."
                        className=""
                        src={require("../../assets/message-notify.png")}
                      />
                      </DropdownToggle>
                      <DropdownMenu className="mt-md ml-md-n4 w-320 noti-bg-dark">
                          <Row className="py-2" >
                             <div className="col-3">
                               <img
                                alt="..."
                                className="ml-2 circle-noti img-center img-fluid shadow shadow-lg--hover"
                                src={require("../../assets/img/theme/team-1-800x800.jpg")}
                              />
                              </div>
                              <div className="col-6">
                                  <span className="primary-color-text f-14 ">New message from</span>
                                  <p className="text-white f-12 "> David Warner</p>
                              </div>
                                  <div className="col-3">
                                  <span className="text-muted f-9 ">12:20 pm</span>
                              </div>
                          </Row>
                          <hr className=" h-1 hr-bg mt-0 mb-1 mx-2" />
                          <Row className="py-2" >
                             <div className="col-3">
                               <img
                                alt="..."
                                className="ml-2 circle-noti img-center img-fluid shadow shadow-lg--hover"
                                src={require("../../assets/img/theme/team-1-800x800.jpg")}
                              />
                              </div>
                              <div className="col-6">
                                  <span className="primary-color-text f-14 ">New message from</span>
                                  <p className="text-white f-12 "> David Warner</p>
                              </div>
                                  <div className="col-3">
                                  <span className="text-muted f-9 ">12:20 pm</span>
                              </div>
                          </Row>
                          <hr className=" h-1 hr-bg mt-0 mb-1 mx-2" />
                          <Row className="py-2" >
                             <div className="col-3">
                               <img
                                alt="..."
                                className="ml-2 circle-noti img-center img-fluid shadow shadow-lg--hover"
                                src={require("../../assets/img/theme/team-1-800x800.jpg")}
                              />
                              </div>
                              <div className="col-6">
                                  <span className="primary-color-text f-14 ">New message from</span>
                                  <p className="text-white f-12 "> David Warner</p>
                              </div>
                                  <div className="col-3">
                                  <span className="text-muted f-9 ">12:20 pm</span>
                              </div>
                          </Row>
                          <hr className=" h-1 hr-bg mt-0 mb-1 mx-2" />
                          <Row className="py-2" >
                             <div className="col-3">
                               <img
                                alt="..."
                                className="ml-2 circle-noti img-center img-fluid shadow shadow-lg--hover"
                                src={require("../../assets/img/theme/team-1-800x800.jpg")}
                              />
                              </div>
                              <div className="col-6">
                                  <span className="primary-color-text f-14 ">New message from</span>
                                  <p className="text-white f-12 "> David Warner</p>
                              </div>
                                  <div className="col-3">
                                  <span className="text-muted f-9 ">12:20 pm</span>
                              </div>
                          </Row>
                          <hr className=" h-1 hr-bg mt-0 mb-1 mx-2" />
                          <Row >
                              <div className="col-12">
                               <NavItem className="text-center">
                          <Link className="nav-link-icon text-white" to="/messages">See all messages</Link>
                         </NavItem>
                          </div>
                          </Row>
                      </DropdownMenu>

                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav className="pr-5">
                      <DropdownToggle nav>
                        <img
                          alt="..."
                          className=""
                          src={require("../../assets/notify.png")}
                        />
                      </DropdownToggle>
                      <DropdownMenu className="mt-md ml-md-n3 w-320 noti-bg-dark">
                          <Row className="mt-1 py-2">
                            <div className="col-3">
                            <img
                                alt="..."
                                className="ml-2 circle-noti img-center img-fluid "
                                src={require("../../assets/img/theme/team-1-800x800.jpg")}
                            />
                            </div>
                            <div className="col-9">
                                  <div className="col-12"><span className="text-white f-15">Jonathan Jones</span></div>
                                  <div className="col-12"><span className="primary-color-text f-13">Send Job Request For You</span></div>
                                  <div className="col-12"><span className="text-muted f-10">5 min ago</span></div>
                            </div>
                          </Row>
                           <hr className="text-muted h-1 hr-bg mt-0 mb-1 mx-2" />
                          <Row className="mt-1 py-2">
                            <div className="col-3">
                            <img
                                alt="..."
                                className="ml-2 circle-noti img-center img-fluid "
                                src={require("../../assets/img/theme/team-1-800x800.jpg")}
                              />
                             </div>
                              <div className="col-9">
                                    <div className="col-12"><span className="text-white f-15">Jonathan Jones</span></div>
                                    <div className="col-12"><span className="primary-color-text f-13">Send Job Request For You</span></div>
                                    <div className="col-12"><span className="text-muted f-10">5 min ago</span></div>
                              </div>
                          </Row>
                           <hr className="text-muted h-1 hr-bg mt-0 mb-1 mx-2" />
                          <Row className="mt-1 py-2">
                               <div className="col-3">
                               <img
                                    alt="..."
                                    className="ml-2 circle-noti img-center img-fluid "
                                    src={require("../../assets/img/theme/team-1-800x800.jpg")}
                                  />
                              </div>
                              <div className="col-9">
                                <div className="col-12"><span className="text-white f-15">Jonathan Jones</span></div>
                                <div className="col-12"><span className="primary-color-text f-13">Send Job Request For You</span></div>
                                <div className="col-12"><span className="text-muted f-10">5 min ago</span></div>
                              </div>
                          </Row>
                           <hr className="text-muted h-1 hr-bg mt-0 mb-1 mx-2" />
                          <Row >
                              <div className="col-12">
                               <NavItem className="text-center">
                                 <Link className="nav-link-icon text-white" to="/notifications">See all notifications</Link>
                               </NavItem>
                              </div>
                          </Row>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav >
                      <DropdownToggle nav>
                       <img
                        alt="..."
                        className="rounded-circle img-center border-zoo img-fluid shadow shadow-lg--hover h-45"
                        src={require("../../assets/img/theme/team-1-800x800.jpg")}
                      />
                      </DropdownToggle>
                      <DropdownMenu className="mt-md ml-md-n2 noti-bg-dark ">
                        <DropdownItem to="/studentprofile" className="primary-color-text" tag={Link}>
                          My Profile
                        </DropdownItem>
                        <DropdownItem to="/my-jobs" className="primary-color-text"   tag={Link}>
                          My Jobs
                        </DropdownItem>
                        <DropdownItem to="/edit-profile"  className="primary-color-text"  tag={Link}>
                          Settings
                        </DropdownItem>
                             <DropdownItem to="/"  className="primary-color-text"  tag={Link}>
                          Logout
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>                                 
                  </Nav>
                </UncontrolledCollapse>
                </Container>
                </ZooNavBar>
             
                </div>
              ) }
         
          </ZooNavBar>
          <ZooNavBar
            className=" mobile-show navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            { page != 'students' && page != 'employer'
              ?
                (
                  <Container fluid className="ml-md-lg mr-md-lg">
                    <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                      <img className="h-70"
                        alt="..."
                        src={require('../../assets/images/logo-1.png')}
                      />
                    </NavbarBrand>

            <div id="navbar_globalmobile">
             <img
              alt="..."
              className="rounded-circle img-center border-zoo img-fluid shadow shadow-lg--hover h-55"
              src={require("../../assets/img/theme/team-1-800x800.jpg")}
            />
          </div>
          <UncontrolledCollapse navbar toggler="#navbar_globalmobile">
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to="/">
                      <img
                        alt="..."
                        src={require('../../assets/images/logo-1.png')}
                      />
                    </Link>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button className="navbar-toggler" id="navbar_globalmobile">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <NavItem>
                      <Link className="nav-link-icon text-dark" to="/studentprofile">My Profile</Link>

                </NavItem>
                  <NavItem>
                      <Link className="nav-link-icon text-dark" to="/my-jobs">My Jobs</Link>

                </NavItem>
                  <NavItem>
                      <Link className="nav-link-icon text-dark"  to="/edit-profile">Settings</Link>

                </NavItem>
                  <NavItem>
                      <Link className="nav-link-icon text-dark" to="/">Logout</Link>

                </NavItem>
              </Nav>
          </UncontrolledCollapse>

        </Container>
                )
                :(
            <Container fluid className="ml-md-lg mr-md-lg">
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img className="h-70"
                  alt="..."
                  src={require('../../assets/images/logo-1.png')}
                />
              </NavbarBrand>
              {this.state.page === 'students' ? (
                    <NavItem className="btn btn-primary  badge-pill  f-12  my-family primary-color">
                              <Modal isKeepShow content={<SignupFreelancer />} className="ModalSignup">
                          Sign Up
                              </Modal>
                    </NavItem>
                          ):
                      (
                      <NavItem className="btn btn-primary badge-pill  f-12    my-family primary-color">
                              <Modal content={<SignupEmployer step={0} signup={true} />} className="ModalSignup">
                          Sign Up
                              </Modal>
                    </NavItem>
                )}
             

              <button className="navbar-togglermobile " id="navbar_globalmobile">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse navbar toggler="#navbar_globalmobile">
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={require('../../assets/images/logo-1.png')}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_globalmobile">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                    {page === 'students' && (
                      <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                        <NavItem>
                            <Link className="nav-link-icon text-dark" to="/about-us">Why Zoo Town Tasks?</Link>

                  </NavItem>
                    <NavItem>
                        <Link className="nav-link-icon text-dark" to="/jobs">Job Boards</Link>
                  </NavItem>
                    <NavItem>
                        <Link className="nav-link-icon text-dark" to="/blog">Blogs</Link>
                  </NavItem>
                    <NavItem>
                        <Link className="nav-link-icon text-dark" to="/events">Events</Link>
                  </NavItem>
                            {!this.state.freelancerLoggedin
                    ?
                    <NavItem>
                                                <Link className="nav-link-icon text-yellow" to="/employer">Employer</Link>
                  </NavItem>
                              :null}
                      </Nav>
                        )}
                    {page === 'employer' && (
                              <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                        <NavItem>
                    <Link className="nav-link-icon text-dark" to="/about-us">Why Zoo Town Tasks?</Link>
                  </NavItem>
                    <NavItem>
                        <Link className="nav-link-icon text-dark" to="/events">Events</Link>
                  </NavItem>
                        <NavItem>
                    <Link className="nav-link-icon text-dark" to="/students">Students</Link>
                  </NavItem>
                          </Nav>
                        )}
              </UncontrolledCollapse>
            </Container>
          )
        }
          </ZooNavBar>
         </header>
    );
  }
}

const mapStateToprops = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};

export default withRouter(
  connect(
    mapStateToprops,
    mapDispatchToProps
  )(Navbar)
);

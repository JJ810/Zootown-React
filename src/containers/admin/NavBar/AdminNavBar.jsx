import React from 'react';
import { _url } from '../../../config/utils';
import { Link } from 'react-router-dom';
import Headroom from "headroom.js";
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
import { Modal, SignupFreelancer, LoginContent, CVDoctorContent, SignupEmployer, ChoosePlanEmployer } from '../../../components/UI/modal';
import { connect } from 'react-redux';
import { logoutAuth } from '../../../actions/auth';
import { withRouter } from 'react-router';
 let headroom = new Headroom(document.getElementById("navbar-main"));
class AdminNavbar extends React.Component {
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
        <header className="header-global">
          <ZooNavBar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container fluid className="ml-md-lg mr-md-lg">
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img className="h-110"
                  alt="..."
                  src={require('../../../assets/images/logo-1.png')}
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
                          src={require('../../../assets/images/logo-1.png')}
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
                      <Nav className="align-items-lg-center ml-lg-auto" navbar>
                          <UncontrolledDropdown nav >
                            <DropdownToggle nav>
                             <img
                              alt="..."
                              className="rounded-circle img-center border-zoo img-fluid shadow shadow-lg--hover h-70"
                              src={require("../../../assets/img/theme/team-1-800x800.jpg")}
                            /> 
                            </DropdownToggle>
                            <DropdownMenu className="mt-lg noti-bg-dark ">
                              <DropdownItem to="/admin-setting"  className="primary-color-text"  tag={Link}>
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
  )(AdminNavbar)
);

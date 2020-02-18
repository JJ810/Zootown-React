import React from 'react';
import { Footer, Header } from '../components/index';
import {
  ProfileSideBar,
  StudentSideBar,
  OurServicesSection,
  PricePlan,
  StudentJumbotron,
  BlogSection,
  BenefitsSection,
  Reviews,
} from '../components/home';
import gpl from 'graphql-tag';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { Switch, Icon, Checkbox } from 'antd';
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
  Container,
} from 'reactstrap';
import classnames from 'classnames';
import { graphql } from 'react-apollo';
import { getPlans } from '../actions/plans';
import { connect } from 'react-redux';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import '../assets/css/job.css';
class MyJobsDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: props.page,
      iconTabs: 1,
      plainTabs: 1,
      filter: false,
    };
  }
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index,
    });
  };

  showfilter() {
    this.setState({
      filter: true,
    });
  }
  hidefilter() {
    this.setState({
      filter: false,
    });
  }

  componentDidMount() {}

  render() {
    const { page } = this.state;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    const settingrecommendation = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 2,
      slidesToScroll: 1,
    };
    var style = {
      fontSize: 16,
    };
    return (
      <div>
        <Header parent="home" page={page} />
        <main ref="main">
          <section>
            <Container fluid>
              <Row>
                <StudentSideBar page={page} />
                <Col className="mt-5" md="9">
                  <Row>
                    <Col md={4} className="mr-auto">
                      <h3>
                        <b>MANAGE MY JOB</b>
                      </h3>
                    </Col>
                    <Col md={2} className="ml-auto">
                      <UncontrolledDropdown nav>
                        <DropdownToggle nav>
                          <img
                            className="w-30-icon"
                            src={require('../assets/settings-cogwheel-button.png')}
                          />
                        </DropdownToggle>
                        <DropdownMenu className=" primary-color">
                          <DropdownItem to="/studentprofile" tag={Link}>
                            My Profile
                          </DropdownItem>
                          <DropdownItem to="/my-jobs" tag={Link}>
                            My Jobs
                          </DropdownItem>
                          <DropdownItem to="/my-settings" tag={Link}>
                            Settings
                          </DropdownItem>
                          <DropdownItem to="/login-page" tag={Link}>
                            Logout
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={8} className="mr-auto">
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
                              className={classnames('mb-sm-3 mb-md-0 f-16 ', {
                                active: this.state.plainTabs === 1,
                              })}
                              style={style}
                              onClick={e => this.toggleNavs(e, 'plainTabs', 1)}
                              href="#pablo"
                              role="tab"
                            >
                              PROJECT DESCRIPTION
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              aria-selected={this.state.plainTabs === 2}
                              className={classnames('mb-sm-3 mb-md-0 f-16', {
                                active: this.state.plainTabs === 2,
                              })}
                              onClick={e => this.toggleNavs(e, 'plainTabs', 2)}
                              href="#pablo"
                              role="tab"
                            >
                              MESSAGE & FILES
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </div>
                    </Col>
                    <Col md={12}>
                      <Card className="border-0">
                        <CardBody>
                          <TabContent
                            activeTab={'plainTabs' + this.state.plainTabs}
                          >
                            <TabPane tabId="plainTabs1">
                              <Row>
                                <Col md={3}>
                                  <p className="f-12 text-muted-jobs font-weight-600">
                                    COMPANY NAME
                                  </p>
                                  <p className="mt-4">
                                    <img
                                      className="w-35-icon"
                                      src={require('../assets/images/employer/1.png')}
                                    />
                                    <span className="f-16 font-weight-400 text-black ml-3">
                                      {' '}
                                      Plum Guide
                                    </span>
                                  </p>
                                </Col>
                                <Col md={3}>
                                  <p className="f-12 text-muted-jobs font-weight-600">
                                    JOB TITLE
                                  </p>
                                  <p className="mt-4">
                                    <span className="f-16 font-weight-400 text-black ">
                                      {' '}
                                      Wordpress Designer
                                    </span>
                                  </p>
                                </Col>
                                <Col md={3}>
                                  <p className="f-12 text-muted-jobs font-weight-600">
                                    PROJECT STATUS
                                  </p>
                                  <p className="mt-4">
                                    <span className="f-16 font-weight-400 text-black ">
                                      {' '}
                                      Wordpress Designer
                                    </span>
                                  </p>
                                </Col>
                                <Col md={3}>
                                  <p className="f-12 text-muted-jobs font-weight-600">
                                    EARNINGS
                                  </p>
                                  <p className="mt-4">
                                    <span className="f-16 font-weight-400 text-black ">
                                      $4500.00
                                    </span>
                                  </p>
                                </Col>
                              </Row>
                              <Row className="mt-5">
                                <Col md={12}>
                                  <p className="f-12 text-muted-jobs font-weight-600">
                                    PROJECT DESCRIPTION
                                  </p>
                                  <p className="mt-4 text-black">
                                    This role will play an important role in
                                    growing our international network of content
                                    creators. Working within a small This role
                                    will play an important role in growing our
                                    international network of content creators.
                                    Working within a small This role will play
                                    an important role in growing our
                                    international network of content creators.
                                    Working within a small This role will play
                                    an important role in growing our
                                    international network of content creators.
                                    Working within a small This role will play
                                    an important role in growing our
                                    international network of content creators.
                                  </p>
                                </Col>
                              </Row>
                            </TabPane>
                            <TabPane tabId="plainTabs2">
                              <Row>
                                <Col md={3}>
                                  <p className="f-12 text-muted-jobs font-weight-600">
                                    COMPANY NAME
                                  </p>
                                  <p className="mt-4">
                                    <img
                                      className="w-35-icon rounded-circle"
                                      src={require('../assets/images/employer/1.png')}
                                    />
                                    <span className="f-16 font-weight-400 text-black ml-3">
                                      {' '}
                                      Plum Guide
                                    </span>
                                  </p>
                                </Col>
                                <Col md={3}>
                                  <p className="f-12 text-muted-jobs font-weight-600">
                                    JOB TITLE
                                  </p>
                                  <p className="mt-4">
                                    <span className="f-16 font-weight-400 text-black ">
                                      {' '}
                                      Wordpress Designer
                                    </span>
                                  </p>
                                </Col>
                                <Col className="ml-auto" md={3}>
                                  <Row>
                                    <Col md={4}>
                                      <div className="primary-color w-50-icon radius-50 ">
                                        <img
                                          className="w-30-icon rounded-circle mt-2 "
                                          src={require('../assets/videocam-filled-tool.png')}
                                        />
                                      </div>
                                    </Col>
                                    <Col md={4}>
                                      <div className="primary-color w-50-icon radius-50 ">
                                        <img
                                          className="w-30-icon rounded-circle mt-2 "
                                          src={require('../assets/telephone.png')}
                                        />
                                      </div>
                                    </Col>
                                    <Col md={4}>
                                      <div className=" w-50-icon ">
                                        <img
                                          className="w-35-icon mt-2 "
                                          src={require('../assets/folder.png')}
                                        />
                                      </div>
                                    </Col>
                                  </Row>
                                </Col>
                              </Row>
                              <Row>
                                <Col md={12}>
                                  <Card className="card-small mb-4 border-0">
                                    <CardHeader className="border-bottom text-muted-jobs bg-white border-top border-right-0 border-left-0">
                                      <p className="m-0 font-weight-600">
                                        {' '}
                                        Yesterday
                                      </p>
                                    </CardHeader>
                                    <CardBody>
                                      <div
                                        className="scrollbar style-3"
                                        id="messanger"
                                      >
                                        <div className="force-overflow inner">
                                          <div className="receive">
                                            <p className="mt-4">
                                              <img
                                                className="w-35-icon rounded-circle"
                                                src={require('../assets/images/employer/1.png')}
                                              />
                                              <span className="f-17 font-weight-500 text-black ml-3">
                                                {' '}
                                                Plum Guide
                                              </span>
                                            </p>
                                            <p className="ml-5 f-15 text-recom">
                                              {' '}
                                              Hello
                                            </p>
                                            <p className="ml-5 f-15 text-recom">
                                              {' '}
                                              Hello, How are You?
                                            </p>
                                            <p className="ml-5 f-15 text-recom">
                                              {' '}
                                              Hello , You there
                                            </p>
                                          </div>
                                          <div className="sent">
                                            <p className="mt-4">
                                              <img
                                                className="w-35-icon rounded-circle"
                                                src={require('../assets/img/theme/team-1-800x800.jpg')}
                                              />
                                              <span className="f-17 font-weight-500 text-black ml-3">
                                                {' '}
                                                Plum Guide
                                              </span>
                                            </p>
                                            <p className="ml-5 f-15 text-recom">
                                              {' '}
                                              Hello
                                            </p>
                                            <p className="ml-5 f-15 text-recom">
                                              {' '}
                                              I am fine
                                            </p>
                                            <p className="ml-5 f-15 text-recom">
                                              {' '}
                                              yes i am there
                                            </p>
                                          </div>
                                          <div className="receive">
                                            <p className="mt-4">
                                              <img
                                                className="w-35-icon rounded-circle"
                                                src={require('../assets/images/employer/1.png')}
                                              />
                                              <span className="f-17 font-weight-500 text-black ml-3">
                                                {' '}
                                                Plum Guide
                                              </span>
                                            </p>
                                            <p className="ml-5 f-15 text-recom">
                                              {' '}
                                              Hello
                                            </p>
                                            <p className="ml-5 f-15 text-recom">
                                              {' '}
                                              Hello, How are You?
                                            </p>
                                            <p className="ml-5 f-15 text-recom">
                                              {' '}
                                              Hello , You there
                                            </p>
                                          </div>
                                          <div className="sent">
                                            <p className="mt-4">
                                              <img
                                                className="w-35-icon rounded-circle"
                                                src={require('../assets/img/theme/team-1-800x800.jpg')}
                                              />
                                              <span className="f-17 font-weight-500 text-black ml-3">
                                                {' '}
                                                Plum Guide
                                              </span>
                                            </p>
                                            <p className="ml-5 f-15 text-recom">
                                              {' '}
                                              Hello
                                            </p>
                                            <p className="ml-5 f-15 text-recom">
                                              {' '}
                                              I am fine
                                            </p>
                                            <p className="ml-5 f-15 text-recom">
                                              {' '}
                                              yes i am there
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </CardBody>
                                    <CardFooter className="pb-2 pt-2 border-top-0 px-3">
                                      <Row>
                                        <Col md={12}>
                                          <div className="input-group">
                                            <input
                                              type="text"
                                              className="py-4 form-control"
                                              onKeyUp={this.handlecomment}
                                              onChange={this.handlecommenting}
                                              value={this.state.commenting}
                                              placeholder="Write a message ...."
                                              aria-label="Recipient's username"
                                              aria-describedby="basic-addon2"
                                            />
                                            <input
                                              id="myInput"
                                              type="file"
                                              ref={ref => (this.upload = ref)}
                                              style={{ display: 'none' }}
                                            />
                                            <div className="ml-2 input-group-append">
                                              <button
                                                type="button"
                                                primary={false}
                                                onClick={() => {
                                                  this.upload.click();
                                                }}
                                              >
                                                <img
                                                  className="w-30-icon"
                                                  src={require('../assets/smile.png')}
                                                />
                                              </button>
                                            </div>
                                            <div className="ml-2 input-group-append">
                                              <button
                                                type="button"
                                                primary={false}
                                                onClick={() => {
                                                  this.upload.click();
                                                }}
                                              >
                                                <img
                                                  className="w-30-icon"
                                                  src={require('../assets/attach.png')}
                                                />
                                              </button>
                                            </div>
                                            <div className="ml-2 ">
                                              <button
                                                className="btn badge-pill w-150 font-weight-500 mt-2 primary-color"
                                                type="button"
                                                primary={false}
                                                onClick={() => {
                                                  this.upload.click();
                                                }}
                                              >
                                                Send
                                              </button>
                                            </div>
                                          </div>
                                        </Col>
                                      </Row>
                                    </CardFooter>
                                  </Card>
                                </Col>
                              </Row>
                            </TabPane>
                          </TabContent>
                        </CardBody>
                      </Card>
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
    plans: state.common.plans,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    dispatch,
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyJobsDetail);

import React from "react";
import { Footer, Header } from "../components/index";
import {
  ProfileSideBar,
  StudentSideBar,
  OurServicesSection,
  PricePlan,
  StudentJumbotron,
  BlogSection,
  BenefitsSection,
  Reviews
} from "../components/home";
import gpl from "graphql-tag";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Switch, Icon, Checkbox } from "antd";
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
import { graphql } from "react-apollo";
import { getPlans } from "../actions/plans";
import { connect } from "react-redux";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../assets/css/job.css";
class MyJobs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: props.page,
      iconTabs: 2,
      plainTabs: 2,
      togglestate: true,
      filter: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index
    });
  };

  showfilter() {
    this.setState({
      filter: true
    });
  }
  hidefilter() {
    this.setState({
      filter: false
    });
  }
  handleClick() {
    this.setState({
      togglestate: !this.state.togglestate
    });
    console.log(this.state.togglestate);
  }
  render() {
    const { page } = this.state;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    const settingrecommendation = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 2,
      slidesToScroll: 1
    };
    var style = {
      fontSize: 16
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
                    <Col md={6} className="mr-auto">
                      <Row>
                        <Col className="text-right ml-auto" md="12">
                          <Row>
                            <Col md={4} className="col-4">
                              <span
                                className={
                                  !this.state.togglestate
                                    ? "float-right f-15-xs text-black my-family-bold font-weight-700"
                                    : "float-right f-15-xs text-toggle my-family-bold font-weight-700"
                                }
                              >
                                MY PROJECTS
                              </span>
                            </Col>
                            <Col md={3} className="text-center col-3">
                              <label className=" custom-toggle">
                                <input
                                  defaultChecked
                                  type="checkbox"
                                  onClick={this.handleClick}
                                />
                                <span className="custom-toggle-slider " />
                              </label>
                            </Col>
                            <Col md={4} className="col-4">
                              <span
                                className={
                                  !this.state.togglestate
                                    ? "float-left f-15-xs text-toggle my-family-bold font-weight-700"
                                    : "float-left f-15-xs text-black my-family-bold font-weight-700"
                                }
                              >
                                MY JOBS
                              </span>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  {this.state.togglestate ? (
                    <Row>
                      <Col md={12}>
                        <table className="w-100 ">
                          <thead className="f-14-xs text-muted-jobs py-2 my-family-bold t-c">
                            <th className="h-56 w-30p">
                              <p className="f-10-mobile text-muted-jobs font-weight-700 my-family-bold">
                                {" "}
                                COMPANY NAME
                              </p>
                            </th>
                            <th className="w-20p">
                              <p className="f-10-mobile text-muted-jobs font-weight-700 my-family-bold">
                                JOB TITLE
                              </p>
                            </th>
                            <th className="w-20p">
                              <p className="f-10-mobile text-muted-jobs font-weight-700 my-family-bold">
                                SALARY
                              </p>
                            </th>
                            <th className="w-10p">
                              <p className="f-10-mobile text-muted-jobs font-weight-700 my-family-bold">
                                APPLICATION SUBMITTED
                              </p>
                            </th>
                            <th className="w-20p">
                              <p className="f-10-mobile text-muted-jobs font-weight-700 my-family-bold">
                                STATUS
                              </p>
                            </th>
                          </thead>
                          <tbody>
                            <tr className="h-56 ">
                              <td className="w-25p">
                                <Link to="/my-jobs-detail">
                                  <img
                                    className="w-30-icon-xs"
                                    src={require("../assets/images/employer/1.png")}
                                  />
                                  <span className="f-14-mobile my-family font-weight-400 text-black ml-3">
                                    {" "}
                                    Plum Guide
                                  </span>
                                </Link>
                              </td>
                              <td className="w-25p">
                                <span className="f-15-xs-xs font-weight-500 my-family-medium text-black ">
                                  {" "}
                                  Wordpress Designer
                                </span>
                              </td>
                              <td className="w-10p">
                                <span className="f-14-mobile my-family-medium font-weight-500 text-black ">
                                  $4500.00
                                </span>
                              </td>
                              <td className="w-25p">
                                <span className="f-14-mobile my-family font-weight-400 text-black ">
                                  23-01-2019
                                </span>
                              </td>
                              <td className="w-20p">
                                <button className="btn w-130-desk  new-color f-12-xs font-weight-400 my-family text-white ">
                                  New
                                </button>
                              </td>
                            </tr>
                            <tr className="h-56 ">
                              <td className="w-25p">
                                <Link to="/my-jobs-detail">
                                  <img
                                    className="w-30-icon-xs"
                                    src={require("../assets/images/employer/1.png")}
                                  />
                                  <span className="f-14-mobile my-family font-weight-400 text-black ml-3">
                                    {" "}
                                    Plum Guide
                                  </span>
                                </Link>
                              </td>
                              <td className="w-25p">
                                <span className="f-15-xs-xs font-weight-500 my-family-medium text-black ">
                                  {" "}
                                  Wordpress Designer
                                </span>
                              </td>
                              <td className="w-10p">
                                <span className="f-14-mobile my-family-medium font-weight-500 text-black ">
                                  $4500.00
                                </span>
                              </td>
                              <td className="w-25p">
                                <span className="f-14-mobile my-family font-weight-400 text-black ">
                                  23-01-2019
                                </span>
                              </td>
                              <td className="w-20p">
                                <button className="btn w-130-desk  inreview-color f-12-xs font-weight-400 my-family text-white ">
                                  In Review
                                </button>
                              </td>
                            </tr>
                            <tr className="h-56 ">
                              <td className="w-25p">
                                <Link to="/my-jobs-detail">
                                  <img
                                    className="w-30-icon-xs"
                                    src={require("../assets/images/employer/1.png")}
                                  />
                                  <span className="f-14-mobile my-family font-weight-400 text-black ml-3">
                                    {" "}
                                    Plum Guide
                                  </span>
                                </Link>
                              </td>
                              <td className="w-25p">
                                <span className="f-15-xs-xs font-weight-500 my-family-medium text-black ">
                                  {" "}
                                  Wordpress Designer
                                </span>
                              </td>
                              <td className="w-10p">
                                <span className="f-14-mobile my-family-medium font-weight-500 text-black ">
                                  $4500.00
                                </span>
                              </td>
                              <td className="w-25p">
                                <span className="f-14-mobile my-family font-weight-400 text-black ">
                                  23-01-2019
                                </span>
                              </td>
                              <td className="w-20p">
                                <button className="btn w-130-desk  completed-color f-12-xs font-weight-400 my-family text-white ">
                                  Completed
                                </button>
                              </td>
                            </tr>
                            <tr className="h-56 ">
                              <td className="w-25p">
                                <Link to="/my-jobs-detail">
                                  <img
                                    className="w-30-icon-xs"
                                    src={require("../assets/images/employer/1.png")}
                                  />
                                  <span className="f-14-mobile my-family font-weight-400 text-black ml-3">
                                    {" "}
                                    Plum Guide
                                  </span>
                                </Link>
                              </td>
                              <td className="w-25p">
                                <span className="f-15-xs-xs font-weight-500 my-family-medium text-black ">
                                  {" "}
                                  Wordpress Designer
                                </span>
                              </td>
                              <td className="w-10p">
                                <span className="f-14-mobile my-family-medium font-weight-500 text-black ">
                                  $4500.00
                                </span>
                              </td>
                              <td className="w-25p">
                                <span className="f-14-mobile my-family font-weight-400 text-black ">
                                  23-01-2019
                                </span>
                              </td>
                              <td className="w-20p">
                                <button className="btn w-130-desk  paid-color f-12-xs font-weight-400 my-family text-white">
                                  Paid
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </Col>
                    </Row>
                  ) : (
                    <Row>
                      <Col md={12}>
                        <table className="w-100 ">
                          <thead className="f-14-xs text-muted-jobs py-2 my-family-bold t-c">
                            <th className="h-56 w-30p">
                              <p className="f-10-mobile text-muted-jobs font-weight-700 my-family-bold">
                                {" "}
                                COMPANY NAME
                              </p>
                            </th>
                            <th className="w-30p">
                              <p className="f-10-mobile text-muted-jobs font-weight-700 my-family-bold">
                                JOB TITLE
                              </p>
                            </th>

                            <th className="w-25p">
                              <p className="f-10-mobile text-muted-jobs font-weight-700 my-family-bold">
                                STATUS
                              </p>
                            </th>
                            <th className="w-15p">
                              <p className="f-10-mobile text-muted-jobs font-weight-700 my-family-bold">
                                EARNINGS
                              </p>
                            </th>
                          </thead>
                          <tbody>
                            <tr className="h-56 ">
                              <td className="w-30p">
                                <Link to="/my-jobs-detail">
                                  <img
                                    className="w-30-icon-xs"
                                    src={require("../assets/images/employer/1.png")}
                                  />
                                  <span className="f-14-mobile my-family font-weight-400 text-black ml-3">
                                    {" "}
                                    Plum Guide
                                  </span>
                                </Link>
                              </td>
                              <td className="w-30p">
                                <span className="f-15-xs-xs font-weight-500 my-family-medium text-black ">
                                  {" "}
                                  Wordpress Designer
                                </span>
                              </td>

                              <td className="w-25p">
                                <button className="btn w-130-desk  new-color f-12-xs font-weight-400 my-family text-white ">
                                  New
                                </button>
                              </td>
                              <td className="w-15p">
                                <span className="f-14-mobile my-family-medium font-weight-500 text-black ">
                                  $4500.00
                                </span>
                              </td>
                            </tr>

                            <tr className="h-56 ">
                              <td className="w-30p">
                                <Link to="/my-jobs-detail">
                                  <img
                                    className="w-30-icon-xs"
                                    src={require("../assets/images/employer/1.png")}
                                  />
                                  <span className="f-14-mobile my-family font-weight-400 text-black ml-3">
                                    {" "}
                                    Plum Guide
                                  </span>
                                </Link>
                              </td>
                              <td className="w-30p">
                                <span className="f-15-xs-xs font-weight-500 my-family-medium text-black ">
                                  {" "}
                                  Wordpress Designer
                                </span>
                              </td>

                              <td className="w-25p">
                                <button className="btn w-130-desk  primary-color f-12-xs font-weight-400 my-family text-white ">
                                  In Progress
                                </button>
                              </td>
                              <td className="w-15p">
                                <span className="f-14-mobile my-family-medium font-weight-500 text-black ">
                                  $4500.00
                                </span>
                              </td>
                            </tr>

                            <tr className="h-56 ">
                              <td className="w-30p">
                                <Link to="/my-jobs-detail">
                                  <img
                                    className="w-30-icon-xs"
                                    src={require("../assets/images/employer/1.png")}
                                  />
                                  <span className="f-14-mobile my-family font-weight-400 text-black ml-3">
                                    {" "}
                                    Plum Guide
                                  </span>
                                </Link>
                              </td>
                              <td className="w-30p">
                                <span className="f-15-xs-xs font-weight-500 my-family-medium text-black ">
                                  {" "}
                                  Wordpress Designer
                                </span>
                              </td>

                              <td className="w-25p">
                                <button className="btn w-130-desk  inreview-color f-12-xs font-weight-400 my-family text-white ">
                                  In Review
                                </button>
                              </td>
                              <td className="w-15p">
                                <span className="f-14-mobile my-family-medium font-weight-500 text-black ">
                                  $4500.00
                                </span>
                              </td>
                            </tr>

                            <tr className="h-56 ">
                              <td className="w-30p">
                                <Link to="/my-jobs-detail">
                                  <img
                                    className="w-30-icon-xs"
                                    src={require("../assets/images/employer/1.png")}
                                  />
                                  <span className="f-14-mobile my-family font-weight-400 text-black ml-3">
                                    {" "}
                                    Plum Guide
                                  </span>
                                </Link>
                              </td>
                              <td className="w-30p">
                                <span className="f-15-xs-xs font-weight-500 my-family-medium text-black ">
                                  {" "}
                                  Wordpress Designer
                                </span>
                              </td>

                              <td className="w-25p">
                                <button className="btn w-130-desk  completed-color f-12-xs font-weight-400 my-family text-white ">
                                  Completed
                                </button>
                              </td>
                              <td className="w-15p">
                                <span className="f-14-mobile my-family-medium font-weight-500 text-black ">
                                  $4500.00
                                </span>
                              </td>
                            </tr>

                            <tr className="h-56 ">
                              <td className="w-30p">
                                <Link to="/my-jobs-detail">
                                  <img
                                    className="w-30-icon-xs"
                                    src={require("../assets/images/employer/1.png")}
                                  />
                                  <span className="f-14-mobile my-family font-weight-400 text-black ml-3">
                                    {" "}
                                    Plum Guide
                                  </span>
                                </Link>
                              </td>
                              <td className="w-30p">
                                <span className="f-15-xs-xs font-weight-500 my-family-medium text-black ">
                                  {" "}
                                  Wordpress Designer
                                </span>
                              </td>

                              <td className="w-25p">
                                <button className="btn w-130-desk  paid-color f-12-xs font-weight-400 my-family text-white ">
                                  Paid
                                </button>
                              </td>
                              <td className="w-15p">
                                <span className="f-14-mobile my-family-medium font-weight-500 text-black ">
                                  $4500.00
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </Col>
                    </Row>
                  )}
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
export default connect(mapStateToProps, mapDispatchToProps)(MyJobs);

import React from "react";
import { Footer, Header } from "../components/index";
import {
  ProfileSideBar,
  EmployerProfileSidebar,
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
class EmployerJobs extends React.Component {
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
                <EmployerProfileSidebar page={page} />

                <Col className="mt-5" md="9">
                  <Row>
                    <Col md={6} className="mr-auto">
                      <Row>
                        <Col className="text-right ml-auto" md="12">
                          <Row>
                            <div className="col-1"></div>
                            <div className="col-4">
                              <span
                                className={
                                  !this.state.togglestate
                                    ? "float-left f-18-xs text-toggle my-family font-weight-700"
                                    : "float-left f-18-xs text-black my-family font-weight-700"
                                }
                              >
                                MY JOBS
                              </span>
                            </div>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                    {this.state.togglestate ? (
                      <Col md={3} className="ml-auto">
                        <button className="btn primary-color badge-pill text-black px-4">
                          <img
                            className="mr-2"
                            src={require("../assets/symbol.png")}
                          />{" "}
                          Create New Job
                        </button>
                      </Col>
                    ) : null}
                  </Row>
                  {this.state.togglestate ? (
                    <Row>
                      <div className="col-12">
                        <table className="w-100 text-center">
                          <thead className="f-14-xs text-muted-jobs py-2 my-family-bold t-c">
                            <th className="h-56">Categories</th>
                            <th>No of Applicants</th>
                            <th>New Applicants</th>
                            <th>Interviewed</th>
                            <th>Rejected</th>
                            <th>Offer made</th>
                          </thead>
                          <tbody>
                            <tr className="h-56">
                              <td className="w-16-5">
                                <Link to="/employermanagejob">
                                  <p className="junior-desingner my-family">
                                    Junior desingner
                                  </p>
                                </Link>
                              </td>
                              <td className="w-16-5">
                                <p className="junior-desingner my-family">14</p>
                              </td>
                              <td className="w-16-5">
                                <p className="junior-desingner my-family">14</p>
                              </td>
                              <td className="w-16-5">
                                <p className="junior-desingner my-family">14</p>
                              </td>
                              <td className="w-16-5">
                                <p className="junior-desingner my-family">14</p>
                              </td>
                              <td className="w-16-5">
                                <p className="junior-desingner my-family">14</p>
                              </td>
                            </tr>
                            <tr className="h-56">
                              <td className="w-16-5">
                                <Link to="/employermanagejob">
                                  <p className="junior-desingner">
                                    Junior desingner
                                  </p>
                                </Link>
                              </td>
                              <td className="w-16-5">
                                <p className="junior-desingner">14</p>
                              </td>
                              <td className="w-16-5">
                                <p className="junior-desingner">14</p>
                              </td>
                              <td className="w-16-5">
                                <p className="junior-desingner">14</p>
                              </td>
                              <td className="w-16-5">
                                <p className="junior-desingner">14</p>
                              </td>
                              <td className="w-16-5">
                                <p className="junior-desingner">14</p>
                              </td>
                            </tr>
                            <tr className="h-56">
                              <td className="w-16-5">
                                <Link to="/employermanagejob">
                                  <p className="junior-desingner">
                                    Junior desingner
                                  </p>
                                </Link>
                              </td>
                              <td className="w-16-5">
                                <p className="junior-desingner">14</p>
                              </td>
                              <td className="w-16-5">
                                <p className="junior-desingner">14</p>
                              </td>
                              <td className="w-16-5">
                                <p className="junior-desingner">14</p>
                              </td>
                              <td className="w-16-5">
                                <p className="junior-desingner">14</p>
                              </td>
                              <td className="w-16-5">
                                <p className="junior-desingner">14</p>
                              </td>
                            </tr>
                            <tr className="h-56">
                              <td className="w-16-5">
                                <Link to="/employermanagejob">
                                  <p className="junior-desingner">
                                    Junior desingner
                                  </p>
                                </Link>
                              </td>
                              <td className="w-16-5">
                                <p className="junior-desingner">14</p>
                              </td>
                              <td className="w-16-5">
                                <p className="junior-desingner">14</p>
                              </td>
                              <td className="w-16-5">
                                <p className="junior-desingner">14</p>
                              </td>
                              <td className="w-16-5">
                                <p className="junior-desingner">14</p>
                              </td>
                              <td className="w-16-5">
                                <p className="junior-desingner">14</p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </Row>
                  ) : (
                    <Row>
                      <Col md={12}>
                        <table className="w-100 text-center">
                          <thead className="f-14-xs text-muted-jobs py-2 my-family-bold t-c">
                            <th className="h-56">CANDIDATE NAME</th>
                            <th>PROJECT TITLE</th>
                            <th>PROJECT STATUS</th>
                            <th>TOTAL PAYMENTS</th>
                          </thead>
                          <tbody>
                            <tr className="h-56">
                              <td className="w-25">
                                <p className="mt-4 my-family">
                                  <img
                                    className="w-35-icon-xs"
                                    src={require("../assets/icons/review.png")}
                                  />
                                  <span className="f-16-xs-xs linebreak font-weight-400 text-black ml-3">
                                    {" "}
                                    Karl Fohn
                                  </span>
                                </p>
                              </td>
                              <td className="w-25">
                                <p className="mt-4 my-family">
                                  <span className="f-16-xs-xs font-weight-400 text-black ">
                                    {" "}
                                    Wordpress Designer
                                  </span>
                                </p>
                              </td>
                              <td className="w-25">
                                <p className="mt-4 my-family">
                                  <button className="btn w-50-xl  new-color f-12-xs font-weight-400 text-white ">
                                    New
                                  </button>
                                </p>
                              </td>
                              <td className="w-25">
                                <p className="mt-4 my-family">
                                  <span className="f-16-xs-xs font-weight-400 text-black ">
                                    $4500.00
                                  </span>
                                </p>
                              </td>
                            </tr>
                            <tr className="h-56">
                              <td className="w-25">
                                <p className="mt-4 my-family">
                                  <img
                                    className="w-35-icon-xs"
                                    src={require("../assets/icons/review.png")}
                                  />
                                  <span className="f-16-xs-xs linebreak font-weight-400 text-black ml-3">
                                    {" "}
                                    Karl Fohn
                                  </span>
                                </p>
                              </td>
                              <td className="w-25">
                                <p className="mt-4 my-family">
                                  <span className="f-16-xs-xs font-weight-400 text-black ">
                                    {" "}
                                    Wordpress Designer
                                  </span>
                                </p>
                              </td>
                              <td className="w-25">
                                <p className="mt-4 my-family">
                                  <button className="btn w-50-xl  primary-color f-12-xs font-weight-400 text-white ">
                                    In Progress
                                  </button>
                                </p>
                              </td>
                              <td className="w-25">
                                <p className="mt-4 my-family">
                                  <span className="f-16-xs-xs font-weight-400 text-black ">
                                    $4500.00
                                  </span>
                                </p>
                              </td>
                            </tr>
                            <tr className="h-56">
                              <td className="w-25">
                                <p className="mt-4 my-family">
                                  <img
                                    className="w-35-icon-xs"
                                    src={require("../assets/icons/review.png")}
                                  />
                                  <span className="f-16-xs-xs linebreak font-weight-400 text-black ml-3">
                                    {" "}
                                    Karl Fohn
                                  </span>
                                </p>
                              </td>
                              <td className="w-25">
                                <p className="mt-4 my-family">
                                  <span className="f-16-xs-xs font-weight-400 text-black ">
                                    {" "}
                                    Wordpress Designer
                                  </span>
                                </p>
                              </td>
                              <td className="w-25">
                                <p className="mt-4 my-family">
                                  <button className="btn w-50-xl  inreview-color f-12-xs font-weight-400 text-white ">
                                    In Review
                                  </button>
                                </p>
                              </td>
                              <td className="w-25">
                                <p className="mt-4 my-family">
                                  <span className="f-16-xs-xs font-weight-400 text-black ">
                                    $4500.00
                                  </span>
                                </p>
                              </td>
                            </tr>
                            <tr className="h-56">
                              <td className="w-25">
                                <p className="mt-4 my-family">
                                  <img
                                    className="w-35-icon-xs"
                                    src={require("../assets/icons/review.png")}
                                  />
                                  <span className="f-16-xs-xs linebreak font-weight-400 text-black ml-3">
                                    {" "}
                                    Karl Fohn
                                  </span>
                                </p>
                              </td>
                              <td className="w-25">
                                <p className="mt-4 my-family">
                                  <span className="f-16-xs-xs font-weight-400 text-black ">
                                    {" "}
                                    Wordpress Designer
                                  </span>
                                </p>
                              </td>
                              <td className="w-25">
                                <p className="mt-4 my-family">
                                  <button className="btn w-50-xl  completed-color f-12-xs font-weight-400 text-white ">
                                    Completed
                                  </button>
                                </p>
                              </td>
                              <td className="w-25">
                                <p className="mt-4 my-family">
                                  <span className="f-16-xs-xs font-weight-400 text-black ">
                                    $4500.00
                                  </span>
                                </p>
                              </td>
                            </tr>
                            <tr className="h-56">
                              <td className="w-25">
                                <p className="mt-4 my-family">
                                  <img
                                    className="w-35-icon-xs"
                                    src={require("../assets/icons/review.png")}
                                  />
                                  <span className="f-16-xs-xs linebreak font-weight-400 text-black ml-3">
                                    {" "}
                                    Karl Fohn
                                  </span>
                                </p>
                              </td>
                              <td className="w-25">
                                <p className="mt-4 my-family">
                                  <span className="f-16-xs-xs font-weight-400 text-black ">
                                    {" "}
                                    Wordpress Designer
                                  </span>
                                </p>
                              </td>
                              <td className="w-25">
                                <p className="mt-4 my-family">
                                  <button className="btn w-50-xl  paid-color f-12-xs font-weight-400 text-white ">
                                    Paid
                                  </button>
                                </p>
                              </td>
                              <td className="w-25">
                                <p className="mt-4 my-family">
                                  <span className="f-16-xs-xs font-weight-400 text-black ">
                                    $4500.00
                                  </span>
                                </p>
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
export default connect(mapStateToProps, mapDispatchToProps)(EmployerJobs);

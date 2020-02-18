import React from "react";
import { Footer, Header } from "../components/index";
import {
  OurServicesSection,
  StudentSideBar,
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

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: props.page,
      iconTabs: 2,
      oneslides: 3,
      twoslides: 2,
      plainTabs: 2,
      filter: false
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
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
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    if (window.innerWidth <= 450) {
      this.setState({ oneslides: 1, twoslides: 1 });
    } else if (window.innerWidth > 450 && window.innerWidth <= 750) {
      this.setState({ oneslides: 2, twoslides: 2 });
    } else if (window.innerWidth > 750 && window.innerWidth <= 1020) {
      this.setState({ oneslides: 3, twoslides: 3 });
    } else if (window.innerWidth > 1020) {
      this.setState({ oneslides: 3, twoslides: 2 });
    }
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  render() {
    const { page } = this.state;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: this.state.oneslides,
      slidesToScroll: 1
    };
    const settingrecommendation = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: this.state.twoslides,
      slidesToScroll: 1
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
                    <Col md={4}>
                      <img
                        className="rounded-circle h-168-mobile img-center img-fluid"
                        src={require("../assets/img/theme/team-1-800x800.jpg")}
                      />
                    </Col>
                    <Col md={8} className="mt-5 text-center-mobile">
                      <Row>
                        <Col md={6}>
                          <p>
                            <img
                              className="w-20-icon"
                              src={require("../assets/lightbulb.png")}
                            />
                            <span className="f-17 my-family font-weight-500 text-black ml-3">
                              {" "}
                              Studying University
                            </span>
                          </p>
                          <p>
                            <img
                              className="w-20-icon"
                              src={require("../assets/maps-and-flags.png")}
                            />
                            <span className="f-17 my-family font-weight-500 text-black ml-3">
                              {" "}
                              San Fransisco
                            </span>
                          </p>
                        </Col>
                        <Col md={6}>
                          <p>
                            <img
                              className="w-20-icon"
                              src={require("../assets/star.png")}
                            />
                            <span className="f-17 my-family font-weight-500 text-black ml-3">
                              {" "}
                              Graphic Designer
                            </span>
                          </p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="mt-5">
                    <Col md={10}>
                      <p className="text-center-mobile my-family-bold f-24 text-black">
                        <b>ABOUT ME</b>
                      </p>
                      <p className="mt-2 text-black f-15-xs my-family">
                        This role will play an important role in growing our
                        international network of content creators. Working
                        within a small This role will play an important role in
                        growing our international network of content creators.
                        Working within a small This role will play an important
                        role in growing our international network of content
                        creators. Working within a small This role will play an
                        important role in growing our international network of
                        content creators. Working within a small This role will
                        play an important role in growing our international
                        network of content creators. Working within a small This
                        role will play an important role in growing our
                        international network of content creators. Working
                        within a small This role will play an important role in
                        growing our international network of content creators.
                        Working within a small This role will play an important
                        role in growing our international network of content
                        creators. Working within a small This role will play an
                        important role in growing our international network of
                        content creators. Working within a small{" "}
                      </p>
                    </Col>
                  </Row>
                  <Row className="mt-5">
                    <Col md={10}>
                      <p className="text-center-mobile my-family-bold f-24 text-black">
                        <b>LANGUAGES</b>
                      </p>
                      <Row className="mt-5">
                        <Col md={5} className="  col-6  pr-0">
                          <p className="mb-0 f-18 mt-3 text-black">English</p>
                          <p className="f-15 text-mutedd">Full Professional</p>
                        </Col>
                        <Col md={5} className="  col-6 pl-0">
                          <p className="mb-0 f-18 mt-3 text-black">Russian</p>
                          <p className="f-15 text-mutedd">Full Professional</p>
                        </Col>
                        <Col md={5} className="  col-6  pr-0">
                          <p className="mb-0 f-18 mt-3 text-black">English</p>
                          <p className="f-15 text-mutedd">Intermediate</p>
                        </Col>
                        <Col md={5} className=" col-6  pl-0">
                          <p className="mb-0 f-18 mt-3 text-black">Russian</p>
                          <p className="f-15 text-mutedd">Intermediate</p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="mt-5">
                    <Col md={10}>
                      <p className="text-center-mobile my-family-bold f-24 text-black">
                        <b>EDUCATION</b>
                      </p>
                      <Row className="mt-5">
                        <Col md={10} className="  pr-0">
                          <p>
                            <img
                              className="w-20-icon"
                              src={require("../assets/circle-shape-outline.png")}
                            />
                            <span className="f-22 font-weight-500 text-black ml-3">
                              {" "}
                              European University Cyprus
                            </span>
                          </p>
                          <p className="text-black ml-5 f-17">
                            MBA Social Media Marketing (Scholarship) 3.57/4.00{" "}
                            <br /> 2015 - 2018
                          </p>
                        </Col>
                        <Col md={10} className="  pr-0">
                          <p>
                            <img
                              className="w-20-icon"
                              src={require("../assets/circle-shape-outline.png")}
                            />
                            <span className="f-22 font-weight-500 text-black ml-3">
                              {" "}
                              European University Cyprus
                            </span>
                          </p>
                          <p className="text-black ml-5 f-17">
                            MBA Social Media Marketing (Scholarship) 3.57/4.00{" "}
                            <br /> 2015 - 2018
                          </p>
                        </Col>
                        <Col md={10} className="  pr-0">
                          <p>
                            <img
                              className="w-20-icon"
                              src={require("../assets/circle-shape-outline.png")}
                            />
                            <span className="f-22 font-weight-500 text-black ml-3">
                              {" "}
                              European University Cyprus
                            </span>
                          </p>
                          <p className="text-black ml-5 f-17">
                            MBA Social Media Marketing (Scholarship) 3.57/4.00{" "}
                            <br /> 2015 - 2018
                          </p>
                        </Col>
                        <Col md={10} className="  pr-0">
                          <p>
                            <img
                              className="w-20-icon"
                              src={require("../assets/circle-shape-outline.png")}
                            />
                            <span className="f-22 font-weight-500 text-black ml-3">
                              {" "}
                              European University Cyprus
                            </span>
                          </p>
                          <p className="text-black ml-5 f-17">
                            MBA Social Media Marketing (Scholarship) 3.57/4.00{" "}
                            <br /> 2015 - 2018
                          </p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="mt-5">
                    <Col md={10}>
                      <p className="text-center-mobile my-family-bold f-24 text-black">
                        <b>SKILLS</b>
                      </p>
                      <Row className="mt-5">
                        <Col md={12} className="  pr-0">
                          <button className="mt-3 mr-3 btn btn-primary f-15 badge-pill w-130 h-35  text-dark primary-color">
                            Quick Apply{" "}
                          </button>
                          <button className="mt-3 mr-3 btn btn-primary f-15 badge-pill w-130 h-35  text-dark primary-color">
                            Quick Apply{" "}
                          </button>
                          <button className="mt-3 mr-3 btn btn-primary f-15 badge-pill w-130 h-35  text-dark primary-color">
                            Quick Apply{" "}
                          </button>
                          <button className="mt-3 mr-3 btn btn-primary f-15 badge-pill w-130 h-35  text-dark primary-color">
                            Quick Apply{" "}
                          </button>
                          <button className="mt-3 mr-3 btn btn-primary f-15 badge-pill w-130 h-35  text-dark primary-color">
                            Quick Apply{" "}
                          </button>
                          <button className="mt-3 mr-3 btn btn-primary f-15 badge-pill w-130 h-35  text-dark primary-color">
                            Quick Apply{" "}
                          </button>
                          <button className="mt-3 mr-3 btn btn-primary f-15 badge-pill w-130 h-35  text-dark primary-color">
                            Quick Apply{" "}
                          </button>
                          <button className="mt-3 mr-3 btn btn-primary f-15 badge-pill w-130 h-35  text-dark primary-color">
                            Quick Apply{" "}
                          </button>
                          <button className="mt-3 mr-3 btn btn-primary f-15 badge-pill w-130 h-35  text-dark primary-color">
                            Quick Apply{" "}
                          </button>
                          <button className="mt-3 mr-3 btn btn-primary f-15 badge-pill w-130 h-35  text-dark primary-color">
                            Quick Apply{" "}
                          </button>
                          <button className="mt-3 mr-3 btn btn-dark bg-dark text-white f-15 badge-pill w-130 h-35   ">
                            Show More{" "}
                          </button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="mt-5">
                    <Col md={10}>
                      <p className="text-center-mobile my-family-bold f-24 text-black">
                        <b>AWARDS</b>
                      </p>
                      <Row className="mt-5">
                        <Col md={10} className="  pr-0">
                          <p>
                            <img
                              className="w-20-icon"
                              src={require("../assets/energy.png")}
                            />
                            <span className="f-20-mobile font-weight-500 text-black ml-3">
                              {" "}
                              Second Honors for Academic Achievement{" "}
                            </span>
                          </p>
                        </Col>
                        <Col md={10} className="  pr-0">
                          <p>
                            <img
                              className="w-20-icon"
                              src={require("../assets/energy.png")}
                            />
                            <span className="f-20-mobile font-weight-500 text-black ml-3">
                              {" "}
                              Google AdWords Certified
                            </span>
                          </p>
                        </Col>
                        <Col md={10} className="  pr-0">
                          <p>
                            <img
                              className="w-20-icon"
                              src={require("../assets/energy.png")}
                            />
                            <span className="f-20-mobile font-weight-500 text-black ml-3">
                              {" "}
                              Second Honors for Academic Achievement{" "}
                            </span>
                          </p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="mt-5">
                    <Col md={10}>
                      <p className="text-center-mobile my-family-bold f-24 text-black">
                        <b>PROJECTS</b>
                      </p>
                      <Row className="mt-3">
                        <Col md={12} className=" ">
                          <Slider {...settings}>
                            <Col md={12} className=" ">
                              <img
                                className="w-100"
                                src={require("../assets/img/theme/team-3-800x800.jpg")}
                              />
                              <p className="mt-3">
                                <span className="f-16-xs font-weight-500 text-black">
                                  {" "}
                                  FREELANCER ACQUISITION EXECUTIVE
                                </span>
                              </p>
                            </Col>
                            <Col md={12} className=" ">
                              <img
                                className="w-100"
                                src={require("../assets/img/theme/team-3-800x800.jpg")}
                              />
                              <p className="mt-3">
                                <span className="f-16-xs font-weight-500 text-black">
                                  {" "}
                                  FREELANCER ACQUISITION EXECUTIVE
                                </span>
                              </p>
                            </Col>
                            <Col md={12} className="  ">
                              <img
                                className="w-100"
                                src={require("../assets/img/theme/team-2-800x800.jpg")}
                              />
                              <p className="mt-3">
                                <span className="f-16-xs font-weight-500 text-black">
                                  {" "}
                                  FREELANCER ACQUISITION EXECUTIVE
                                </span>
                              </p>
                            </Col>
                            <Col md={12} className="  ">
                              <img
                                className="w-100"
                                src={require("../assets/img/theme/team-4-800x800.jpg")}
                              />
                              <p className="mt-3">
                                <span className="f-16-xs font-weight-500 text-black">
                                  {" "}
                                  FREELANCER ACQUISITION EXECUTIVE
                                </span>
                              </p>
                            </Col>
                            <Col md={12} className="">
                              <img
                                className="w-100"
                                src={require("../assets/img/theme/team-1-800x800.jpg")}
                              />
                              <p className="mt-3">
                                <span className="f-16-xs font-weight-500 text-black">
                                  {" "}
                                  FREELANCER ACQUISITION EXECUTIVE
                                </span>
                              </p>
                            </Col>
                          </Slider>
                        </Col>
                        <Col md={3} className="ml-auto col-5 mr-auto mt-5">
                          <button className="mt-3 mr-3 btn btn-primary f-15 badge-pill w-130 h-35  text-dark primary-color">
                            Show More{" "}
                          </button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="mt-5">
                    <Col md={10}>
                      <p className="text-center-mobile my-family-bold f-24 text-black">
                        <b>RECOMMENDATION</b>
                      </p>
                      <Row className="mt-3">
                        <Col md={12} className="  pr-0">
                          <Slider {...settingrecommendation}>
                            <Col md={12} className=" h-100 pr-0">
                              <Row>
                                <Col md={3}>
                                  <img
                                    className="h-70 rounded-circle img-center"
                                    src={require("../assets/img/theme/team-3-800x800.jpg")}
                                  />
                                </Col>
                                <Col md={9} className="text-center-mobile">
                                  <p className="mb-0 f-19 text-black">
                                    Ahmet Steier
                                  </p>
                                  <p className="mb-0 f-16 text-recom">
                                    Partner Account Manager at Puzzel
                                  </p>
                                  <p className="mb-0 f-16 mt-3 text-recom">
                                    June 22, 2018, Georgi was a client of
                                    Aleksey’s
                                  </p>
                                </Col>
                              </Row>
                              <hr className="primary-color-text h-1 hr-recom" />
                              <Row>
                                <Col md={12}>
                                  <p className="text-black">
                                    This role will play an important role in
                                    growing our international network of content
                                    creators. Working within a small team,
                                    you’ll execute on a range of campaigns that
                                    will attract a high calibre of freelance
                                    talent into our Network.
                                  </p>
                                </Col>
                              </Row>
                            </Col>
                            <Col md={12} className=" h-100 pr-0">
                              <Row>
                                <Col md={3}>
                                  <img
                                    className="h-70 rounded-circle img-center"
                                    src={require("../assets/img/theme/team-3-800x800.jpg")}
                                  />
                                </Col>
                                <Col md={9} className="text-center-mobile">
                                  <p className="mb-0 f-19 text-black">
                                    Ahmet Steier
                                  </p>
                                  <p className="mb-0 f-16 text-recom">
                                    Partner Account Manager at Puzzel
                                  </p>
                                  <p className="mb-0 f-16 mt-3 text-recom">
                                    June 22, 2018, Georgi was a client of
                                    Aleksey’s
                                  </p>
                                </Col>
                              </Row>
                              <hr className="primary-color-text h-1 hr-recom" />
                              <Row>
                                <Col md={12}>
                                  <p className="text-black">
                                    This role will play an important role in
                                    growing our international network of content
                                    creators. Working within a small team,
                                    you’ll execute on a range of campaigns that
                                    will attract a high calibre of freelance
                                    talent into our Network.
                                  </p>
                                </Col>
                              </Row>
                            </Col>
                            <Col md={12} className=" h-100 pr-0">
                              <Row>
                                <Col md={3}>
                                  <img
                                    className="h-70 rounded-circle img-center"
                                    src={require("../assets/img/theme/team-3-800x800.jpg")}
                                  />
                                </Col>
                                <Col md={9} className="text-center-mobile">
                                  <p className="mb-0 f-19 text-black">
                                    Ahmet Steier
                                  </p>
                                  <p className="mb-0 f-16 text-recom">
                                    Partner Account Manager at Puzzel
                                  </p>
                                  <p className="mb-0 f-16 mt-3 text-recom">
                                    June 22, 2018, Georgi was a client of
                                    Aleksey’s
                                  </p>
                                </Col>
                              </Row>
                              <hr className="primary-color-text h-1 hr-recom" />
                              <Row>
                                <Col md={12}>
                                  <p className="text-black">
                                    This role will play an important role in
                                    growing our international network of content
                                    creators. Working within a small team,
                                    you’ll execute on a range of campaigns that
                                    will attract a high calibre of freelance
                                    talent into our Network.
                                  </p>
                                </Col>
                              </Row>
                            </Col>
                            <Col md={12} className=" h-100 pr-0">
                              <Row>
                                <Col md={3}>
                                  <img
                                    className="h-70 rounded-circle img-center"
                                    src={require("../assets/img/theme/team-3-800x800.jpg")}
                                  />
                                </Col>
                                <Col md={9} className="text-center-mobile">
                                  <p className="mb-0 f-19 text-black">
                                    Ahmet Steier
                                  </p>
                                  <p className="mb-0 f-16 text-recom">
                                    Partner Account Manager at Puzzel
                                  </p>
                                  <p className="mb-0 f-16 mt-3 text-recom">
                                    June 22, 2018, Georgi was a client of
                                    Aleksey’s
                                  </p>
                                </Col>
                              </Row>
                              <hr className="primary-color-text h-1 hr-recom" />
                              <Row>
                                <Col md={12}>
                                  <p className="text-black">
                                    This role will play an important role in
                                    growing our international network of content
                                    creators. Working within a small team,
                                    you’ll execute on a range of campaigns that
                                    will attract a high calibre of freelance
                                    talent into our Network.
                                  </p>
                                </Col>
                              </Row>
                            </Col>
                          </Slider>
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
export default connect(mapStateToProps, mapDispatchToProps)(Profile);

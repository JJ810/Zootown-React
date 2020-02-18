import React, { Component } from "react";
import { Col, Container, Row, Card, CardBody } from "reactstrap";
import Slider from "react-slick";
import { Link } from "react-router-dom";
class EmployerProfileSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0, slides: 4 };
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  render() {
    const { page } = this.props;

    var settings = {
      speed: 3000,
      autoplay: true,
      slidesToShow: this.state.slides,
      slidesToScroll: 1
    };
    return (
      <Col className="mt-5" md="3">
        <Row className="card shadow py-3 border-0 w-300">
          <Col className=" text-center mb-2 col-5 ml-auto mr-auto">
            <p className="f-13 my-family-bold text-black font-weight-700 border-bottom-heading ">
              SHORTCUTS
            </p>
          </Col>
          <Col className="" md="12">
            <p className="ml-3">
              <Link
                className="text-black my-family nav-link-icon  font-weight-400 mt-5 f-16"
                to="/employerpage"
              >
                About Us
              </Link>
              <br />
            </p>
            <p className="ml-3">
              <Link
                className="text-black my-family nav-link-icon  font-weight-400 mt-5 f-16"
                to="/my-videos"
              >
                Videos
              </Link>
              <br />
            </p>
            <p className="ml-3">
              <Link
                className="text-black my-family nav-link-icon  font-weight-400 mt-5 f-16"
                to="/employerjobs"
              >
                Manage My Jobs
              </Link>
              <br />
            </p>
            <p className="ml-3">
              <Link
                className="text-black my-family nav-link-icon  font-weight-400 mt-5 f-16"
                to="/my-booking"
              >
                Bookings
              </Link>
              <br />
            </p>
            <p className="ml-3">
              <Link
                className="text-black my-family nav-link-icon  font-weight-400 mt-5 f-16"
                to="/employeerpayment"
              >
                Payments
              </Link>
              <br />
            </p>
            <p className="ml-3">
              <Link
                className="text-black my-family nav-link-icon  font-weight-400 mt-5 f-16"
                to="/employeer-settings"
              >
                Settings
              </Link>
              <br />
            </p>
          </Col>
        </Row>
        <Row className="my-5">
          <Col className=" text-left my-3" md="8">
            <Link to="/myreviews">
              <img
                className="    w-8-icon"
                src={require("../../assets/bolt.png")}
              />
              <span className="f-16 my-family font-weight-500 text-black ml-3">
                {" "}
                My Reviews
              </span>
            </Link>
          </Col>
          <Col className=" text-left  my-3" md="10">
            <Link to="/myawards">
              <img
                className="    w-8-icon"
                src={require("../../assets/bolt.png")}
              />
              <span className="f-16 my-family font-weight-500 text-black ml-3">
                My Notes
              </span>
            </Link>
          </Col>

          {/*<Col className=" text-left ml-auto mr-auto" md="8">
                                <button className="h-45 btn  badge-pill bg-hire btn-block"><img className="w-25-icon   float-left ml-3" src={require('../../assets/contract.png')} /> <span className="ml-2 my-family text-white">Hire Now</span></button>
                            </Col>
                            <Col className=" text-left ml-auto mr-auto mt-3" md="8">
                                <button className="h-45 btn  badge-pill bg-mute btn-block"><img className="w-25-icon   float-left ml-3" src={require('../../assets/pri-message.png')} /> <span className="ml-2 my-family text-black">Contact</span></button>
                            </Col>
                            <Col className=" text-left ml-auto mr-auto mt-3" md="8">
                                <button className="h-45 btn  badge-pill bg-mute btn-block"><img className="w-25-icon   float-left ml-3" src={require('../../assets/notes.png')} /> <span className="ml-2 my-family text-black">Leave Notes</span></button>
                            </Col>*/}
        </Row>
      </Col>
    );
  }
}

export default EmployerProfileSidebar;

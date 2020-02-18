import React, { Component } from "react";
import { Col, Container, Row, Card, CardBody } from "reactstrap";
import Slider from "react-slick";
import { Link } from "react-router-dom";
class StudentSideBar extends Component {
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
                to="/studentprofile"
              >
                My Details
              </Link>
              <br />
            </p>
            <p className="ml-3">
              <Link
                className="text-black my-family nav-link-icon  font-weight-400 mt-5 f-16"
                to="/my-memberships"
              >
                My Memberships
              </Link>
              <br />
            </p>
            <p className="ml-3">
              <Link
                className="text-black my-family nav-link-icon  font-weight-400 mt-5 f-16"
                to="/my-invoices"
              >
                My Invoices
              </Link>
              <br />
            </p>
            <p className="ml-3">
              <Link
                className="text-black my-family nav-link-icon  font-weight-400 mt-5 f-16"
                to="/my-jobs"
              >
                My Jobs
              </Link>
              <br />
            </p>
            <p className="ml-3">
              <Link
                className="text-black my-family nav-link-icon  font-weight-400 mt-5 f-16"
                to="/edit-profile"
              >
                Edit Profile
              </Link>
              <br />
            </p>
            <p className="ml-3">
              <Link
                className="text-black my-family nav-link-icon  font-weight-400 mt-5 f-16"
                to="/change-password"
              >
                Email & Password
              </Link>
              <br />
            </p>
          </Col>
        </Row>
        <Row className="my-5">
          <Col className=" text-left my-3" md="8">
            <Link to="/studentreviews">
              <img
                className="    w-8-icon"
                src={require("../../assets/bolt.png")}
              />
              <span className="f-16 my-family font-weight-400 text-black ml-3">
                {" "}
                My Reviews
              </span>
            </Link>
          </Col>
          <Col className=" text-left  mt-5 mb-3" md="10">
            <span className="btn badge-pill bg-hire w-180">
              <img src={require("../../assets/export.png")} />
              <span className="f-14 my-family font-weight-400 text-white ml-3">
                Export My CV
              </span>
            </span>
          </Col>
          <Col className=" text-left  my-3" md="10">
            <span className="btn badge-pill bg-mute  w-180">
              <img src={require("../../assets/exit.png")} />
              <span className="f-14 my-family font-weight-400 text-black ml-3">
                Log Out
              </span>
            </span>
          </Col>
          <Col className=" text-left  my-3" md="10">
            <span className="btn badge-pill bg-delete w-180">
              <img src={require("../../assets/deleteaccount.png")} />
              <span className="f-14 my-family font-weight-400 text-white ml-3">
                Delete Account
              </span>
            </span>
          </Col>
        </Row>
      </Col>
    );
  }
}

export default StudentSideBar;

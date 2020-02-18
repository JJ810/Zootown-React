import React, { Component } from "react";
import { Col, Container, Row, Card, CardBody } from "reactstrap";
import Slider from "react-slick";
import { Link } from "react-router-dom";
class AdminSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      page: this.props,
      slides: 4,
      usertab: false,
      managementtab: false,
      adminsettingtab: false,
      paymenttab: false,
      manageblogtab: false,
      adminclassroomtab: false
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }
  openuser() {
    this.setState({
      usertab: !this.state.usertab
    });
  }

  openmanageblog() {
    this.setState({
      manageblogtab: !this.state.manageblogtab
    });
  }
  openmanagement() {
    this.setState({
      managementtab: !this.state.managementtab
    });
  }
  openadminsetting() {
    this.setState({
      adminsettingtab: !this.state.adminsettingtab
    });
  }
  openadminclassroom() {
    this.setState({
      adminclassroomtab: !this.state.adminclassroomtab
    });
  }
  openpaymentarea() {
    this.setState({
      paymenttab: !this.state.paymenttab
    });
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
        <Row>
          <Col className="mb-5" md="12">
            <p>
              <Link
                onClick={() => this.openuser()}
                className={
                  this.state.usertab ||
                  page === "managecompany" ||
                  page === "managerecruiters" ||
                  page === "managestudent"
                    ? "primary-color-text my-family-bold nav-link-icon font-weight-500 mt-5 f-14"
                    : "text-black my-family-bold nav-link-icon font-weight-500 mt-5 f-14"
                }
                to="/"
              >
                USERS
              </Link>
              <br />
            </p>
            {this.state.usertab ||
            page === "managecompany" ||
            page === "managestudent" ||
            page === "managerecruiters" ? (
              <p className="ml-5">
                <Link
                  className={
                    page === "managestudent"
                      ? "primary-color-text my-family nav-link-icon  font-weight-500 mt-3  f-14"
                      : "text-black my-family nav-link-icon  font-weight-500 mt-3  f-14"
                  }
                  to="/manage-students"
                >
                  Students
                </Link>
                <br />
                <Link
                  className={
                    page === "managecompany"
                      ? "primary-color-text my-family nav-link-icon  font-weight-500 mt-3  f-14"
                      : "text-black my-family nav-link-icon  font-weight-500 mt-3  f-14"
                  }
                  to="/manage-company"
                >
                  Company
                </Link>
                <br />
                <Link
                  className={
                    page === "managerecruiters"
                      ? "primary-color-text my-family nav-link-icon  font-weight-500 mt-3  f-14"
                      : "text-black my-family nav-link-icon  font-weight-500 mt-3  f-14"
                  }
                  to="/manage-recruiters"
                >
                  Recruiters
                </Link>
                <br />
              </p>
            ) : null}

            <p className="">
              <Link
                onClick={() => this.openpaymentarea()}
                className={
                  this.state.paymenttab || page === "adminpaymentarea"
                    ? "primary-color-text my-family-bold nav-link-icon font-weight-500 mt-5 f-14"
                    : "text-black my-family-bold nav-link-icon font-weight-500 mt-5 f-14"
                }
                to="/admin-paymentarea"
              >
                PAYMENT AREA
              </Link>
              <br />
            </p>
            <p className="">
              <Link
                className="text-black my-family-bold  nav-link-icon  font-weight-500 mt-5 f-14"
                to="/edit-profile"
              >
                CMS
              </Link>
              <br />
            </p>
            <p className="">
              <Link
                onClick={() => this.openmanageblog()}
                className={
                  this.state.manageblogtab || page === "manageblog"
                    ? "primary-color-text my-family-bold nav-link-icon font-weight-500 mt-5 f-14"
                    : "text-black my-family-bold nav-link-icon font-weight-500 mt-5 f-14"
                }
                to="/manage-blogs"
              >
                BLOG
              </Link>
              <br />
            </p>
            <p className="">
              <Link
                onClick={() => this.openmanagement()}
                className={
                  this.state.managementtab || page === "adminmanagement"
                    ? "primary-color-text my-family-bold nav-link-icon font-weight-500 mt-5 f-14"
                    : "text-black my-family-bold nav-link-icon font-weight-500 mt-5 f-14"
                }
                to="/admin-management"
              >
                MANAGEMENT
              </Link>
              <br />
            </p>
            <p className="">
              <Link
                className="text-black my-family-bold  nav-link-icon  font-weight-500 mt-5 f-14"
                to="/my-invoices"
              >
                EVENTS
              </Link>
              <br />
            </p>
            <p className="">
              <Link
                onClick={() => this.openadminsetting()}
                className={
                  this.state.adminsettingtab || page === "adminsetting"
                    ? "primary-color-text my-family-bold nav-link-icon font-weight-500 mt-5 f-14"
                    : "text-black my-family-bold nav-link-icon font-weight-500 mt-5 f-14"
                }
                to="/admin-settings"
              >
                SETTINGS
              </Link>
              <br />
            </p>
            <p className="">
              <Link
                onClick={() => this.openadminclassroom()}
                className={
                  this.state.adminclassroomtab ||
                  page === "admincourseworkstats" ||
                  page === "admincoursedetailstats" ||
                  page === "adminpublishedcourseworks" ||
                  page === "admincreatecoursework"
                    ? "primary-color-text my-family-bold nav-link-icon font-weight-500 mt-5 f-14"
                    : "text-black my-family-bold nav-link-icon font-weight-500 mt-5 f-14"
                }
                to="/admin-classroom-courseworkstats"
              >
                CLASSROOM
              </Link>
              <br />
            </p>
          </Col>
        </Row>
      </Col>
    );
  }
}

export default AdminSideBar;

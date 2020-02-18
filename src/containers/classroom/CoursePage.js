import React, { useEffect, useState } from "react";
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
  Collapse,
  CardBody,
  Card
} from "reactstrap";
import { Link } from "react-router-dom";
import classnames from "classnames";
import { Footer, Header } from "./../../components/index";
import "./../../assets/css/classroompage.scss";

import Dashboard from "./dashboard";
import Classroom from "./classroom";
import Course1 from "./course1";
import Course2 from "./course2";
import Course3 from "./course3";
import Course4 from "./course4";
import ImgCourseLevel from "./../../assets/images/courselevel.png";
import ImgCourseTime from "./../../assets/images/coursetime.png";

const SubHeader = props => {
  const { active, onClickTab } = props;
  return (
    <div className="classroom-nav">
      <Col className="ml-auto mr-auto col-12" lg="5">
        <div className="nav-wrapper">
          <Nav
            className="nav-fill flex-column flex-md-row"
            id="tabs-icons-text"
            pills
            role="tablist"
          >
            <NavItem>
              <Link
                to="/studentpage"
                aria-selected={active === "home"}
                className={classnames(
                  "nav-link",
                  "mb-sm-3 mb-md-0 my-family-bold f-15 ",
                  {
                    active: active === "home"
                  }
                )}
                style={{ backgroundColor: "#fedb45" }}
                //onClick={() => onClickTab("home")}
                // href="#pablo"
                role="tab"
              >
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to="/classroompage"
                aria-selected={active === "dashboard"}
                className={classnames(
                  "nav-link",
                  "mb-sm-3 mb-md-0 my-family-bold f-15 ",
                  {
                    active: active === "dashboard"
                  }
                )}
                style={{ backgroundColor: "#fedb45" }}
                //onClick={() => onClickTab("home")}
                // href="#pablo"
                role="tab"
              >
                My Dashboard
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to="/classroompage"
                aria-selected={active === "classroom"}
                className={classnames(
                  "nav-link",
                  "mb-sm-3 mb-md-0 my-family-bold f-15 ",
                  {
                    active: active === "classroom"
                  }
                )}
                style={{ backgroundColor: "#fedb45" }}
                //onClick={() => onClickTab("home")}
                // href="#pablo"
                role="tab"
              >
                Zoo Town Classroom
              </Link>
            </NavItem>
          </Nav>
        </div>
      </Col>
      <div className="courselevel">
        <div className="courselevel">
          <img src={ImgCourseLevel} />
          <div className="courselevel-text ml-2 mr-3">Easy</div>
        </div>
        <div className="courselevel">
          <img src={ImgCourseTime} />
          <div className="courselevel-text ml-2">30 MINS</div>
        </div>
      </div>
    </div>
  );
};

const Home = props => {
  const indexValues = [{ text: "Courses Completed", value: 7 }];
  return (
    <div className="home">
      <h1 className="mt-3 text-center">
        <b>HOME</b>
      </h1>
    </div>
  );
};

class CoursePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: props.page,
      activeTab: "classroom",
      course: 1
    };
  }

  handleClick = num => {
    this.setState({ course: num });
  };

  render() {
    const { page } = this.state;
    return (
      <div className="classroom-page">
        <Header parent="dashboard" page={page} />
        <SubHeader
          active={this.state.activeTab}
          onClickTab={tab => {
            this.setState({ activeTab: tab });
          }}
        />
        <Container fluid>
          {this.state.activeTab === "dashboard" ? (
            <Dashboard></Dashboard>
          ) : this.state.activeTab === "home" ? (
            <Home></Home>
          ) : this.state.course == 1 ? (
            <Course1 handleClick={this.handleClick}></Course1>
          ) : this.state.course == 2 ? (
            <Course2 handleClick={this.handleClick}></Course2>
          ) : this.state.course == 3 ? (
            <Course3 handleClick={this.handleClick}></Course3>
          ) : (
            <Course4 handleClick={this.handleClick}></Course4>
          )}
          <Footer page={this.props.page} />
        </Container>
      </div>
    );
  }
}

export default CoursePage;

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
import { Footer, Header } from "../components/index";
import "../assets/css/classroompage.scss";
import Dashboard from "./classroom/dashboard";
import Classroom from "./classroom/classroom";
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
              <NavLink
                aria-selected={active === "dashboard"}
                className={classnames("mb-sm-3 f-15 my-family-bold mb-md-0", {
                  active: active === "dashboard"
                })}
                style={{ backgroundColor: "#fedb45" }}
                onClick={() => onClickTab("dashboard")}
                // href="#pablo"
                role="tab"
              >
                My Dashboard
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-selected={active === "classroom"}
                className={classnames("mb-sm-3 f-15 my-family-bold mb-md-0", {
                  active: active === "classroom"
                })}
                style={{ backgroundColor: "#fedb45" }}
                onClick={() => onClickTab("classroom")}
                // onClick={e => this.toggleNavs(e, "plainTabs", 3)}
                // href="#pablo"
                role="tab"
              >
                Zoo Town Classroom
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </Col>
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

class ClassroomPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: props.page,
      activeTab: "dashboard"
    };
  }

  render() {
    const { page } = this.state;
    return (
      <div className="classroom-page">
        <Header parent="home" page={page} />
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
          ) : (
            <Classroom></Classroom>
          )}

          <Footer page={this.props.page} />
        </Container>
      </div>
    );
  }
}

export default ClassroomPage;

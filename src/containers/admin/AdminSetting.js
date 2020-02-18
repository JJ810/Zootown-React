import React from "react";
import { AdminHeader } from "./NavBar/index";
import { AdminSideBar } from "../../components/admin";
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
class AdminSetting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleConfirmEmail = this.handleConfirmEmail.bind(this);
    this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
  }
  handleEmail(e) {
    console.log(e.target.value);
  }
  handlePassword(e) {
    console.log(e.target.value);
  }
  handleConfirmEmail(e) {
    console.log(e.target.value);
  }
  handleConfirmPassword(e) {
    console.log(e.target.value);
  }
  render() {
    const { page } = this.props;
    return (
      <div>
        <AdminHeader page={page} />
        <main ref="main">
          <section>
            <Container fluid>
              <Row>
                <AdminSideBar page={page} />

                <Col className="mt-5" md="9">
                  <Row>
                    <Col md={4} className="mr-auto">
                      <span className="ml-4 mt-1  my-family-bold f-24 text-black">
                        SETTINGS{" "}
                      </span>
                    </Col>
                    <Col md={12}>
                      <Row>
                        <Col md={12} className="mt-3">
                          <Row className="mt-5">
                            <Col md={4} className="">
                              <p className="f-13 font-weight-700 text-black ml-2 ">
                                EMAIL ADDRESS
                              </p>
                              <input
                                type="email"
                                className=" text-muted-jobs form-control border-top-0 border-left-0 border-right-0"
                                placeholder="Email"
                                onChange={this.handleEmail}
                              />
                            </Col>
                            <Col md={4} className="">
                              <p className="f-13 font-weight-700 text-black ml-2 ">
                                PASSWORD
                              </p>
                              <input
                                type="password"
                                className=" text-muted-jobs form-control border-top-0 border-left-0 border-right-0"
                                placeholder="Password"
                                onChange={this.handlePassword}
                              />
                            </Col>
                          </Row>
                          <Row className="mt-5">
                            <Col md={4} className="">
                              <p className="f-13 font-weight-700 text-black ml-2 ">
                                CONFIRM EMAIL ADDRESS
                              </p>
                              <input
                                type="email"
                                className=" text-muted-jobs form-control border-top-0 border-left-0 border-right-0"
                                placeholder="Confirm Email"
                                onChange={this.handleConfirmEmail}
                              />
                            </Col>
                            <Col md={4} className="">
                              <p className="f-13 font-weight-700 text-black ml-2 ">
                                CONFIRM PASSWORD
                              </p>
                              <input
                                type="password"
                                className=" text-muted-jobs form-control border-top-0 border-left-0 border-right-0"
                                placeholder="Confirm Password"
                                onChange={this.handleConfirmPassword}
                              />
                            </Col>
                          </Row>
                        </Col>
                        <Col md="4 ml-auto mr-auto mt-5">
                          <button
                            className="btn badge-pill w-150 f-16 font-weight-500 mt-2 primary-color"
                            type="button"
                            primary={false}
                            onClick={() => {
                              this.UpdateProfile();
                            }}
                          >
                            Update
                          </button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
      </div>
    );
  }
}

export default AdminSetting;

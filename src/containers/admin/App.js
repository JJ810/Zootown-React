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
class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { page } = this.state;
    return (
      <div>
        <AdminHeader page={page} />
        <main ref="main">
          <section>
            <Container fluid>
              <Row>
                <AdminSideBar page={page} />

                <Col className="mt-5" md="9"></Col>
              </Row>
            </Container>
          </section>
        </main>
      </div>
    );
  }
}

export default Admin;

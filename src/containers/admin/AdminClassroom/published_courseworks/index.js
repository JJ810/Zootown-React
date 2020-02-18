import React from "react";
import { Link } from "react-router-dom";
import { AdminHeader } from "./../../NavBar/index";
import { Footer } from "./../../../../components/index";
import { AdminSideBar } from "./../../../../components/admin";
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
import { FaSearch } from "react-icons/fa";
import PublishedCourseList from "./../../../../components/admin/classroom/published_course_list/list";
import classnames from "classnames";
import { graphql } from "react-apollo";
import "./style.scss";
class AdminPublishedCourseWorks extends React.Component {
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
                <div className="col-md-9">
                  <div className="row adminclassroom-header">
                    <div className="col-md-6 adminclassroom-header-title">
                      ZOO TOWN TASKS CLASSROOM
                    </div>
                    <div>
                      <FaSearch type="search" size={25} color={"black"} />
                      <input
                        className="ml-3 adminclassroom-header-searchbar"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="adminclassroom-published">
                    <div className="adminclassroom-published-listtitle">
                      <Link to="/admin-classroom-publishedcourseworks">
                        <div className="adminclassroom-published-listtitle-itemon">
                          PUBLISHED COURSEWORKS
                        </div>
                      </Link>
                      <Link to="/admin-classroom-courseworkstats">
                        <div className="adminclassroom-published-listtitle-itemoff">
                          COURSEWORK STATS
                        </div>
                      </Link>
                      <Link to="/admin-classroom-createcoursework">
                        <div className="adminclassroom-published-listtitle-itemoff">
                          CREATE A COURSEWORK
                        </div>
                      </Link>
                    </div>
                    <div className="adminclassroom-published-rowtitle mt-5 mr-5">
                      <div className="adminclassroom-published-rowtitle-label ml-3">
                        COURSE NAME
                      </div>
                      <div className="adminclassroom-published-rowtitle-label mr-5">
                        COURSE START DATE
                      </div>
                      <div className="adminclassroom-published-rowtitle-label mr-5">
                        ACTION
                      </div>
                    </div>
                    <div className="mt-2 mb-3">
                      <PublishedCourseList></PublishedCourseList>
                    </div>
                    <div className="adminclassroom-published-pagenation mt-5 mb-5">
                      <div className="adminclassroom-published-pagenation-btn">
                        PREV
                      </div>
                      <div className="adminclassroom-published-pagenation-btn">
                        NEXT
                      </div>
                    </div>
                  </div>
                </div>
              </Row>
            </Container>
          </section>
        </main>
        <Footer page={this.props.page} />
      </div>
    );
  }
}

export default AdminPublishedCourseWorks;

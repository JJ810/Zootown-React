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
import classnames from "classnames";
import { graphql } from "react-apollo";
import NewCourseListItem from "./../../../../components/admin/classroom/create_course_list/item";
import "./style.scss";
const desp =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

class AdminCreateCoursework extends React.Component {
  constructor(props) {
    super(props);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleConfirmEmail = this.handleConfirmEmail.bind(this);
    this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
    this.state = {
      numChildren: 0
    };
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
  onAddCourseRow = () => {
    this.setState({
      numChildren: this.state.numChildren + 1
    });
  };

  render() {
    const { page } = this.props;
    const children = [];
    console.log(this.state.numChildren);
    for (var i = 0; i < this.state.numChildren; i += 1) {
      children.push(<NewCourseListItem key={i} />);
    }

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
                  <div className="adminclassroom-coursestate">
                    <div className="adminclassroom-coursestate-listtitle">
                      <Link to="/admin-classroom-publishedcourseworks">
                        <div className="adminclassroom-coursestate-listtitle-itemoff">
                          PUBLISHED COURSEWORKS
                        </div>
                      </Link>
                      <Link to="/admin-classroom-courseworkstats">
                        <div className="adminclassroom-coursestate-listtitle-itemoff">
                          COURSEWORK STATS
                        </div>
                      </Link>
                      <Link to="/admin-classroom-createcoursework">
                        <div className="adminclassroom-createnewcourse">
                          <div className="adminclassroom-coursestate-listtitle-itemon">
                            CREATE A COURSEWORK
                          </div>
                          <div
                            className="adminclassroom-createnewcourse-createbtn"
                            onClick={this.onAddCourseRow}
                          >
                            +
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="mt-3 mb-3">{children}</div>
                    <div className="adminclassroom-coursestate-pagenation mt-5 mb-5">
                      <div className="adminclassroom-coursestate-pagenation-btn">
                        PREV
                      </div>
                      <div className="adminclassroom-coursestate-pagenation-btn">
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

export default AdminCreateCoursework;

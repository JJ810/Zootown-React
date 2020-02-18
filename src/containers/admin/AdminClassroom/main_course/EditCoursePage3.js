import React, { useEffect } from "react";
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
import ImgCheck from "./../../../../assets/membership.png";
import RadioGroup from "antd/lib/radio/group";
import { Radio } from "antd";
import { connect } from "react-redux";
import NotificationSystem from "react-notification-system";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./style.scss";

const desp =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const MySwal = withReactContent(Swal);
//MySwal.fire("Good job!", "You clicked the button!", "success");

// MySwal.fire({
//   position: "top-end",
//   icon: "success",
//   title: "Your work has been saved",
//   showConfirmButton: false,
//   timer: 1500
// });

// MySwal.fire({
//   title: <p>Hello World</p>,
//   footer: "Copyright 2018",
//   onOpen: () => {
//     // `MySwal` is a subclass of `Swal`
//     //   with all the same instance & static methods
//     MySwal.clickConfirm();
//   }
// }).then(() => {
//   return MySwal.fire(<p>Shorthand works too</p>);
// });

class AdminEditCoursePage3 extends React.Component {
  constructor(props) {
    console.log(props.page);
    super(props);
    this.state = {
      selectedOption: "answer1"
    };

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleConfirmEmail = this.handleConfirmEmail.bind(this);
    this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
    this.handleClickCreate = this.handleClickCreate.bind(this);
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

  handleOptionChange(e) {
    this.setState({
      selectedOption: e.target.value
    });
  }

  notificationSystem = React.createRef();

  addNotification = event => {
    event.preventDefault();
    const notification = this.notificationSystem.current;
    notification.addNotification({
      message: <h5>Success</h5>,
      level: "success",
      children: <h7>Page has been saved!</h7>
    });
  };

  handleClickCreate() {
    Swal.fire("Success!", "You created new course", "success");
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
                  <div className="adminclassroom-editcoursepage-header">
                    <div className="adminclassroom-editcoursepage-header-title">
                      ZOO TOWN TASKS CLASSROOM
                    </div>
                    <div className="adminclassroom-editcoursepage-editmodebtn">
                      Edit mode
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
                        <div className="adminclassroom-published-listtitle-itemon">
                          CREATE A COURSEWORK
                        </div>
                      </Link>
                    </div>
                    <div className="col mt-3 mb-3">
                      <div>
                        <div className="adminclassroom-editcoursepage-skilltitle">
                          {this.props.courseitem.coursename}
                        </div>
                        <div className="adminclassroom-editcoursepage-savepagebtnContainer">
                          <div
                            className="adminclassroom-editcoursepage-savepagebtn"
                            onClick={this.addNotification}
                          >
                            <img
                              src={ImgCheck}
                              style={{ width: 42, height: 39 }}
                            />
                            <div className="adminclassroom-editcoursepage-savepagebtn-label">
                              SavePage
                            </div>
                          </div>
                          <NotificationSystem ref={this.notificationSystem} />
                        </div>
                      </div>
                      <div className="adminclassroom-editcoursepage-section2 mt-5">
                        <div className="adminclassroom-editcoursepage-section2-title">
                          TITLE ONE
                        </div>
                        <div className="adminclassroom-editcoursepage-section2-desp mt-5">
                          <textArea
                            className="adminclassroom-editcoursepage-section2-desp"
                            placeholder={desp}
                            maxLength="1000"
                          ></textArea>
                        </div>
                      </div>
                      <div className="course3-question-section">
                        <div>
                          <div className="course3-question-section-title">
                            Question1
                          </div>
                          <div className="course3-question-section-quiz">
                            How many people have been apart of this project?
                          </div>
                          <div className="course3-question-section-desp">
                            Please choose one answer
                          </div>
                          <div>
                            <RadioGroup>
                              <div className="course3-question-section-answer">
                                <Radio
                                  value="answer1"
                                  checked={
                                    this.state.selectedOption === "answer1"
                                  }
                                  onChange={this.handleOptionChange}
                                ></Radio>
                                <label className="pl-3">
                                  How many people have been apart of this
                                  project?
                                </label>
                              </div>
                              <div className="course3-question-section-answer">
                                <Radio
                                  value="answer2"
                                  checked={
                                    this.state.selectedOption === "answer2"
                                  }
                                  onChange={this.handleOptionChange}
                                ></Radio>
                                <label className="pl-3">
                                  How many people have been apart of this
                                  project?
                                </label>
                              </div>
                              <div className="course3-question-section-answer">
                                <Radio
                                  value="answer3"
                                  checked={
                                    this.state.selectedOption === "answer3"
                                  }
                                  onChange={this.handleOptionChange}
                                ></Radio>
                                <label className="pl-3">
                                  How many people have been apart of this
                                  project?
                                </label>
                              </div>
                              <div className="course3-question-section-answer">
                                <Radio
                                  value="answer4"
                                  checked={
                                    this.state.selectedOption === "answer4"
                                  }
                                  onChange={this.handleOptionChange}
                                ></Radio>
                                <label className="pl-3">
                                  How many people have been apart of this
                                  project?
                                </label>
                              </div>
                            </RadioGroup>
                          </div>
                        </div>
                        <div>
                          <div className="course3-question-section-title">
                            Question2
                          </div>
                          <div className="course3-question-section-quiz">
                            How many people have been apart of this project?
                          </div>
                          <div className="course3-question-section-desp">
                            Please choose one answer
                          </div>
                          <div>
                            <RadioGroup>
                              <div className="course3-question-section-answer">
                                <Radio
                                  value="answer1"
                                  checked={
                                    this.state.selectedOption === "answer1"
                                  }
                                  onChange={this.handleOptionChange}
                                ></Radio>
                                <label className="pl-3">
                                  How many people have been apart of this
                                  project?
                                </label>
                              </div>
                              <div className="course3-question-section-answer">
                                <Radio
                                  value="answer2"
                                  checked={
                                    this.state.selectedOption === "answer2"
                                  }
                                  onChange={this.handleOptionChange}
                                ></Radio>
                                <label className="pl-3">
                                  How many people have been apart of this
                                  project?
                                </label>
                              </div>
                              <div className="course3-question-section-answer">
                                <Radio
                                  value="answer3"
                                  checked={
                                    this.state.selectedOption === "answer3"
                                  }
                                  onChange={this.handleOptionChange}
                                ></Radio>
                                <label className="pl-3">
                                  How many people have been apart of this
                                  project?
                                </label>
                              </div>
                              <div className="course3-question-section-answer">
                                <Radio
                                  value="answer4"
                                  checked={
                                    this.state.selectedOption === "answer4"
                                  }
                                  onChange={this.handleOptionChange}
                                ></Radio>
                                <label className="pl-3">
                                  How many people have been apart of this
                                  project?
                                </label>
                              </div>
                            </RadioGroup>
                          </div>
                        </div>
                        <div>
                          <div className="course3-question-section-title">
                            Question3
                          </div>
                          <div className="course3-question-section-quiz">
                            How many people have been apart of this project?
                          </div>
                          <div className="course3-question-section-desp">
                            Please choose one answer
                          </div>
                          <div>
                            <RadioGroup>
                              <div className="course3-question-section-answer">
                                <Radio
                                  value="answer1"
                                  checked={
                                    this.state.selectedOption === "answer1"
                                  }
                                  onChange={this.handleOptionChange}
                                ></Radio>
                                <label className="pl-3">
                                  How many people have been apart of this
                                  project?
                                </label>
                              </div>
                              <div className="course3-question-section-answer">
                                <Radio
                                  value="answer2"
                                  checked={
                                    this.state.selectedOption === "answer2"
                                  }
                                  onChange={this.handleOptionChange}
                                ></Radio>
                                <label className="pl-3">
                                  How many people have been apart of this
                                  project?
                                </label>
                              </div>
                              <div className="course3-question-section-answer">
                                <Radio
                                  value="answer3"
                                  checked={
                                    this.state.selectedOption === "answer3"
                                  }
                                  onChange={this.handleOptionChange}
                                ></Radio>
                                <label className="pl-3">
                                  How many people have been apart of this
                                  project?
                                </label>
                              </div>
                              <div className="course3-question-section-answer">
                                <Radio
                                  value="answer4"
                                  checked={
                                    this.state.selectedOption === "answer4"
                                  }
                                  onChange={this.handleOptionChange}
                                ></Radio>
                                <label className="pl-3">
                                  How many people have been apart of this
                                  project?
                                </label>
                              </div>
                            </RadioGroup>
                          </div>
                        </div>
                        <div>
                          <div className="course3-question-section-title">
                            Question4
                          </div>
                          <div className="course3-question-section-quiz">
                            How many people have been apart of this project?
                          </div>
                          <div className="course3-question-section-desp">
                            Please choose one answer
                          </div>
                          <div>
                            <RadioGroup>
                              <div className="course3-question-section-answer">
                                <Radio
                                  value="answer1"
                                  checked={
                                    this.state.selectedOption === "answer1"
                                  }
                                  onChange={this.handleOptionChange}
                                ></Radio>
                                <label className="pl-3">
                                  How many people have been apart of this
                                  project?
                                </label>
                              </div>
                              <div className="course3-question-section-answer">
                                <Radio
                                  value="answer2"
                                  checked={
                                    this.state.selectedOption === "answer2"
                                  }
                                  onChange={this.handleOptionChange}
                                ></Radio>
                                <label className="pl-3">
                                  How many people have been apart of this
                                  project?
                                </label>
                              </div>
                              <div className="course3-question-section-answer">
                                <Radio
                                  value="answer3"
                                  checked={
                                    this.state.selectedOption === "answer3"
                                  }
                                  onChange={this.handleOptionChange}
                                ></Radio>
                                <label className="pl-3">
                                  How many people have been apart of this
                                  project?
                                </label>
                              </div>
                              <div className="course3-question-section-answer">
                                <Radio
                                  value="answer4"
                                  checked={
                                    this.state.selectedOption === "answer4"
                                  }
                                  onChange={this.handleOptionChange}
                                ></Radio>
                                <label className="pl-3">
                                  How many people have been apart of this
                                  project?
                                </label>
                              </div>
                            </RadioGroup>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="adminclassroom-coursestate-pagenation mt-5 mb-5">
                      <Link to="/admin-classroom-editcoursepage2">
                        <div className="adminclassroom-editcoursepage-nextbtn">
                          PREV
                        </div>
                      </Link>
                      <div
                        className="adminclassroom-editcoursepage-nextbtn"
                        onClick={this.handleClickCreate}
                      >
                        Create
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

const mapStateToProps = state => ({
  courseitem: state.course.item
});

export default connect(mapStateToProps, {})(AdminEditCoursePage3);

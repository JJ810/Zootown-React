import React from "react";
import {Route , Router , Link} from 'react-router'
import ReactPlayer from 'react-player'

// reactstrap components
import { 
    Button,
    Card,
    CardHeader,
    CardBody,
    Container,
    Section,
    Row,
    Col,
    Table,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Navbar,
    NavbarBrand,
    UncontrolledCollapse,
    Nav,
    NavItem,
    NavLink,
    UncontrolledTooltip
} from "reactstrap";

class Course1 extends React.Component {
    render() { 
        const btnstyle = {
                borderRadius: 0
            }
        const btnstyle2 = {
                borderRadius: 20,
            backgroundColor: 'rgb(164,211,33)'
            }
        const fontstyle = {
            fontSize: 14
        }
        const fontstyle2 = {
            fontSize: 28
        }
        const headcolor = {
            backgroundColor: 'rgb(254,219,69)'
        }
        const  pages = {
            marginLeft: '45%'
        }
        return (
            <div>
                <Navbar style={headcolor} className="navbar-main shadow-lg" expand="lg" id="navbar-main">
                    <Container style={headcolor}>
                        <button className="navbar-toggler" id="navbar_global">
                            <span className="navbar-toggler-icon">Icon</span>
                        </button>
                        <UncontrolledCollapse className="ml-lg-xl" navbar toggler="#navbar_global">
                            <Nav className="ml-lg align-items-lg-center">
                                <NavItem>
                                    <NavLink
                                         className="ml-5 text-darker"
                                        href="/profile-page"
                                        id="tooltip333589074"
                                        target="_blank">
                                            <span>Home</span>
                                    </NavLink>
                                    <UncontrolledTooltip delay={0} target="tooltip333589074">HOME</UncontrolledTooltip>
                                </NavItem>
                                <NavItem className="ml-5">
                                    <NavLink
                                         className="ml-5 text-darker"
                                        href="#"
                                        id="tooltip356693867"
                                        target="_blank"
                                        >
                                        <span>My Dashboard</span>
                                    </NavLink>
                                    <UncontrolledTooltip delay={0} target="tooltip356693867">My Dashboard</UncontrolledTooltip>
                                </NavItem>
                                <NavItem className="ml-5">
                                    <NavLink
                                         className="ml-5 text-darker"
                                        href="#"
                                        id="tooltip184698705"
                                        target="_blank"
                                        >
                                        <span>Zoo Town Classroom</span>
                                    </NavLink>
                                    <UncontrolledTooltip delay={0} target="tooltip184698705">Zoo Town Classroom</UncontrolledTooltip>
                                </NavItem>
                            </Nav>
                            </UncontrolledCollapse>
                    </Container >
                </Navbar>
                <main ref="main">
                    <section className="bg-white">
                        <Container className="p-5 bg-White">
                            <h5 className="font-weight-bold text-center">ZOO TOWN TASK CLASSROOM</h5>
                        </Container>
                    </section>
                    <section>
                        <Container>
                            <Row>
                                <Col lg="4">
                                    <button style={btnstyle} className="btn w-75 btn-outline-dark">Topics <i className="fa fa-arrow-down"></i></button>
                                </Col>
                                <Col lg="4">
                                    <InputGroup className="shadow-none input-group-alternative">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="fa fa-search" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input placeholder="Search for more courses" type="text"/>
                                    </InputGroup>   
                                </Col>
                                <Col lg="4" className="mt-2">
                                    <p className="text-darker">Clear Filters</p>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section className="section-lg">
                        <Container>
                            <Card style={btnstyle} className="border-dark mb-3">
                                <CardBody>
                                    <Row>
                                        <Col lg="4">
                                            <div className="border-lead w-100 h-75">
                                                <ReactPlayer  className="w-100 h-100" url='https://www.youtube.com/watch?v=ysz5S6PUM-U'   />
                                            </div>
                                            <Row>
                                                <p className="ml-3 font-weight-bold">Teacher-John WIck</p>
                                            </Row>
                                        </Col>
                                        <Col lg="8">
                                            <p className="font-weight-bold text-darker">User Experiance</p>
                                            <Row>
                                                <p style={fontstyle} className="ml-3 font-weight-bold text-darker"><i style={fontstyle2} className="text-light mr-3 ni ni-chart-bar-32"></i>EASY</p>
                                                <p style={fontstyle} className="ml-5 font-weight-bold text-darker"><i style={fontstyle2} className="text-light mr-3 fa fa-clock-o"></i>30 MINS</p>
                                                <p>This will be a very interesting course that will explain how to create user experience there are. Join in the fun. If you would like to understand how to create user experiance</p>
                                                <button style={btnstyle2} className="btn mr-5 ml-auto text-white"><i className="fa fa-check-circle"></i> Start Course</button>
                                            </Row>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                            <Card style={btnstyle} className="border-dark mb-3">
                                <CardBody>
                                    <Row>
                                        <Col lg="4">
                                            <div className="w-100 h-75">
                                                <ReactPlayer  className="w-100 h-100" url='https://www.youtube.com/watch?v=ysz5S6PUM-U'   />
                                            </div>
                                            <Row>
                                                <p className="ml-3 font-weight-bold">Teacher-John WIck</p>
                                            </Row>
                                        </Col>
                                        <Col lg="8">
                                            <p className="font-weight-bold text-darker">User Experiance</p>
                                            <Row>
                                                <p style={fontstyle} className="ml-3 font-weight-bold text-darker"><i style={fontstyle2} className="text-light mr-3 ni ni-chart-bar-32"></i>EASY</p>
                                                <p style={fontstyle} className="ml-5 font-weight-bold text-darker"><i style={fontstyle2} className="text-light mr-3 fa fa-clock-o"></i>30 MINS</p>
                                                <p>This will be a very interesting course that will explain how to create user experience there are. Join in the fun. If you would like to understand how to create user experiance</p>
                                                <button style={btnstyle2} className="btn mr-5 text-white ml-auto"><i className="fa fa-check-circle"></i> Start Course</button>
                                            </Row>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                            <Card style={btnstyle} className="border-dark mb-3">
                                <CardBody>
                                    <Row>
                                        <Col lg="4">
                                            <div className="w-100 h-75">
                                                <ReactPlayer  className="w-100 h-100" url='https://www.youtube.com/watch?v=ysz5S6PUM-U'   />
                                            </div>
                                            <Row>
                                                <p className="ml-3 font-weight-bold">Teacher-John WIck</p>
                                            </Row>
                                        </Col>
                                        <Col lg="8">
                                            <p className="font-weight-bold text-darker">User Experiance</p>
                                            <Row>
                                                <p style={fontstyle} className="ml-3 font-weight-bold text-darker"><i style={fontstyle2} className="text-light mr-3 ni ni-chart-bar-32"></i>EASY</p>
                                                <p style={fontstyle} className="ml-5 font-weight-bold text-darker"><i style={fontstyle2} className="text-light mr-3 fa fa-clock-o"></i>30 MINS</p>
                                                <p>This will be a very interesting course that will explain how to create user experience there are. Join in the fun. If you would like to understand how to create user experiance</p>
                                                <button style={btnstyle2} className="text-white btn mr-5 ml-auto"><i className="fa fa-check-circle"></i> Start Course</button>
                                            </Row>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                            <Card style={btnstyle} className=" border-dark mb-3">
                                <CardBody>
                                    <Row>
                                        <Col lg="4">
                                            <div className="w-100 h-75">
                                                <ReactPlayer  className="w-100 h-100" url='https://www.youtube.com/watch?v=ysz5S6PUM-U'   />
                                            </div>
                                            <Row>
                                                <p className="ml-3 font-weight-bold">Teacher-John WIck</p>
                                            </Row>
                                        </Col>
                                        <Col lg="8">
                                            <p className="font-weight-bold text-darker">User Experiance</p>
                                            <Row>
                                                <p style={fontstyle} className="ml-3 font-weight-bold text-darker"><i style={fontstyle2} className="text-light mr-3 ni ni-chart-bar-32"></i>EASY</p>
                                                <p style={fontstyle} className="ml-5 font-weight-bold text-darker"><i style={fontstyle2} className="text-light mr-3 fa fa-clock-o"></i>30 MINS</p>
                                                <p>This will be a very interesting course that will explain how to create user experience there are. Join in the fun. If you would like to understand how to create user experiance</p>
                                                <button style={btnstyle2} className="text-white btn mr-5 ml-auto"><i className="fa fa-check-circle"></i> Start Course</button>
                                            </Row>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                            <Row>
                                <p style={pages}>
                                    <a>1</a> <a>2</a> <a>3</a> <a>4</a> <a>5</a> <a>6</a> <a>7</a> <a>8</a> 
                                </p>
                            </Row>
                        </Container>
                    </section>
                </main> 
            </div>
        );  
    }
}

export default Course1;
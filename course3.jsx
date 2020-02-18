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

class Course3 extends React.Component {
    render() { 
        const btnstyle = {
                borderRadius: 0
            }
        const btnstyle2 = {
                borderRadius: 20,
            backgroundColor: 'rgb(254,219,69)'
            }
        const fontstyle = {
            fontSize: 14
        }
        const fontstyle2 = {
            fontSize: 36
        }
        const headcolor = {
            backgroundColor: 'rgb(254,219,69)'
        }
        const  pages = {
            marginLeft: '45%'
        }
        const fontstyle3 = {
            fontSize: 21
        }
        const btnc = {
            backgroundColor: 'rgb(33,74,211)',
            borderRadius: 20,
        }
        const btnc2 = {
            backgroundColor: 'rgb(164,211,33)',
            borderRadius: 20,
        }
        const theadrole = {
            width: '245px'
        }
        const theadstatus = {
            width: '350px'
        }
        const theadskill = {
            width: '200px'
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
                    <section>
                        <Container className="mt-5">
                            <Row>
                                <Col lg="12">
                                    <ReactPlayer  className="w-100" url='https://www.youtube.com/watch?v=ysz5S6PUM-U'   />
                                </Col>
                            </Row>
                            <h5 className="text-center mt-5 text-darker font-weight-bold">DASHBOARD</h5>
                        </Container>
                    </section>
                    <section>
                        <Container>
                            <Row className="align-content-center text-center mt-5">
                                <Col lg="4">
                                    <p className="text-darker font-weight-bold">Courses Completed</p>
                                    <p style={fontstyle2} className="font-weight-bold text-darker">7</p>
                                </Col>
                                <Col lg="4">
                                    <p className="text-darker font-weight-bold">New Skilled Developed</p>
                                    <p style={fontstyle2} className="font-weight-bold text-darker">3</p>
                                </Col>
                                <Col lg="4">
                                    <p className="text-darker font-weight-bold">Case Studies Submitted</p>
                                    <p style={fontstyle2} className="font-weight-bold text-darker">7</p>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section>
                        <Container className="mt-5">
                            <Row className="text-center">
                                <Col lg="12">
                                    <p className="text-center text-darker font-weight-bold">NEW COURSER WE THINK YOU WOULD LIKE....</p>
                                </Col>
                            </Row>
                            <Row className="text-center mt-5">
                                <Col lg="4">
                                    <ReactPlayer  className="h-100 w-100" url='https://www.youtube.com/watch?v=ysz5S6PUM-U'   />
                                </Col>
                                <Col lg="4">
                                    <ReactPlayer  className="w-100 h-100" url='https://www.youtube.com/watch?v=ysz5S6PUM-U'   />
                                </Col>
                                <Col lg="4">
                                    <ReactPlayer  className="h-100 w-100" url='https://www.youtube.com/watch?v=ysz5S6PUM-U'   />
                                </Col>
                            </Row>
                            <Row className="text-center mt-3">
                                <Col lg="12">
                                    <button className="btn text-capitalize btn-md" style={btnstyle2}>
                                           Show More 
                                    </button>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section>
                        <Container className="mt-5">
                            <Row>
                                <Col lg="10">
                                    <p className="text-darker font-weight-bold">STATUS OF COURSES</p>
                                    <Table>
                                        <thead className="bg-secondary border">
                                            <tr>
                                                <th style={theadrole}  className="font-weight-normal">ROLE</th>
                                                <th style={theadstatus} className="font-weight-normal">STATUS</th>
                                                <th style={theadskill} className="font -weight-normal">SKILLS</th>    
                                            </tr>
                                        </thead>
                                    </Table>
                                    <Table>
                                        <thead className="border">
                                            <tr>
                                                <th style={theadrole} className="font-weight-normal">Junior Designer</th>
                                                <th style={theadstatus}>
                                                    <div className="text-center w-50 h-50 bg-info text-white">
                                                        <p style={fontstyle}>Started</p>
                                                    </div>
                                                </th>
                                                <th style={theadskill}>
                                                    <div style={btnstyle2} className="text-center w-50 h-50 text-darker">
                                                        <p style={fontstyle}>Design</p>
                                                    </div>
                                                </th>    
                                            </tr>
                                        </thead>
                                    </Table>
                                    <Table>
                                        <thead className="border">
                                            <tr>
                                                <th style={theadrole} className="font-weight-normal">UI Designer</th>
                                                <th style={theadstatus}>
                                                    <div className="text-center w-50 h-50 bg-danger text-white">
                                                        <p style={fontstyle}>Completed</p>
                                                    </div>
                                                </th>
                                                <th style={theadskill}>
                                                    <div style={btnstyle2} className="text-center w-50 h-50 text-darker">
                                                        <p style={fontstyle}>UX</p>
                                                    </div>
                                                </th>    
                                            </tr>
                                        </thead>
                                    </Table>
                                    <Table>
                                        <thead className="border">
                                            <tr>
                                                <th style={theadrole} className="font-weight-normal">3D Modeller, V-Ray</th>
                                                <th style={theadstatus}>
                                                    <div className="text-center w-50 h-50 bg-yellow text-white">
                                                        <p style={fontstyle}>On Hold</p>
                                                    </div>
                                                </th>
                                                <th style={theadskill}>
                                                    <div style={btnstyle2} className="text-center w-50 h-50 text-darker">
                                                        <p style={fontstyle}>Microsoft</p>
                                                    </div>
                                                </th>    
                                            </tr>
                                        </thead>
                                    </Table>
                                    <Table>
                                        <thead className="border">
                                            <tr>
                                                <th style={theadrole} className="font-weight-normal">Interior Designer</th>
                                                <th style={theadstatus}>
                                                    <div className="text-center w-50 h-50 bg-info text-white">
                                                        <p style={fontstyle}>Reviewing Applicants</p>
                                                    </div>
                                                </th>
                                                <th style={theadskill}>
                                                    <div style={btnstyle2} className="text-center w-50 h-50 text-darker">
                                                        <p style={fontstyle}>Funding</p>
                                                    </div>
                                                </th>    
                                            </tr>
                                        </thead>
                                    </Table>
                                    <Table>
                                        <thead className="border">
                                            <tr>
                                                <th style={theadrole} className="font-weight-normal">Interior Designer</th>
                                                <th style={theadstatus}>
                                                    <div className="text-center w-50 h-50 bg-success text-white">
                                                        <p style={fontstyle}>Interviewing</p>
                                                    </div>
                                                </th>
                                                <th style={theadskill}>
                                                    <div style={btnstyle2} className="text-center w-50 h-50 text-darker">
                                                        <p style={fontstyle}>HTML</p>
                                                    </div>
                                                </th>    
                                            </tr>
                                        </thead>
                                    </Table>
                                </Col>
                            </Row>
                        </Container>    
                    </section>
                </main> 
            </div>
        );  
    }
}

export default Course3;
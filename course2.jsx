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

class Course2 extends React.Component {
    render() { 
        const btnstyle = {
                borderRadius: 0
            }
        const btnstyle2 = {
                borderRadius: 20,
            backgroundColor: 'rgb(254,219,69)'
            }
        const fontstyle = {
            fontSize: 11
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
        const tname = {
            color: 'rgb(254,219,69)'
        }
        return (
            <div>
                <Navbar style={headcolor} className="navbar-main" expand="lg" id="navbar-main">
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
                    <section  style={headcolor}>
                        <Container>
                            <Row>
                                <p style={fontstyle} className="mt-2 text-darker"><i style={fontstyle2} className="text-light mr-3 ni ni-chart-bar-32"></i>EASY</p>
                                <p style={fontstyle} className="ml-4 mt-2 text-darker"><i style={fontstyle2} className="text-light mr-3 fa fa-clock-o"></i>30 MINS</p>
                            </Row>
                        </Container>
                    </section>
                    <section>
                        <Container>
                            <Row>
                                <Col lg="12">
                                    <ReactPlayer  className="w-100 h-100" url='https://www.youtube.com/watch?v=ysz5S6PUM-U'   />
                                </Col>
                            </Row>
                            <h5 className="text-center mt-3 text-darker font-weight-bold">USER EXPERIANCE</h5>
                            <p className="mt-3">This role will play an important role in growing our international network of content creators. working within a small team, you;ll execute on a range of compaigns that will attract a high calibre of freelance talent into our Network. you'll then use your organisation skills to ensure all applicants are screened in an efficiant yet professional manner. The right person for this role gets exited about running large-scale ralent attraction compaigns, but also enjoy directly sourcing and approaching candidates for specfic project briefs.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry;s stanterd dummy text ever since the 1500s, when an unknown printer took a gallay of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset Sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorum Ipsum.</p>
                            <h5 className="text-center mt-3 text-darker font-weight-bold">
                            WHY IS USER EXPERIANCE IMPORTANT?</h5>
                            <p className="mt-3">This role will play an important role in growing our international network of content creators. working within a small team, you;ll execute on a range of compaigns that will attract a high calibre of freelance talent into our Network. you'll then use your organisation skills to ensure all applicants are screened in an efficiant yet professional manner. The right person for this role gets exited about running large-scale ralent attraction compaigns, but also enjoy directly sourcing and approaching candidates for specfic project briefs.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry;s stanterd dummy text ever since the 1500s, when an unknown printer took a gallay of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset Sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorum Ipsum.</p>
                            <h5 className="text-center mt-3 text-darker font-weight-bold">TRY IT YOURSELF - HOMEWORK TIME</h5>
                            <p className="mt-3">This role will play an important role in growing our international network of content creators. working within a small team, you;ll execute on a range of compaigns that will attract a high calibre of freelance talent into our Network. you'll then use your organisation skills to ensure all applicants are screened in an efficiant yet professional manner.</p>
                            <Row className="mt-5">
                                <Col lg="4" className="text-center">
                                    <button style={btnstyle2} className="btn pb-3 pt-2 h-75 ml-auto text-left text-white font-weight-normal text-capitalize"><i style={fontstyle3} className="fa fa-download mr-2"></i>Download Case Study</button>
                                </Col>
                                <Col lg="4" className="text-center">
                                    <button style={btnc} className="btn pb-3 pt-2 ml-auto h-75 text-white text-left font-weight-normal text-capitalize"><i style={fontstyle3} className="fa fa-plus-circle mr-2"></i>Submit Your Work</button>
                                </Col>
                                <Col lg="4" className="text-center">
                                    <button style={btnc2} className="btn pb-3 pt-2 ml-auto h-75 text-white text-left font-weight-normal text-capitalize"><i style={fontstyle3} className="fa fa-check-circle mr-2"></i>Complete Course</button>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section className="border">
                        <Row className="mt-3 ">
                            <Col lg="3">
                                <h4 className="text-center">Teacher</h4>
                            </Col>
                            <Col lg="9" className="align-content-center">
                                <h5 style={tname} className="font-weight-bold">John Wick</h5>
                                <p className="text-darker">This role will play an important role in growing our international network of content creators. working within a small team, you;ll execute on a range of compaigns that will attract a high calibre of freelance talent into our Network.</p>
                            </Col>
                        </Row>
                    </section>
                </main> 
            </div>
        );  
    }
}

export default Course2;
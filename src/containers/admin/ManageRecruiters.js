import React from "react";
import {  AdminHeader } from './NavBar/index';
import { AdminSideBar } from '../../components/admin';
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
import { graphql } from 'react-apollo';
class ManageRecruiters extends React.Component {
    constructor(props) {
        super(props);
        this.state={

        }
        this.handlebyjobs = this.handlebyjobs.bind(this);
        this.handlebyadmin = this.handlebyadmin.bind(this);
        this.handlebycompanyname = this.handlebycompanyname.bind(this);
        this.handlebycompanynumber = this.handlebycompanynumber.bind(this);
    }
handlebyadmin (e){
    console.log(e.target.value)
}
handlebyjobs (e){
    console.log(e.target.value)
}
handlebycompanyname (e){
    console.log(e.target.value)
}
handlebycompanynumber (e){
    console.log(e.target.value)
}
    render() {
         const { page } = this.props;
        return (
            <div>
                <AdminHeader page={page} />
                 <main ref="main" >
                    <section>
                        <Container fluid>
                            <Row>
                                <AdminSideBar page={page}/>
         
                                <Col className="mt-5" md="9">
                                    <span className="ml-4 mt-1  my-family-bold f-24 text-black">RECRUITERS </span>
                                    <Row>
                                        <Col className="text-center" md={3}>
                                            <p className="text-muted-jobs mt-4 f-10 my-family-bold">COMPANY NAME</p>
                                             <input  type="text" className=" text-muted-jobs form-control " onChange={this.handlebycompanyname} />
                                        </Col>
                                        <Col className="text-center" md={3}>
                                            <p className="text-muted-jobs mt-4 f-10 my-family-bold">COMPANY NUMBER</p>
                                             <input  type="number" className=" text-muted-jobs form-control " onChange={this.handlebycompanynumber} />
                                        </Col>
                                        <Col className="text-center" md={2}>
                                            <p className="text-muted-jobs mt-4 f-10 my-family-bold">ADMIN</p>
                                             <input  type="number" className=" text-muted-jobs form-control " onChange={this.handlebyadmin} />
                                        </Col>
                                        <Col className="text-center" md={4}>
                                            <p className="text-muted-jobs mt-4 f-10 my-family-bold">JOBS/PROJECTS</p>
                                             <input  type="number" className=" text-muted-jobs form-control " onChange={this.handlebyjobs} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="text-center" md={3}>
                                            <p className="mt-4" ><img className="w-35-icon" src={require('../../assets/images/employer/1.png')} /><span className="f-16 font-weight-600 text-black ml-3 my-family" > Plum Guide</span></p>
                                        </Col>
                                        <Col className="text-center" md={3}>
                                             <p className="mt-4" ><span className="f-16 my-family font-weight-600 text-black ml-3" >#324235235235 </span></p>
                                        </Col>
                                        <Col className="text-center" md={2}>
                                            <p className="mt-4" ><img className="w-35-icon" src={require('../../assets/icons/review.png')} /><span className="f-16 my-family font-weight-600 text-black ml-3" > Plum Guide</span></p>
                                        </Col>
                                        <Col className="text-center" md={4}>  
                                            <p className="mt-4" ><span className="f-16 my-family font-weight-600 text-black ml-3" >Create Web Desing for CRM System</span></p>
                                        </Col>
                                    </Row>
                                   <Row>
                                        <Col className="text-center" md={3}>
                                            <p className="mt-4" ><img className="w-35-icon" src={require('../../assets/images/employer/1.png')} /><span className="f-16 font-weight-600 text-black ml-3 my-family" > Plum Guide</span></p>
                                        </Col>
                                        <Col className="text-center" md={3}>
                                             <p className="mt-4" ><span className="f-16 my-family font-weight-600 text-black ml-3" >#324235235235 </span></p>
                                        </Col>
                                        <Col className="text-center" md={2}>
                                            <p className="mt-4" ><img className="w-35-icon" src={require('../../assets/icons/review.png')} /><span className="f-16 my-family font-weight-600 text-black ml-3" > Plum Guide</span></p>
                                        </Col>
                                        <Col className="text-center" md={4}>  
                                            <p className="mt-4" ><span className="f-16 my-family font-weight-600 text-black ml-3" >Create Web Desing for CRM System</span></p>
                                        </Col>
                                    </Row>
                                   <Row>
                                        <Col className="text-center" md={3}>
                                            <p className="mt-4" ><img className="w-35-icon" src={require('../../assets/images/employer/1.png')} /><span className="f-16 font-weight-600 text-black ml-3 my-family" > Plum Guide</span></p>
                                        </Col>
                                        <Col className="text-center" md={3}>
                                             <p className="mt-4" ><span className="f-16 my-family font-weight-600 text-black ml-3" >#324235235235 </span></p>
                                        </Col>
                                        <Col className="text-center" md={2}>
                                            <p className="mt-4" ><img className="w-35-icon" src={require('../../assets/icons/review.png')} /><span className="f-16 my-family font-weight-600 text-black ml-3" > Plum Guide</span></p>
                                        </Col>
                                        <Col className="text-center" md={4}>  
                                            <p className="mt-4" ><span className="f-16 my-family font-weight-600 text-black ml-3" >Create Web Desing for CRM System</span></p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </main>
            </div>
        )
    }
}

export default ManageRecruiters;
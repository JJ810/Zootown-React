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
class ManageStudents extends React.Component {
    constructor(props) {
        super(props);
        this.state={

        }
        this.handlebyjob = this.handlebyjob.bind(this);
        this.handlebycondel = this.handlebycondel.bind(this);
        this.handlebywarning = this.handlebywarning.bind(this);
        this.handlebyphone = this.handlebyphone.bind(this);
        this.handlebyemail = this.handlebyemail.bind(this);
        this.handlebyname = this.handlebyname.bind(this);
        this.handlebyuniversity = this.handlebyuniversity.bind(this);
    }
handlebyjob (e){
    console.log(e.target.value)
}
handlebycondel (e){
    console.log(e.target.value)
}
handlebyemail (e){
    console.log(e.target.value)
}
handlebywarning (e){
    console.log(e.target.value)
}
handlebyphone (e){
    console.log(e.target.value)
}
handlebyname (e){
    console.log(e.target.value)
}
handlebyuniversity (e){
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
                                        <Col className="text-center" md={2}>
                                            <p className="text-muted-jobs mt-4 f-10 my-family-bold">FULL NAME</p>
                                             <input  type="text" className=" text-muted-jobs form-control " onChange={this.handlebyname} />
                                        </Col>
                                        <Col className="text-center" md={2}>
                                            <p className="text-muted-jobs mt-4 f-10 my-family-bold">UNIVERSITY</p>
                                             <input  type="number" className=" text-muted-jobs form-control " onChange={this.handlebyuniversity} />
                                        </Col>
                                        <Col className="text-center" md={2}>
                                            <p className="text-muted-jobs mt-4 f-10 my-family-bold">EMAIL</p>
                                             <input  type="number" className=" text-muted-jobs form-control " onChange={this.handlebyemail} />
                                        </Col>
                                        <Col className="text-center" md={3}>
                                            <span className="float-left w-45">
                                                <p className="text-muted-jobs mt-4 f-10 my-family-bold">PHONE NO</p>
                                                <input  type="text" className=" text-muted-jobs form-control " onChange={this.handlebyphone} />
                                            </span>
                                            <span className="float-right w-45">
                                                <p className="text-muted-jobs mt-4 f-10 my-family-bold">WARNINGS</p>
                                                <input  type="text" className=" text-muted-jobs form-control " onChange={this.handlebywarning} />
                                            </span>
                                        </Col>
                                        <Col className="text-center" md={3}>
                                            <span className="float-left w-45">
                                                <p className="text-muted-jobs mt-4 f-10 my-family-bold">JOB/PROJECT</p>
                                                <input  type="text" className=" text-muted-jobs form-control " onChange={this.handlebyjob} />
                                            </span>
                                            <span className="float-right w-45">
                                                <p className="text-muted-jobs mt-4 f-10 my-family-bold">CONFIRM/DELETE</p>
                                                <input  type="text" className=" text-muted-jobs form-control " onChange={this.handlebycondel} />
                                            </span>
                                        </Col>
                                    </Row>     
                                    <Row className="mt-5">
                                        <Col className="text-center" md={2}>
                                            <p className="" ><img className="w-35-icon" src={require('../../assets/images/employer/1.png')} /><span className="f-14 font-weight-600 text-black ml-3 my-family" > John Doe</span></p>
                                        </Col>
                                        <Col className="text-center" md={2}>
                                            <span className="f-14 font-weight-600 text-black my-family" >European University Cyprus</span>
                                             
                                        </Col>
                                        <Col className="text-center" md={2}>
                                            <span className="f-14 font-weight-600 t-c my-family" >email@email.com</span>
                                        </Col>
                                        <Col className="text-center" md={3}>
                                            <span className="float-left w-45">
                                               <span className="f-14 font-weight-600 t-c my-family" >+12312312312</span>
                                            </span>
                                            <span className="float-right w-45">
                                                <span className="f-14 font-weight-600 t-c my-family" >What could be there</span>
                                            </span>
                                        </Col>
                                        <Col className="text-center" md={3}>
                                            <span className="float-left w-45">
                                                <span className="f-14 font-weight-600 text-black my-family" >Web designer</span>
                                            </span>
                                            <span className="float-right w-45">
                                                <img className="w-25-icon " src={require('../../assets/membership.png')} />
                                                <img className="w-25-icon ml-2 " src={require('../../assets/deletecard.png')} />
                                            </span>
                                        </Col>
                                    </Row>     
                                    <Row className="mt-5">
                                        <Col className="text-center" md={2}>
                                            <p className="" ><img className="w-35-icon" src={require('../../assets/images/employer/1.png')} /><span className="f-14 font-weight-600 text-black ml-3 my-family" > John Doe</span></p>
                                        </Col>
                                        <Col className="text-center" md={2}>
                                            <span className="f-14 font-weight-600 text-black my-family" >European University Cyprus</span>
                                             
                                        </Col>
                                        <Col className="text-center" md={2}>
                                            <span className="f-14 font-weight-600 t-c my-family" >email@email.com</span>
                                        </Col>
                                        <Col className="text-center" md={3}>
                                            <span className="float-left w-45">
                                               <span className="f-14 font-weight-600 t-c my-family" >+12312312312</span>
                                            </span>
                                            <span className="float-right w-45">
                                                <span className="f-14 font-weight-600 t-c my-family" >What could be there</span>
                                            </span>
                                        </Col>
                                        <Col className="text-center" md={3}>
                                            <span className="float-left w-45">
                                                <span className="f-14 font-weight-600 text-black my-family" >Web designer</span>
                                            </span>
                                            <span className="float-right w-45">
                                                <img className="w-25-icon " src={require('../../assets/membership.png')} />
                                                <img className="w-25-icon ml-2 " src={require('../../assets/deletecard.png')} />
                                            </span>
                                        </Col>
                                    </Row>     
                                    <Row className="mt-5">
                                        <Col className="text-center" md={2}>
                                            <p className="" ><img className="w-35-icon" src={require('../../assets/images/employer/1.png')} /><span className="f-14 font-weight-600 text-black ml-3 my-family" > John Doe</span></p>
                                        </Col>
                                        <Col className="text-center" md={2}>
                                            <span className="f-14 font-weight-600 text-black my-family" >European University Cyprus</span>
                                             
                                        </Col>
                                        <Col className="text-center" md={2}>
                                            <span className="f-14 font-weight-600 t-c my-family" >email@email.com</span>
                                        </Col>
                                        <Col className="text-center" md={3}>
                                            <span className="float-left w-45">
                                               <span className="f-14 font-weight-600 t-c my-family" >+12312312312</span>
                                            </span>
                                            <span className="float-right w-45">
                                                <span className="f-14 font-weight-600 t-c my-family" >What could be there</span>
                                            </span>
                                        </Col>
                                        <Col className="text-center" md={3}>
                                            <span className="float-left w-45">
                                                <span className="f-14 font-weight-600 text-black my-family" >Web designer</span>
                                            </span>
                                            <span className="float-right w-45">
                                                <img className="w-25-icon " src={require('../../assets/membership.png')} />
                                                <img className="w-25-icon ml-2 " src={require('../../assets/deletecard.png')} />
                                            </span>
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

export default ManageStudents;
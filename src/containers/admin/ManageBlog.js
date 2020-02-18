import React from "react";
import {  AdminHeader } from './NavBar/index';
import { AdminSideBar } from '../../components/admin';
import { Link } from 'react-router-dom';
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
    UncontrolledPopover,
PopoverBody,
PopoverHeader,
      FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
    Container
} from "reactstrap";
import classnames from "classnames";
import { graphql } from 'react-apollo';
class ManageBlog extends React.Component {
    constructor(props) {
        super(props);
        this.state={

        }
       
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
                                        <Row>
                                            <Col md={12}>
                                                <span className="ml-4 mt-1  my-family-bold f-24 text-black">BLOG </span>
                                            </Col>
                                            <Col md={4} className="mr-auto mt-3">
                                                 <span className=" btn primary-color my-family badge-pill text-black px-4">Add New Page</span>             

                                            </Col>
                                            <Col md={5} className="ml-auto mt-3">

                                                 <span className="  btn pause-btn my-family badge-pill text-black px-4"><i className="fa fa-eye mr-2"></i> Published</span>             
                                                 <span className=" btn delete-user my-family badge-pill text-white px-4"><i className="fa fa-trash mr-2"></i> Trashed</span>             
                                            </Col>
                                            <Col md={12}>
                                                <Row className="mt-5">
                                                    <Col md={2}>
                                                         <img className="w-100" src={require('../../assets/img/theme/img-2-1200x1000.jpg')} />
                                                    </Col>
                                                    <Col md={10}>
                                                        <Row>
                                                            <Col md={3} className="mr-auto">
                                                               <p className="my-family-bold f-25 text-black">Some Text</p>
                                                            </Col>
                                                            <Col md={5} className="ml-auto">
                                                                <Row>
                                                                    <Col md={5}>
                                                                          <span className="float-right f-18 my-family font-weight-500">Not Published</span>
                                                                    </Col>
                                                                    <Col md={3} className="text-center">
                                                                        <label className="mt-1 custom-toggle">
                                                                          <input defaultChecked type="checkbox" />
                                                                          <span className="custom-toggle-slider " />
                                                                        </label>
                                                                    </Col>
                                                                    <Col md={4} >
                                                                        <span className=" f-18 my-family font-weight-500">Published</span>

                                                                    </Col>
                                                                 </Row>
                                                            </Col>
                                                            <Col md={12}>
                                                                <p className="my-family font-weight-500 text-recom f-15">
                                                                    This role will play an important role in growing our international network of content creators. Working within a small team, you’ll execute on a range of campaigns that will attract a high calibre of freelance talent into our Network. 
                                                                </p>
                                                            </Col>
                                                            <Col md={3} className="mr-auto">
                                                               <p className="my-family font-weight-500 text-black f-14">10 minutes ago</p>
                                                            </Col>
                                                            <Col md={2} >
                                                                <Row>
                                                                    <Col md={4}>
                                                                        <Link to="/edit-blog">
                                                                          <button className="text-center br-6 primary-color w-30 h-30 text-white "><i className="f-18 fa fa-pencil"></i>
                                                                              </button></Link>
                                                                    </Col>
                                                                    <Col md={4}>
                                                                        <button className="text-center br-6 delete-user w-30 h-30 text-white "><i className="f-18 fa fa-trash"></i></button>
                                                                    </Col>
                                                                    <Col md={4} >
                                                                        <button className="text-center br-6 copy-blog w-30 h-30 text-white "><i className="f-18 fa fa-file"></i></button>
                                                                    </Col>
                                                                 </Row>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                                <Row className="mt-5">
                                                    <Col md={2}>
                                                         <img className="w-100" src={require('../../assets/img/theme/img-2-1200x1000.jpg')} />
                                                    </Col>
                                                    <Col md={10}>
                                                        <Row>
                                                            <Col md={3} className="mr-auto">
                                                               <p className="my-family-bold f-25 text-black">Some Text</p>
                                                            </Col>
                                                            <Col md={5} className="ml-auto">
                                                                <Row>
                                                                    <Col md={5}>
                                                                          <span className="float-right f-18 my-family font-weight-500">Not Published</span>
                                                                    </Col>
                                                                    <Col md={3} className="text-center">
                                                                        <label className="mt-1 custom-toggle">
                                                                          <input defaultChecked type="checkbox" />
                                                                          <span className="custom-toggle-slider " />
                                                                        </label>
                                                                    </Col>
                                                                    <Col md={4} >
                                                                        <span className=" f-18 my-family font-weight-500">Published</span>

                                                                    </Col>
                                                                 </Row>
                                                            </Col>
                                                            <Col md={12}>
                                                                <p className="my-family font-weight-500 text-recom f-15">
                                                                    This role will play an important role in growing our international network of content creators. Working within a small team, you’ll execute on a range of campaigns that will attract a high calibre of freelance talent into our Network. 
                                                                </p>
                                                            </Col>
                                                            <Col md={3} className="mr-auto">
                                                               <p className="my-family font-weight-500 text-black f-14">10 minutes ago</p>
                                                            </Col>
                                                            <Col md={2} >
                                                                <Row>
                                                                    <Col md={4}>
                                                                          <button className="text-center br-6 primary-color w-30 h-30 text-white "><i className="f-18 fa fa-pencil"></i></button>
                                                                    </Col>
                                                                    <Col md={4}>
                                                                        <button className="text-center br-6 delete-user w-30 h-30 text-white "><i className="f-18 fa fa-trash"></i></button>
                                                                    </Col>
                                                                    <Col md={4} >
                                                                        <button className="text-center br-6 copy-blog w-30 h-30 text-white "><i className="f-18 fa fa-file"></i></button>
                                                                    </Col>
                                                                 </Row>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                                <Row className="mt-5">
                                                    <Col md={2}>
                                                         <img className="w-100" src={require('../../assets/img/theme/img-2-1200x1000.jpg')} />
                                                    </Col>
                                                    <Col md={10}>
                                                        <Row>
                                                            <Col md={3} className="mr-auto">
                                                               <p className="my-family-bold f-25 text-black">Some Text</p>
                                                            </Col>
                                                            <Col md={5} className="ml-auto">
                                                                <Row>
                                                                    <Col md={5}>
                                                                          <span className="float-right f-18 my-family font-weight-500">Not Published</span>
                                                                    </Col>
                                                                    <Col md={3} className="text-center">
                                                                        <label className="mt-1 custom-toggle">
                                                                          <input defaultChecked type="checkbox" />
                                                                          <span className="custom-toggle-slider " />
                                                                        </label>
                                                                    </Col>
                                                                    <Col md={4} >
                                                                        <span className=" f-18 my-family font-weight-500">Published</span>

                                                                    </Col>
                                                                 </Row>
                                                            </Col>
                                                            <Col md={12}>
                                                                <p className="my-family font-weight-500 text-recom f-15">
                                                                    This role will play an important role in growing our international network of content creators. Working within a small team, you’ll execute on a range of campaigns that will attract a high calibre of freelance talent into our Network. 
                                                                </p>
                                                            </Col>
                                                            <Col md={3} className="mr-auto">
                                                               <p className="my-family font-weight-500 text-black f-14">10 minutes ago</p>
                                                            </Col>
                                                            <Col md={2} >
                                                                <Row>
                                                                    <Col md={4}>
                                                                          <button className="text-center br-6 primary-color w-30 h-30 text-white "><i className="f-18 fa fa-pencil"></i></button>
                                                                    </Col>
                                                                    <Col md={4}>
                                                                        <button className="text-center br-6 delete-user w-30 h-30 text-white "><i className="f-18 fa fa-trash"></i></button>
                                                                    </Col>
                                                                    <Col md={4} >
                                                                        <button className="text-center br-6 copy-blog w-30 h-30 text-white "><i className="f-18 fa fa-file"></i></button>
                                                                    </Col>
                                                                 </Row>
                                                            </Col>
                                                        </Row>
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
            )
        }
    }

export default ManageBlog;
import React from 'react';
import { Footer, Header } from '../components/index';
import { ProfileSideBar,EmployerProfileSidebar,OurServicesSection, PricePlan, StudentJumbotron, BlogSection, BenefitsSection, Reviews } from '../components/home';
import gpl from 'graphql-tag';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import {
        Switch, Icon, Checkbox } from 'antd';
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
import { getPlans } from '../actions/plans';
import { connect } from 'react-redux';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import '../assets/css/job.css';
class EmployerManageSingleJob extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: props.page,
    iconTabs: 1,
    plainTabs: 1,
        togglestate:true,
        filter:false,
  };
      this.handleClick = this.handleClick.bind(this);
  }
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index
    });
  };

showfilter(){
    this.setState({
        filter:true
    })

}
hidefilter(){
    this.setState({
        filter:false
    })

}
 handleClick() {
    this.setState({
        togglestate:!this.state.togglestate
    })
    console.log(this.state.togglestate)
}
render() {
    const { page } = this.state;
      const settings = {
      dots: true,
      infinite: true,
      speed: 500,
    autoplay:true,
      slidesToShow: 3,
      slidesToScroll: 1
    };
      const settingrecommendation = {
      dots: false,
      infinite: true,
      speed: 500,
    autoplay:true,
      slidesToShow: 2,
      slidesToScroll: 1
    };
      var style = {
          fontSize: 16,
      }
    return (
      <div>
        <Header parent="home" page={page} />
        <main ref="main" >
        <section>
            <Container fluid>
                <Row>
                <EmployerProfileSidebar page={page}/>

                    <Col className="mt-5" md="9">
                        <Row>
                            <Col md={6} className="mr-auto">
                                <Row>

                                    <Col md={9}>
                                        <img className="mb-2" src={require('../assets/back.png')} />
                                        <span className="ml-4 mt-1  my-family-bold f-24-xs text-black">WORDPRESS DESIGNER</span>
                                    </Col>
                               </Row>
                            </Col>
                        </Row>
                        <Row>
                             <Col md={8} className="">
                                  <div className="nav-wrapper">
                                  <Nav
                                    className="nav-fill flex-column flex-md-row"
                                    id="tabs-icons-text"
                                    pills
                                    role="tablist"
                                  >
                                    <NavItem>
                                      <NavLink
                                        aria-selected={this.state.plainTabs === 1}
                                        className={classnames("mb-sm-3 mb-md-0 f-16 ", {
                                          active: this.state.plainTabs === 1
                                        })}
                                        style={style}
                                        onClick={e => this.toggleNavs(e, "plainTabs", 1)}
                                        href="#pablo"
                                        role="tab"
                                      >
                                        ABOUT PROJECT

                                      </NavLink>
                                    </NavItem>
                                    <NavItem>
                                      <NavLink
                                        aria-selected={this.state.plainTabs === 3}
                                        className={classnames("mb-sm-3 mb-md-0 f-16", {
                                          active: this.state.plainTabs === 3
                                        })}

                                        onClick={e => this.toggleNavs(e, "plainTabs", 3)}
                                        href="#pablo"
                                        role="tab"
                                      >
                                        PERFORMERS LIST

                                      </NavLink>
                                    </NavItem>
                                  </Nav>
                                </div>
                            </Col>
                               <Col md={12} >
                    <Card className="border-0">
                          <CardBody className="p1rem">
                            <TabContent activeTab={"plainTabs" + this.state.plainTabs}>
                              <TabPane tabId="plainTabs1">
                                <Row className="mt-3 text-center">
                                  <Col md={2}>
                                      <img className=" h-70 rounded-circle" src={require('../assets/1.png')} />
                                  </Col>
                                 <Col md={2} className="mt-2">
                                      <span className="f-16 my-family-bold font-weight-400 text-black" > Zoo Town</span><br />
                                      <span className="f-15 my-family-medium font-weight-400 text-black" > Product Designer</span>
                                  </Col>
                                  <Col md={3} className="mt-2">
                                      <span ><img  src={require('../assets/salarry.png')} /><span className="f-14 font-weight-600 text-black my-family ml-3" > $15K - 16K</span></span> <br />
                                      <span className="" ><span className="f-12 font-weight-600 text-black my-family ml-3" >23.10.2020 - 23.10.2020</span></span>
                                  </Col>

                                  <Col md={3} className="mt-2">
                                     <span ><img  src={require('../assets/location.png')} /><span className="f-14 font-weight-600 text-black my-family ml-3" > San Francisco</span></span> <br />
                                  </Col>
                                </Row>
                                <Row className="mt-5">
                                  <Col md={12}>

                                      <p className="f-15 font-weight-600 text-black my-family ml-3" >This role will play an important role in growing our international network of content creators. Working within a small This role will play an important role in growing our international network of content creators. Working within a small This role will play an important role in growing our international network of content creators. Working within a small This role will play an important role in growing our international network of content creators. Working within a small This role will play an important role in growing our international network of content creators.</p>
                                  </Col>
                                </Row>
                              </TabPane>
                              <TabPane tabId="plainTabs3">
                                <table className="w-100 text-center">
                                    <thead className="f-12-xs text-muted-jobs py-2 my-family-bold t-c">
                                        <th className="h-56">
                                            COMPANY NAME
                                        </th>
                                        <th>
                                            JOB TITLE
                                        </th>
                                        <th>
                                            SALARY
                                        </th>
                                        <th>
                                            APPLICATION RECEIVED
                                        </th>
                                        <th>
                                            PROJECT STATUS
                                        </th>
                                    </thead>
                                    <tbody>
                                        <tr className="h-56">
                                            <td className="w-20p">
                                                <p className="mt-4" ><img className="w-35-icon-xs" src={require('../assets/images/employer/1.png')} /><span className="f-16-xs-xs linebreak font-weight-400 text-black ml-3" > Plum Guide</span></p>
                                            </td>
                                            <td className="w-20p">
                                                <p className="mt-4" ><span className="f-16-xs-xs font-weight-400 text-black " > WP Designer</span></p>
                                            </td>
                                            <td className="w-20p">
                                                  <p className="mt-4" ><span className="f-16-xs-xs font-weight-400 text-black " >$4500.00</span></p>
                                            </td>
                                            <td className="w-20p">
                                                <p className="mt-4" ><span className="f-16-xs-xs font-weight-400 text-black " >23/09/2019</span></p>
                                            </td>
                                            <td className="w-20p">
                                              <p className="mt-4 my-family"><button className="btn w-100  completed-color f-12-xs font-weight-400 text-white ">Interviewing</button></p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                              </TabPane>
                              <TabPane tabId="plainTabs2">
                                  <Row>
                                  <Col md={3} className="col-6" >
                                      <p className="f-12 text-muted-jobs font-weight-600">COMPANY NAME</p>
                                      <p className="mt-4" ><img className="w-35-icon rounded-circle" src={require('../assets/1.png')} /><span className="f-16-xs font-weight-400 text-black ml-3" > Plum Guide</span></p>
                                  </Col>
                                  <Col md={3} className="col-6">
                                          <p className="f-12 text-muted-jobs font-weight-600">JOB TITLE</p>
                                      <p className="mt-4" ><span className="f-16-xs font-weight-400 text-black " > Wordpress Designer</span></p>
                                  </Col>
                                  <Col className="ml-auto p-sm-20" md={3}>
                                      <Row >
                                        <Col md={4} className="col-4">
                                            <div className="primary-color w-50-icon-xs radius-50-xs text-center ">
                                                 <img className="w-30-icon-xs rounded-circle mt-2 " src={require('../assets/videocam-filled-tool.png')} />
                                            </div>

                                        </Col>
                                         <Col md={4} className="col-4">
                                            <div className="primary-color w-50-icon-xs radius-50-xs text-center">
                                                 <img className="w-30-icon-xs rounded-circle mt-2 " src={require('../assets/telephone.png')} />
                                            </div>

                                        </Col>
                                        <Col md={4} className="col-4">
                                            <div className=" w-50-icon-xs text-center">
                                                 <img className="w-30-icon-xs mt-2 " src={require('../assets/folder.png')} />
                                            </div>

                                        </Col>

                                      </Row>

                                  </Col>
                                </Row>
                                <Row>
                                  <Col md={12}>
                                       <Card className="card-small mb-4 border-0">
                                          <CardHeader className="border-bottom text-muted-jobs bg-white border-top border-right-0 border-left-0">
                                              <p className="m-0 font-weight-600 f-16-xs"> Yesterday</p>
                                          </CardHeader>
                                          <CardBody className="p1rem">
                                            <div className="scrollbar style-3" id="messanger" >
                                                <div className="force-overflow inner" >
                                                    <div className="receive">
                                                    <p className="mt-4" ><img className="w-35-icon rounded-circle" src={require('../assets/images/employer/1.png')} /><span className="f-17 font-weight-500 text-black ml-3" > Plum Guide</span></p>
                                                    <p className="ml-5 f-15 text-recom"> Hello</p>
                                                    <p className="ml-5 f-15 text-recom"> Hello, How are You?</p>
                                                    <p className="ml-5 f-15 text-recom"> Hello , You there</p>
                                                    </div>
                                                    <div className="sent">
                                                    <p className="mt-4" ><img className="w-35-icon rounded-circle" src={require('../assets/img/theme/team-1-800x800.jpg')} /><span className="f-17 font-weight-500 text-black ml-3" > Plum Guide</span></p>
                                                    <p className="ml-5 f-15 text-recom"> Hello</p>
                                                    <p className="ml-5 f-15 text-recom"> I am fine</p>
                                                    <p className="ml-5 f-15 text-recom"> yes i am there</p>
                                                    </div>
                                                    <div className="receive">
                                                    <p className="mt-4" ><img className="w-35-icon rounded-circle" src={require('../assets/images/employer/1.png')} /><span className="f-17 font-weight-500 text-black ml-3" > Plum Guide</span></p>
                                                    <p className="ml-5 f-15 text-recom"> Hello</p>
                                                    <p className="ml-5 f-15 text-recom"> Hello, How are You?</p>
                                                    <p className="ml-5 f-15 text-recom"> Hello , You there</p>
                                                    </div>
                                                    <div className="sent">
                                                    <p className="mt-4" ><img className="w-35-icon rounded-circle" src={require('../assets/img/theme/team-1-800x800.jpg')} /><span className="f-17 font-weight-500 text-black ml-3" > Plum Guide</span></p>
                                                    <p className="ml-5 f-15 text-recom"> Hello</p>
                                                    <p className="ml-5 f-15 text-recom"> I am fine</p>
                                                    <p className="ml-5 f-15 text-recom"> yes i am there</p>
                                                    </div>

                                                </div>
                                            </div>
                                        </CardBody>
                                        <CardFooter className="pb-2 pt-2 border-top-0 px-3">
                                            <Row>
                                                <Col md={12}>

                                                    <div className="input-group w-100 ">
                                                        <input type="text"  className="py-4 form-control w-100-xs " onKeyUp={this.handlecomment}  onChange={this.handlecommenting} value={this.state.commenting} placeholder="Write a message ...." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                        <input id="myInput"
                                                           type="file"
                                                           ref={(ref) => this.upload = ref}
                                                           style={{display: 'none'}}

                                                        />
                                                        <div className="ml-2 input-group-append p-sm-20">
                                                        <button  type="button" primary={false} onClick={()=>{this.upload.click()}}><img className="w-30-icon" src={require('../assets/smile.png')} /></button>
                                                        </div>
                                                        <div className="ml-2 input-group-append p-sm-20">
                                                        <button  type="button" primary={false} onClick={()=>{this.upload.click()}}><img className="w-30-icon" src={require('../assets/attach.png')} /></button>
                                                        </div>
                                                        <div className="ml-2 w-100-xs ">
                                                        <button className="btn badge-pill w-150  w-100-xs font-weight-500 mt-2 primary-color"  type="button" primary={false} onClick={()=>{this.upload.click()}}>Send</button>
                                                        </div>

                                                    </div>
                                                 </Col>
                                            </Row>
                                          </CardFooter>
                                    </Card>
                                  </Col>
                                </Row>

                              </TabPane>
                            </TabContent>
                          </CardBody>
                        </Card>

                            </Col>
                        </Row>


                    </Col>
                </Row>
            </Container>

        </section>
        <Footer page={this.props.page} />
        </main>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    plans: state.common.plans
  };
};
const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployerManageSingleJob);

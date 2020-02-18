import React from 'react';
import { Footer, Header } from '../components/index';
import { OurServicesSection, PricePlan,EmployerProfileSidebar, StudentJumbotron, BlogSection, BenefitsSection, Reviews } from '../components/home';
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
      FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
    Container
} from "reactstrap";
import ReactPlayer from 'react-player'
import classnames from "classnames";
import { graphql } from 'react-apollo';
import { getPlans } from '../actions/plans';
import { connect } from 'react-redux';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

class EmployerProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: props.page,
    iconTabs: 2,
    plainTabs: 2,
        filter:false,
  };
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
  componentDidMount() {
    
  }

  render() {
    const { page } = this.state;
      const settings = {
      dots: true,
      infinite: true,
      speed: 500,
    autoplay:true,
      slidesToShow: 1,
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
    return (
      <div>
        <Header parent="home" page={page} />
        <main ref="main" >
        <section>
            <Container fluid>
                <Row>
                   <EmployerProfileSidebar page={page}/>
                    <Col className="mt-5" md="9">
                        <Row className="pt-4 pb-4 shadow">
                            <Col md={4}>
                                <img className="rounded-circle h-168-mobile img-center img-fluid" src={require('../assets/img/theme/team-1-800x800.jpg')} />
                            </Col>
                            <Col md={8} className="">
                                    <Row>
                                        <Col md={12}>
                                            <p className="f-24 font-weight-400 text-black my-family" >Joana Banks</p>
                                            <p className="f-17 font-weight-500 my-family-medium text-black" >Hiring Manager</p>
                                            <p className="f-13 font-weight-400 text-recom my-family">This role will play an important role in growing our international network of content creators. Working within a small team, you’ll execute on a range of campaigns that will attract a high calibre of freelance talent into our Network. </p>
                                        </Col>
                                    </Row>
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            <Col md={10}>
                                <p className="text-center-mobile f-24 my-family-bold text-black">ABOUT US</p>
                                <p className="mt-3 f-15 text-recom font-weight-400 my-family">This role will play an important role in growing our international network of content creators. Working within a small team, you’ll execute on a range of campaigns that will attract a high calibre of freelance talent into our Network. You’ll then use your organisation skills to ensure all applicants are screened in an efficient yet professional manner. The right person for this role gets excited about running large-scale talent attraction campaigns, but also enjoys directly sourcing and approaching candidates for specific project briefs. </p>
                                <p className="mt-3 f-15 text-recom font-weight-400 my-family">This role will play an important role in growing our international network of content creators. Working within a small team, you’ll execute on a range of campaigns that will attract a high calibre of freelance talent into our Network. You’ll then use your organisation skills to ensure all applicants are screened in an efficient yet professional manner. The right person for this role gets excited about running large-scale talent attraction campaigns, but also enjoys directly sourcing and approaching candidates for specific project briefs. </p>
                                <p className="mt-3 f-15 text-recom font-weight-400 my-family">This role will play an important role in growing our international network of content creators. Working within a small team, you’ll execute on a range of campaigns that will attract a high calibre of freelance talent into our Network. You’ll then use your organisation skills to ensure all applicants are screened in an efficient yet professional manner. The right person for this role gets excited about running large-scale talent attraction campaigns, but also enjoys directly sourcing and approaching candidates for specific project briefs. </p>
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            <Col md={12}>
                                <p className="text-center-mobile f-24 my-family-bold text-black">VIDEOS</p>
                                    <Row className="mt-3">
                                        <Col md={3} className="ml-auto  ">
                                                     <button className="mt-3 mr-3 btn btn-primary f-15 badge-pill w-130 h-35  text-dark primary-color"><i className="fa fa-plus"></i> Add Video</button>
                                                </Col>
                                                <Col md={10} className="ml-auto mr-auto  pl-0 pr-0">
                                                   <Slider {...settings}>
                                                          <Col className="col-12 h-100 pr-0 pl-0">
                                                              <iframe
                                                          style={{
       
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
                                                                    className="w-100 h-350"
                                                                    src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
                                                                    frameBorder="0"
                                                                  ></iframe>
                                                               
                                                                    <p className="mt-3"><span className="my-family-cond-bold f-19 font-weight-700 text-black video-heading"> FREELANCER ACQUISITION EXECUTIVE</span></p>
                                                            </Col>
                         
                                                            
                                                    </Slider>
                                                </Col>
                                                
                                      </Row>
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            <Col md={12}>
                                <p className="f-24 text-center-mobile my-family-bold font-weight-700 text-black">MANAGE MY JOBS</p>
                                    <Row className="mt-3">
                                          <Col md={12} className="">
                                                <table className="w-100 text-center">
                                                    <thead className="th-bg py-2 f-12 my-family-bold t-c">
                                                        <th className="h-56">
                                                            ROLE
                                                        </th>
                                                        <th>
                                                            STATUS
                                                        </th>
                                                        <th>
                                                            VISITS
                                                        </th>
                                                        <th>
                                                            APPLY
                                                        </th>
                                                    </thead>
                                                    <tbody>
                                                        <tr className="h-56">
                                                            <td className="w-30p">
                                                                <p className="junior-desingner">Junior desingner</p>
                                                            </td>
                                                            <td className="w-30p">
                                                                <button className="status-open"><span className="open">Open</span></button>
                                                            </td>
                                                            <td className="w-20p">
                                                                <p className="visit-text">222</p>
                                                            </td>
                                                            <td className="w-20p">
                                                                <p className="text-apply">343</p>
                                                            </td>
                                                        </tr>
                                                        <tr className="h-56">
                                                            <td className="w-30p">
                                                                <p className="junior-desingner">Junior desingner</p>
                                                            </td>
                                                            <td className="w-30p">
                                                                <button className="hired-status"><span className="open">Hired</span></button>
                                                            </td>
                                                            <td className="w-20p">
                                                                <p className="visit-text">222</p>
                                                            </td>
                                                            <td className="w-20p">
                                                                <p className="text-apply">343</p>
                                                            </td>
                                                        </tr>
                                                        <tr className="h-56">
                                                            <td className="w-30p">
                                                                <p className="junior-desingner">Junior desingner</p>
                                                            </td>
                                                            <td className="w-30p">
                                                                <button className="onhold-status"><span className="open">On Hold</span></button>
                                                            </td>
                                                            <td className="w-20p">
                                                                <p className="visit-text">222</p>
                                                            </td>
                                                            <td className="w-20p">
                                                                <p className="text-apply">343</p>
                                                            </td>
                                                        </tr>
                                                         <tr className="h-56">
                                                            <td className="w-30p">
                                                                <p className="junior-desingner">Junior desingner</p>
                                                            </td>
                                                            <td className="w-30p">
                                                                <button className="reviewapp-status"><span className="open">Revieving Applicants</span></button>
                                                            </td>
                                                            <td className="w-20p">
                                                                <p className="visit-text">222</p>
                                                            </td>
                                                            <td className="w-20p">
                                                                <p className="text-apply">343</p>
                                                            </td>
                                                        </tr>
                                                         <tr className="h-56">
                                                            <td className="w-30p">
                                                                <p className="junior-desingner">Junior desingner</p>
                                                            </td>
                                                            <td className="w-30p">
                                                                <button className="interview-status"><span className="open">Intervieving</span></button>
                                                            </td>
                                                            <td className="w-20p">
                                                                <p className="visit-text">222</p>
                                                            </td>
                                                            <td className="w-20p">
                                                                <p className="text-apply">343</p>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                         </Col>
                                 </Row>
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
)(EmployerProfile);

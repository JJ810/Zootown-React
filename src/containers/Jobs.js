import React, { Component } from 'react';
import { Header, Footer } from '../components';
import '../assets/css/studentpage.css';
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
import { _url } from '../config/utils';

class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
         mobile:false,
        filter:false,
        width: 0, height: 0,
    };
  this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
}

componentDidMount() {
  this.updateWindowDimensions();
  window.addEventListener('resize', this.updateWindowDimensions);
}
hidefilter(){
    this.setState({
        filter:false
    })

}
componentWillUnmount() {
  window.removeEventListener('resize', this.updateWindowDimensions);
}

updateWindowDimensions() {
    if(window.innerWidth <= 544 ){
        this.setState({mobile:true});
    }else{
         this.setState({ mobile:false});
    }
  this.setState({ width: window.innerWidth, height: window.innerHeight });
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
  render() {
      const page = this.props.page
    return (
      <div>
        <Header page={page  }/>
        <main ref="main">
        <section>
        <Container fluid >
        <Row className="mt-5">
           <Col md={3} className="order-1-sm">
                             <Row>
                                <div className="col-4 mt-1 mt-mobile ">
                                      <span className="float-right f-15 my-family-bold  font-weight-500">PROJECTS</span>
                                </div>
                                <div className="text-center col-3">
                                    <label className="mt-2 custom-toggle">
                                      <input defaultChecked type="checkbox" />
                                      <span className="custom-toggle-slider " />
                                    </label>
                                </div>
                                <div  className="col-4 mt-1 ">
                                    <span className=" f-15 my-family-bold font-weight-500">JOBS</span>

                                </div>
                             </Row>
                            <Row className="mt-4">
                                <Col md={6} className="col-6">
                                      <span className="text-center f-12 my-family-bold text-black font-weight-600">ADVANCE SEARCH</span>
                                </Col>
                                <Col md={6} className="col-6 text-center">
                                    {this.state.filter
                                    ?<a className="f-12 my-family primary-color-text " onClick={()=> this.hidefilter()}>CLEAR</a>
                                    :<a className="f-12 my-family  text-muted" onClick={()=> this.showfilter()}>SHOW</a>
                                    }

                                </Col>
                             </Row>
                                 {this.state.filter
                        ?
                                <div>
                            <Row className="mt-4">
                                <Col md={12}>
                                    <p className=" mt-3 mb-3 f-18 my-family text-black font-weight-400">Location</p>
                                      <InputGroup className="input-group-alternative mb-4">
                                          <Input
                                      className="input-bc border-t-l-r border-b-l-r border-right-0 border-top-0 border-left-0 border-bottom-0"
                                            placeholder="Your current location"
                                            type="text"
                                            onFocus={e =>
                                              this.setState({ birthdayAltFocused: true })
                                            }
                                            onBlur={e =>
                                              this.setState({ birthdayAltFocused: false })
                                            }
                                          />
                                          <InputGroupAddon addonType="append" >
                                            <InputGroupText className="border-b-r-r border-t-r-r">
                                              <i className="ni ni-pin-3 primary-color-text" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </Col>
                                <Col md={12}>
                                    <span className="btn badge-pill mt-2 primary-color px-3 mr-2"><span className="f-14 fontweight-300 text-black float-left"> Lahore</span> <img className="ml-2" src={require('../assets/delete.png')} /></span>
                                    <span className="btn badge-pill mt-2 primary-color px-3 mr-2"><span className="f-14 fontweight-300 text-black float-left"> Lahore</span> <img className="ml-2" src={require('../assets/delete.png')} /></span>
                                </Col>
                             </Row>
                            <Row>
                                <Col md={12}>
                                    <p className=" mt-3 mb-3 f-17 tex-black my-family font-weight-600">Job Type       </p>
                                        <div className="custom-control custom-checkbox mb-3">
                                          <input
                                            className="custom-control-input"
                                            defaultChecked
                                            id="customCheck2"
                                            type="checkbox"
                                          />
                                          <label className="custom-control-label" htmlFor="customCheck2">
                                            <span className="ml-3">Graduate Job</span>
                                          </label>
                                        </div>
                                         <div className="custom-control custom-checkbox mb-3">
                                              <input
                                                className="custom-control-input"
                                                defaultChecked
                                                id="customCheck2"
                                                type="checkbox"
                                              />
                                              <label className="custom-control-label" htmlFor="customCheck2">
                                                <span className="ml-3">Experienced Job</span>
                                              </label>
                                        </div>
                                         <div className="custom-control custom-checkbox mb-3">
                                              <input
                                                className="custom-control-input"
                                                defaultChecked
                                                id="customCheck2"
                                                type="checkbox"
                                              />
                                              <label className="custom-control-label" htmlFor="customCheck2">
                                                <span className="ml-3">Graduate Internship</span>
                                              </label>
                                        </div>
                                         <div className="custom-control custom-checkbox mb-3">
                                              <input
                                                className="custom-control-input"
                                                defaultChecked
                                                id="customCheck2"
                                                type="checkbox"
                                              />
                                              <label className="custom-control-label" htmlFor="customCheck2">
                                                <span className="ml-3">Student Summer Internship</span>
                                              </label>
                                        </div>
                                </Col>
                             </Row>
                             <Row>
                                <Col md={12}>
                                    <p className=" mt-3 mb-3 f-19 my-family font-weight-600">Sector</p>
                                        <div className="custom-control custom-checkbox mb-3">
                                          <input
                                            className="custom-control-input"
                                            defaultChecked
                                            id="customCheck2"
                                            type="checkbox"
                                          />
                                          <label className="custom-control-label" htmlFor="customCheck2">
                                            <span className="ml-3">Advertising</span>
                                          </label>
                                        </div>
                                         <div className="custom-control custom-checkbox mb-3">
                                              <input
                                                className="custom-control-input"
                                                defaultChecked
                                                id="customCheck2"
                                                type="checkbox"
                                              />
                                              <label className="custom-control-label" htmlFor="customCheck2">
                                                <span className="ml-3">Consulting</span>
                                              </label>
                                        </div>
                                         <div className="custom-control custom-checkbox mb-3">
                                              <input
                                                className="custom-control-input"
                                                defaultChecked
                                                id="customCheck2"
                                                type="checkbox"
                                              />
                                              <label className="custom-control-label" htmlFor="customCheck2">
                                                <span className="ml-3">Data</span>
                                              </label>
                                        </div>
                                         <div className="custom-control custom-checkbox mb-3">
                                              <input
                                                className="custom-control-input"
                                                defaultChecked
                                                id="customCheck2"
                                                type="checkbox"
                                              />
                                              <label className="custom-control-label" htmlFor="customCheck2">
                                                <span className="ml-3">Digital media</span>
                                              </label>
                                        </div>
                                        <div className="custom-control custom-checkbox mb-3">
                                              <input
                                                className="custom-control-input"
                                                defaultChecked
                                                id="customCheck2"
                                                type="checkbox"
                                              />
                                              <label className="custom-control-label" htmlFor="customCheck2">
                                                <span className="ml-3">Engineering</span>
                                              </label>
                                        </div>
                                        <div className="custom-control custom-checkbox mb-3">
                                              <input
                                                className="custom-control-input"
                                                defaultChecked
                                                id="customCheck2"
                                                type="checkbox"
                                              />
                                              <label className="custom-control-label" htmlFor="customCheck2">
                                                <span className="ml-3">Fashion</span>
                                              </label>
                                        </div>
                                        <div className="custom-control custom-checkbox mb-3">
                                              <input
                                                className="custom-control-input"
                                                defaultChecked
                                                id="customCheck2"
                                                type="checkbox"
                                              />
                                              <label className="custom-control-label" htmlFor="customCheck2">
                                                <span className="ml-3">Environmental</span>
                                              </label>
                                        </div>
                                </Col>
                             </Row>
                            <Row>
                                <Col md={12}>
                                    <p className=" mt-3 mb-3 f-19 my-family font-weight-600">Salary</p>
                                        <div className="custom-control custom-checkbox mb-3">
                                          <input
                                            className="custom-control-input"
                                            defaultChecked
                                            id="customCheck2"
                                            type="checkbox"
                                          />
                                          <label className="custom-control-label" htmlFor="customCheck2">
                                            <span className="ml-3">£12k+</span>
                                          </label>
                                        </div>
                                         <div className="custom-control custom-checkbox mb-3">
                                              <input
                                                className="custom-control-input"
                                                defaultChecked
                                                id="customCheck2"
                                                type="checkbox"
                                              />
                                              <label className="custom-control-label" htmlFor="customCheck2">
                                                <span className="ml-3">£20k+</span>
                                              </label>
                                        </div>
                                         <div className="custom-control custom-checkbox mb-3">
                                              <input
                                                className="custom-control-input"
                                                defaultChecked
                                                id="customCheck2"
                                                type="checkbox"
                                              />
                                              <label className="custom-control-label" htmlFor="customCheck2">
                                                <span className="ml-3">£25k+</span>
                                              </label>
                                        </div>
                                         <div className="custom-control custom-checkbox mb-3">
                                              <input
                                                className="custom-control-input"
                                                defaultChecked
                                                id="customCheck2"
                                                type="checkbox"
                                              />
                                              <label className="custom-control-label" htmlFor="customCheck2">
                                                <span className="ml-3">£35k+</span>
                                              </label>
                                        </div>
                                </Col>
                             </Row>
                            <Row className="mt-4">
                                <Col md={12}>
                                    <p className=" mt-3 mb-3 f-19 my-family font-weight-600">Locations</p>
                                      <InputGroup className="input-group-alternative mb-4">
                                          <Input
                                      className="input-bc border-t-l-r border-b-l-r"
                                            placeholder="Keyword"
                                            type="text"
                                            onFocus={e =>
                                              this.setState({ birthdayAltFocused: true })
                                            }
                                            onBlur={e =>
                                              this.setState({ birthdayAltFocused: false })
                                            }
                                          />
                                          <InputGroupAddon addonType="append" >
                                            <InputGroupText className="border-b-r-r border-t-r-r">
                                              <i className="ni ni-tag primary-color-text" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </Col>
                                <Col md={12}>
                                    <span className="btn badge-pill mt-2 primary-color px-3 mr-2"><span className="f-14 fontweight-300 text-black float-left"> Lahore</span> <img className="ml-2" src={require('../assets/delete.png')} /></span>
                                     <span className="btn badge-pill mt-2 primary-color px-3 mr-2"><span className="f-14 fontweight-300 text-black float-left"> Lahore</span> <img className="ml-2" src={require('../assets/delete.png')} /></span>
                                      <span className="btn badge-pill mt-2 primary-color px-3 mr-2"><span className="f-14 fontweight-300 text-black float-left"> Lahore</span> <img className="ml-2" src={require('../assets/delete.png')} /></span>
                                       <span className="btn badge-pill mt-2 primary-color px-3 mr-2"><span className="f-14 fontweight-300 text-black float-left"> Lahore</span> <img className="ml-2" src={require('../assets/delete.png')} /></span>
                                </Col>
                             </Row>
                            </div>
                            :null
                        }
                        </Col>
                        <Col md={9} className="order-2-sm mt-5">
                            <Row>
                                <Col md={2} className="col-3">
                                    <p className="f-16-xs my-family text-black font-weight-400">Sort By</p>
                                </Col>
                                <Col md={4} className="col-5">
                                      <InputGroup className="input-group-alternative mb-4">
                                          <Input
                                      className="input-bc border-t-l-r border-b-l-r border-right-0 border-top-0 border-left-0 border-bottom-0"
                                            placeholder="Map"
                                            type="text"
                                            onFocus={e =>
                                              this.setState({ birthdayAltFocused: true })
                                            }
                                            onBlur={e =>
                                              this.setState({ birthdayAltFocused: false })
                                            }
                                          />
                                          <InputGroupAddon addonType="append" >
                                            <InputGroupText className="border-b-r-r border-t-r-r">
                                              <i className="ni ni-pin-3 primary-color-text" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </Col>
                                <Col md={6} className="col-4">
                                    <button className="btn primary-color f-16-xs-small badge-pill text-white "> A-Z Company
                                    </button>
                                </Col>
                            </Row>
                            
                            
                            <Row className="border-bottom mt-3">
                                <Col md={12}>
                                    <p className="my-family-cond-bold text-black f-19">FREELANCER ACQUISITION EXECUTIVE</p>
                                    
                                </Col>
                                <Col md={2} className="col-4">
                                    <span className="f-12 text-black"> <i className="ni ni-pin-3 primary-color-text"></i> San Francisco</span>
                                    
                                </Col>
                                <Col md={2} className="col-4">
                                     <span className="f-12 text-black"> <i className="fa fa-calendar primary-color-text"></i> 23.10.2019</span>
                                </Col>
                                <Col md={2} className="col-4">
                                   <span className="f-12 text-black"> <i className="fa fa-dollar primary-color-text"></i> 23.10.2019</span>
                                    
                                </Col>
                                <Col md={12}>
                                    <p className="my-family font-weight-500 text-recom mt-3 f-15-xs">This role will play an important role in growing our international network of content creators. Working within a small team, you’ll execute on a range of campaigns that will attract a high calibre of freelance talent into our Network. You’ll then use your organisation skills to ensure all applicants are screened in an efficient yet professional manner. The right person for this role gets excited about running large-scale talent attraction campaigns, but also enjoys directly sourcing and approaching candidates for specific project briefs.</p>
                                    
                                </Col>
                            </Row>
                            <Row className="border-bottom mt-3">
                                <Col md={12}>
                                    <p className="my-family-cond-bold text-black f-19">FREELANCER ACQUISITION EXECUTIVE</p>
                                    
                                </Col>
                                <Col md={2} className="col-4">
                                    <span className="f-12 text-black"> <i className="ni ni-pin-3 primary-color-text"></i> San Francisco</span>
                                    
                                </Col>
                                <Col md={2} className="col-4">
                                     <span className="f-12 text-black"> <i className="fa fa-calendar primary-color-text"></i> 23.10.2019</span>
                                </Col>
                                <Col md={2} className="col-4">
                                   <span className="f-12 text-black"> <i className="fa fa-dollar primary-color-text"></i> 23.10.2019</span>
                                    
                                </Col>
                                <Col md={12}>
                                    <p className="my-family font-weight-500 text-recom mt-3 f-15-xs">This role will play an important role in growing our international network of content creators. Working within a small team, you’ll execute on a range of campaigns that will attract a high calibre of freelance talent into our Network. You’ll then use your organisation skills to ensure all applicants are screened in an efficient yet professional manner. The right person for this role gets excited about running large-scale talent attraction campaigns, but also enjoys directly sourcing and approaching candidates for specific project briefs.</p>
                                    
                                </Col>
                            </Row>
                            <Row className="border-bottom mt-3">
                                <Col md={12}>
                                    <p className="my-family-cond-bold text-black f-19">FREELANCER ACQUISITION EXECUTIVE</p>
                                    
                                </Col>
                                <Col md={2} className="col-4">
                                    <span className="f-12 text-black"> <i className="ni ni-pin-3 primary-color-text"></i> San Francisco</span>
                                    
                                </Col>
                                <Col md={2} className="col-4">
                                     <span className="f-12 text-black"> <i className="fa fa-calendar primary-color-text"></i> 23.10.2019</span>
                                </Col>
                                <Col md={2} className="col-4">
                                   <span className="f-12 text-black"> <i className="fa fa-dollar primary-color-text"></i> 23.10.2019</span>
                                    
                                </Col>
                                <Col md={12}>
                                    <p className="my-family font-weight-500 text-recom mt-3 f-15-xs">This role will play an important role in growing our international network of content creators. Working within a small team, you’ll execute on a range of campaigns that will attract a high calibre of freelance talent into our Network. You’ll then use your organisation skills to ensure all applicants are screened in an efficient yet professional manner. The right person for this role gets excited about running large-scale talent attraction campaigns, but also enjoys directly sourcing and approaching candidates for specific project briefs.</p>
                                    
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

export default Jobs;

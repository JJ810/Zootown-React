import React from 'react';
import { Footer, Header } from '../components/index';
import { ProfileSideBar,StudentSideBar,OurServicesSection, PricePlan, StudentJumbotron, BlogSection, BenefitsSection, Reviews } from '../components/home';
import gpl from 'graphql-tag';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import StarRatings from 'react-star-ratings';
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
class StudentReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: props.page,
    iconTabs: 2,
        handleCardNumber:'',
        handleExpire:'',
        handleCVV:'',
    plainTabs: 2,
        handleCardHolderL:'',
        togglestate:true,
        filter:false,
  };
      this.handleClick = this.handleClick.bind(this);
      this.handleCardNumber = this.handleCardNumber.bind(this);
      this.handleCardHolder = this.handleCardHolder.bind(this);
      this.handleExpire = this.handleExpire.bind(this);
      this.handleCVV = this.handleCVV.bind(this);
  }
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index
    });
  };

handleCardNumber(e){
  this.setState({
      handleCardNumber:e.target.value

  })

}
handleExpire(e){
  this.setState({
      handleExpire:e.target.value

  })

}
handleCVV(e){
  this.setState({
      handleCVV:e.target.value

  })

}
handleCardHolder(e){
  this.setState({
      handleCardHolder:e.target.value

  })

}
addCard(){
    console.log('card Addded')
}
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
      var rating = 4.2;
    return (
      <div>
        <Header parent="home" page={page} />
        <main ref="main" >
        <section>
            <Container fluid>
                <Row>
         <StudentSideBar page={page} />
                    <Col className="mt-5" md="9">
                        <Row>
                             <Col md={4} className="mr-auto">
                                <p className="my-family-bold f-24 text-black">MY REVIEWS</p>
                            </Col>
                            <Col md={12} className="border-bottom mt-3">
                                <Row    >
                                     <Col md={9} className="order-2-sm">
                                        <span className="t-c f-16 my-family-bold ">Design the admin & instructor web page</span><br />
                                        <StarRatings
                                          rating={rating}
                                          starRatedColor="#FED008"
                                          numberOfStars={5}
                                          name='rating'
                                        starDimension='18px'
                                        starSpacing='1px'
                                        />
                                        <span className="my-family-medium f-15 text-black ml-4">{rating}</span>
                                        <span className="my-family font-weight-600 f-13 text-black ml-lg">28/09/2019</span>
                                        <p className="mt-3 my-family f-14 font-weight-600 text-recom">I highly recommend Aleks to anyone who needs great UI / UX work at a fair price. Aleks did everything I asked him to do and did not mind going the extra mile to make sure that the project was completed to my specifications.  VERY HAPPY with the results. This man does amazing work.</p>
                                    </Col>
                                     <Col md={3} className="order-1-sm">
                                        <p className="mt-4" ><img className="w-35-icon" src={require('../assets/images/employer/1.png')} /><span className="f-16 my-family-medium font-weight-400 text-black ml-3" > Plum Guide</span></p>
                                     </Col>
                                </Row>
                            </Col>
                            <Col md={12} className="border-bottom mt-3">
                                <Row    >
                                     <Col md={9} className="order-2-sm">
                                        <span className="t-c f-16 my-family-bold ">Design the admin & instructor web page</span><br />
                                        <StarRatings
                                          rating={rating}
                                          starRatedColor="#FED008"
                                          numberOfStars={5}
                                          name='rating'
                                        starDimension='18px'
                                        starSpacing='1px'
                                        />
                                        <span className="my-family-medium f-15 text-black ml-4">{rating}</span>
                                        <span className="my-family font-weight-600 f-13 text-black ml-lg">28/09/2019</span>
                                        <p className="mt-3 my-family f-14 font-weight-600 text-recom">I highly recommend Aleks to anyone who needs great UI / UX work at a fair price. Aleks did everything I asked him to do and did not mind going the extra mile to make sure that the project was completed to my specifications.  VERY HAPPY with the results. This man does amazing work.</p>
                                    </Col>
                                     <Col md={3} className="order-1-sm">
                                        <p className="mt-4" ><img className="w-35-icon" src={require('../assets/images/employer/1.png')} /><span className="f-16 my-family-medium font-weight-400 text-black ml-3" > Plum Guide</span></p>
                                     </Col>
                                </Row>
                            </Col>
                            <Col md={12} className="border-bottom mt-3">
                                <Row    >
                                     <Col md={9} className="order-2-sm">
                                        <span className="t-c f-16 my-family-bold ">Design the admin & instructor web page</span><br />
                                        <StarRatings
                                          rating={rating}
                                          starRatedColor="#FED008"
                                          numberOfStars={5}
                                          name='rating'
                                        starDimension='18px'
                                        starSpacing='1px'
                                        />
                                        <span className="my-family-medium f-15 text-black ml-4">{rating}</span>
                                        <span className="my-family font-weight-600 f-13 text-black ml-lg">28/09/2019</span>
                                        <p className="mt-3 my-family f-14 font-weight-600 text-recom">I highly recommend Aleks to anyone who needs great UI / UX work at a fair price. Aleks did everything I asked him to do and did not mind going the extra mile to make sure that the project was completed to my specifications.  VERY HAPPY with the results. This man does amazing work.</p>
                                    </Col>
                                    <Col md={3} className="order-1-sm">
                                        <p className="mt-4" ><img className="w-35-icon" src={require('../assets/images/employer/1.png')} /><span className="f-16 my-family-medium font-weight-400 text-black ml-3" > Plum Guide</span></p>
                                     </Col>
                                </Row>
                            </Col>
                            <Col md={12} className="border-bottom mt-3">
                                <Row    >
                                     <Col md={9} className="order-2-sm">
                                        <span className="t-c f-16 my-family-bold ">Design the admin & instructor web page</span><br />
                                        <StarRatings
                                          rating={rating}
                                          starRatedColor="#FED008"
                                          numberOfStars={5}
                                          name='rating'
                                        starDimension='18px'
                                        starSpacing='1px'
                                        />
                                        <span className="my-family-medium f-15 text-black ml-4">{rating}</span>
                                        <span className="my-family font-weight-600 f-13 text-black ml-lg">28/09/2019</span>
                                        <p className="mt-3 my-family f-14 font-weight-600 text-recom">I highly recommend Aleks to anyone who needs great UI / UX work at a fair price. Aleks did everything I asked him to do and did not mind going the extra mile to make sure that the project was completed to my specifications.  VERY HAPPY with the results. This man does amazing work.</p>
                                    </Col>
                                     <Col md={3} className="order-1-sm">
                                        <p className="mt-4" ><img className="w-35-icon" src={require('../assets/images/employer/1.png')} /><span className="f-16 my-family-medium font-weight-400 text-black ml-3" > Plum Guide</span></p>
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
)(StudentReviews);

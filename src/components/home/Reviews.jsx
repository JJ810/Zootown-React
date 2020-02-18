import React, { Component } from 'react';
import { Col,Container,Row ,Card,
CardBody} from 'reactstrap';
import Slider from 'react-slick';

class Reviews extends Component {
    constructor(props){
     super(props);
  this.state = { width: 0, height: 0,slides:4 };
  this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
}

componentDidMount() {
  this.updateWindowDimensions();
  window.addEventListener('resize', this.updateWindowDimensions);
}

componentWillUnmount() {
  window.removeEventListener('resize', this.updateWindowDimensions);
}

updateWindowDimensions() {
    if(window.innerWidth <= 450 ){
        this.setState({ slides: 1});
    }else if (window.innerWidth > 450 && window.innerWidth <= 750  ){
        this.setState({ slides: 2});
    }
    else if (window.innerWidth > 750 && window.innerWidth <= 1020  ){
        this.setState({ slides: 3});
    }else if (window.innerWidth > 1020 ){
        this.setState({ slides: 4});
    }
  this.setState({ width: window.innerWidth, height: window.innerHeight });
}
  render() {
    const { page } = this.props;

    var settings = {

      speed: 3000,
        autoplay:true,
      slidesToShow: this.state.slides,
      slidesToScroll: 1
    };
    return (
    <section className="section  has-cards pb-0 back">
      <Container fluid className="">
          <Row className="">
              <Col md={7} className="ml-auto mr-auto">
              <div className="my-2 text-black ml-auto mr-auto text-center f-24  my-family-bold">USER REVIEWS</div>
        <p className="my-4 text-black my-family f-15 ml-lg-lg mr-lg-lg text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.   </p>
              </Col>

                <Col md="12" className=" " >
                <Slider {...settings} className="row">

                        <Col md="12" className="col-12 px-5" >
                            <Card className=" card-lift--hover shadow px-3   border-0 w-268 h-226  ">
                                <CardBody className="py-5">

                                             <div className="review_content">
                  <img alt="" className="w-61 mt--75" src={require("../../assets/icons/review.svg")} />
                  <h3 className="f-14 my-family-medium mt-2">Sam Milush</h3>
                  <p className="text-mutedd f-12 my-family">@abagael123</p>
                                                  <hr className="primary-color-text  primary-color" />
                  <div className="review_arrow" />
                  <img alt="" src={require('../../assets/quotes.png')} />
                  <p className="my-family-i re-col f-15">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  </p>
                </div>

                                </CardBody>
                            </Card>
                    </Col>

   <Col md="12" className="col-12 px-5" >
                            <Card className=" card-lift--hover shadow px-3   border-0 w-268 h-226  ">
                                <CardBody className="py-5">

                                             <div className="review_content">
                  <img alt="" className="w-61 mt--75" src={require("../../assets/icons/review.svg")} />
                  <h3 className="f-14 my-family-medium mt-2">Sam Milush</h3>
                  <p className="text-mutedd f-12 my-family">@abagael123</p>
                                                  <hr className="primary-color-text  primary-color" />
                  <div className="review_arrow" />
                  <img alt="" src={require('../../assets/quotes.png')} />
                  <p className="my-family-i re-col f-15">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  </p>
                </div>

                                </CardBody>
                            </Card>
                    </Col>

   <Col md="12" className="col-12 px-5" >
                            <Card className=" card-lift--hover shadow px-3   border-0 w-268 h-226  ">
                                <CardBody className="py-5">

                                             <div className="review_content">
                  <img alt="" className="w-61 mt--75" src={require("../../assets/icons/review.svg")} />
                  <h3 className="f-14 my-family-medium mt-2">Sam Milush</h3>
                  <p className="text-mutedd f-12 my-family">@abagael123</p>
                                                  <hr className="primary-color-text  primary-color" />
                  <div className="review_arrow" />
                  <img alt="" src={require('../../assets/quotes.png')} />
                  <p className="my-family-i re-col f-15">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  </p>
                </div>

                                </CardBody>
                            </Card>
                    </Col>

   <Col md="12" className="col-12 px-5" >
                            <Card className=" card-lift--hover shadow px-3   border-0 w-268 h-226  ">
                                <CardBody className="py-5">

                                             <div className="review_content">
                  <img alt="" className="w-61 mt--75" src={require("../../assets/icons/review.svg")} />
                  <h3 className="f-14 my-family-medium mt-2">Sam Milush</h3>
                  <p className="text-mutedd f-12 my-family">@abagael123</p>
                                                  <hr className="primary-color-text  primary-color" />
                  <div className="review_arrow" />
                  <img alt="" src={require('../../assets/quotes.png')} />
                  <p className="my-family-i re-col f-15">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  </p>
                </div>

                                </CardBody>
                            </Card>
                    </Col>

   <Col md="12" className="col-12 px-5" >
                            <Card className=" card-lift--hover shadow px-3   border-0 w-268 h-226  ">
                                <CardBody className="py-5">

                                             <div className="review_content">
                  <img alt="" className="w-61 mt--75" src={require("../../assets/icons/review.svg")} />
                  <h3 className="f-14 my-family-medium mt-2">Sam Milush</h3>
                  <p className="text-mutedd f-12 my-family">@abagael123</p>
                                                  <hr className="primary-color-text  primary-color" />
                  <div className="review_arrow" />
                  <img alt="" src={require('../../assets/quotes.png')} />
                  <p className="my-family-i re-col f-15">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  </p>
                </div>

                                </CardBody>
                            </Card>
                    </Col>






            </Slider>
                      </Col>


              </Row>
      </Container>
        </section>
    );
  }
}

export default Reviews;

import React, { Component } from "react";
import { Row, Col,Card,Container } from "reactstrap";
// import SliderSlick from "react-slick";
import Slider from 'react-slick';

class BenefitsSection extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
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
            <section className="section">

          { page === 'students' ?
                    <Container className="">
                        <Row className="py-5">
                     <Col md={8} className="ml-auto mr-auto">
                       <div className="my-2 text-black ml-auto mr-auto text-center f-24 font-weight-700 my-family-bold">OUR BENEFITS</div>
                    </Col>
                    </Row>
                    <Row className="row-grid mt-5">

                <Col md="4" className="">
                    <Card className=" shadow text-center border-0">
                      <div className="w-88 ml-auto mr-auto my-4 ">
                        <img alt="" src={require("../../assets/images/student/earn.png")} />
                      </div>
                      <h5 className="text-black f-20 mt-3 my-family-bold">Earn as a team</h5>
                      <p className="mx-5 t-c mt-3 my-family f-15 font-weight-400">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                      </p>
                </Card>
                </Col>
                <Col md="4" className="">
                    <Card className=" shadow text-center border-0">
                      <div className="w-88 ml-auto mr-auto my-4 ">
                        <img alt="" src={require("../../assets/images/student/bonus.png")} />
                      </div>
                      <h5 className="text-black f-20 mt-3 my-family-bold">Bonus</h5>
                      <p className="mx-5 t-c mt-3 my-family f-15 font-weight-400">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                      </p>
                </Card>
                </Col>
                <Col md="4" className="">
                    <Card className=" shadow text-center border-0">
                      <div className="w-88 ml-auto mr-auto my-4 ">
                        <img alt="" src={require("../../assets/images/student/be.png")} />
                      </div>
                      <h5 className="text-black f-20 mt-3 my-family-bold">Be flexible</h5>
                      <p className="mx-5 t-c mt-3 my-family f-15 font-weight-400">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                      </p>
                </Card>
                </Col>
              </Row>
                        </Container>
                :
                <Container className="">
                    <Row className="py-5">
                     <Col md={8} className="ml-auto mr-auto">
              <div className="my-2 text-black ml-auto mr-auto text-center f-24 font-weight-700 my-family-bold">OUR BENEFITS</div>
        <p className=" mx-5 my-4 text-black my-family ml-lg-lg mr-lg-lg text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
        </p>
              </Col>
                    </Row>
           <Row className="row-grid mt-5">
               <Col md="4" className="">
                    <Card className=" shadow text-center border-0">
                      <div className="w-88 ml-auto mr-auto my-4 ">
                        <img alt="" src={require("../../assets/images/employer/bonus (1).png")} />
                      </div>
                      <h5 className="text-black f-20 mt-3 my-family-bold">Pay as you post</h5>
                      <p className="mx-5 t-c mt-3 my-family f-15 font-weight-400">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                      </p>
                </Card>
                </Col>
               <Col md="4" className="">
                    <Card className=" shadow text-center border-0">
                      <div className="w-88 ml-auto mr-auto my-4 ">
                        <img alt="" src={require("../../assets/images/employer/bonus.png")} />
                      </div>
                      <h5 className="text-black f-20 mt-3 my-family-bold">Looking for ambitious self-starter?</h5>
                      <p className="mx-5 t-c mt-3 my-family f-15 font-weight-400">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                      </p>
                </Card>
                </Col>
                
                <Col md="4" className="">
                    <Card className=" shadow text-center border-0">
                      <div className="w-88 ml-auto mr-auto my-4 ">
                        <img alt="" src={require("../../assets/images/employer/be flexible.png")} />
                      </div>
                      <h5 className="text-black f-20 mt-3 my-family-bold">ASAP Support</h5>
                      <p className="mx-5 t-c mt-3 my-family f-15 font-weight-400">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                      </p>
                </Card>
                </Col>
               
                    </Row>
               <Row className="row-grid mt-5">
                    <Col md="4" className="">
                    <Card className=" shadow text-center border-0">
                      <div className="w-88 ml-auto mr-auto my-4 ">
                        <img alt="" src={require("../../assets/images/employer/post as your post (1).png")} />
                      </div>
                      <h5 className="text-black f-20 mt-3 my-family-bold">Need extra help on your projects?</h5>
                      <p className="mx-5 t-c mt-3 my-family f-15 font-weight-400">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                      </p>
                </Card>
                </Col>
                   <Col md="4" className="">
                    <Card className=" shadow text-center border-0">
                      <div className="w-88 ml-auto mr-auto my-4 ">
                        <img alt="" src={require("../../assets/images/employer/post as your post.png")} />
                      </div>
                      <h5 className="text-black f-20 mt-3 my-family-bold">What recruitment fee?</h5>
                      <p className="mx-5 t-c mt-3 my-family f-15 font-weight-400">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                      </p>
                </Card>
                </Col>
                 <Col md="4" className="">
                    <Card className=" shadow text-center border-0">
                      <div className="w-88 ml-auto mr-auto my-4 ">
                        <img alt="" src={require("../../assets/images/employer/be flexible (1).png")} />
                      </div>
                      <h5 className="text-black f-20 mt-3 my-family-bold">Tied down and need a hand with hiring?</h5>
                      <p className="mx-5 t-c mt-3 my-family f-15 font-weight-400">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                      </p>
                </Card>
                </Col>
              </Row>
                      </Container>
          }

            </section>

        );
    }
}

export default BenefitsSection;

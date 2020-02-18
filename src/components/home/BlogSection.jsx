import React, { Component } from 'react';
import { Row, Col,Container } from 'reactstrap';

class BlogSection extends Component {
  render() {
    return (
        <section className="section  ">
      <Container fluid >
          <Row >
              <Col md={8} className="ml-auto mr-auto pb-4">
              <div className="my-2 text-black ml-auto mr-auto text-center f-24 font-weight-700 my-family-bold">Blog & Events</div>

              </Col>
              <Col md={5} className="ml-auto mt-4">
                  <div className="blog_section shadow">
                
                      <p className="my-family-bold f-16 font-weight-700 primary-color-text">BLOG</p>
                    <p className="blog_text text-white f-29 my-family-cond-bold">
                     WHAT MAKES ZOO TOWN DIFFERENT?
                    </p>
                    <p className="my-family-medium f-14 text-white">We are Zoo Town. We are honest, family friendly, reliable and offer extremely safe to use services. We connect parents in London with fully vetted and experienced
                  nannies, sitters and tutors.</p>

                    <a href="/blog" className=" btn btn-primary badge-pill shadow my-family f-14 w-150 font-weight-500 primary-color text-black nav-item">
                      Discover
                    </a>
                  

                </div>
                
                <Row>
                    <div  className="col-12 ml-lg-n5 mr-auto mt--150 w-100">
                         <img alt="student" src={require("../../assets/images/student/IMG_0515.png")} className="img-fluid floating" />

                    </div>
                </Row>
              </Col>
              <Col md={5} className="mr-auto mt-4">
                  <div className="event_section shadow ml-5-big">
                <p className="my-family-bold f-16 font-weight-700 text-black">EVENTS</p>
                <p className="text-black f-29 my-family-cond-bold">
                  LEARN. DEVELOP & GROW
                  <br />
                  ON THE GO.
                </p>
               <p className="my-family-medium f-14 text-black">We are Zoo Town. We are honest, family friendly, reliable and offer extremely safe to use services.</p>

                <a href="/events" className="btn btn-primary my-4 badge-pill shadow font-weight-500  my-family f-14 w-150  text-black btn-white">
                  Discover
                </a>

              </div>
                  <img alt="student" src={require("../../assets/images/student/IMG_5422.png")} className="floating mt--100 ml-lg-big w-100" />
              </Col>
              
          </Row>
          <Row className="mt-5">
                   <Col md={5} className="ml-auto mt-4">
                <div className="blog_section_border shadow">
                 
                      <p className="my-family-bold f-16 font-weight-700 primary-color-text">BLOG</p>
                    <p className="blog_text text-black f-29 my-family-cond-bold">
                     WHAT MAKES ZOO TOWN DIFFERENT?
                    </p>
                    

                    <a href="/blog" className=" btn btn-primary badge-pill shadow my-family f-14 w-150 font-weight-500 primary-color text-black nav-item">
                      Discover
                    </a>
                 

                </div>
                <Row>
                 <div  className="col-12 ml-lg-n5 mr-auto mt--250 w-100">
                         <img alt="student"  src={require("../../assets/images/student/IMG_05151.png")} className="floating img-fluid " />

                    </div>
                </Row>
              </Col>
              <Col md={5} className="mr-auto mt-4">
                  <div className="blog_section shadow ml-5-big">
                <p className="my-family-bold f-16 font-weight-700 primary-color-text">BLOG</p>
                <p className="text-white f-29 my-family-cond-bold">
                  WHAT MAKES ZOO TOWN DIFFERENT?
                </p>
               

                <a href="/events" className="btn btn-primary badge-pill shadow my-family f-14 w-150 font-weight-500 text-black primary-color">
                  Discover
                </a>

              </div>
                  <img alt="student" src={require("../../assets/images/student/IMG_05152.png")} className="floating mt--250 ml-lg-big w-100" />
              </Col>

          </Row>
            </Container>
        </section>

    );
  }
}

export default BlogSection;

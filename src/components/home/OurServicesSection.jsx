import React, { Component } from 'react';
import { Row, Col,Container } from 'reactstrap';

class OurServicesSection extends Component {
  render() {
    const { page } = this.props;
    return (
          <section className="section">


        {page === 'students' ? (
                <Container className="">
              <Row className="py-5">
                <Col md={6}>
                     <img alt="strong" src={require("../../assets/images/student/strong.png")} className="img-fluid floating"  />
                  </Col>
                  <Col md={6} className="mt-5">
                      <h2 className="h2 text-black my-family-cond-bold f-29 font-weight-700">STRONG CV GAME</h2>
                  <p className="text-black my-family f-15 font-weight-500 mt-5">

                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                  <p className="text-black my-family f-15 font-weight-500  mt-5">
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                    the release
                  </p>
                  </Col>
              </Row>
                    <Row className="py-5">
                  <Col md={6} className="mt-5">
                      <h2 className="h2 text-black  my-family-cond-bold f-29 font-weight-700">NO SERVICE FEES FOR FREELANCERS</h2>
                  <p className="text-black my-family f-15 font-weight-500 mt-5">

                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                  <p className="text-black my-family f-15 font-weight-500  mt-5">
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                    the release
                  </p>
                  </Col>
                        <Col md={6}>
                     <img alt="strong" src={require("../../assets/images/student/noservice.png")} className="img-fluid floating"  />
                  </Col>
              </Row>
                </Container>

        ) : (
                <Container  className="">
              <Row className="py-5">
                <Col md={6}>
                     <img alt="strong" src={require("../../assets/images/employer/mambership.png")} className="img-fluid floating"  />
                  </Col>
                  <Col md={6}>
                      <h2 className="h2 text-black">Membership</h2>
                  <p className="text-black">

                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                  <p className="text-black">
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                    the release
                  </p>
                  </Col>
              </Row>
                    <Row className="py-5">
                  <Col md={6}>
                      <h2 className="h2 text-black">Cash-less system</h2>
                  <p className="text-black">

                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                  <p className="text-black">
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                    the release
                  </p>
                  </Col>
                        <Col md={6}>
                     <img alt="strong" src={require("../../assets/images/employer/cards.png")}  className="img-fluid floating"  />
                  </Col>
              </Row>
                </Container>

        )}
      </section>
    );
  }
}

export default OurServicesSection;

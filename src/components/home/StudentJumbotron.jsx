import React, { Component } from 'react';
import { Row, Col,Container } from 'reactstrap';

class StudentJumbotron extends Component {
  render() {
    const { page } = this.props;
    return (
      <Container className="mt-lg">
        <Row>
          <Col lg={6} md={12}  className="intro_block mt-3">

            {page === 'students' ? (
              <React.Fragment>

              <p className="zooTown_text">
                  <img className="w-30-xs " src={require("../../assets/images/student/Hello.png")} />
                    <span className="my-family-cond-bold text-right align-bottom f-62 mt-2 text-black "> We're Zoo Town.</span>
                    <br />
                    <span className="text-black f-48 my-family-cond-bold">
                      <span className="  ">GET BOOKED.</span><br />
                      GET PAID. <br />
                      THE ZOO TOWN WAY.
                    </span>
              </p>
                <p className=" home-color f-16-xs my-family font-weight-500">
                  {/* We help undergraduates, graduates, postgraduates & school leavers build their careers by connecting them with great jobs or freelancng projects provided by our
                  top className clients. */}
                  We help young people build their careers by connecting them with great jobs or more clients to run and grow their own business.
                </p>
              </React.Fragment>
            ) : (
              <React.Fragment>
                      <p className="zooTown_text">
                  <img className="w-30-xs " src={require("../../assets/images/student/Hello.png")} />
                    <span className="my-family-cond-bold text-right align-bottom f-62 mt-2 text-black "> We're Zoo Town.</span>
                    <br />
                    <span className="text-black f-48 my-family-cond-bold">
                      FILL YOUR ROLES WITH OUR<br /> CANDIDATES
                      GET YOUR  <br />PROJECTS DONE
                      WITH OUR <br /> FREELANCERS.
                    </span>
              </p>
                <p className=" home-color f-16-xs my-family font-weight-500">
                  We connect you with hungry, driven and intelligent self-starters. Our university students are ready to work hard and build their career
                </p>
              </React.Fragment>
            )}
          </Col>
          <Col lg={6} md={12}  className="student_intro_block">
            {page === 'students' ? (
              <img className="floating" src={require("../../assets/images/student/students head.png")} alt="Student Intro" />
            ) : (
              <img className="floating" src={require("../../assets/images/employer/employer_head.png")} alt="Employer Intro" />
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default StudentJumbotron;

import React, { Component } from "react";
import { Header, Footer } from "../components";
import { Row, Col } from "antd";
import { _url } from "../config/utils";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      readMore: false
    };
  }

  goToLink = url => {
    window.open(url);
  };

  render() {
    const { readMore } = this.state;
    return (
      <div>
        <Header />
        <div className="blog_content">
          {readMore ? (
            <React.Fragment>
              <div className="blog_detail">
                {/* <button onClick={() => this.setState({ readMore: false })}>Back</button> */}
                <h2 className="blog_title">
                  UK weather forecast latest: 'Too early to say if Tropical
                  Storm Leslie will impact UK', Met Office says
                </h2>
                <button onClick={() => this.setState({ readMore: false })} />
                <br />

                <div className="blog_desc">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <Row
                  style={{ marginTop: "20px", marginBottom: "30px" }}
                  gutter={16}
                  type="flex"
                  justify="space-between"
                  align="top"
                >
                  <Col className="img_new" span={8}>
                    <img
                      alt=""
                      src={_url("assets/images/student/IMG_5422.png")}
                    />
                  </Col>
                  <Col style={{ padding: "0 20px" }} span={16}>
                    <h3>
                      This role will play an important role in growing our
                      international network of content creators.{" "}
                    </h3>
                    <div className="blog-content">
                      <p>
                        This role will play an important role in growing our
                        international network of content creators. Working
                        within a small team, you’ll execute on a range of
                        campaigns that will attract a high calibre of freelance
                        talent into our Network. You’ll then use your
                        organisation skills to ensure all applicants are
                        screened in an efficient yet professional manner. The
                        right person for this role gets excited about running
                        large-scale talent attraction campaigns, but also enjoys
                        directly sourcing and approaching candidates for
                        specific project briefs.
                      </p>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>
                      <p>
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>
                    </div>
                  </Col>
                </Row>
                <div className="banner_news">
                  <h5>Input intresting text</h5>
                  <p>
                    This role will play an important role in growing our
                    international network of content creators. Working within a
                    small team, you’ll execute on a range of campaigns that will
                    attract a high calibre of freelance talent into our Network.{" "}
                  </p>
                </div>
                <div className="blog_detail_type">
                  <div style={{ marginBottom: "10px" }}>
                    <span>SIMILAR NEWS</span>
                    <div className="controller">
                      <img
                        className="rotate-left"
                        alt="back"
                        src={_url("assets/icons/back.png")}
                      />
                      <img
                        alt="forward"
                        src={_url("assets/icons/forward.png")}
                      />
                    </div>
                  </div>
                  <Row type="flex" justify="space-between" align="middle">
                    <Col span={8} className="type-item">
                      <Row type="flex" justify="space-between" align="middle">
                        <Col>
                          <button>News</button>
                        </Col>
                        <Col>
                          <span>Jan 18</span>
                        </Col>
                      </Row>
                      <p>
                        This role will play an important role in growing our
                        international network of content creators.{" "}
                      </p>
                    </Col>
                    <Col span={8} className="type-item">
                      <Row type="flex" justify="space-between" align="middle">
                        <Col>
                          <button style={{ backgroundColor: " #FED008" }}>
                            Life
                          </button>
                        </Col>
                        <Col>
                          <span>Jan 18</span>
                        </Col>
                      </Row>
                      <p>
                        This role will play an important role in growing our
                        international network of content creators.{" "}
                      </p>
                    </Col>
                    <Col span={8} className="type-item">
                      <Row type="flex" justify="space-between" align="middle">
                        <Col>
                          <button style={{ backgroundColor: " #B4B4B4" }}>
                            Other news
                          </button>
                        </Col>
                        <Col>
                          <span>Jan 18</span>
                        </Col>
                      </Row>
                      <p>
                        This role will play an important role in growing our
                        international network of content creators.{" "}
                      </p>
                    </Col>
                  </Row>
                </div>
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div className="blog__header">
                <h4>BLOG</h4>
                <Row type="flex" justify="space-between" align="middle">
                  <Col span={8} className="blog-category">
                    <button className="vertical-align">NEWS</button>
                  </Col>
                  <Col span={8} className="blog-category">
                    <button className="vertical-align">LIFE</button>
                  </Col>
                  <Col span={8} className="blog-category">
                    <button className="vertical-align">OTHER NEWS</button>
                  </Col>
                </Row>
              </div>

              <div className="blog__container">
                <Row type="flex" justify="space-between" align="middle">
                  <Col span={12}>
                    <div className="left">
                      <img
                        alt="blog"
                        src={_url("assets/images/bump-collaboration.jpg")}
                      />
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className="right">
                      <h3>
                        This role will play an important role in growing our
                        international network of content creators.{" "}
                      </h3>
                      <p>
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer.
                      </p>
                      <div className="social">
                        <img
                          alt=""
                          onClick={() =>
                            this.goToLink("https://www.facebook.com/")
                          }
                          src={_url("assets/icons/facebook.png")}
                        />
                        <img
                          alt=""
                          onClick={() => this.goToLink("https://twitter.com/")}
                          src={_url("assets/icons/twitter.png")}
                        />
                        <img
                          alt=""
                          onClick={() => this.goToLink("https://linkedin.com/")}
                          src={_url("assets/icons/linkedin.png")}
                        />
                        <img
                          alt=""
                          onClick={() =>
                            this.goToLink("https://www.instagram.com/")
                          }
                          src={_url("assets/icons/instagram.png")}
                        />
                      </div>
                      {/* <img alt="" src={_url('assets/icons/instagram.png')} /> */}
                      <button
                        className="readMore_btn"
                        onClick={() => this.setState({ readMore: true })}
                      >
                        Read More
                      </button>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <div className="controller">
                    <img
                      className="rotate-left"
                      alt="back"
                      src={_url("assets/icons/back.png")}
                    />
                    <img alt="forward" src={_url("assets/icons/forward.png")} />
                  </div>
                </Row>
              </div>
              <div className="blog__type">
                <Row type="flex" justify="space-between" align="middle">
                  <Col span={8} className="type-item">
                    <Row type="flex" justify="space-between" align="middle">
                      <Col>
                        <button>News</button>
                      </Col>
                      <Col>
                        <span>Jan 18</span>
                      </Col>
                    </Row>
                    <p>
                      This role will play an important role in growing our
                      international network of content creators.{" "}
                    </p>
                  </Col>
                  <Col span={8} className="type-item">
                    <Row type="flex" justify="space-between" align="middle">
                      <Col>
                        <button style={{ backgroundColor: " #FED008" }}>
                          Life
                        </button>
                      </Col>
                      <Col>
                        <span>Jan 18</span>
                      </Col>
                    </Row>
                    <p>
                      This role will play an important role in growing our
                      international network of content creators.{" "}
                    </p>
                  </Col>
                  <Col span={8} className="type-item">
                    <Row type="flex" justify="space-between" align="middle">
                      <Col>
                        <button style={{ backgroundColor: " #B4B4B4" }}>
                          Other news
                        </button>
                      </Col>
                      <Col>
                        <span>Jan 18</span>
                      </Col>
                    </Row>
                    <p>
                      This role will play an important role in growing our
                      international network of content creators.{" "}
                    </p>
                  </Col>
                </Row>
              </div>
              <div className="blog__card">
                <Row type="flex" justify="space-between" align="middle">
                  <Col span={6} className="card-item">
                    <img
                      alt="forward"
                      src={_url("assets/images/card-image1.jpg")}
                    />
                    <h5>Jan 18</h5>
                    <p>
                      This role will play an important role in growing our
                      international network of content creators.
                    </p>
                  </Col>
                  <Col span={6} className="card-item">
                    <img
                      alt="forward"
                      src={_url("assets/images/card-image1.jpg")}
                    />
                    <h5>Jan 18</h5>
                    <p>
                      This role will play an important role in growing our
                      international network of content creators.
                    </p>
                  </Col>
                  <Col span={6} className="card-item">
                    <img
                      alt="forward"
                      src={_url("assets/images/card-image1.jpg")}
                    />
                    <h5>Jan 18</h5>
                    <p>
                      This role will play an important role in growing our
                      international network of content creators.
                    </p>
                  </Col>
                  <Col span={6} className="card-item">
                    <img
                      alt="forward"
                      src={_url("assets/images/card-image1.jpg")}
                    />
                    <h5>Jan 18</h5>
                    <p>
                      This role will play an important role in growing our
                      international network of content creators.
                    </p>
                  </Col>
                </Row>
              </div>
            </React.Fragment>
          )}
        </div>

        <Footer page={this.props.page} />
      </div>
    );
  }
}

export default Blog;

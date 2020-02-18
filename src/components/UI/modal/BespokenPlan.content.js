import React from "react";
import { Button } from "../../../components/UI";
import { Col, Row } from "antd";

class BespokenPlanContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="BespokenPlanContent">
                <div className="BespokenPlanContent__Header">
                    <h3>BESPOKE PLAN</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <Row type="flex" justify="space-between" align="middle" className='option'>
                        <Col span={5} style={{textAlign: "left"}}>
                            <h3>
                                DETAILED REPORT
                            </h3>
                        </Col>
                        <Col span={15}>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            </p>
                        </Col>
                        <Col span={4}>
                            <Button>
                                Add
                            </Button>
                        </Col>
                    </Row>

                    <Row type="flex" justify="space-between" align="middle" className='option'>
                        <Col span={5} style={{textAlign: "left"}}>
                            <h3>
                                D&I ASSISTANCE
                            </h3>
                        </Col>
                        <Col span={15}>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            </p>
                        </Col>
                        <Col span={4}>
                            <Button>
                                Add
                            </Button>
                        </Col>
                    </Row>

                    <Row type="flex" justify="space-between" align="middle" className='option'>
                        <Col span={5} style={{textAlign: "left"}}>
                            <h3>
                                SKILLS MATCH
                            </h3>
                        </Col>
                        <Col span={15}>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            </p>
                        </Col>
                        <Col span={4}>
                            <Button>
                                Add
                            </Button>
                        </Col>
                    </Row>

                    <Row type="flex" justify="space-between" align="middle" className='option'>
                        <Col span={5} style={{textAlign: "left"}}>
                            <h3>
                                JOB TRACKING
                            </h3>
                        </Col>
                        <Col span={15}>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            </p>
                        </Col>
                        <Col span={4}>
                            <Button>
                                Add
                            </Button>
                        </Col>
                    </Row>

                    <Row type="flex" justify="space-between" align="middle" className='option'>
                        <Col span={5} style={{textAlign: "left"}}>
                            <h3>
                                GROWTH REPORT
                            </h3>
                        </Col>
                        <Col span={15}>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            </p>
                        </Col>
                        <Col span={4}>
                            <Button>
                                Add
                            </Button>
                        </Col>
                    </Row>
                    <Button>
                        Back
                    </Button>
                </div>
            </div>
        );
    }
}

export default BespokenPlanContent;

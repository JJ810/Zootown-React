import React from "react";
import {  AdminHeader } from './NavBar/index';
import { AdminSideBar } from '../../components/admin';
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
    UncontrolledPopover,
PopoverBody,
PopoverHeader,
      FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
    Container
} from "reactstrap";
import classnames from "classnames";
import { graphql } from 'react-apollo';
class AdminPaymentArea extends React.Component {
    constructor(props) {
        super(props);
        this.state={

        }
        this.handlebytransactionfee = this.handlebytransactionfee.bind(this);
        this.handlebyemployeepaid = this.handlebyemployeepaid.bind(this);
        this.handlebystudentearning = this.handlebystudentearning.bind(this);
        this.handlebyrefundtype = this.handlebyrefundtype.bind(this);
        this.handlebypaymentmethod = this.handlebypaymentmethod.bind(this);
        this.handlebystatus = this.handlebystatus.bind(this);
        this.handlebybookingdate = this.handlebybookingdate.bind(this);
        this.handlebybookingnumber = this.handlebybookingnumber.bind(this);
        this.handlebyname = this.handlebyname.bind(this);
    }
handlebytransactionfee (e){
    console.log(e.target.value)
}
handlebybookingdate (e){
    console.log(e.target.value)
}
handlebyemployeepaid (e){
     console.log(e.target.value)
}
handlebystudentearning (e){
     console.log(e.target.value)
}
handlebypaymentmethod (e){
     console.log(e.target.value)
}
handlebyrefundtype (e){
     console.log(e.target.value)
}
handlebystatus (e){
    console.log(e.target.value)
}
handlebybookingnumber (e){
    console.log(e.target.value)
}
handlebyname (e){
    console.log(e.target.value)
}
    render() {
         const { page } = this.props;
        return (
            <div>
                <AdminHeader page={page} />
                 <main ref="main" >
                    <section>
                        <Container fluid>
                            <Row>
                                <AdminSideBar page={page}/>
         
                                <Col className="mt-5" md="9">
                                    <Row>
                                        <Col md={3}>
                                            <span className="ml-4 mt-1  my-family-bold f-24 text-black">PAYMENT AREA </span>
                                        </Col>
                                        
                                        <Col md={12}>
                                            <Row>
                                                <Col  md={3}>
                                                    <span className="float-left w-45">
                                                        <p className="text-muted-jobs mt-3 f-10 my-family-bold">BOOKING NUMBER</p>
                                                        <input  type="text" className=" text-muted-jobs form-control " onChange={this.handlebybookingnumber} />
                                                    </span>
                                                    <span className="float-right w-45">
                                                        <p className="text-muted-jobs mt-3 f-10 my-family-bold">CUSTOMER NAME</p>
                                                        <input  type="text" className=" text-muted-jobs form-control " onChange={this.handlebyname} />
                                                    </span>
                                                </Col>
                                                <Col  md={3}>
                                                    <span className="float-left w-45">
                                                        <p className="text-muted-jobs mt-3 f-10 my-family-bold">DATE OF BOOKING</p>
                                                         <input  type="text" className=" text-muted-jobs form-control " onChange={this.handlebybookingdate} />
                                                    </span>
                                                    <span className="float-right w-45">
                                                        <p className="text-muted-jobs mt-3 f-10 my-family-bold">STATUS</p>
                                                        <input  type="text" className=" text-muted-jobs form-control " onChange={this.handlebystatus} />
                                                    </span>
                                                </Col>
                                                <Col  md={2}>
                                                    <span className="float-left w-45">
                                                        <span className="text-muted-jobs mt-4 f-10 my-family-bold">METHOD OF PAYMENT</span>
                                                        <input  type="text" className=" text-muted-jobs form-control " onChange={this.handlebypaymentmethod} />
                                                    </span>
                                                    <span className="float-right w-45">
                                                        <span className="text-muted-jobs mt-4 f-10 my-family-bold">REFUND TYPE</span>
                                                        <input  type="text" className=" text-muted-jobs form-control " onChange={this.handlebyrefundtype} />
                                                    </span>
                                                </Col>
                                               <Col  md={2}>
                                                    <span className="float-left w-45">
                                                        <span className="text-muted-jobs mt-4 f-10 my-family-bold">EMPLOYEE PAID</span>
                                                        <input  type="text" className=" text-muted-jobs form-control " onChange={this.handlebyemployeepaid} />
                                                    </span>
                                                    <span className="float-right w-45">
                                                        <span className="text-muted-jobs mt-4 f-10 my-family-bold">STUDENT EARNING</span>
                                                        <input  type="text" className=" text-muted-jobs form-control " onChange={this.handlebystudentearning} />
                                                    </span>
                                                </Col>
                                               <Col  md={2}>
                                                    <span className="float-left w-45">
                                                        <span className="text-muted-jobs mt-4 f-10 my-family-bold">TRANSACTION FEE</span>
                                                        <input  type="text" className=" text-muted-jobs form-control " onChange={this.handlebytransactionfee} />
                                                    </span>
                                                </Col>
                                            </Row>
                                            <Row className="mt-3">
                                                <Col  md={3}>
                                                    <span className="float-left w-45">
                                                        <p className="primary-color-text mt-4 f-12 my-family-bold">#3569992355</p>
                                                    </span>
                                                    <span className="float-right w-45">
                                                        <p className="text-black mt-4 f-12 my-family-bold">John Doe</p>
                                                    </span>
                                                </Col>
                                                <Col  md={3}>
                                                    <span className="float-left w-45">
                                                        <p className="text-black mt-4 f-12 my-family-bold">10.23.2018</p>
                                                    </span>
                                                    <span className="float-right w-45">
                                                        <button className="btn w-100 mt-3  pending-admin f-12 font-weight-400 text-white  cursor-pointer">Pending</button>
                                                    </span>
                                                </Col>
                                                <Col  md={2}>
                                                    <span className="float-left w-45">
                                                        <p className="primary-color-text mt-4 f-12 my-family-bold">VISA card</p>
                                                    </span>
                                                    <span className="float-right w-45">
                                                        <p className="primary-color-text mt-4 f-12 my-family-bold">Credit card</p>
                                                    </span>
                                                </Col>
                                               <Col  md={2}>
                                                    <span className="float-left w-45">
                                                        <p className="text-black mt-4 f-12 my-family-bold">$2555.22</p>
                                                    </span>
                                                    <span className="float-right w-45">
                                                        <p className="text-black mt-4 f-12 my-family-bold">$235.55</p>
                                                    </span>
                                                </Col>
                                               <Col  md={2}>
                                                    <span className="float-left w-45">
                                                        <p className="t-c mt-4 f-12 my-family-bold">$23.35</p>
                                                    </span>
                                                    <span className="float-right w-45">  
                                                       <img 
                                                            className="mt-3"
                                                            data-container="body"
                                                            data-content="Here will be some very useful information about his popover."
                                                            data-placement="left"
                                                            id="tooltip7845456743656562"
                                                            src={require('../../assets/menu.png')} />

                                                        <UncontrolledPopover placement="left" target="tooltip7845456743656562">
                                                        <PopoverHeader className="h-45 w-180 bg-black bor-bot-wh text-white f-16 my-family font-weight-500">Partial Refund</PopoverHeader>
                                                        <PopoverHeader className="h-45 bg-black bor-bot-wh text-white f-16 my-family font-weight-500">Full Refund</PopoverHeader>
                                                        </UncontrolledPopover>
                                                    </span>
                                                </Col>
                                            </Row>
                                            <Row className="mt-3">
                                                <Col  md={3}>
                                                    <span className="float-left w-45">
                                                        <p className="primary-color-text mt-4 f-12 my-family-bold">#3569992355</p>
                                                    </span>
                                                    <span className="float-right w-45">
                                                        <p className="text-black mt-4 f-12 my-family-bold">John Doe</p>
                                                    </span>
                                                </Col>
                                                <Col  md={3}>
                                                    <span className="float-left w-45">
                                                        <p className="text-black mt-4 f-12 my-family-bold">10.23.2018</p>
                                                    </span>
                                                    <span className="float-right w-45">
                                                        <button className="btn w-100 mt-3  closed-admin f-12 font-weight-400 text-white  cursor-pointer">Declined</button>
                                                    </span>
                                                </Col>
                                                <Col  md={2}>
                                                    <span className="float-left w-45">
                                                        <p className="primary-color-text mt-4 f-12 my-family-bold">VISA card</p>
                                                    </span>
                                                    <span className="float-right w-45">
                                                        <p className="primary-color-text mt-4 f-12 my-family-bold">Credit card</p>
                                                    </span>
                                                </Col>
                                               <Col  md={2}>
                                                    <span className="float-left w-45">
                                                        <p className="text-black mt-4 f-12 my-family-bold">$2555.22</p>
                                                    </span>
                                                    <span className="float-right w-45">
                                                        <p className="text-black mt-4 f-12 my-family-bold">$235.55</p>
                                                    </span>
                                                </Col>
                                               <Col  md={2}>
                                                    <span className="float-left w-45">
                                                        <p className="t-c mt-4 f-12 my-family-bold">$23.35</p>
                                                    </span>
                                                    <span className="float-right w-45">  
                                                       <img 
                                                            className="mt-3"
                                                            data-container="body"
                                                            data-content="Here will be some very useful information about his popover."
                                                            data-placement="left"
                                                            id="tooltip78454567432876576"
                                                            src={require('../../assets/menu.png')} />

                                                        <UncontrolledPopover placement="left" target="tooltip78454567432876576">
                                                        <PopoverHeader className="h-45 w-180 bg-black bor-bot-wh text-white f-16 my-family font-weight-500">Partial Refund</PopoverHeader>
                                                        <PopoverHeader className="h-45 bg-black bor-bot-wh text-white f-16 my-family font-weight-500">Full Refund</PopoverHeader>
                                                        </UncontrolledPopover>
                                                    </span>
                                                </Col>
                                            </Row>
                                            <Row className="mt-3">
                                                <Col  md={3}>
                                                    <span className="float-left w-45">
                                                        <p className="primary-color-text mt-4 f-12 my-family-bold">#3569992355</p>
                                                    </span>
                                                    <span className="float-right w-45">
                                                        <p className="text-black mt-4 f-12 my-family-bold">John Doe</p>
                                                    </span>
                                                </Col>
                                                <Col  md={3}>
                                                    <span className="float-left w-45">
                                                        <p className="text-black mt-4 f-12 my-family-bold">10.23.2018</p>
                                                    </span>
                                                    <span className="float-right w-45">
                                                        <button className="btn w-100 mt-3  paid-admin f-12 font-weight-400 text-white  cursor-pointer">Paid</button>
                                                    </span>
                                                </Col>
                                                <Col  md={2}>
                                                    <span className="float-left w-45">
                                                        <p className="primary-color-text mt-4 f-12 my-family-bold">VISA card</p>
                                                    </span>
                                                    <span className="float-right w-45">
                                                        <p className="primary-color-text mt-4 f-12 my-family-bold">Credit card</p>
                                                    </span>
                                                </Col>
                                               <Col  md={2}>
                                                    <span className="float-left w-45">
                                                        <p className="text-black mt-4 f-12 my-family-bold">$2555.22</p>
                                                    </span>
                                                    <span className="float-right w-45">
                                                        <p className="text-black mt-4 f-12 my-family-bold">$235.55</p>
                                                    </span>
                                                </Col>
                                               <Col  md={2}>
                                                    <span className="float-left w-45">
                                                        <p className="t-c mt-4 f-12 my-family-bold">$23.35</p>
                                                    </span>
                                                     <span className="float-right w-45">  
                                                       <img 
                                                            className="mt-3"
                                                            data-container="body"
                                                            data-content="Here will be some very useful information about his popover."
                                                            data-placement="left"
                                                            id="tooltip78454567432"
                                                            src={require('../../assets/menu.png')} />

                                                        <UncontrolledPopover placement="left" target="tooltip78454567432">
                                                        <PopoverHeader className="h-45 w-180 bg-black bor-bot-wh text-white f-16 my-family font-weight-500">Partial Refund</PopoverHeader>
                                                        <PopoverHeader className="h-45 bg-black bor-bot-wh text-white f-16 my-family font-weight-500">Full Refund</PopoverHeader>
                                                        </UncontrolledPopover>
                                                    </span>
                                                </Col>
                                            </Row>
                                       </Col>
                                    </Row>
                               </Col>
                            </Row>
                        </Container>
                    </section>
                </main>
            </div>
        )
    }
}

export default AdminPaymentArea;
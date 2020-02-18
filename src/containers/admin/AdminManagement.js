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
    Button,Modal,
      FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
    Container
} from "reactstrap";
import classnames from "classnames";
import { graphql } from 'react-apollo';
class AdminManagement extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            emails:[],
            
        }
   
        this.getemails = this.getemails.bind(this);
        this.handlebyrole = this.handlebyrole.bind(this);
        this.handlebystatus = this.handlebystatus.bind(this);
        this.handlebycreateddate = this.handlebycreateddate.bind(this);
        this.handlebyusername = this.handlebyusername.bind(this);
        this.mergeemail = this.mergeemail.bind(this);
        this.handlebymail = this.handlebymail.bind(this);
    }
    toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  }
getemails (e){
    console.log(e.target.value)
    this.setState({
        email:e.target.value
    })
}
mergeemail (e){
     if(e.keyCode === 13){
         var array = this.state.emails;
        console.log(array)
        var newarray = array.concat(this.state.email);
    this.setState({
            emails:newarray
        })   
   this.setState({
            email:''
        })   
    
}
      
}
handlebycreateddate (e){
    console.log(e.target.value)
}
handlebyrole (e){
     console.log(e.target.value)
}
handlebystatus (e){
    console.log(e.target.value)
}
handlebyusername (e){
    console.log(e.target.value)
}
handlebymail (e){
    console.log(e.target.value)
}
renderemails (){
    const rendered = this.state.emails.map((link) =>{
        return <span class="btn h-30 mt-2  badge-pill primary-color px-3 mr-2"><span className="f-14 fontweight-300 text-black float-left"> {link}</span></span>
   });
    return rendered;
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
                                            <span className="ml-4 mt-1  my-family-bold f-24 text-black">MANAGEMENT </span>
                                        </Col>
                                        <Col md={5} className="ml-auto">
                                               <Modal
                                                  className="modal-dialog-centered w-75 modal-1000"
                                                  isOpen={this.state.defaultModal}
                                                  toggle={() => this.toggleModal("defaultModal")}
                                                >
                                                  <div className="modal-header border-bottom-0">
                                                    <h6 className=" ml-auto mr-auto" id="modal-title-default">
                                                        <p className="modal-title my-family-bold mt-3 text-black  f-24 text-center">
                                                             SEND INVITES TO USERS
                                                        </p>
                                                       <p className="modal-title my-family-bold t-c  mt-2 f-16 text-center">
                                                              INPUT MAIL USER THAT YOU WANT TO ADD
                                                        </p>
                                                     
                                                    </h6>                                                  
                                                    <button
                                                      aria-label="Close"
                                                      className="bg-white"
                                                      data-dismiss="modal"
                                                      type="button"
                                                      onClick={() => this.toggleModal("defaultModal")}
                                                    >
                                                      <img className="w-30-icon" src={require('../../assets/deletecard.png')} />
                                                    </button>
                                                  </div>
                                                  <div className="modal-body">
                                                        <Row>
                                                            <Col md={12} className="ml-5">
                                                                <p className="text-black my-family-bold f-14 ">
                                                                    INPUT MAIL
                                                               </p>
                                                            </Col>
                                                            <Col md={12} className="ml-5">
                                                                {this.renderemails()}
                                                                
                                                            </Col>
                                                            <Col md={12} className="ml-5 mt-4">
                                                                <input onKeyUp={this.mergeemail}  onChange={this.getemails}  value={this.state.email}  type="text" className="w-75 border-bottom py-2" placeholder="Write User Emails" />
                                                            </Col>
                                                        </Row>
                                                  </div>
                                                  <div className="modal-footer border-top-0">
                                                    <Button color="primary" className="ml-auto my-4 mr-auto btn primary-color my-family badge-pill text-black px-4" type="button">
                                                      SEND
                                                    </Button>
                                                    
                                                  </div>
                                                </Modal>
                                             <span onClick={() => this.toggleModal("defaultModal")} className=" btn primary-color my-family badge-pill text-black px-4">Add User</span>             
                                             <span className="  btn pause-btn my-family badge-pill text-black px-4">Pause User</span>             
                                             <span className=" btn delete-user my-family badge-pill text-white px-4">Delete User</span>             
                                        </Col>
                                        <Col md={12}>
                                        <Row>
                                        <Col  md={2}>
                                            <p className="text-muted-jobs mt-4 f-10 my-family-bold">USER NAME</p>
                                             <input  type="text" className=" text-muted-jobs form-control " onChange={this.handlebyusername} />
                                        </Col>
                                        <Col  md={2}>
                                            <p className="text-muted-jobs mt-4 f-10 my-family-bold">MAIL</p>
                                             <input  type="number" className=" text-muted-jobs form-control " onChange={this.handlebymail} />
                                        </Col>
                                        <Col  md={2}>
                                            <p className="text-muted-jobs mt-4 f-10 my-family-bold">DATE CREATED</p>
                                             <input  type="number" className=" text-muted-jobs form-control " onChange={this.handlebycreateddate} />
                                        </Col>
                                        <Col  md={2}>
                                            <p className="text-muted-jobs mt-4 f-10 my-family-bold">ROLE</p>
                                             <input  type="number" className=" text-muted-jobs form-control " onChange={this.handlebyrole} />
                                        </Col>
                                       <Col  md={2}>
                                            <p className="text-muted-jobs mt-4 f-10 my-family-bold">STATUS</p>
                                             <input  type="number" className=" text-muted-jobs form-control " onChange={this.handlebystatus} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col  md={2}>
                                            <p className="mt-4" ><img className="w-35-icon" src={require('../../assets/images/employer/1.png')} /><span className="f-16 font-weight-600 text-black  my-family" > Plum Guide</span></p>
                                        </Col>
                                        <Col  md={2}>
                                             <p className="mt-4" ><span className="f-16 my-family font-weight-600 text-black " >faheem@net.com </span></p>
                                        </Col>
                                        <Col  md={2}>
                                            <p className="mt-4" ><span className="f-16 my-family font-weight-600 text-black " >12.10.2018 </span></p>
                                        </Col>
                                        <Col  md={2}>
                                             <p className="mt-4 f-16 my-family font-weight-600 text-black cursor-pointer"
                                                    color="default"
                                                    data-container="body"
                                                    data-content="Here will be some very useful information about his popover."
                                                    data-placement="bottom"
                                                    id="tooltip7867432"
                                                    size="sm"
                                                  >
                                                    Super Admin
                                                  </p>
                                                <UncontrolledPopover placement="bottom" target="tooltip7867432">
                                                    <PopoverHeader className="h-45 w-180 bg-black bor-bot-wh text-white f-16 my-family font-weight-500">Manager</PopoverHeader>
                                                    <PopoverHeader className="h-45 bg-black bor-bot-wh text-white f-16 my-family font-weight-500">Super Admin</PopoverHeader>
                                                    <PopoverHeader className="h-45 bg-black bor-bot-wh text-white f-16 my-family font-weight-500">Admin</PopoverHeader>

                                                  </UncontrolledPopover>
                                        </Col>
                                        <Col  md={4}>  
                                            <Row>
                                                <Col md={4}>
                                                    <p className="mt-4" ><span className="f-16 my-family font-weight-600 text-black " >Start Plan £350</span></p>
                                                </Col>
                                                <Col md={4} className="mt-4">
                                                    <button className="btn w-100  pending-admin f-12 font-weight-400 text-white  cursor-pointer"
                                                    color="default"
                                                    data-container="body"
                                                    data-content="Here will be some very useful information about his popover."
                                                    data-placement="bottom"
                                                    id="tooltip78454567432"
                                                    size="sm"
                                                  >
                                                    Pending
                                                  </button>
                                                <UncontrolledPopover placement="bottom" target="tooltip78454567432">
                                                    <PopoverHeader className="h-45 w-180 bg-black bor-bot-wh text-white f-16 my-family font-weight-500">Paid</PopoverHeader>
                                                    <PopoverHeader className="h-45 bg-black bor-bot-wh text-white f-16 my-family font-weight-500">Pending</PopoverHeader>
                                                    <PopoverHeader className="h-45 bg-black bor-bot-wh text-white f-16 my-family font-weight-500">Closed</PopoverHeader>

                                                  </UncontrolledPopover>
                                                </Col>
                                                <Col md={4}>
                                                    <div className="custom-control custom-checkbox mt-4">
                                                      <input
                                                        className="custom-control-input"
                                                        defaultChecked
                                                        id="customCheck2"
                                                        type="checkbox"
                                                      />
                                                      <label className="custom-control-label" htmlFor="customCheck2">

                                                      </label>
                                                    </div>
                                                </Col>
                                            </Row>        
                                        </Col>
                                        </Row>
                                        <Row>
                                        <Col  md={2}>
                                            <p className="mt-4" ><img className="w-35-icon" src={require('../../assets/images/employer/1.png')} /><span className="f-16 font-weight-600 text-black  my-family" > Plum Guide</span></p>
                                        </Col>
                                        <Col  md={2}>
                                             <p className="mt-4" ><span className="f-16 my-family font-weight-600 text-black " >faheem@net.com </span></p>
                                        </Col>
                                        <Col  md={2}>
                                            <p className="mt-4" ><span className="f-16 my-family font-weight-600 text-black " >12.10.2018 </span></p>
                                        </Col>
                                        <Col  md={2}>
                                             <p className="mt-4 f-16 my-family font-weight-600 text-black cursor-pointer"
                                                    color="default"
                                                    data-container="body"
                                                    data-content="Here will be some very useful information about his popover."
                                                    data-placement="bottom"
                                                    id="tooltip786743233333"
                                                    size="sm"
                                                  >
                                                    Super Admin
                                                  </p>
                                                <UncontrolledPopover placement="bottom" target="tooltip786743233333">
                                                    <PopoverHeader className="h-45 w-180 bg-black bor-bot-wh text-white f-16 my-family font-weight-500">Manager</PopoverHeader>
                                                    <PopoverHeader className="h-45 bg-black bor-bot-wh text-white f-16 my-family font-weight-500">Super Admin</PopoverHeader>
                                                    <PopoverHeader className="h-45 bg-black bor-bot-wh text-white f-16 my-family font-weight-500">Admin</PopoverHeader>

                                                  </UncontrolledPopover>
                                        </Col>
                                        <Col  md={4}>  
                                            <Row>
                                                <Col md={4}>
                                                    <p className="mt-4" ><span className="f-16 my-family font-weight-600 text-black " >Start Plan £350</span></p>
                                                </Col>
                                                <Col md={4} className="mt-4">
                                                    <button className="btn w-100  paid-admin f-12 font-weight-400 text-white  cursor-pointer"
                                                    color="default"
                                                    data-container="body"
                                                    data-content="Here will be some very useful information about his popover."
                                                    data-placement="bottom"
                                                    id="tooltip78454567432234"
                                                    size="sm"
                                                  >
                                                    Paid
                                                  </button>
                                                <UncontrolledPopover placement="bottom" target="tooltip78454567432234">
                                                    <PopoverHeader className="h-45 w-180 bg-black bor-bot-wh text-white f-16 my-family font-weight-500">Paid</PopoverHeader>
                                                    <PopoverHeader className="h-45 bg-black bor-bot-wh text-white f-16 my-family font-weight-500">Pending</PopoverHeader>
                                                    <PopoverHeader className="h-45 bg-black bor-bot-wh text-white f-16 my-family font-weight-500">Closed</PopoverHeader>

                                                  </UncontrolledPopover>
                                                </Col>
                                                <Col md={4}>
                                                    <div className="custom-control custom-checkbox mt-4">
                                                      <input
                                                        className="custom-control-input"
                                                        defaultChecked
                                                        id="customCheck2"
                                                        type="checkbox"
                                                      />
                                                      <label className="custom-control-label" htmlFor="customCheck2">

                                                      </label>
                                                    </div>
                                                </Col>
                                            </Row>        
                                        </Col>
                                        </Row>
                                                  <Row>
                                        <Col  md={2}>
                                            <p className="mt-4" ><img className="w-35-icon" src={require('../../assets/images/employer/1.png')} /><span className="f-16 font-weight-600 text-black  my-family" > Plum Guide</span></p>
                                        </Col>
                                        <Col  md={2}>
                                             <p className="mt-4" ><span className="f-16 my-family font-weight-600 text-black " >faheem@net.com </span></p>
                                        </Col>
                                        <Col  md={2}>
                                            <p className="mt-4" ><span className="f-16 my-family font-weight-600 text-black " >12.10.2018 </span></p>
                                        </Col>
                                        <Col  md={2}>
                                             <p className="mt-4 f-16 my-family font-weight-600 text-black cursor-pointer"
                                                    color="default"
                                                    data-container="body"
                                                    data-content="Here will be some very useful information about his popover."
                                                    data-placement="bottom"
                                                    id="tooltip7867432453434"
                                                    size="sm"
                                                  >
                                                    Super Admin
                                                  </p>
                                                <UncontrolledPopover placement="bottom" target="tooltip7867432453434">
                                                    <PopoverHeader className="h-45 w-180 bg-black bor-bot-wh text-white f-16 my-family font-weight-500">Manager</PopoverHeader>
                                                    <PopoverHeader className="h-45 bg-black bor-bot-wh text-white f-16 my-family font-weight-500">Super Admin</PopoverHeader>
                                                    <PopoverHeader className="h-45 bg-black bor-bot-wh text-white f-16 my-family font-weight-500">Admin</PopoverHeader>

                                                  </UncontrolledPopover>
                                        </Col>
                                        <Col  md={4}>  
                                            <Row>
                                                <Col md={4}>
                                                    <p className="mt-4" ><span className="f-16 my-family font-weight-600 text-black " >Start Plan £350</span></p>
                                                </Col>
                                                <Col md={4} className="mt-4">
                                                    <button className="btn w-100  closed-admin f-12 font-weight-400 text-white  cursor-pointer"
                                                    color="default"
                                                    data-container="body"
                                                    data-content="Here will be some very useful information about his popover."
                                                    data-placement="bottom"
                                                    id="tooltip78454567432as"
                                                    size="sm"
                                                  >
                                                    Closed
                                                  </button>
                                                <UncontrolledPopover placement="bottom" target="tooltip78454567432as">
                                                    <PopoverHeader className="h-45 w-180 bg-black bor-bot-wh text-white f-16 my-family font-weight-500">Paid</PopoverHeader>
                                                    <PopoverHeader className="h-45 bg-black bor-bot-wh text-white f-16 my-family font-weight-500">Pending</PopoverHeader>
                                                    <PopoverHeader className="h-45 bg-black bor-bot-wh text-white f-16 my-family font-weight-500">Closed</PopoverHeader>

                                                  </UncontrolledPopover>
                                                </Col>
                                                <Col md={4}>
                                                    <div className="custom-control custom-checkbox mt-4">
                                                      <input
                                                        className="custom-control-input"
                                                        defaultChecked
                                                        id="customCheck2"
                                                        type="checkbox"
                                                      />
                                                      <label className="custom-control-label" htmlFor="customCheck2">

                                                      </label>
                                                    </div>
                                                </Col>
                                            </Row>        
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

export default AdminManagement;
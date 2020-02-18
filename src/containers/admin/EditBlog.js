import React, {useEffect, useState} from 'react';   
import {  AdminHeader } from './NavBar/index';
import { AdminSideBar } from '../../components/admin';
//import TextArea from 'react-text-input'; 
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
    Label,
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
    Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
    Container
} from "reactstrap";
import classnames from "classnames";
import { graphql } from 'react-apollo';
import {useDropzone} from 'react-dropzone';

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};


function Previews(props) {
  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });
  
  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
        />
      </div>
    </div>
  ));

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <section className="container" >
      <div {...getRootProps({className: 'dropzone py-5 text-center border-dotted'})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside style={thumbsContainer}>
        {thumbs}
      </aside>
    </section>
  );
}
class EditBlog extends React.Component {
    constructor(props) {
        super(props);
        this.state={

        }
       
    }
    render() {
         const { page } = this.props;
        return (
            <div>
                <AdminHeader page={page} />
                 <main ref="main" >
                    <section>
                        <Container fluid>
                            <Row className="pb-lg">
                                    <AdminSideBar page={page}/>

                                    <Col className="mt-5" md="9">
                                        <Row>
                                            <Col md={3} className="mr-auto mt-3">
                                                 <img className="mb-2" src={require('../../assets/forward.png')} />
                                        <span className="ml-4 mt-1  my-family-bold f-24 text-mutedd">SOME TEXT</span>
                                            </Col>
                                            <Col md={5} className="ml-auto mt-3">
                                                <Row>
                                                     <Col md={5}>
                                                           <span className="float-right f-18 my-family font-weight-500">Not Published</span>
                                                     </Col>
                                                     <Col md={3} className="text-center">
                                                         <label className="mt-1 custom-toggle">
                                                            <input defaultChecked type="checkbox" />
                                                            <span className="custom-toggle-slider " />
                                                      </label>
                                                    </Col>
                                                    <Col md={4} >
                                                        <span className=" f-18 my-family font-weight-500">Published</span>
                                                    </Col>
                                                 </Row>
                                            </Col>
                                            <Col md={2} className="ml-auto mt-3">
                                                <Row>
                                                    <Col md={4}>
                                                        <button className="text-center br-6 primary-color w-30 h-30 text-white "><i className="f-18 fa fa-pencil"></i></button>
                                                    </Col>
                                                    <Col md={4}>
                                                        <button className="text-center br-6 delete-user w-30 h-30 text-white "><i className="f-18 fa fa-trash"></i></button>
                                                    </Col>
                                                    <Col md={4} >
                                                        <button className="text-center br-6 copy-blog w-30 h-30 text-white "><i className="f-18 fa fa-file"></i></button>
                                                    </Col>
                                                 </Row>
                                            </Col>
                                            <Col md={12} className="mt-5">
                                                <Previews /> 
                                           </Col>
                                            <Col md={12} className="mt-5">
                                             
                                                <Input type="textarea" className="h-190" placeholder="Write Something..." name="text" id="exampleText" />
                                           </Col>
                                           <Col md={4} className="mt-5 ml-auto mr-auto">
                                             <Button color="primary" className=" btn primary-color my-family badge-pill text-black px-4" type="button">
                                                      EDIT BLOG
                                                    </Button>
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

export default EditBlog;
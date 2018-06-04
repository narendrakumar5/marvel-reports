import React from 'react';
import { Link } from 'react-router-dom';
import { Form,Glyphicon, FormGroup,Checkbox, ControlLabel, FormControl, Label, FormText, Col, Button, ButtonToolbar } from 'react-bootstrap'
import { leftRefresh,leftWrench,whiteColor,greyColor } from '../../Constants/appConstants';
class LoginBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userEmployee_Id: [],
            employee_Id: '',
            password: ''
        }
    }
    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }
    componentDidMount() {
        // For initial data
        console.log('Component Did MOUNT!')
    }
    handleSubmit(e) {
        this.formValidate();
        e.preventDefault();
        
        const formData = {};
        for (const field in this.refs) {
          formData[field] = this.refs[field].value;
        }
    }
    formValidate(){
        var employee_Id = document.getElementById("emp").value;
        var password = document.getElementById("password").value;
        if(employee_Id === ""){
            alert("Please Enter your Employee Id")
            employee_Id.focus()
            return false
        }
        if(password === ""){
            alert("Please enter a Password")
            password.focus()
            return false
        }
        // if(employee_Id !== '' && password !== '') {
        //     $.ajax({
        //         url: 'http://reduxblog.herokuapp.com/api/',
        //         type: 'POST',
        //         data: {
        //             username: employee_Id,
        //             password: password
        //         },
        //         success: function(returns) {
        //             console.log(returns);
        //             // It looks like the page that handles the form returns JSON
        //             // Parse the JSON
        //             var obj = JSON.parse(returns);
        //             debugger;
        //             if(obj.id !== null && obj.id !== '') {
        //                 alert("Login succeeded");
        //                 // You should redirect the user too
        //                 // window.location = 'http://redirecturl.com';
        //                 this.props.loginUser();
        //             }                    
        //         }
        //     });
        // }
        // else{
        //      alert("Login failed - Please enter correct employee_Id and Password")   
        //     } 
        if( employee_Id === "Test" && password === "Test"){
            alert("Login successfully");
            this.props.loginUser();
            return false;
        }
        else{
         alert("Login failed - Please enter correct employee_Id and Password")   
        }
        }
    // fetchData() {
    //     var userEmployee_Id = document.getElementById("emp").value;
    //     var password = document.getElementById("password").value;
    //     if(userEmployee_Id === ""){
    //         alert("Please Enter your Employee Id")
    //         userEmployee_Id.focus()
    //         return false
    //     }
    //     if(password === ""){
    //         alert("Please enter a Password")
    //         password.focus()
    //         return false
    //     }
    //     fetch("../src/components/login/userDetails.json", {
    //         method: "GET",
    //         dataType: "JSON",
    //         headers: {
    //             "Content-Type": "application/json; charset=utf-8",
    //         }
    //     })
    //         .then((resp) => {
    //             return resp.json()
    //         })
    //         .then((data) => {
    //             this.setState({ userEmployee_Id: data.userdetails.employee_Id });
    //         })
    //         .catch((error) => {
    //             console.log(error, "catch the hoop")
    //         })
    // }

    render() {
        return (
            <Col id="login-box" className="login-box visible widget-box no-border">
                <Col className="widget-body">
                    <Col className="widget-main">
                        <h4 className="header blue lighter bigger">
                            <i className="ace-icon fa fa-coffee green"></i>
                            Please Enter Your Information
						</h4>

                        <Col className="space-6"></Col>
                        <Form horizontal onSubmit={this.handleSubmit}>
                            <FormGroup controlId="formHorizontalEmail">
                                <Col sm={12}>
                                <FormControl type="text" placeholder="Employee Id" id="loginEmployee_Id"/>
                                    <FormControl.Feedback>
                                        <Glyphicon glyph="user" style={greyColor}/>
                                    </FormControl.Feedback>
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="formHorizontalPassword">
                                <Col sm={12}>
                                <FormControl type="password" placeholder="Name" id="loginPassword"/>
                                    <FormControl.Feedback>
                                        <Glyphicon glyph="lock" style={greyColor}/>
                                    </FormControl.Feedback>
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="formHorizontalEmail">
                                <Col sm={12}>
                                    <FormControl type="email" placeholder="Email" id="loginEemail"/>
                                    <FormControl.Feedback>
                                        <Glyphicon glyph="envelope" style={greyColor}/>
                                    </FormControl.Feedback>
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col sm={6}>
                                <Checkbox>&nbsp; Remember me &nbsp;</Checkbox>
                                </Col>
                                <Col  sm={6}>
                                <Button type="submit" bsSize="small" block className="btn btn-md btn-primary">Login</Button>
                                <FormControl.Feedback>
                                        <Glyphicon glyph="wrench" style={leftWrench}/>
                                    </FormControl.Feedback>
                                </Col>
                            </FormGroup>
                        </Form>
                        {/* <Form className="Form-width" onSubmit={this.handleSubmit}>
                            <fieldset>
                                <label className="block clearfix">
                                    <span className="block input-icon input-icon-right">
                                        <input name="title"
                                            type="text"
                                            value={this.state.value}
                                            id="emp"
                                            placeholder="Enter course title" required className="form-control" placeholder="Employee Id" />
                                        <i className="ace-icon fa fa-user"></i>
                                    </span>
                                </label>

                                <label className="block clearfix">
                                    <span className="block input-icon input-icon-right">
                                        <input name="title"
                                            type="password"
                                            value={this.state.value}
                                            id="password"
                                            className="form-control" required placeholder="Password" />
                                        <i className="ace-icon fa fa-lock"></i>
                                    </span>
                                </label>

                                <Col className="space"></Col>

                                <Col className="clearfix">
                                    <Label className="inline">
                                        <input type="checkbox" className="ace" />
                                        <span className="lbl"> Remember Me</span>
                                    </Label>

                                    <button type="submit" onClick={this.fetchData} className="width-35 pull-right btn btn-sm btn-primary">
                                        <i className="ace-icon fa fa-key"></i>
                                        <span className="bigger-110">Login</span>
                                    </button>
                                    <h2>
                                        {this.props.userEmployee_Id}
                                    </h2>
                                </Col>

                                <Col className="space-4"></Col>
                            </fieldset>
                        </Form> */}
                        <Col className="space-6"></Col>
                    </Col>

                    <Col className="toolbar clearfix">
                        <Col>
                            <a href="#" data-target="#forgot-box" className="forgot-password-link">
                                <i className="ace-icon fa fa-arrow-left"></i>
                                I forgot my password
							</a>
                        </Col>

                        <Col>
                            <a href="#" data-target="#signup-box" className="user-signup-link">
                                I want to register
							    <i className="ace-icon fa fa-arrow-right"></i>
                            </a>
                        </Col>
                    </Col>
                </Col>
            </Col>
        )
    }
}
export default LoginBox;
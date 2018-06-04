import React from 'react';
import { leftRefresh, leftWrench, whiteColor, greyColor } from '../../Constants/appConstants';
import { Form, Glyphicon, FormGroup, Checkbox, ControlLabel, FormControl, Label, FormText, Col, Button, ButtonToolbar } from 'react-bootstrap'
class ForgotBox extends React.Component {
    render() {
        return (
            <Col id="forgot-box" className="forgot-box widget-box no-border">
                <Col className="widget-body">
                    <Col className="widget-main">
                        <h4 className="header red lighter bigger">
                            <i className="ace-icon fa fa-key"></i>
                            Retrieve Password
						</h4>

                        <Col className="space-6"></Col>
                        <p>
                            Enter your email and to receive instructions
						</p>
                        <Form horizontal>
                            <FormGroup controlId="formHorizontalEmail">
                                <Col sm={12}>
                                    <FormControl type="text" placeholder="Enter your Email" id="forgetEmail" />
                                    <FormControl.Feedback>
                                        <Glyphicon glyph="envelope" style={greyColor} />
                                    </FormControl.Feedback>
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col sm={6}></Col>
                                <Col sm={6}>
                                    <Button type="submit" bsSize="small" block className="btn btn-md btn-danger right">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Send Me!</Button>
                                    <FormControl.Feedback>
                                        <Glyphicon glyph="hand-right" style={leftWrench} />
                                    </FormControl.Feedback>
                                </Col>
                            </FormGroup>
                        </Form>
                        {/* <form>
                            <fieldset>
                                <label className="block clearfix">
                                    <span className="block input-icon input-icon-right">
                                        <input type="email" className="form-control" placeholder="Email" />
                                        <i className="ace-icon fa fa-envelope"></i>
                                    </span>
                                </label>

                                <Col className="clearfix">
                                    <button type="button" className="width-35 pull-right btn btn-sm btn-danger">
                                        <i className="ace-icon fa fa-lightbulb-o"></i>
                                        <span className="bigger-110">Send Me!</span>
                                    </button>
                                </Col>
                            </fieldset>
                        </form> */}
                    </Col>

                    <Col className="toolbar center">
                        <a href="#" data-target="#login-box" className="back-to-login-link">
                            Back to login
							<i className="ace-icon fa fa-arrow-right"></i>
                        </a>
                    </Col>
                </Col>
            </Col>
        )
    }
}
export default ForgotBox;
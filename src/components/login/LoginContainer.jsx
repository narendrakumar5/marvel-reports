import React from 'react';
import LoginHeader from './LoginHeader';
import LoginBox from './LoginBox';
import ForgotBox from './ForgotBox';
import TopHeader from './TopHeader';
import SignUpBox from './SignUpBox';
import { Form, FormGroup, ControlLabel, FormControl, Label, FormText, Col, Button, ButtonToolbar } from 'react-bootstrap'
class LoginContainer extends React.Component {
  render() {
    return (
      <Col className="login-layout">
        <Col className="main-container">
          <Col className="main-content">
            <Col className="row" style={{height: 974}}>
              <Col className="col-sm-10 col-sm-offset-1">
                <Col className="login-container">
                  <LoginHeader />
                  <Col className="space-6"></Col>
                  <Col className="position-relative">
                      <LoginBox/>
                      <ForgotBox/>
                      <SignUpBox/>
                      <TopHeader/>
                    </Col>
                    </Col>
                  </Col>
                </Col>
              </Col>
            </Col>
          </Col>
          );
       }
    }
export default LoginContainer;
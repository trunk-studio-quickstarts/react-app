import React from 'react';
import propTypes from "prop-types";
import  demoLogo from './demoLogo';
import { Input, Row, Col, Button} from 'react-materialize';
import {mainBlue, textLightGray, textGary} from '../../guideLine/color';

const oneColumnsStyle = {
  xl: 12,
  l: 12,
  m: 12,
  s: 12
};


const twoColumnsStyle = {
  xl: 6,
  l: 6,
  m: 6,
  s: 6
};

const fourColumnsStyle = {
  xl: 3,
  l: 3,
  m: 3,
  s: 3
};

const initState = {
  email: '',
  password: '',
  keepLogin: true,
  emailErr: false,
  emailErrMsg: '',
  passwordErr: false,
  passwordErrMsg: ''
};

export default class Login extends React.Component {
  static propTypes = {
    handleLogin: propTypes.func.isRequired,
    user: propTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = initState;
  }

  reset = () => this.setState(initState);

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, keepLogin } = this.state;
    const payload = { email, password, keepLogin };
    this.props.handleLogin(payload);
    this.reset();
  };

  render() {
    return (
      <Row>
        <Col xl={6} l={6} m={6} s={12}>
          <Row {...oneColumnsStyle} style={{marginBottom: '118px', marginTop: '73px'}}>
            <Col {...fourColumnsStyle} />
            <Col {...twoColumnsStyle}>
              <p>Oakary</p>
            </Col>
            <Col {...fourColumnsStyle} />
          </Row>
          <Row>
            <form onSubmit={this.handleSubmit}>
                <Row>
                  <Col {...fourColumnsStyle} />
                  <Col {...twoColumnsStyle}>
                    <Input
                      {...oneColumnsStyle}
                      type="email"
                      name="email"
                      placeholder="您的Email"
                      value={this.state.email}
                      onChange={this.handleInputChange} />
                  </Col>
                  <Col {...fourColumnsStyle} />
                </Row>
                <Row>
                <Col {...fourColumnsStyle} />
                  <Col {...twoColumnsStyle}>
                    <Input
                      {...oneColumnsStyle}
                      type="password"
                      name="password"
                      placeholder="您的密碼"
                      value={this.state.password}
                      onChange={this.handleInputChange} />
                  </Col>
                  <Col {...fourColumnsStyle} />
                </Row>
                <Row>
                  <Col {...twoColumnsStyle}>
                  </Col>
                  <Col {...twoColumnsStyle}>
                  </Col>
                </Row>
                <Row>
                  <Col {...fourColumnsStyle} />
                  <Col {...twoColumnsStyle}>
                    <Button style={{width: '100%', backgroundColor: mainBlue, fontSize: '16px', fontWeight: '500', lineHeight: 1.66, letterSpace: '0.3px'}}>Login</Button>
                  </Col>
                  <Col {...fourColumnsStyle} />
                </Row>
                <Row>
                <Col {...fourColumnsStyle} />
                  <Col {...twoColumnsStyle}>
                    <Button
                      style={{backgroundColor: '#FFFFFF', border: `1px solid ${textLightGray}`, width: '100%', color: mainBlue}}>Create profile</Button>
                  </Col>
                  <Col {...fourColumnsStyle} />
                </Row>
              </form>
          </Row>
          <Row {...oneColumnsStyle} style={{marginTop: '140px', textAlign: 'center', color: textGary}}>
            <Col {...fourColumnsStyle} />
            <Col {...twoColumnsStyle}>
              <p>For any question please concact support @oakary.com</p>
            </Col>
            <Col {...fourColumnsStyle} />
          </Row>
          <Row {...oneColumnsStyle} style={{marginTop: '48px', textAlign: 'center', color: textGary}}>
            <Col {...fourColumnsStyle} />
            <Col {...twoColumnsStyle}>
              <p>2018 Oakary Inc.</p>
            </Col>
            <Col {...fourColumnsStyle} />
          </Row>
        </Col>
        <Col xl={6} l={6} m={6} s={0}>
          <Row>
            <Col>
              <img alt='Logo' src={demoLogo} style={{width: '100%', height: '100%'}}/>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
};

import React from 'react';
import styled from 'styled-components';
import { white, mainBlue } from '../../guideLine/color';

const Nav = styled.nav`
  transition: padding-left .5s;
  background-color: ${white};
  padding-left: ${({isOpen}) => isOpen ? '300px' : '0px'};
`;

const rightIconStyle = {
  color: mainBlue,
  margin: 'auto'
};

const logoStyle = {
  color: mainBlue,
  fontSize: '2rem',
  marginLeft: '12px'
};

const Input = styled.input`
  border-bottom: 1px solid ${mainBlue} !important;
  box-shadow: 0 1px 0 0 ${mainBlue} !important;
  line-height: 1.2rem;
  ::placeholder {
    line-height: 1.2rem;
    font-size: 1rem;
  }
  :focus {
    border-bottom: 1px solid ${mainBlue} !important;
    box-shadow: 0 1px 0 0 ${mainBlue} !important;
  }
`;


const Navbar = ({isOpen, openSidebar, upvote}) =>
  <Nav isOpen={isOpen}>
    <div className="nav-wrapper">
      <ul className='left hide-on-med-and-down'>
        <li>
          <a style={logoStyle} onClick={openSidebar}>New application</a>
        </li>
        <li>
          <div className='input-field'>
            <Input placeholder='Search the application' />
          </div>
        </li>
        <li>
          <a onClick={upvote}>
            <i className="fa fa-search tiny" style={rightIconStyle}/>
          </a>
        </li>
      </ul>
      <ul className="right hide-on-med-and-down">
        <li>
          <a onClick={upvote}>
            <i className="fa fa-bell" style={rightIconStyle}/>
          </a>
        </li>
      </ul>
    </div>
  </Nav>

export default Navbar;

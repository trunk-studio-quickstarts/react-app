import React from 'react';
import styled from 'styled-components';
import FA from 'react-fontawesome';
import { mainBlue, white } from '../../guideLine/color';
import FlexView from 'react-flexview';

const Sidebar = styled(FlexView)`
  transition: margin-left .5s;
  &.open {
    margin-left: 300px;
  }
  &.close {
    margin-left: 0px;
  }
`;

const ListItem = ({icon, text, num = 0}) =>
  <FlexView 
    vAlignContent='center'
    hAlignContent='center'
    style={{fontSize: '16px', color: white, fontWeight: 'normal', height: '54px'}}>
    <FlexView column grow={1} style={{marginLeft: '12%'}}>
      <FA name={icon} />
    </FlexView >
    <FlexView column grow={6}>
      {text} ({num})
    </FlexView >
  </FlexView>

const SidebarMenu = ({isOpen, closeModal}) => {
  const sidebarClasses = isOpen ? ['sidenav', 'open'] : ['sidenav', 'close'];
  return (
    <Sidebar column grow className={sidebarClasses.join(' ')} style={{backgroundColor: mainBlue, color: white}}>
      <FlexView hAlignContent='center' vAlignContent='center' style={{height: '64px', borderBottom: `1px solid ${white}`}}>
        <FlexView column style={{marginLeft: '12%', marginRight: '8%'}}>
          <img
            alt='logo'
            src='http://photo.orsoon.com/180624/EPS-180624_233/yyrr2FgxZV_small.jpg'
            style={{width: '32px', height: '32px', borderRadius: '16px'}}/>
        </FlexView>
        <FlexView column grow={5}>oaKary</FlexView>
        <FlexView column grow={1} onClick={closeModal}>
          <FA name='chevron-left' />
        </FlexView>
      </FlexView>
      <FlexView column grow={8}>
        <ListItem icon='tablet' text='Second Link' num={150} />
        <ListItem icon='user' text='Job Posting' num={40} />
        <ListItem icon='school' text='School' num={60} />
        <ListItem icon='comments' text='Messages' num={0} />
        <ListItem icon='certificate' text='Settings' num={0} />
      </FlexView>
      <FlexView hAlignContent='center' vAlignContent='center'>
        <p style={{fontSize: '18px'}}>oaKary 1.0.0</p>
      </FlexView>
    </Sidebar> 
  );
}

export default SidebarMenu;

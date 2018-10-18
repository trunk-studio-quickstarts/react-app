import React, {Fragment} from 'react';
import SidebarMenu from '../common/SidebarMenu';
import Navbar from '../common/Navbar';
import styled from 'styled-components';

const MainContent = styled.div`
  padding: 16px;
  transition: margin-left .5s;
  margin-left: ${({isOpen}) => isOpen ? '300px' : '0px'};
`;


class MainScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSidebar: false
    };
  }

  upvote = (e) => e.preventDefault();
  
  render() {
    return (
      <Fragment>
        <Navbar
          isOpen={this.state.showSidebar}
          upvote={this.upvote}
          openModal={() => this.setState({showSidebar: true})} />
        <SidebarMenu
          closeModal={() => this.setState({showSidebar: false})}
          isOpen={this.state.showSidebar} />
        <MainContent
          isOpen={this.state.showSidebar}>
          Main Content
        </MainContent>
      </Fragment>
    );
  }
}

export default MainScene;

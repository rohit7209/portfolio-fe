import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MenuBtn from './MenuBtn';

const Container = styled.div`
  width: 100%;
  display: flex;
  position: fixed;
  justify-content: space-between;
  z-index: 1000;
  top: 0px;
  background: ${props => props.scrolled ? 'white' : 'transparent'};
  box-shadow: ${props => props.scrolled ? '2px 0px 5px rgba(0,0,0, 0.4)' : 'none'}; 
`;

class TopMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', (e) => {
      if (window.scrollY > 539) this.setState({ scrolled: true });
      else this.setState({ scrolled: false });
    });
  }

  render() {
    return (
      <Container scrolled={this.state.scrolled} >
        <div />
        <div>
          <MenuBtn scrolled={this.state.scrolled} icon="home" text="HOME" />
          <MenuBtn scrolled={this.state.scrolled} icon="format_quote" text="ABOUT" />
          <MenuBtn scrolled={this.state.scrolled} icon="work" text="SERVICE" />
          <MenuBtn scrolled={this.state.scrolled} icon="image" text="PORTFOLIO" />
          <MenuBtn scrolled={this.state.scrolled} icon="email" text="CONTACT" />
        </div>
      </Container>
    );
  }
}

TopMenu.propTypes = {};

export default TopMenu;

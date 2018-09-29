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
`;

class TopMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <div />
        <div>
          <MenuBtn icon="home" text="HOME" />
          <MenuBtn icon="format_quote" text="ABOUT" />
          <MenuBtn icon="work" text="SERVICE" />
          <MenuBtn icon="image" text="PORTFOLIO" />
          <MenuBtn icon="email" text="CONTACT" />
        </div>
      </Container>
    );
  }
}

TopMenu.propTypes = {};

export default TopMenu;

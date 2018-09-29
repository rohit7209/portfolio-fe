import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import CONSTANTS from './../utils/constants';
import TopMenu from './../containers/TopMenu';

const Background = styled.div`
  position: relative;
  height: 600px;
`;

const Image = styled.div`
  position: absolute;
  z-index: 100;
  height: 100%;
  width: 100%;
  background: url(/assets/images/light-bulb-bg.jpg);
  background-size: 120% auto;
  background-position: 0px -50px;
  // box-shadow: inset 0 0 100px #000000;
`;

const Content = styled.div`
  position: absolute;
  z-index: 200;
  width: 100%;
  height: 100%;
  opacity: 0.85;
  background: black;
`;

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <TopMenu />
        <Background><Image /><Content /></Background>

        <Button variant="contained" color="primary">abcd</Button>
        I am home
        <div style={{ height: '800px', width: '100%' }} />
      </div>
    );
  }
}

HomePage.propTypes = {};

export default HomePage;

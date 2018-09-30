import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import 'particles.js/particles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CONSTANTS from './../utils/constants';
import TopMenu from './../containers/TopMenu';
import Banner from './../containers/Banner';
import AboutMe from './../containers/AboutMe';

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
`;

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    particlesJS.load('particles-js', 'assets/config/particles.json', () => {
      console.log('callback - particles-js config loaded');
    });
  }

  render() {
    return (
      <div style={{ position: 'relative', minHeight: '3000px' }}>
        <Background id="particles-js" />
        <TopMenu />
        <Banner />
        <AboutMe />
      </div>
    );
  }
}

HomePage.propTypes = {};

export default HomePage;

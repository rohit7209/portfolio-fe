import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import FontAwesome from 'react-fontawesome';
import 'particles.js/particles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Head from './../../components/Head';
import Text from './../../components/Text';
import CONSTANTS from './../../utils/constants';

const Container = styled.div`
  width: 100%;
  height: calc(100% - 2px);
  background: rgba(255, 0, 0, 0.4);
  text-align: center;
`;

class Expertise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container style={{ padding: '1px' }}>
        <Head>Here is a little of my story</Head>
        <div style={{ width: '100%', border: '1px solid green', display: 'flex' }}>
          <div style={{ width: '100%', border: '1px solid pink', fontSize: '40px' }}>2005-2009</div>
          <div style={{ width: '200px', border: '1px solid blue' }}>2</div>
          <div style={{ width: '100%', border: '1px solid yellow' }}>3</div>
        </div>
      </Container>
    );
  }
}

Expertise.propTypes = {
  scrollY: PropTypes.number.isRequired,
};

export default Expertise;

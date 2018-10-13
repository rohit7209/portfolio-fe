import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import Icon from '@material-ui/core/Icon';

import CONSTANTS from './../../utils/constants';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: ${CONSTANTS.themes[0].secondary}99;
  display: table;
  color: white;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
`;

const InnerContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  // font-size: 80px;
`;

class SmallScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <InnerContainer>
          {/* <FontAwesome name="mobile" />
          &nbsp;&nbsp;
          <FontAwesome name="desktop" /> */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Icon>redo</Icon><br />
              <Icon style={{ fontSize: '40px' }}>phone_iphone</Icon>
            </div>
            <div>
              <Icon style={{ fontSize: '100px' }}>laptop_mac</Icon>
            </div>
          </div>
          <div style={{ fontSize: '13px' }}>
            Sorry! not supported in small screen yet.
          </div>
        </InnerContainer>
      </Container>
    );
  }
}

SmallScreen.propTypes = {};

export default SmallScreen;

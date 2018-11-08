import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';

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

const Btn = styled(Button) `
  font-size: 10px !important;
  color: white !important;
  background: ${CONSTANTS.themes[0].secondary}20 !important;
  margin: 10px !important;
  // padding: 5px !important;
`;

class SmallScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.setCookie = this.setCookie.bind(this);
  }

  setCookie() {
    console.log('setting cookie');
    const now = new Date();
    let time = now.getTime();
    time += 3600 * 1000;
    now.setTime(time);
    document.cookie = `__show_unsupported_content=true;expires=${now.toUTCString()};path=/`;
    this.props.refresh();
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
          <Btn onClick={this.setCookie}>Still visit</Btn>
        </InnerContainer>
      </Container>
    );
  }
}

SmallScreen.propTypes = {
  refresh: PropTypes.func.isRequired,
};

export default SmallScreen;

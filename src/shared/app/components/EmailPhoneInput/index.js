import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import FontAwesome from 'react-fontawesome';
import Btn from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import CONSTANTS from './../../utils/constants';

const Container = styled.div`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  display: flex;
`;

const Input = styled.input`
  width: 250px;
  padding: 10px;
  font-size: 18px;
  border: 1px solid ${CONSTANTS.themes[0].secondary};
  background: ${CONSTANTS.themes[0].secondary}50;
  color: ${CONSTANTS.themes[0].primary};
  outline: none;
`;

const Button = styled(Btn) `
  padding: 10px;
  font-size: 18px;
  background: ${CONSTANTS.themes[0].secondary}99 !important;
  color: ${CONSTANTS.themes[0].primary}99 !important;
  border: 1px solid ${CONSTANTS.themes[0].secondary} !important;
  border-left: 0px !important;
  border-radius: 0px !important;
  min-width: 100px !important;
`;

class EmailPhoneInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Input type="text" style={{}} />
        <Button><Icon>send</Icon></Button>
      </Container>
    );
  }
}

EmailPhoneInput.propTypes = {};

export default EmailPhoneInput;


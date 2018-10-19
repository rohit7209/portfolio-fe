import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import FontAwesome from 'react-fontawesome';
import Btn from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import CONSTANTS from './../../utils/constants';

import { saveEmail } from './actions';

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
    this.state = {
      text: '',
    };
  }

  componentWillMount() {
    this.props.saveEmail();
  }

  componentWillReceiveProps(nextProps) {
    console.log('next:', nextProps);
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

const mapStateToProps = state => ({
  store: state.saveEmailReducer,
  state,
});

export default connect(mapStateToProps, { saveEmail })(EmailPhoneInput);

// export default (HomePage);

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Btn from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
// import { NotificationContainer, NotificationManager } from 'react-notifications';
import CONSTANTS from './../../utils/constants';

import { saveEmail, reset } from './actions';

const Container = styled.div`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  & .notification {
    background: white;
    color: ${CONSTANTS.themes[0].secondary};
    opacity: 1;
  }
`;

const Input = styled.input`
  width: 250px;
  padding: 10px;
  font-size: 18px;
  border: 1px solid ${CONSTANTS.themes[0].secondary};
  background: ${CONSTANTS.themes[0].secondary}50;
  color: ${CONSTANTS.themes[0].primary}99;
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

const Error = styled.div`
  color: ${CONSTANTS.themes[0].primary}99;
  font-size: 12px;
  // text-align: center;
  padding: 3px;
`;

class EmailPhoneInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      error: '',
    };
    this.updateEmail = this.updateEmail.bind(this);
    this.saveEmail = this.saveEmail.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log('next::', nextProps);
    if (nextProps.store !== this.props.store && nextProps.store.completed) {
      // NotificationManager.info('Email saved successfully', '', 5000);
      this.setState({ email: '', error: '' });
      this.props.reset();
    }
  }

  updateEmail(e) {
    let error = '';
    const email = e.target.value;
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email && !re.test(email)) error = 'Invalid email';
    this.setState({
      email,
      error,
    });
  }

  saveEmail() {
    if (this.state.email && !this.state.error) this.props.saveEmail({ email: this.state.email });
  }

  render() {
    return (
      <Container>
        <div style={{ display: 'flex' }}>
          <Input type="text" value={this.state.email} onChange={this.updateEmail} />
          <Button onClick={this.saveEmail}>{(this.props.store.requesting) ? <Icon className="fa fa-circle-o-notch fa-spin" style={{ fontSize: '13px' }} /> : <Icon>send</Icon>}</Button>
        </div>
        <Error>{this.state.error}</Error>
        {/* <NotificationContainer style={{ color: 'red', background: 'green' }} /> */}
      </Container>
    );
  }
}

EmailPhoneInput.propTypes = {
  saveEmail: PropTypes.func.isRequired,
  store: PropTypes.object.isRequired,
  reset: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  store: state.saveEmailReducer,
});

const mapDispatchToProps = dispatch => ({
  saveEmail: payload => dispatch(saveEmail(payload)),
  reset: payload => dispatch(reset(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EmailPhoneInput);

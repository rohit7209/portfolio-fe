import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import FontAwesome from 'react-fontawesome';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Head from './../../components/Head';
import Text from './../../components/Text';
import CONSTANTS from './../../utils/constants';

const Container = styled.div`
  width: 100%;
  height: calc(100% - 40px);
  padding: 20px 0px;
  text-align: center;
`;

const RatingBar = (props) => {
  return (
    <div style={{ textAlign: props.align, padding: '15px' }}>
      {/* <Text>Web Design</Text> */}
      <Typography variant="caption" gutterBottom align={props.align}>{props.text}</Typography>
      <div style={{ height: '13px', width: '100%', background: `${CONSTANTS.themes[0].secondary}10` }}>
        <div style={{ height: '13px', width: props.percent, background: `${CONSTANTS.themes[0].secondary}`, float: props.align }} />
      </div>
    </div>
  );
};

RatingBar.propTypes = {};

class Technologies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const opacity = 1 - (2 * (this.props.marginTop / 1000));
    return (
      <Container>
        <Head>HOW I RATE MY SKILLS</Head>
        <div style={{ display: 'flex', marginTop: '80px', opacity }}>
          <div style={{ width: '50%', padding: '10px' }}>
            <RatingBar align="right" text="JavaScript" percent="85%" />
            <RatingBar align="right" text="ReactJS" percent="80%" />
            <RatingBar align="right" text="MySQL" percent="60%" />
            <RatingBar align="right" text="Python" percent="55%" />
            <RatingBar align="right" text="PHP" percent="45%" />
          </div>
          <div style={{ width: '50%', padding: '10px' }}>
            <RatingBar align="left" text="Design Thinking" percent="90%" />
            <RatingBar align="left" text="Problem Solving" percent="85%" />
            <RatingBar align="left" text="Adaptability" percent="75%" />
            <RatingBar align="left" text="Team Player" percent="70%" />
            <RatingBar align="left" text="Dummy Field" percent="60%" />
          </div>
        </div>
      </Container>
    );
  }
}

Technologies.propTypes = {
  scrollY: PropTypes.number.isRequired,
};

export default Technologies;

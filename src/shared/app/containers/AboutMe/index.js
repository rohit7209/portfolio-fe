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
  text-align: center;
  padding: 5px;
  z-index: 3000;
`;

const anim = keyframes`
  from {background: transparent; color: ${CONSTANTS.themes[0].secondary};}
  to {background: ${CONSTANTS.themes[0].secondary}; color: ${CONSTANTS.themes[0].primary};}
`;

const BtnContainer = styled.div`
  margin: auto;
  width: 100%;
  max-width: 320px;
  display: flex; 
  justify-content: space-between;
  text-align: center;
  &>a{
    width:16%;
  }
`;

const Btn = styled.li`
  padding: 15px;
  color: ${CONSTANTS.themes[0].secondary};
  list-style-type: none;
  &:hover{
    cursor: pointer;
    color: ${CONSTANTS.themes[0].primary};
    background: ${CONSTANTS.themes[0].secondary};
    animation: ${() => anim} 0.5s ease-in-out;
  }
`;


class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Head>A LITTLE ABOUT ME</Head>
        <Text style={{ maxWidth: '1000px' }}>
          I am an enthusiastic software developer and loves getting hands dirty in bytes & pixels,
          experienced in building web and desktop applications. I consider myself as more of front-end developer and little full-stack too.
          I love spending my leisure time in trying my hands on different recipes, checking out netflix and ofcourse reading books.
        </Text>
        <BtnContainer>
          <a href="https://www.linkedin.com/in/rohit7209" target="_blank">
            <Btn><FontAwesome name="linkedin" /></Btn>
          </a>
          <a href="https://github.com/rohit7209" target="_blank">
            <Btn><FontAwesome name="github" /></Btn>
          </a>
          <a href="http://rohitsharma.xyz/" target="_blank">
            <Btn><FontAwesome name="globe" /></Btn>
          </a>
          <a href="https://api.whatsapp.com/send?phone=917278518017" target="_blank">
            <Btn><FontAwesome name="whatsapp" /></Btn>
          </a>
          <a href="mailto:rohitsharma7209@gmail.com" target="_blank">
            <Btn><FontAwesome name="envelope" /></Btn>
          </a>
        </BtnContainer>
      </Container>
    );
  }
}

AboutMe.propTypes = {};

export default AboutMe;

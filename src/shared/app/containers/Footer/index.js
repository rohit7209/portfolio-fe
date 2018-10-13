import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import FontAwesome from 'react-fontawesome';
// import 'particles.js/particles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Head from './../../components/Head';
import Text from './../../components/Text';
import EmailPhoneInput from './../../components/EmailPhoneInput';
import CONSTANTS from './../../utils/constants';

const Container = styled.div`
  background: rgba(0,0,0,0.85);
  padding: 50px 20px;
  color: ${CONSTANTS.themes[0].primary}99;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 300;
`;

const BlackStrip = styled.div`
  background: ${CONSTANTS.themes[0].secondary};
  height: 35px;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
`;

const anim = keyframes`
  from {background: transparent; color: ${CONSTANTS.themes[0].primary}99;}
  to {background: ${CONSTANTS.themes[0].secondary}; color: white;}
`;

const BtnContainer = styled.div`
  display: flex;
  text-align: left;
  // &>a{
  //   width:16%;
  // }
`;

const Btn = styled.li`
  padding: 15px;
  color: ${CONSTANTS.themes[0].primary}99;
  list-style-type: none;
  text-align: center;
  font-size: 20px;
  &:hover{
    cursor: pointer;
    color: white;
    background: ${CONSTANTS.themes[0].secondary};
    animation: ${() => anim} 0.5s ease-in-out;
  }
`;

const FirstCol = styled.div`
  width: calc(30% - 0px);
  // border: 1px solid red;
`;
const SecondCol = styled.div`
  width: calc(40% - 0px);
  // border: 1px solid green;
  display: table;
  min-height: 170px;
  text-align: center;
`;
const ThirdCol = styled.div`
  width: calc(30% - 0px);
  // border: 1px solid yellow;
  & a{
    text-decoration: none;
  }
`;

const Link = styled.div`
  border-radius: 0px;
  color: ${CONSTANTS.themes[0].primary}99;
  padding: 5px 0px;
  font-size: 15px ;
  &>span{
    font-size: 10px;
  }
`;

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.scrollY);

    const scrollY = this.props.scrollY;

    let top = 0;
    if (scrollY > 4500) {
      top = (4500 - scrollY) / 2 + 30;
      if (top < -120) top = -120;
    }

    return (
      <Container style={{ marginTop: `${top}px` }}>
        <BlackStrip />
        <FirstCol>
          <div>STAY CONNECTED</div>
          <div style={{ padding: '10px 0px' }}>Leave your email/phone here, I will get back to you.</div>
          <EmailPhoneInput />
          <BtnContainer style={{ marginTop: '5px' }}>
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
        </FirstCol>
        <SecondCol>
          <div style={{ display: 'table-cell', verticalAlign: 'middle' }}>
            <Button style={{
              padding: '15px',
              minWidth: '200px',
              borderRadius: '0px',
              background: CONSTANTS.themes[0].secondary,
              color: `${CONSTANTS.themes[0].primary}99`,
            }}>Want to hire me ?</Button>
          </div>
        </SecondCol>
        <ThirdCol >
          <div style={{ paddingLeft: '200px' }}>
            NAVIGATE
            <a href="#"><Link>Home <FontAwesome name="angle-double-right" /></Link></a>
            <a href="#"><Link>Services <FontAwesome name="angle-double-right" /></Link></a>
            <a href="#"><Link>Contact <FontAwesome name="angle-double-right" /></Link></a>
            <a href="#"><Link>Hire Me <FontAwesome name="angle-double-right" /></Link></a>
            <a href="#"><Link>Fund me <FontAwesome name="angle-double-right" /></Link></a>
          </div>
        </ThirdCol>
        <div style={{ height: '1px', width: '100%', background: CONSTANTS.themes[0].secondary, margin: '5px auto' }} />
        <div style={{ textAlign: 'center', fontSize: '13px', width: '100%' }}>&copy; 2018 All rights reserved. Designed and developed by Rohit Sharma.</div>
      </Container>
    );
  }
}

Footer.propTypes = {
  scrollY: PropTypes.number.isRequired,
};

export default Footer;

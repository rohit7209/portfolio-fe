import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import FontAwesome from 'react-fontawesome';
// import Icon from '@material-ui/core/Icon';
import Head from './../../components/Head';
import Text from './../../components/Text';
import CONSTANTS from './../../utils/constants';


const anim = keyframes`
  from{
    background: ${CONSTANTS.themes[0].secondary}05;
    color: ${CONSTANTS.themes[0].secondary};
  }
  to{
    background: ${CONSTANTS.themes[0].secondary};
    color: ${CONSTANTS.themes[0].primary};
  }
`;
const animOnlyColor = keyframes`
  from{
    color: ${CONSTANTS.themes[0].secondary};
  }
  to{
    color: ${CONSTANTS.themes[0].primary};
  }
`;

const Container = styled.div`
  width: 100%;
  height: calc(100% - 40px);
  padding: 20px 0px;
  text-align: center;
`;

const CardHolder = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  margin: 20px 0px;
  justify-content: space-around;
`;

const Card = styled.div`
  width: 250px;
  text-align: center;
  height: auto;
  padding: 50px 30px;
  &>p{
    text-align: justify;
  }
  &:hover{
    & span{
      background: ${CONSTANTS.themes[0].secondary};
      color: ${CONSTANTS.themes[0].primary};
      animation: ${() => anim} 0.7s ease-out;
    }
    & h2, & p{
      color: ${CONSTANTS.themes[0].primary};
      animation: ${() => animOnlyColor} 0.7s ease-out;
    }
    background: ${CONSTANTS.themes[0].secondary};
    color: ${CONSTANTS.themes[0].primary};
    animation: ${() => anim} 0.7s ease-out;
  }
`;

const IconLg = styled.div`
  &, & span{
    width: 180px;
    height: 180px;
    background: ${CONSTANTS.themes[0].secondary}05;
    color: ${CONSTANTS.themes[0].secondary};
    border-radius: 300px;
    margin: auto;
    line-height: 180px;
    font-size: 100px;
  }
`;

class Expertise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const scale = (this.props.scrollY / 1000) * 2 - 0.265;
    return (
      <Container>
        <Head>MY EXPERTISE</Head>
        <Text>I've got chops in all the phases of software developement process.</Text>
        <CardHolder>
          <Card style={{ transform: `scale(${scale > 1 ? 1 : scale})` }}>
            <IconLg><FontAwesome name="lightbulb-o" /></IconLg>
            <Head>IDEAS</Head>
            <Text>I collaborate to nurture and transform ideas into reality. I wireframe interfaces focusing on content structure, intuitive UI patterns and simple interactions.</Text>
          </Card>
          <Card style={{ transform: `scale(${scale > 1 ? 1 : scale})` }}>
            <IconLg><FontAwesome name="settings" /></IconLg>
            <Head>ARCHITECT</Head>
            <Text>I design solutions and find the efficient way to achieve the optimal as much as possible. I'm a minimalist who truly believes in less is more.</Text>
          </Card>
          <Card style={{ transform: `scale(${scale > 1 ? 1 : scale})` }}>
            <IconLg><FontAwesome name="code" /></IconLg>
            <Head>CODE</Head>
            <Text>I love building from scratch, but I also don't believe in re-inventing the wheel, I use frameworks and love to do amazing things with amazing frameworks :)</Text>
          </Card>
        </CardHolder>
      </Container>
    );
  }
}

Expertise.propTypes = {
  scrollY: PropTypes.number.isRequired,
};

export default Expertise;

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

const CardHolder = styled.div`
  width: 100%;
  height: 500px;
  background: blue;
  display: flex;
  margin: 20px 0px;
  justify-content: space-around;
`;

const Card = styled.div`
  width: 300px;
  background: green;
  text-align: center;
  padding: 50px 10px;
`;

const IconLg = styled.div`
  width: 180px;
  height: 180px;
  background: yellow;
  border-radius: 300px;
  margin: auto;
`;

class Expertise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container style={{ padding: '1px' }}>
        <Head>MY EXPERTISE</Head>
        <Text>I've got chops in all the phases of software developement process.</Text>
        <CardHolder>
          <Card style={{ transform: `scale(${(this.props.scrollY / 1000) + 0.365})` }}>
            <IconLg />
            <Head>IDEAS</Head>
            <Text>I collaborate with peers to nurture and transform ideas into well thought out software specs, as well I sketch and wireframe interfaces also focusing on content structure, intuitive UI patterns and simple interactions.</Text>
          </Card>
          <Card>
            <IconLg />
            <Head>ARCHITECT</Head>
            <Text>I design the solution to meet the requirement and finds the efficient way to achieve the optimal output as much as possible. I'm a minimalist who truly believes that less is more.</Text>
          </Card>
          <Card>
            <IconLg />
            <Head>CODE</Head>
            <Text>I love coding things from scratch, but I also don't believe in re-inventing the wheel everytime, I use frameworks and love to do amazing things with amazing frameworks :)</Text>
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

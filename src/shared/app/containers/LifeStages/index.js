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
import CONSTANTS from './../../utils/constants';


const Devider = styled.div`
  width: 1px;
  height: 40px;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  background: ${CONSTANTS.themes[0].secondary};
`;

const Container = styled.div`
  width: 100%;
  height: calc(100% - 2px);
  text-align: center;
`;

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  color: ${CONSTANTS.themes[0].secondary};
`;

const Column = styled.div`
  width: calc(50% - 75px);
  padding: 5px;
  padding-right: ${props => props.left ? '5px' : '30px'};
  padding-left: ${props => props.left ? '30px' : '5px'};
  text-align: ${props => props.left ? 'left' : 'right'};
`;

const CenterContainer = styled.div`
  width: 80px;
  height: 80px;
  line-height: 80px;
  font-size: 30px;
  background: ${CONSTANTS.themes[0].secondary};
  color: ${CONSTANTS.themes[0].primary};
  border-radius: 100px;
  text-align: center;
  transform: scale(${props => (props.pop) ? 1.5 : 1});
  transition: all 0.4s cubic-bezier(0.740, 0.440, 0.080, 1.455);
  &:hover{
    transform: scale(1.5);
    transition: all 0.4s cubic-bezier(0.740, 0.440, 0.080, 1.455); // cubic-bezier(1.000, 0.160, 0.080, 1.455);
  }
`;

const Date = styled.div`
  font-size: 40px;
  font-weight: 200;
  padding-top:10px;
`;

const DateInfo = styled.div`
  font-size: 20px;
  font-weight: 300;
`;

const Desc = styled.div`
  padding-top: 5px;
  font-weight: 300;
  font-size: 15px;
  line-height: 25px;
  vertical-align: middle;
  display: table-cell;
`;


const LifeStage = (props) => {
  const contentArray = [
    <Column left={!props.left}>
      <Date>{props.date}</Date>
      <DateInfo>{props.dateInfo}</DateInfo>
    </Column>,
    <CenterContainer pop={props.pop}>
      <FontAwesome name={props.icon} />
    </CenterContainer>,
    <Column left={props.left} style={{ display: 'table', minHeight: '60px' }}><Desc>{props.text}</Desc></Column>,
  ];
  return (
    <InfoContainer>
      {(props.left) ? contentArray : contentArray.reverse()}
    </InfoContainer>
  );
};

LifeStage.propTypes = {
  date: PropTypes.string.isRequired,
  dateInfo: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  left: PropTypes.bool.isRequired,
};


class Journey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const scrollY = this.props.scrollY;
    let scale = 1;
    let top = 'unset';
    if (scrollY > 4500) {
      scale = 1 - ((scrollY - 4500) / 1000);
      top = (4500 - scrollY) / 3;
      if (scale < 0.6) {
        scale = 0.6;
        top = -133;
      }
    }
    // console.log('yy:', scale, top);// 2595 3340 3500
    // let pop = false;
    // if (scrollY > 3800) pop = true;
    // console.log('s:', scrollY, scale, top);
    return (
      <Container style={{ padding: '1px', transform: `scale(${scale})`, marginTop: `${top}px`, width: '90%', margin: 'auto' }}>
        <Head>Here is a little of my story</Head>
        <LifeStage
          pop={scrollY > 2900 && scrollY < 3200}
          left
          icon="trophy"
          date="July 2013"
          // dateInfo="Junior Designer at Black Rock Interactive Agency"
          text="All started with my graduation School Asansol Engineering College."
        />
        <Devider />
        <LifeStage
          pop={scrollY > 3200 && scrollY < 3500}
          right
          icon="code"
          date="Mar 2015"
          // dateInfo="Baby Developer"
          text="Not exactly but near to March only, the developer within me started blooming. I developed some hobby projects like e-SAM, MediCellar, DigiSched etc. Why don't you google these? :)"
        />
        <Devider />
        <LifeStage
          pop={scrollY > 3500 && scrollY < 3800}
          left
          icon="users"
          date="Jan 2016"
          // dateInfo="Web-development freelance"
          text="Its not a bad idea to use your spare time and earn some money, isn't it? I started freelancing in web-development, some of my clients: Vananchal Fabricators, 3Hitler, Vinayaka exports, RR industries etc."
        />
        <Devider />
        <LifeStage
          pop={scrollY > 3800 && scrollY < 4100}
          right
          icon="briefcase"
          date="Feb 2017"
          // dateInfo="Fullstack Developer"
          text="I got an opportunity to blend my technical knowledge with professional experiences in e-Cube Energy pvt ltd. I worked there as fullstack developer."
        />
        <Devider />
        <LifeStage
          pop={scrollY > 4100 && scrollY < 4400}
          left
          icon="industry"
          date="Mar 2018"
          // dateInfo="JS Fullstack Engineer"
          text="And now I am at Mindtree ltd., I joined as Fullstack Webtech Engineer. :)"
        />
      </Container>
    );
  }
}

Journey.propTypes = {
  scrollY: PropTypes.number.isRequired,
};

export default Journey;

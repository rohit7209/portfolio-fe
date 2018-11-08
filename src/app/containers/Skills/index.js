import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
// import FontAwesome from 'react-fontawesome';
// import 'particles.js/particles';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import Icon from '@material-ui/core/Icon';
// import Head from './../../components/Head';
// import Text from './../../components/Text';
import CONSTANTS from './../../utils/constants';

import Expertise from './Expertise';
import Technologies from './Technologies';

const Container = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Padder = styled.div`
  padding: 40px;
  width: 2800px;
  height: calc(100% - 80px);
  position: relative;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 2800px;
  display: flex;
  position: relative;
  box-shadow: 0px 0px 25px ${CONSTANTS.themes[0].secondary}30;
`;

const Content = styled.div`
  height: 100%;
  width: 1100px;
  background: white;
`;

const Tri = styled.div`
  height: 0px;
  width: 0px;
  border-top: ${props => props.right ? `calc(100vh - 141px) solid ${CONSTANTS.themes[0].secondary}99` : 'none'};
  border-left: ${props => props.right ? 'none' : '140px solid white'};
  border-right: ${props => props.right ? '140px solid white' : 'none'};
  border-bottom: ${props => props.right ? 'none' : `calc(100vh - 141px) solid ${CONSTANTS.themes[0].secondary}99`};
`;

const TriBack = styled.div`
  height: 0px;
  width: 0px;
  border-top: ${props => props.right ? `calc(100vh - 61px) solid ${CONSTANTS.themes[0].secondary}` : 'none'};
  border-left: ${props => props.right ? 'none' : '155px solid transparent'};
  border-right: ${props => props.right ? '155px solid transparent' : 'none'};
  border-bottom: ${props => props.right ? 'none' : `calc(100vh - 61px) solid ${CONSTANTS.themes[0].secondary}`};
`;

const TriContainer = styled.div`
  background: url(https://s3-eu-west-1.amazonaws.com/cjp-rbi-nrs-inc/wp-content/uploads/2018/02/07053545/masthead-image_NRS-2400px-wide-2x.jpg); 
  // url(http://www.sheenservices.com/uae/wp-content/uploads/2018/02/pexels-photo-459654.jpg); 
  // https://accinfosys.com/wp-content/uploads/2017/07/professional-background-check-1140x855.jpeg
  background-size: auto 100%;
  background-attachment: fixed;
  background-position: 300px 0px;
`;

class Skills extends React.Component {
  /** play time 764px to 2880px approx */
  constructor(props) {
    super(props);
    this.state = {
      marginLeft: 0,
      marginTop: 0,
    };
  }

  componentWillMount() {
    // console.log(this.props);
  }

  componentWillReceiveProps(nextProps) {
    let marginLeft = 0;
    let marginTop = 0;
    if (nextProps.scrollY > 765) {
      const maxMarginLeft = this.padder.offsetWidth - window.innerWidth;
      const maxMarginTop = this.container.offsetHeight;
      marginLeft = nextProps.scrollY - 765;
      if (marginLeft > maxMarginLeft) {
        marginTop = marginLeft - maxMarginLeft; // nextProps.scrollY - 2235;
        marginLeft = maxMarginLeft;
        if (marginTop > maxMarginTop) marginTop = maxMarginTop;
      }
    }
    this.setState({ marginLeft, marginTop });
  }

  render() {
    return (
      <Container innerRef={(node) => { this.container = node; }} style={{ marginTop: `-${this.state.marginTop}px` }}>
        <Padder innerRef={(node) => { this.padder = node; }} style={{ marginLeft: `-${this.state.marginLeft}px` }}>
          <div style={{ display: 'flex', position: 'absolute', top: '0px', left: '1100px', background: 'none', zIndex: '0' }}>
            <TriBack left />
            <div style={{ height: 'calc(100vh - 61px)', width: '350px', background: `${CONSTANTS.themes[0].secondary}` }} />
            <TriBack right />
          </div>
          <Wrapper>
            <Content>
              <Expertise scrollY={this.props.scrollY} />
            </Content>
            <TriContainer style={{ display: 'flex' }}>
              <Tri left />
              <div style={{ height: '100%', width: '300px', background: `${CONSTANTS.themes[0].secondary}99` }} />
              <Tri right />
            </TriContainer>
            <Content>
              <Technologies scrollY={this.props.scrollY} marginTop={this.state.marginTop} />
            </Content>
          </Wrapper>
        </Padder>
      </Container>
    );
  }
}

Skills.propTypes = {
  scrollY: PropTypes.number.isRequired,
};

export default Skills;

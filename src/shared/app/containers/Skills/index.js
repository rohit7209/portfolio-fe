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
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 2800px;
  display: flex;
  box-shadow: 0px 0px 25px ${CONSTANTS.themes[0].secondary}30;
`;

const Tri = styled.div`
  height: 0px;
  width: 0px;
  border-top: ${props => props.right ? `calc(100vh - 140px) solid ${CONSTANTS.themes[0].secondary}99` : 'none'};
  border-left: ${props => props.right ? 'none' : '140px solid white'};
  border-right: ${props => props.right ? '150px solid white' : 'none'};
  border-bottom: ${props => props.right ? 'none' : `calc(100vh - 140px) solid ${CONSTANTS.themes[0].secondary}99`};
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
  /** play time 764px to 1500px */
  constructor(props) {
    super(props);
    this.state = {};
    this.getLeftMargin = this.getLeftMargin.bind(this);
  }
  /**
   * 765 = 0
   * 1500 = 1400
   */

  componentWillMount() {
    console.log(this.props);
  }

  getLeftMargin() {
    if (this.props.scrollY > 765) {
      const margin = this.props.scrollY - 765;
      const maxMargin = this.padder.offsetWidth - window.innerWidth;
      if (margin < maxMargin) return margin;
      return maxMargin;
    }
    return 0;
  }

  render() {
    return (
      <Container style={{ overflow: 'scroll' }}>
        <div ref={(node) => { this.padder = node; }} style={{ padding: '40px', width: '2800px', height: 'calc(100% - 80px)', marginLeft: `-${this.getLeftMargin()}px` }}>
          <Wrapper>
            <div style={{ height: '100%', width: '1100px', background: 'white' }}>a</div>
            <TriContainer style={{ display: 'flex' }}>
              <Tri left />
              <div style={{ height: '100%', width: '300px', background: `${CONSTANTS.themes[0].secondary}99` }}>b</div>
              <Tri right />
            </TriContainer>
            <div style={{ height: '100%', width: '1110px', background: 'white' }}>c</div>
          </Wrapper>
        </div>
      </Container>
    );
  }
}

Skills.propTypes = {
  scrollY: PropTypes.number.isRequired,
};

export default Skills;

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import 'particles.js/particles';
import Typography from '@material-ui/core/Typography';

import TopMenu from './../containers/TopMenu';
import Banner from './../containers/Banner';
import AboutMe from './../containers/AboutMe';
import Skills from './../containers/Skills';
import Expertise from './../containers/Expertise';

import { updateScrollY } from './actions';

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: -1;
`;


const ContentContainer = styled.div`
  width: 100%;
  position: ${props => props.fixed ? 'fixed' : 'relative'};
  top: ${props => props.fixed ? '60px' : 'unset'};
  height: calc(100vh - 61px);
`;

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: 0,
    };
    this.handleScrollEvent = this.handleScrollEvent.bind(this);
  }

  componentDidMount() {
    particlesJS.load('particles-js', 'assets/config/particles.json', () => {
      console.log('callback - particles-js config loaded');
      // window.scrollTo(0, 0);
    });
    window.addEventListener('scroll', this.handleScrollEvent);
  }

  componentWillReceiveProps(nextProps) {
    // console.log('n', nextProps);
  }

  handleScrollEvent(e) {
    this.setState({ scrollY: window.scrollY });
    this.props.updateScrollY(window.scrollY);
    // console.log(window.scrollY);
  }

  render() {
    // console.log(this.props);
    return (
      <div style={{ position: 'relative', minHeight: '6000px' }}>
        <Background id="particles-js" />
        <TopMenu />
        <Banner />
        <AboutMe />
        <ContentContainer fixed={this.state.scrollY > 764}>
          <Skills scrollY={this.state.scrollY} />
          <Expertise />
        </ContentContainer>
      </div>
    );
  }
}

HomePage.propTypes = {};

const mapStateToProps = state => ({
  store: state,
});

const mapDispatchToProps = dispatch => ({
  updateScrollY: payload => dispatch(updateScrollY(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

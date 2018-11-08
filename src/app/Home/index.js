import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
// import 'particles.js/particles';
// import Typography from '@material-ui/core/Typography';

import TopMenu from './../containers/TopMenu';
import Banner from './../containers/Banner';
import AboutMe from './../containers/AboutMe';
import Skills from './../containers/Skills';
import LifeStages from './../containers/LifeStages';
// import Footer from './../containers/Footer';
import SmallScreen from './../containers/SmallScreen';

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
      windowWidth: 0,
    };
    this.handleScrollEvent = this.handleScrollEvent.bind(this);
    this.handleResizeEvent = this.handleResizeEvent.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  componentDidMount() {
    // particlesJS.load('particles-js', 'http://rohitsharma.xyz/assets/config/particles.json', () => { });
    this.setState({ windowWidth: window.innerWidth });
    window.addEventListener('scroll', this.handleScrollEvent);
    window.addEventListener('resize', this.handleResizeEvent);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrollEvent);
    window.removeEventListener('resize', this.handleResizeEvent);
  }

  handleResizeEvent(e) {
    this.setState({ windowWidth: e.target.innerWidth });
  }

  handleScrollEvent(e) {
    this.setState({ scrollY: window.scrollY });
    this.props.updateScrollY(window.scrollY);
    // console.log(window.scrollY);
  }

  refresh() {
    this.setState({ refresh: !this.state.refresh });
  }

  render() {
    // console.log(this.props);
    // console.log('state:', this.state);
    // console.log(document.cookie, document.cookie.includes('__show_unsupported_content=true'));

    return (this.state.windowWidth === 0 || this.state.windowWidth > 1023 || document.cookie.includes('__show_unsupported_content=true')) ?
      <div style={{ position: 'relative', minHeight: '6100px' }}>
        <Background id="particles-js" />
        <TopMenu transparent />
        <Banner />
        <Link to="/signin" >Signin</Link>
        <AboutMe />
        <ContentContainer fixed={this.state.scrollY > 764}>
          <Skills scrollY={this.state.scrollY} />
          <LifeStages scrollY={this.state.scrollY} />
          {/* <Footer scrollY={this.state.scrollY} /> */}
          abcd
        </ContentContainer>
      </div>
      :
      <SmallScreen refresh={this.refresh} />;
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

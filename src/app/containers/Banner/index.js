import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import { withStyles } from '@material-ui/core/styles';
import CONSTANTS from './../../utils/constants';

const styles = {
  name: {
    color: CONSTANTS.themes[0].primary,
    fontWeight: '100',
    fontSize: '40px',
    left: '100px',
    position: 'absolute',
  },
  btn: {
    fontWeight: '100',
    letterSpacing: '1px',
    background: 'rgba(255, 255, 255, 0.1)',
    padding: '20px',
    borderRadius: '0px',
    color: CONSTANTS.themes[0].primary,
    top: '480px',
    position: 'absolute',
    left: '100px',
    textTransform: 'unset',
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.2)',
    },
  },
};


const Container = styled.div`
  position: relative;
  height: 600px;
`;

const Image = styled.div`
  position: absolute;
  z-index: 100;
  height: 100%;
  width: 100%;
  background: url(http://rohitsharma.xyz/assets/images/light-bulb-bg.jpg); // url(/assets/images/light-bulb-bg.jpg);
  background-size: 120% auto;
  background-position: 0px -50px;
  background-attachment: fixed;
  background-repeat: no-repeat;
  // background-size: cover;
`;

const Content = styled.div`
  position: absolute;
  z-index: 200;
  width: 100%;
  height: 100%;
  opacity: 0.85;
  background: ${CONSTANTS.themes[0].secondary};
  color: white;
`;

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: 0,
    };
    this.handleScrollEvent = this.handleScrollEvent.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScrollEvent);
  }

  handleScrollEvent(e) {
    this.setState({
      scrollY: window.scrollY,
    });
    // if (window.scrollY > 539) this.setState({ scrolled: true });
    // else this.setState({ scrolled: false });
  }

  render() {
    return (
      <Container>
        <Image />
        <Content >
          <p style={{ ...styles.name, top: '340px', opacity: (1 - (this.state.scrollY / 400)) }}>
            Hello, I'm Rohit Sharma.
          </p>
          <p style={{ ...styles.name, top: '400px', opacity: (1 - (this.state.scrollY / 400)) }}>
            I can help you in creating awesome apps.
          </p>
          <button style={{...styles.btn}}>why don't you say hi?</button>
        </Content>
      </Container>
    );
  }
}

Banner.propTypes = {
};

export default Banner;

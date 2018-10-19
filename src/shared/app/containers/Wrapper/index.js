import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TopMenu from './../TopMenu';
import Footer from './../Footer';

const Container = styled.div`
  position: relative;
  padding-top: 60px;
`;

const Wrapper = props => (<Container>
  <TopMenu />
  {props.children}
  <Footer />
</Container>);

Wrapper.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Wrapper;

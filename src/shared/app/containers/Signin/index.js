import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Wrapper from '../Wrapper';

const Container = styled.div`
  background: red;
  padding: 20px;
  min-height: 600px;

`;

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Wrapper>
        <Container>

          <Grid container spacing={20} style={{ border: '1px solid green' }}>
            <Grid item xs={6} style={{ border: '1px solid blue' }}>
              abcd
            </Grid>
            <Grid item xs={6} style={{ border: '1px solid blue' }}>
              abcd
            </Grid>
          </Grid>

        </Container>
      </Wrapper>
    );
  }
}

Signin.propTypes = {};

export default Signin;

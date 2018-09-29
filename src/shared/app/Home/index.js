import React from 'react';
import PropTypes from 'prop-types';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>I am home</div>
    );
  }
}

HomePage.propTypes = {};

export default HomePage;

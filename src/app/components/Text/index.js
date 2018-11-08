import React from 'react';
import PropTypes from 'prop-types';
// import Typography from '@material-ui/core/Typography';
// import { withStyles } from '@material-ui/core/styles';
import CONSTANTS from './../../utils/constants';

const styles = {
  text: {
    // fontWeight: '600',
    color: `${CONSTANTS.themes[0].tertiary}95`,
    margin: '5px auto',
    lineHeight: '25px',
    fontSize: '16px',
  },
};

const Text = props => (<p
  variant="body1"
  gutterBottom
  className={`${props.className}`}
  style={{ ...styles.text, ...props.style }}
>
  {props.children}
</p>);

Text.propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
};

Text.defaultProps = {
  style: {},
  className: '',
};

export default (Text);

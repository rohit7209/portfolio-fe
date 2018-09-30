import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
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

const Text = props => (<Typography
  variant="body1"
  gutterBottom
  className={`${props.classes.text} ${props.className}`}
  style={{ ...props.style }}
>
  {props.children}
</Typography>);

Text.propTypes = {
  children: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
};

Text.defaultProps = {
  style: {},
  className: '',
};

export default withStyles(styles)(Text);

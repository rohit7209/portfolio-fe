import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import CONSTANTS from './../../utils/constants';

const styles = {
  head: {
    // fontWeight: '600',
    color: CONSTANTS.themes[0].secondary,
    margin: '30px auto',
  },
};

const Head = props => (<Typography
  variant="title"
  className={`${props.classes.head} ${props.className}`}
  style={{ ...props.style }}
>
  {props.children}
</Typography>);

Head.propTypes = {
  children: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
};

Head.defaultProps = {
  style: {},
  className: '',
};

export default withStyles(styles)(Head);

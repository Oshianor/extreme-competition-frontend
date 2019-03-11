/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BuilderContainer from '../src/containers/builder/builder.container'

const styles = theme => ({
  root: {
    textAlign: 'center',
    // paddingTop: theme.spacing.unit * 20,
  },
});

class Builder extends Component{
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <BuilderContainer />
      </div>
    );
  }
}

Builder.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Builder);

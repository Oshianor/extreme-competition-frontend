/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flex: 1,
    backgroundColor: "#35696a",
    height: "100vh",
  },
  center: {
    margin: "auto",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute"
  },
  divCenter: {
    margin: "0 auto",
    position: "absolute"
  }
});

class Launch extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.divCenter}>
          <h3>FORMBUILDER</h3>
          <img src="/static/icon/icon.png" alt="my image" />
        </div>
      </div>
    );
  }
}

Launch.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Launch);

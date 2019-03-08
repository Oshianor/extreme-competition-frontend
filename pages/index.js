/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Launch from "../src/containers/home/launch";
import Home from "../src/containers/home/home";

const styles = theme => ({
  root: {
    flex: 1,
    height: "100vh",
    // marginTop: -20,
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

class Index extends React.Component {
  state = {
    start: true,
  };

  componentDidMount = () => {
    // show the launch screen when the component mounts
    // the sent a timeout of 5sec to toggle the screen
    setTimeout(() => {
      this.setState({
        start: true
      })
    }, 5000);
  }
  
  render() {
    const { classes } = this.props;
    const { start } = this.state;

    return (
      <div className={classes.root}>
        {
          start ? <Home /> : <Launch />
        }
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);

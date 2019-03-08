/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Header from "../../components/header/header";
import Jumbotron from "../../components/jumbotron/jumbotron";
import Homeforms from '../../components/homeforms/homeforms';

const styles = theme => ({
  root: {
    flex: 1,
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

class Home extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Header />
        <Jumbotron />
        <Homeforms />
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);

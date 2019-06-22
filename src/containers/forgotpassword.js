import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Loginpath from '../components/forgot/forgotpath';
import withWidth from '@material-ui/core/withWidth';
import Hidden from '@material-ui/core/Hidden';
import Header from "../components/header/header";
import Typography from "@material-ui/core/Typography";




const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100vh'
  }
});

class ForgotContainer extends Component {
  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Header />
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} sm={8} md={6}>
            <Typography
              variant="h4"
              gutterBottom
              style={{ textAlign: 'center' }}
              color="primary"
            >
              Forgot Password
            </Typography>
            <Loginpath />
          </Grid>
        </Grid>
      </div>
    );
  }
}

ForgotContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ForgotContainer);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Loginpath from '../components/resetpassword/resetpassword';
import Header from "../components/header/header";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100vh'
  }
});

class Login extends Component {
  render(){
    const { classes, user } = this.props;
    return (
      <div className={classes.root}>
        <Header />

        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} sm={8} md={6} lg={5} xl={4}>
            <Typography
              variant="h4"
              gutterBottom
              style={{ textAlign: "center" }}
              color="primary"
            >
              Reset Password
            </Typography>
            <Loginpath userObjId={user._id} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

// export default withStyles(styles)(Login);
export default withStyles(styles)(Login);

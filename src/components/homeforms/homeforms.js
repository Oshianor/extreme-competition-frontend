import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Add from "@material-ui/icons/Add";
import ContactPhone from "@material-ui/icons/Phone";
import Payment from "@material-ui/icons/Payment";
import Feedback from "@material-ui/icons/Feedback";
import Complaint from "@material-ui/icons/People";
import Request from "@material-ui/icons/Mic";
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    // width: '100%',
    // backgroundColor: "#35696a",
    // height: 50,
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 140,
  },
  demo: {
    margin: 20
  },
  header: {
    color: "gray"
  }
});

class Homeforms extends Component {
  state = {
    forms: null
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container className={classes.root} spacing={16}>
          {/* When no forms are avaliabe */}
          <Grid container className={classes.demo} justify="center" spacing={16}>
            <Typography variant="h2" gutterBottom className={classes.header} >
              You have no Forms created :(
            </Typography>
            <Typography variant="h2" gutterBottom className={classes.header} >
              &nbsp;Click the + button to get started...
            </Typography>
          </Grid>
          {/* list of forms */}
          <Grid item xs={12}>
            <Grid container className={classes.demo} justify="center" spacing={16}>

              <Grid item>
                <Paper className={classes.paper}>
                  <Add style={{ fontSize: 140 }} />
                </Paper>
                <Typography variant="overline" gutterBottom className={classes.header} >
                  Create New Form
                </Typography>
              </Grid>

            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Homeforms.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Homeforms);
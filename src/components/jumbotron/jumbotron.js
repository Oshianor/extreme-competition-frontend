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
import CreateFormDialog from '../createform/createform';

const styles = theme => ({
  root: {
    // width: '100%',
    backgroundColor: "#35696a",
    // height: 50,
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 140,
    cursor: 'pointer'
  },
  demo: {
    margin: 20
  },
  header: {
    color: "white"
  }
});

class Jumbotron extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false
    }
  }
  

  handleToggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {
    const { classes } = this.props;
    const { toggle } = this.state;
    return (
      <div className={classes.root}>
        {/* create form dialog */}
        <CreateFormDialog
          toggle={toggle}
          handleToggle={this.handleToggle} 
         />
        {/* end of create form dialog */}

        <Grid container className={classes.root} spacing={16}>
        {/* header */}
          <Grid container className={classes.demo} justify="center" spacing={16}>
            <Typography variant="h6" gutterBottom className={classes.header} >
              Generate Forms On Your Own Terms
            </Typography>
          </Grid>
          {/* quick forms */}
          <Grid item xs={12}>
            <Grid container className={classes.demo} justify="center" spacing={16}>

              <Grid item>
                <Paper onClick={this.handleToggle} className={classes.paper}>
                  <Add style={{ fontSize: 140 }} />
                </Paper>
                <Typography variant="overline" gutterBottom className={classes.header} >
                  Create New Form
                </Typography>
              </Grid>

              <Grid item>
                <Paper className={classes.paper}>
                  <ContactPhone style={{ margin: 10, fontSize: 120 }} />
                </Paper>
                <Typography variant="overline" gutterBottom className={classes.header} >
                  Contact Form
                </Typography>
              </Grid>

              <Grid item>
                <Paper className={classes.paper}>
                  <Payment style={{ fontSize: 110, margin: 15 }} />
                </Paper>
                <Typography variant="overline" gutterBottom className={classes.header} >
                  Payment Form
                </Typography>
              </Grid>

              <Grid item>
                <Paper className={classes.paper}>
                  <Feedback style={{ fontSize: 110, margin: 15 }} />
                </Paper>
                <Typography variant="overline" gutterBottom className={classes.header} >
                  Feedback Form
                </Typography>
              </Grid>

              <Grid item>
                <Paper className={classes.paper}>
                  <Complaint style={{ fontSize: 120, margin: 10 }} />
                </Paper>
                <Typography variant="overline" gutterBottom className={classes.header} >
                  Complaint Form
                </Typography>
              </Grid>

              <Grid item>
                <Paper className={classes.paper}>
                  <Request style={{ fontSize: 120, margin: 10 }} />
                </Paper>
                <Typography variant="overline" gutterBottom className={classes.header} >
                  Request Form
                </Typography>
              </Grid>

            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Jumbotron.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Jumbotron);
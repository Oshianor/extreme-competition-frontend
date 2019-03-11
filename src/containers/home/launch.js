/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from "@material-ui/core/Typography";


const styles = theme => ({
  root: {
    // backgroundColor: "#35696a",
    backgroundColor: theme.palette.background.main,
    height: "100vh"
  },
  divCenter: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "15%"
  },
  img: {
    width: 75
  }
});

class Launch extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.divCenter}>
          <Typography variant='h6'>FORMBUILDER</Typography>
          <img src="/static/icon/document.svg" alt="my image" className={classes.img} />
        </div>
      </div>
    );
  }
}

Launch.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Launch);

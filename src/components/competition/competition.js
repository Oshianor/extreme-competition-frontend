import React, { Component } from 'react';
import Luckynumber from './components/luckynumber';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Countdown from '../countdown/countdown';
import ProgressBar from "../reuseable/progress";

const styles = theme => ({
	root: {
		textAlign: 'center',
		padding: '0px 15px',
		[theme.breakpoints.up('xs')]: { // large: 1280px or larger
			maxWidth: 420,
		},
		[theme.breakpoints.up('lg')]: { // large: 1280px or larger
			maxWidth: 500,
		},
	},
	small: {
		fontSize: 20,
	},
	num: {
		letterSpacing: 15,
	},
	note: {
		// fontSize: 16
	},
	break: {
		display: 'flex',
		justifyContent: "flex-start",
		alignItems: "center",
		margin: "10px 0px"
	},
	sold: {
		padding: 10,
		backgroundColor: theme.palette.primary.main,
		color: "white",
		textTransform: "capitalize"
	}
});

class competition extends Component {
	render() {
		const { classes, numLeft, timer, amt, percent, status, select } = this.props;
		return (
      <div className={classes.root}>
        <div className={classes.break}>
          <Typography variant="h6" color="primary" className={classes.note}>
            Live Draw In
          </Typography>
          <Countdown timer={timer} />
        </div>
        <div className={classes.break}>
          <Typography variant="h6" color="primary" className={classes.note}>
            Ticket Price
          </Typography>
          <Typography
            variant="button"
            style={{
              color: "white",
              letterSpacing: 2,
              fontSize: "inherit"
            }}
          >
            &nbsp;&#8358;{amt}
          </Typography>
        </div>
        {status ? (
          <ProgressBar percent={percent} />
        ) : (
          <Typography variant="h6" color="primary" className={classes.sold}>
            Sold Out
          </Typography>
        )}

        <div className={classes.break}>
          <Typography variant="h6" color="primary" className={classes.note}>
            Ticket Left
          </Typography>
          <Typography
            variant="button"
            style={{
              color: "white",
              letterSpacing: 2,
              fontSize: "inherit"
            }}
          >
            &nbsp;{numLeft}
          </Typography>
        </div>
        <div style={{ alignItems: "flex-start" }} className={classes.break}>
          <Typography variant="h6" color="primary" className={classes.note}>
            Selected Tickets
          </Typography>
          <Typography
            variant="button"
            style={{
              color: "white",
              letterSpacing: 2,
              fontSize: "inherit"
            }}
          >
            &nbsp;
            {typeof select[0] !== "undefined" &&
              "#" + select.map(sel => sel + " ")}
          </Typography>
        </div>
        <div className={classes.break}>
          <Typography variant="h6" color="primary" className={classes.note}>
            Total price
          </Typography>
          <Typography
            variant="button"
            style={{
              color: "white",
              letterSpacing: 2,
              fontSize: "inherit"
            }}
          >
            &nbsp;&#8358;{amt * select.length}
          </Typography>
        </div>
      </div>
    );
	}
}

export default withStyles(styles)(competition);
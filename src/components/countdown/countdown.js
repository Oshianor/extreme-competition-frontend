import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment'
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
	root: {
		display: 'flex',
		justifyContent: 'flex-start',
		// margin: 20
		// background: 'white'
	},
	boxRoot: {
    textAlign: 'center',
	},
	boxBody: {
    display: 'flex',
    width: 45,
    height: 45,
		flexDirection: 'column',
		justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid transparent',
    margin: 5,
    textAlign: 'center',
    borderRadius: 35,
		background: 'white',   
		'&:hover': {
			background: 'gray'
		}
	},
	textHead: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600'
	},
	textBody: {
    color: 'white',
    fontWeight: '500'    
	}
});

class Countdown extends Component {
 	state = {
		days: 0,
		hours: 0,
		min: 0,
		sec: 0,
	}

  componentDidMount() {
    const { timer } = this.props;
    console.log('timer', timer);
    
    // update every second
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(timer);
      date ? this.setState(date) : this.stop();
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  calculateCountdown(endDate) {
		let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

    // clear countdown when date is reached
    if (diff <= 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      millisec: 0,
    };

    // calculate time difference between now and expected date
    if (diff >= (365.25 * 86400)) { // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) { // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) { // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  }

  stop() {
    clearInterval(this.interval);
  }

  addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = '0' + value;
    }
    return value;
  }

  render() {
    const countDown = this.state;
		const { classes } = this.props;
    return (
      <div className={classes.root}>
        <span className={classes.boxRoot}>
          <span className={classes.boxBody}>
            <Typography className={classes.textHead} variant="h6">
              {this.addLeadingZeros(countDown.days)}
            </Typography>
          </span>
          <Typography className={classes.textBody} >
            {countDown.days === 1 ? 'Day' : 'Days'}
          </Typography>
        </span>


        <span className={classes.boxRoot}>
          <span className={classes.boxBody}>
						<Typography className={classes.textHead} variant="h6">
							{this.addLeadingZeros(countDown.hours)}
						</Typography>
          </span>
          <Typography className={classes.textBody} >
            Hours
          </Typography>
        </span>


        <span className={classes.boxRoot}>
          <span className={classes.boxBody}>
						<Typography className={classes.textHead} variant="h6">
							{this.addLeadingZeros(countDown.min)}
						</Typography>
          </span>
          <Typography className={classes.textBody} >
            Min
          </Typography>
        </span>


        <span className={classes.boxRoot}>
          <span className={classes.boxBody}>
						<Typography className={classes.textHead} variant="h6">
							{this.addLeadingZeros(countDown.sec)}
						</Typography>
          </span>
          <Typography className={classes.textBody} >
            Sec
          </Typography>
        </span>

        
      </div>
    );
  }
}

// Countdown.propTypes = {
//   date: PropTypes.string.isRequired
// };

// Countdown.defaultProps = {
//   date: new Date()
// };

export default withStyles(styles)(Countdown);
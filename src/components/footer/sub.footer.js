import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';




const styles = theme => ({
  root: {
    paddingRight: 15,
    paddingLeft: 15,
    marginRight: 'auto',
    marginLeft: 'auto',
    backgroundColor: "transparent",
    [theme.breakpoints.up('lg')]: { // large: 1280px or larger
      width: 1170,
    },
    [theme.breakpoints.up('xl')]: { // extra-large: 1920px or larger
      width: 1366,
    },
		textAlign: 'center',
		display: 'flex',
		justifyContent: "center"
	},
	color: {
		color: 'white'
	},
	smallcolor: {
		color: 'white'
	},
	body: {
		width: 320,
		marginTop: 35,
		[theme.breakpoints.up('lg')]: { // large: 1280px or larger
			marginTop: 50,
			width: 400,
		},
		// [theme.breakpoints.up('xs')]: { // extra-large: 1920px or larger
		// 	margin: "0px 5%"
		// },
	},
  appBar: {
    height: 300,
    backgroundImage: "url('/static/Base.svg')",
    backgroundColor: "transparent",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }
});

class SubFooter extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.appBar}>
				<div className={classes.root} >
					<div className={classes.body} >
						<Typography variant="h4" className={classes.color} >
							GET REWARDED FOR HAVING FUN...
						</Typography>
						<Typography variant="button" className={classes.smallcolor} >
							Play games on major social media platforms, and stand a chance
							to win amazing prices all for goofing off and having fun...
						</Typography>
						<Button variant="extendedFab" style={{ backgroundColor: "white" }} >
							Play games
						</Button>
					</div>
				</div>
      </div>
    );
  }
}

SubFooter.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(SubFooter);
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';


const styles = {
	root: {
		width: 'inherit',
		backgroundColor: 'gray',
		boxShadow: "0px 0px 1px 0px",
		marginBottom: 2,
		cursor: 'pointer'
	},
	text: {
		padding: '5px 20px 3px',
		textAlign: 'left',
		color: 'white',
		'&:hover': {
			color: 'black'
		}
	},
	textsmall: {
		padding: '0px 20px 2px',
		textAlign: 'left',
		color: 'white',
		'&:hover': {
			color: 'black'
		}
	}
}


function HeaderField(props) {
  const { classes } = props;
	return (
		<div className={classes.root} >
			<Typography variant="h6" className={classes.text}>
				Header
			</Typography>
			<Typography variant='caption' className={classes.textsmall}>
				components written as classes, and we have absolutely no plans to rewrite them.Instead, we are starting to use Hooks in the new code side by side with classes.
			</Typography>
		</div>
	);
}

HeaderField.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderField);
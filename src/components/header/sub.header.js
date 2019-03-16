import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link'
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

const styles = theme => ({
  root: {
		width: '100%',
		backgroundColor: "white",
		marginBottom: 150,
		boxShadow: "0px 0px 1px 0px",
		color: '#ececec'
  },
  grow: {
    flexGrow: 1,
  },
  tool: {
		minHeight: 40
	},
	action: {
		borderRadius: 0,
		'&:hover': {
			color: 'white',
			// backgroundColor: theme.palette.sec.dark
		}
	},
	link: {
		borderRadius: 0,
		'&:hover': {
			color: 'white',
			backgroundColor: theme.palette.primary.dark,
			
		}
	}
});

function SubHeader(props) {
	const { classes, headerScrollUp } = props;
	const marginTop = headerScrollUp ? 0 : 67;
	const backgroundColor = !headerScrollUp ? 'transparent' : 'black';
	return (
		<AppBar position='fixed' className={classes.root} style={{ marginTop, zIndex: 999999, backgroundColor }} >
			<Toolbar className={classes.tool}>
				<div className={classes.links}>
					<Button className={classes.link} size='small' color='primary' >
						Builder
					</Button>
					<Button className={classes.link} size='small' color='primary' >
						Rules
					</Button>
					<Button className={classes.link} size='small' color='primary' >
						Preview
					</Button>
					<Button className={classes.link} size='small' color='primary' >
						Assign
					</Button>
					<Button className={classes.link} size='small' color='primary' >
						Metric
					</Button>
					<Button className={classes.link} size='small' color='primary' >
						Settings
					</Button>
				</div>
				<div className={classes.grow} />
				<div className={classes.save}>
					<Button className={classes.action} variant='contained' color='secondary' >
						Publish
					</Button>
					&nbsp;
					<Button className={classes.action} variant='contained' color='secondary' >
						Save
					</Button>
				</div>
			</Toolbar>
		</AppBar>
	);
}

SubHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
	return {
		headerScrollUp: state.default.headerScrollUp,
	}
}

export default connect(mapStateToProps, )(withStyles(styles)(SubHeader));

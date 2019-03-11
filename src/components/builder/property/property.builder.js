import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'
import HeaderProperty from './components/header/header.property';



const styles = theme => ({
	root: {
		width: 300,
		position: 'fixed',
		display: 'flex',
	},
	paper: {
		boxShadow: "0px 0px 1px 0px",
		// color: '#ececec',
		color: 'black',
	},
	head: {

	},
	headText: {
		// backgroundColor: "#6a6868",
		backgroundColor: theme.palette.primary.main,
		color: 'white',
    // color: theme.palette.primary.main,
    textAlign: 'left',
		padding: "5px 15px",
		cursor: 'pointer',
		'&:hover': {
			color: 'black'
		}
	}
});
class PropertyBuilder extends Component {
	render() {
		const { classes, headerScrollUp } = this.props;
		const marginTop = headerScrollUp ? -120 : 0;
		
		return (
			<div className={classes.root} style={{ marginTop }}>
				<Paper className={classes.paper}>
					<Typography variant='button' className={classes.headText}>
						Properties 
					</Typography>
					<div>
						<HeaderProperty />
					</div>
				</Paper>
			</div>
		);
	}
}
PropertyBuilder.propTypes = {
	classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
	return {
		headerScrollUp: state.default.headerScrollUp,
	}
}

export default connect(mapStateToProps, )(withStyles(styles)(PropertyBuilder));
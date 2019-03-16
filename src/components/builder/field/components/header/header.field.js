import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import { setCurrentFieldType } from '../../../../../actions/builder.action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const styles = {
	root: {
		width: 'inherit',
		// backgroundColor: 'gray',
		boxShadow: "0px 0px 1px 0px",
		marginBottom: 2,
		cursor: 'pointer'
	},
	text: {
		padding: '5px 20px 3px',
		textAlign: 'left',
		color: 'white',
		height: 35
	},
	textsmall: {
		padding: '0px 20px 2px',
		textAlign: 'left',
		color: 'white',
		// '&:hover': {
		// 	color: 'black'
		// }
	}
}


function HeaderField(props) {
	const { classes, setCurrentFieldType, builder } = props;
	let backgroundColor = builder.header.backgroundColor;
	let color = builder.header.backgroundColor;
	let head = {
		color: builder.header.nameColor
	}
	let des = {
		color: builder.header.descriptionColor
	}
	return (
		<div 
			style={{ backgroundColor, color }}
			onClick={() => setCurrentFieldType({ type: 'header', uid: 'header-uid' })}
			className={classes.root} 
		>
			<Typography variant="h6" style={head} className={classes.text}>
				{builder.header.name}
			</Typography>
			<Typography variant='caption' style={des} className={classes.textsmall}>
				{builder.header.description}
			</Typography>
		</div>
	);
}

HeaderField.propTypes = {
	classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
	return {
		builder: state.builder
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		setCurrentFieldType: setCurrentFieldType,
	}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(HeaderField));
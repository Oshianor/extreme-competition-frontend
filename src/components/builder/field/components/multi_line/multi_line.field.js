import React, { Component } from 'react';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import IconButton from '@material-ui/core/IconButton'
import TextField from '@material-ui/core/TextField';
import {
	setCurrentFieldType,
	addNewPage,
	addNewField
} from '../../../../../actions/builder.action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Delete from "@material-ui/icons/DeleteOutlined"


const styles = theme => ({
	hide: {
		cursor: 'pointer',
		opacity: .2
	},
	show: {
		cursor: 'pointer',
		opacity: 1
	},
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		padding: 5,
		'&:hover': {
			background: '#80808059',
		},
		
	},
	rootSelectd: {
		display: 'flex',
		flexWrap: 'wrap',
		padding: '5px 5px 15px 5px',
		'&:hover': {
			background: '#80808059',
			borderRadius: 10
		},
		border: '1.3px dashed black',
		borderRadius: 10
	},
	textField: {
		margin: 5,
		cursor: 'not-allowed'
	},
	img: {
		width: 20
	},
	actionIcon: {
		display: 'flex',
		marginTop: -23
	},
	butDelete: {
		color: 'red',
	}
});


class Multi_line extends Component {
	render() {
		const {
			classes,
			field,
			disabled,
			builder,
			setCurrentFieldType
		} = this.props;
		// console.log(builder);
		
		return (
			<div className={
				classNames({
					[classes.hide]: field.visible === false,
					[classes.show]: field.visible === true,
				})}
			>
				<div 
					className={
						classNames({
							[classes.root]: builder.uid !== field.uid,
							[classes.rootSelectd]: builder.uid === field.uid
						})
					}
					onClick={() => setCurrentFieldType({ type: field.type, uid: field.uid })}
					// className={classNames(builder.uid === field.uid ? classes.root : classes.rootSelectd)}
				>
					<TextField
						className={classes.textField}
						id={field.uid}
						required={field.required}
						label={field.label}
						disabled={disabled}
						rows={2}
						helperText={field.instruction}
						// fullWidth={field.size === 'l'}
						multiline
						rowsMax={field.rowsMax}
						margin="normal"
						variant="outlined"
						InputLabelProps={{
							shrink: true,
						}}
					/>
				</div>
				{
					// if it's the current field den show this options
					builder.uid === field.uid &&
						<div className={classes.actionIcon}>
							<IconButton>
								<img src='/static/icon/action-icon/copyicon.svg' className={classes.img} />
							</IconButton>
							<IconButton classes={{ root: classes.butDelete }} >
								<Delete className={classes.butDelete} />
							</IconButton>
						</div>
				}
			</div>
		);
	}
}

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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Multi_line));
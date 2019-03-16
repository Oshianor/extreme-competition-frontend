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
import { findDOMNode } from 'react-dom'
import { DragSource, DropTarget } from 'react-dnd'
import ItemTypes from '../../../itemTypes'
import Grow from '@material-ui/core/Grow';


const style = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  // backgroundColor: 'white',
  cursor: 'move',
}

const cardSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index,
    }
  },
}


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
			borderRadius: 5
		},
		border: '1.3px dashed black',
		borderRadius: 5
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


const cardTarget = {
	hover(props, monitor, component) {
		if (!component) {
			return null
		}
		const dragIndex = monitor.getItem().index;
		const hoverIndex = props.index
		// Don't replace items with themselves
		if (dragIndex === hoverIndex) {
			return
		}
		// Determine rectangle on screen
		const hoverBoundingRect = findDOMNode(component).getBoundingClientRect()
		// Get vertical middle
		const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
		// Determine mouse position
		const clientOffset = monitor.getClientOffset()
		// Get pixels to the top
		const hoverClientY = clientOffset.y - hoverBoundingRect.top
		// Only perform the move when the mouse has crossed half of the items height
		// When dragging downwards, only move when the cursor is below 50%
		// When dragging upwards, only move when the cursor is above 50%
		// Dragging downwards
		if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
			return
		}
		// Dragging upwards
		if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
			return
		}

		console.log('move', dragIndex, hoverIndex);
		
		// Time to actually perform the action
		// props.moveCard(dragIndex, hoverIndex)
		// Note: we're mutating the monitor item here!
		// Generally it's better to avoid mutations,
		// but it's good here for the sake of performance
		// to avoid expensive index searches.
		monitor.getItem().index = hoverIndex
	},
}

class Single_line extends Component {
	render() {
		const {
			classes,
			field,
			disabled,
			builder,
			setCurrentFieldType
		} = this.props;
		const {
			isDragging,
			connectDragSource,
			connectDropTarget,
		} = this.props
		const opacity = isDragging ? 0 : 1;

		// size of the field
		const width = field.size === 's' ? '50%' : field.size === 'm' && "70%";
		// console.log(builder);
		
		return connectDragSource( connectDropTarget(
				<div className={
					classNames({
						[classes.hide]: field.visible === false,
						[classes.show]: field.visible === true,
					})}
				>
					<Grow in={true}
						style={{ transformOrigin: '0 0 0' }}
            {...({ timeout: 1000 })}
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
								helperText={field.instruction}
								fullWidth={field.size === 'l'}
								style={{ width }}
								margin="normal"
								variant="outlined"
								InputLabelProps={{
									shrink: true,
								}}
							/>
							
						</div>
					</Grow>
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
			)
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

export default DropTarget(ItemTypes.BOX, cardTarget, connect => ({
	connectDropTarget: connect.dropTarget(),
}))(
	DragSource(ItemTypes.BOX, cardSource, (connect, monitor) => ({
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging(),
	}))
	(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Single_line))),
);
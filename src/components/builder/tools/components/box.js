import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import { DragSource } from 'react-dnd';
import ItemTypes from '../../itemTypes';
import Typography from '@material-ui/core/Typography';
import {
	setCurrentFieldType,
	addNewPage
} from '../../../../actions/builder.action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';



const styles = {
	root: {
		width: 150,
		border: '1px solid darkgray',
		backgroundColor: 'white',
		padding: '0.5rem 1rem',
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'baseline',
		cursor: 'move',
		float: 'left',
		'&:hover': {
			border: '1px dashed darkgray',
		}
	},
	img: {
		width: 14,
		marginRight: 10
	}
}

const randomSix = function () {
	return Math.floor(100000 + Math.random() * 900000)
}

const boxSource = {
  beginDrag(props) {
		let name = props.name.toLocaleLowerCase().split(" ").join("_");
    return {
			uid: name + "-" + "uid" + "-" + randomSix(),
			type: name
    }
	},
	
  endDrag(props, monitor) {
		const item = monitor.getItem();
		const dropResult = monitor.getDropResult();
		
    if (dropResult) {
			// console.log(item);
			
				// console.log(item, "---", dropResult);
				
				// console.log('defaultTypeJson', defaultFieldValue);

				// console.log(`You dropped ${item.type} into ${dropResult.page}!`)
    }
  },
}

const collect = (connect, monitor) => ({
	connectDragSource: connect.dragSource(),
	isDragging: monitor.isDragging(),
	item: monitor.getItem(),
	// dropResult: monitor.getDropResult(),
	// didDrop: monitor.didDrop()
})

class Box extends React.Component {
  render() {
    const { isDragging, connectDragSource } = this.props;
		const { classes, name, img } = this.props;
		// console.log(this.props);
		
		const opacity = isDragging ? 0.4 : 1;
		const fontSize = name.length > 18 ? 8 : 13;
    return connectDragSource(
			<div className={classes.root} style={{ opacity }}>
				{/* icon for the dragable */}
				<img src={img} className={classes.img} />
				<Typography style={{ fontSize }} >
					{name}
				</Typography>
			</div>
    )
  }
}
Box.propTypes = {
	img: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
	return {
		headerScrollUp: state.default.headerScrollUp
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		setCurrentFieldType: setCurrentFieldType,
		addNewPage: addNewPage
	}, dispatch)
}

export default 
DragSource(ItemTypes.BOX, boxSource, collect)
(connect(mapStateToProps, mapDispatchToProps)
(withStyles(styles)(Box)))

      // <div style={Object.assign({}, style, { opacity })}>{name}</div>,

import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { DropTarget } from 'react-dnd'
import ItemTypes from '../../../itemTypes';

const styles = {
	de: {
		width: 'inherit'
	},
	root: {
		minHeight: 550,
		width: 'inherit',
		marginRight: '1.5rem',
		marginBottom: '1.5rem',
		color: '#313131',
		padding: '1rem',
		textAlign: 'center',
		fontSize: '1rem',
		lineHeight: 'normal',
		borderRadius: 0,
		boxShadow: "0px 0px 1px 0px"
		// float: 'left',
	}
}

const boxTarget = {
  drop(props) {
		console.log('props, monitor, component', props);
		
    return { page: props.index }
  },
}


class Page extends React.Component {
  render() {
    const { classes, canDrop, isOver, connectDropTarget } = this.props;
		const isActive = canDrop && isOver;
		// #f8f5f5
    let backgroundColor = '#ececec'
    if (isActive) {
      backgroundColor = '#dbc9a0'
    } else if (canDrop) {
      backgroundColor = '#ececec'
		}

    return connectDropTarget(
			<span className={classes.de}>
				<Paper className={classes.root} style={{ backgroundColor }}>
					<Typography>{isActive ? 'Release to drop' : ''}</Typography>
				</Paper>
			</span>
    )
  }
}

Page.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default DropTarget(ItemTypes.BOX, boxTarget, (connect, monitor) => ({
	connectDropTarget: connect.dropTarget(),
	isOver: monitor.isOver(),
	canDrop: monitor.canDrop(),
}))(withStyles(styles)(Page))
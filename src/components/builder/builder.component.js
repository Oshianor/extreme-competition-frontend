import React, { Component } from 'react';
import FieldBuilder from './field/field.builder';
import HTML5Backend from 'react-dnd-html5-backend';
// import HTML5Backend from 'react-dnd-touch-backend'
import { DragDropContext } from 'react-dnd'
import ToolsBuilder from './tools/tools.builder';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import PropertyBuilder from './property/property.builder';

const styles = theme => ({
	root: {
		[theme.breakpoints.up("lg")]: {
			width: 1170
		},
		[theme.breakpoints.down("lg")]: {
			overflow: 'contain'
		},
		marginTop: 80
	},
	grow: {
		flexGrow: 1
	},
	left: {
		position: 'absolute',
	},
	center: {
		display: 'flex',
		justifyContent: 'center'
	},
	right: {
		position: 'absolute'
	}
});

class BuilderComponent extends Component {
	render() {
		const { classes } = this.props;
		return (
			<Grid container justify="center">
				<Grid container justify='space-evenly' alignItems='baseline' className={classes.root}>
					<Grid item sm={3} md={3} lg={3} xl={3}>
						<div className={classes.left}>
							<ToolsBuilder />
						</div>
					</Grid>
					<Grid item sm={6} md={6} lg={6} xl={6}>
						<div className={classes.center}>
							<FieldBuilder />
						</div>
					</Grid>
					<Grid item sm={3} md={3} lg={3} xl={3}>
						<div className={classes.right} >
							<PropertyBuilder />
						</div>
					</Grid>
					
					
				</Grid>
			</Grid>
		);
	}
}
BuilderComponent.propTypes = {
	classes: PropTypes.object.isRequired,
};
export default DragDropContext(HTML5Backend)(withStyles(styles)(BuilderComponent));






























































// import React, { Component } from 'react';
// import FieldBuilder from './field/field.builder';
// import HTML5Backend from 'react-dnd-html5-backend';
// // import HTML5Backend from 'react-dnd-touch-backend'
// import { DragDropContext } from 'react-dnd'
// import ToolsBuilder from './tools/tools.builder';
// import PropTypes from 'prop-types';
// import withStyles from '@material-ui/core/styles/withStyles';
// import PropertyBuilder from './property/property.builder';

// const styles = theme => ({
// 	root: {
// 		[theme.breakpoints.up("lg")]: {
// 			// margin: '5%',
// 			width: 1170
// 		},
// 		position: 'relative',
// 		display: 'flex',
// 		padding: 0,
// 		marginTop: 50,
// 		justifyContent: 'space-between',
// 		alignItems: 'end'
// 	},
// 	grow: {
// 		flexGrow: 1
// 	},
// 	left: {
// 		position: 'relative',
// 		// marginRight: 300
// 	},
// 	center: {
// 		// position: 'absolute',

// 	},
// 	right: {
// 		position: 'relative'
// 	}
// });

// class BuilderComponent extends Component {
// 	render() {
// 		const { classes } = this.props;
// 		return (
// 			<div className={classes.root}>
// 				<div className={classes.left}>
// 					<ToolsBuilder />
// 				</div>
// 				<div className={classes.grow} />
// 				<div className={classes.center}>
// 					<FieldBuilder />
// 				</div>
// 				<div className={classes.grow} />
// 				<div className={classes.right} >
// 					<PropertyBuilder />
// 				</div>
// 			</div>
// 		);
// 	}
// }
// BuilderComponent.propTypes = {
// 	classes: PropTypes.object.isRequired,
// };
// export default DragDropContext(HTML5Backend)(withStyles(styles)(BuilderComponent));
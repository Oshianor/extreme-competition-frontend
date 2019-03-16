import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'
import HeaderProperty from './components/header/header.property';
import Single_lineProperty from './components/single_line/single_line.property';



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
	displayProperty = () => {
		const { builder } = this.props;
		let component = null;
		builder.page.forEach((page, pageNo) => {
			console.log('property===>page', page);
			
			page.forEach(element => {
			console.log('property===>page', page);

				if (typeof element.type !== "undefined" && element.type === builder.type && element.uid === builder.uid) {
					switch (builder.type) {
						case 'single_line':
							component = <Single_lineProperty field={element} pageNo={pageNo} />;
						default:
							break;
					}
				}
			})
		});
		return(
			<>
				{
					builder.type === "header" ?
						<HeaderProperty />
					:
						component
				}
			</>
		)
	}
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
						{this.displayProperty()}
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
	  builder: state.builder
	}
}

export default connect(mapStateToProps, )(withStyles(styles)(PropertyBuilder));
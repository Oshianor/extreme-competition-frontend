import React, { Component } from 'react';
import Box from './components/box';
import { basic, advance } from './components/fieldTools';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import { connect } from 'react-redux';

const styles = theme => ({
	root: {
		display: 'flex',
		width: 300,
		flexWrap: 'wrap',
		position: 'fixed'
	},
	body: {
		marginBottom: 5
	},
	head: {
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

class ToolsBuilder extends Component {
	state = {
		field: 'basic'
	}
	displayBasic = () => {
		return basic.map((l, index) => (
			<Box key={index} img={l.icon} name={l.name} />
		))
	}

	displayAdvance = () => {
		return advance.map((l, index) => (
			<Box key={index} img={l.icon} name={l.name} />
		))
	}

	handleChange(name) {
		if(this.state.field !== name) {
			this.setState({ field: name });
		}
	};
	
	render() {
		const { classes } = this.props;
		const { field } = this.state;
		const { headerScrollUp } = this.props;
  	const marginTop = headerScrollUp ? -120 : 0;
		return (
			<div className={classes.root} style={{ marginTop }} >
				<div className={classes.body}>
					<Typography variant='button' className={classes.head} onClick={this.handleChange.bind(this, 'basic')} >
						Basic
					</Typography>
					<Collapse in={field === 'basic'}>
						{this.displayBasic()}
					</Collapse>
				</div>
				<div className={classes.body}>
					<Typography variant='button' className={classes.head} onClick={this.handleChange.bind(this, 'advance')} >
						Advance
					</Typography>
					<Collapse in={field === 'advance'}>
						{this.displayAdvance()}
					</Collapse>
				</div>
			</div>
		);
	}
}
function mapStateToProps(state) {
	return {
		headerScrollUp: state.default.headerScrollUp,
	}
}
export default connect(mapStateToProps, )(withStyles(styles)(ToolsBuilder));
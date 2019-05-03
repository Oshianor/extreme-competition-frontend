import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';



const ExpansionPanel = withStyles({
  root: {
		backgroundColor: "black",
    // border: '1px solid rgba(0,0,0,.125)',
    border: '1px solid red',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  },
  expanded: {
    margin: 'auto',
  },
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
		// backgroundColor: 'rgba(0,0,0,.03)',
		backgroundColor: "black",
		// borderBottom: '1px solid rgba(0,0,0,.125)',
    borderBottom: '1px solid red',		
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(props => <MuiExpansionPanelSummary {...props} />);

ExpansionPanelSummary.muiName = 'ExpansionPanelSummary';

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing.unit * 2,
  },
}))(MuiExpansionPanelDetails);


const styles = theme => ({
  head: {
		marginBottom: "1%",
		color: "white",
		textAlign: 'center'
	},
	subhead: {
		textAlign: 'left',
		fontSize: 16
	},
	paper: {
		width: 320,
		padding: 10
	},
	text: {
		color: "white",
		fontWeight: "600",
		fontSize: 18
	},
	body: {
		fontSize: 14,
		color: 'gray',
		padding: 10
	},
	root: {
		// backgroundImage: "url('/static/Base.svg')",
    backgroundColor: "transparent",
    width: "100%",
    backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		padding: '20px 0px'
	}
});

class Faq extends Component {
	state = {
    expanded: 'panel1',
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
	}

	render() {
		const { expanded } = this.state;
		const { classes } = this.props;
		return (
			<div id="faq" className={classes.root} >
				<ExpansionPanel
					square
					expanded={expanded === 'panel1'}
					onChange={this.handleChange('panel1')}
				>
					<ExpansionPanelSummary>
						<Typography className={classes.text} >
							What if the competitions aren’t full when the time runs out?	
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography variant="body2" style={{  color: "white" }} >
							In a situation were the competition is not full, the timer will have some time added in order
						for all the tickets to sell on the competition.This will happen a maximum of 4 times and
						if the competition is not sold out a cash alternative will be awarded instead and only the people that have entered will go into the live draw.							
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>

				<ExpansionPanel
					square
					expanded={expanded === 'panel2'}
					onChange={this.handleChange('panel2')}
				>
					<ExpansionPanelSummary>
						<Typography className={classes.text} >
							How Many Entries Am I Allowed To Have In Any One Draw ?
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography variant="body2" style={{ color: "white" }} >
							Each Player can enter any one competition a maximum of 5 times.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>

				<ExpansionPanel
					square
					expanded={expanded === 'panel3'}
					onChange={this.handleChange('panel3')}
				>
					<ExpansionPanelSummary>
						<Typography className={classes.text} >
							If I Win How Long Will It Take For My Prize To Be Delivered?
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography variant="body2" style={{ color: "white" }} >
							 Your prize will be delivered from a prime competitions team member within 5 days of the winner being announced.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
			</div>
		);
	}
}
Faq.propTypes = {
	classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Faq);


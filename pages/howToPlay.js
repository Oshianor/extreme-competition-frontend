import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Header from "../src/components/header/header";



const ExpansionPanel = withStyles({
  root: {
    backgroundColor: "black",
    // border: '1px solid rgba(0,0,0,.125)',
    border: "1px solid red",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0
    },
    "&:before": {
      display: "none"
    }
  },
  expanded: {
    margin: "auto"
  }
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    // backgroundColor: 'rgba(0,0,0,.03)',
    backgroundColor: "black",
    // borderBottom: '1px solid rgba(0,0,0,.125)',
    borderBottom: "1px solid red",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56
    }
  },
  content: {
    "&$expanded": {
      margin: "12px 0"
    }
  },
  expanded: {}
})(props => <MuiExpansionPanelSummary {...props} />);

ExpansionPanelSummary.muiName = "ExpansionPanelSummary";

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing.unit * 2
  }
}))(MuiExpansionPanelDetails);

const styles = theme => ({
  head: {
    marginBottom: "1%",
    color: "white",
    textAlign: "center"
  },
  subhead: {
    textAlign: "left",
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
    color: "gray",
    padding: 10
  },
  root: {
    backgroundColor: "transparent",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // padding: "20px 0px",
    paddingRight: 15,
    paddingLeft: 15,
    marginRight: "auto",
    marginLeft: "auto",
    // backgroundColor: "transparent",
    [theme.breakpoints.up("lg")]: {
      // large: 1280px or larger
      width: 1170
    },
    [theme.breakpoints.up("xl")]: {
      // extra-large: 1920px or larger
      width: 1366
    }
  }
});

class Faq extends Component {
  state = {
    expanded: "panel1"
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  render() {
    const { expanded } = this.state;
    const { classes } = this.props;
    return (
			<div>
        <Header />
				<div className={classes.root}>

					<Typography variant="h4" style={{ textAlign: "center", color: "white", margin: "40px 0px 20px" }}>
						How To Play
					</Typography>

					<ExpansionPanel
						square
						expanded={expanded === "panel1"}
						onChange={this.handleChange("panel1")}
					>
						<ExpansionPanelSummary>
							<Typography className={classes.text}>
								How to enter the prize competitions
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography variant="body2" style={{ color: "white" }}>
							<ul>
								<li style={{ fontSize: 16 }}>Pick the Competition you want to enter.</li>
								<li style={{ fontSize: 16 }}>Choose how many numbers you would like in the draw.</li>
								<li style={{ fontSize: 16 }}>Complete payment.</li>
								{/* <li>
									Complete payment.
								</li> */}
							</ul>
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>

					<ExpansionPanel
						square
						expanded={expanded === "panel2"}
						onChange={this.handleChange("panel2")}
					>
						<ExpansionPanelSummary>
							<Typography className={classes.text}>
								How the winner is picked and when the draws go live
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography variant="body2" style={{ color: "white" }}>
								Once the timer on the competition is complete the draw will go
								ahead. A live streamed video to our host will appear within
								‘ten minuets’ of the draw timing out. One random number will
								be picked out via ‘Bernie’ the random ball machine. WE HAVE A
								WINNER.
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>

					<ExpansionPanel
						square
						expanded={expanded === "panel3"}
						onChange={this.handleChange("panel3")}
					>
						<ExpansionPanelSummary>
							<Typography className={classes.text}>
								Delivery to the winner and uploading winner pictures
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography variant="body2" style={{ color: "white" }}>
								The prize will be delivered to the winner within 5 working
								days of the winner being announced. Delivery is free of charge
								to all Nigeria addresses. Winning pictures will be
								uploaded within 7 days on ‘Winners’ page.
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
				</div>
			</div>
    );
  }
}
Faq.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Faq);

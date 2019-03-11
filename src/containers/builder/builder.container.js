import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import BuilderComponent from '../../components/builder/builder.component';
import Header from "../../components/header/header";

const styles = theme => ({
	root: {
		[theme.breakpoints.up("lg")]: {
			width: 1170
		}
	},
});
class BuilderContainer extends Component {
	render() {
    const { classes } = this.props;
		return (
			<div>
        <Header />
				<BuilderComponent />
			</div>
		);
	}
}
BuilderContainer.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BuilderContainer);
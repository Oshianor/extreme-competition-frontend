/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import LoginComponent from './components/login.component';
import RegisterComponent from './components/register.component';

const styles = theme => ({
	but: {
		borderRadius: 0
	},
	root: {
		// width: 400
	}
});

class Auth extends Component {
	state = {
		route: 'login'
	}

	handleRoute = name => event => {
		this.setState({
			route: name
		})
	}

	render() {
		const { open, handleClose, classes } = this.props;
		const { route } = this.state;
		return (
			<Dialog
				open={open}
				className={classes.root}
				onClose={() => handleClose()}
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle id="form-dialog-title">
					<Button 
						className={classes.but}
						onClick={this.handleRoute('login')} 
						variant={route === "login" ? "contained" : "outlined"} 
						color="secondary"
					>
						Log In
					</Button>
					<Button 
						className={classes.but}
						onClick={this.handleRoute('register')} 
						variant={route === "register" ? "contained" : "outlined"} 
						color="secondary"
					>
						Register
					</Button>
				</DialogTitle>
				<DialogContent>
					{
						route === 'login' ?
							<LoginComponent handleClose={handleClose} />
						:
							<RegisterComponent handleClose={handleClose} />
					}
				</DialogContent>
			</Dialog>
		);
	}
}

export default withStyles(styles)(Auth);
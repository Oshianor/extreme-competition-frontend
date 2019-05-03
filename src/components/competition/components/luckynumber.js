import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

const styles = theme => ({
	root: {
		// backgroundColor: theme.palette.primary.main,
		// backgroundColor: '#d9d9d99c',
		backgroundColor: 'transparent',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexWrap: 'wrap',
		// borderRadius: 5,
		width: 300,
		height: 85,
		// border: "1px solid " + theme.palette.primary.main,
		// margin: "20px 0px",
		// boxShadow: '-1px 1px 6px 1px #d9d9d99c'
	},
  margin: {
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'row',
		marginBottom: -15
  },
  bootstrapFormLabel: {
		fontSize: 20,
		marginTop: -15,
		marginLeft: 5,
		fontWeight: '600',
		color: 'black',
		textTransform: 'uppercase',
		letterSpacing: 5
	},
	img: {
		width: 25
	},
	container: {
		display: 'flex',
		justifyContent: 'center',
		// alignItems: 'flex-end',
		flexWrap: 'wrap'
	}
});

const Bootstrap = withStyles(theme => ({
	root: {
		'label + &': {
			// marginTop: theme.spacing.unit * 3,
		},
	},
	input: {
		borderRadius: 5,
		margin: 5,
		position: 'relative',
		fontSize: 20,
		fontWeight: '600',
		// backgroundColor: '#ced4da',
		backgroundColor: 'transparent',
		border: '1px solid ' + theme.palette.primary.main,
		fontSize: 20,
		height: 30,
		width: 36,
		padding: '10px 5px',
		textAlign: 'center',
		transition: theme.transitions.create(['border-color', 'box-shadow']),
		// Use the system font instead of the default Roboto font.
		fontFamily: [
			'poppins',
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
		'&:focus': {
			// borderRadius: 0,
			borderColor: theme.palette.secondary.main,
			// boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
		},
	},
}))(InputBase);

class LuckyNumber extends Component {
	constructor(props) {
		super(props);
		this.oneRef = null;
		this.twoRef = null;
		this.threeRef = null;
		this.fourRef = null;
		this.fiveRef = null;

	}

	handleChange = () => {
		let reg = /[^0-9]/g;

		// first
		if (reg.test(this.oneRef.value)) {
			this.oneRef.value = "";
		} else {
			if (this.oneRef.value.length === 1) {
				this.twoRef.focus();
			} else if (this.oneRef.value.length > 1) {
				this.oneRef.value = this.oneRef.value.substr(-1);
				this.twoRef.focus();
			}
		}
		// second
		if (reg.test(this.twoRef.value)) {
			this.twoRef.value = "";
		} else {
			if (this.twoRef.value.length === 1) {
				this.threeRef.focus();
			} else if (this.twoRef.value.length > 1) {
				this.twoRef.value = this.twoRef.value.substr(-1);
				this.threeRef.focus();
			}
		}

		// third
		if (reg.test(this.threeRef.value)) {
			this.threeRef.value = "";
		} else {
			if (this.threeRef.value.length === 1) {
				this.fourRef.focus();
			} else if (this.threeRef.value.length > 1) {
				this.threeRef.value = this.threeRef.value.substr(-1);
				this.fourRef.focus();
			}
		}

		// fourth
		if (reg.test(this.fourRef.value)) {
			this.fourRef.value = "";
		} else {
			if (this.fourRef.value.length === 1) {
				this.fiveRef.focus();
			} else if (this.fourRef.value.length > 1) {
				this.fourRef.value = this.fourRef.value.substr(-1);
				this.fiveRef.focus();
			}
		}

		// fifth
		if (reg.test(this.fiveRef.value)) {
			this.fiveRef.value = "";
		} else {
			if (this.fiveRef.value.length === 1) {
				if (this.oneRef.value.length < 1) {
					this.oneRef.focus();
				}
				if (this.twoRef.value.length < 1) {
					this.twoRef.focus();
				}
				if (this.threeRef.value.length < 1) {
					this.threeRef.focus();
				}
				if (this.fourRef.value.length < 1) {
					this.fourRef.focus();
				}
			} else if (this.fiveRef.value.length > 1) {
				this.fiveRef.value = this.fiveRef.value.substr(-1);
				if (this.oneRef.value.length < 1) {
					this.oneRef.focus();
				}
				if (this.twoRef.value.length < 1) {
					this.twoRef.focus();
				}
				if (this.threeRef.value.length < 1) {
					this.threeRef.focus();
				}
				if (this.fourRef.value.length < 1) {
					this.fourRef.focus();
				}
			}
		}

		if (this.oneRef.value.length === 1 && this.twoRef.value.length === 1 && this.threeRef.value.length === 1 && this.fourRef.value.length === 1 && this.fiveRef.value.length === 1) {
			console.log('done');
			
		}
		
  };

	render() {
		const { classes } = this.props;
		
		return (
			<div className={classes.container} >
				<div className={classes.root} >
					<FormControl className={classes.margin}>
						<InputLabel shrink htmlFor="bootstrap-input" className={classes.bootstrapFormLabel}>
							Lucky Number
						</InputLabel>
						<Bootstrap 
							autoFocus
							inputProps={{ref: input => this.oneRef = input}}
							onChange={this.handleChange} 
						/>
						<Bootstrap 
							inputProps={{ref: input => this.twoRef = input}}
							onChange={this.handleChange} 
						/>
						<Bootstrap 
							inputProps={{ref: input => this.threeRef = input}}
							onChange={this.handleChange} 
						/>
						<Bootstrap 
							inputProps={{ref: input => this.fourRef = input}}
							onChange={this.handleChange} 
						/>
						<Bootstrap 
							inputProps={{ref: input => this.fiveRef = input}}
							onChange={this.handleChange} 
						/>
					</FormControl>
					<Button 
						variant="contained" 
						color='primary' 
						size="large"
						style={{ borderRadius: 0, margin: "20px 2px" }}
					>
						Play
					</Button>
				</div>
			</div>
		)
	}
}

LuckyNumber.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LuckyNumber);



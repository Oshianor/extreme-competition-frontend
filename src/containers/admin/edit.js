import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getToken } from "../../actions/data";
import axios from 'axios';
import { config } from '../../../config';
import CircularProgress from '@material-ui/core/CircularProgress';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import InputAdornment from '@material-ui/core/InputAdornment';
import Header from "../../components/header/header";
import isEmpty from 'validator/lib/isEmpty';
import Router from 'next/router';


const styles = theme => ({
  root: {
		display: 'flex',
		justifyContent: 'center'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  container: {
    display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column'
    // flexWrap: 'wrap',
  },
  textField: {
    // marginLeft: theme.spacing.unit,
    // marginRight: theme.spacing.unit,
    maxWidth: 400,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
	},
	margin: {
    margin: theme.spacing.unit,
	},
	input: {
		display: 'none',
	},
	label: {
		display: "flex",
		alignItems: "center",
		marginTop: 10
	},
});


class Edit extends Component {
	state = {
		name: "",
		nameHelper: {
			err: false,
			msg: ''
		},
		timerHelper: {
			err: false,
			msg: ''
		},
		amtHelper: {
			err: false,
			msg: ''
		},
		description: '',
		condition: 'h',
		timer: 0,
		amt: "",
		loading: false,
		msg: "",
		slotHelper: {
			msg: "",
			err: false
		},
		slot: "",
		status: true
	}

	componentDidMount() {
		const { game } = this.props;
		this.setState({
      name: game.name,
      amt: game.amt,
      description: game.description,
      slot: game.slot,
      status: game.status
    });
	}
	
	

	handleName = () => {
		const { name } = this.state;
    if (isEmpty(name)) {
      this.setState({
        nameHelper: {
          msg: "Name is required",
          err: true
        }
      });
      return false;
    }
    this.setState({
      nameHelper: {
        msg: "",
        err: false
      }
    });
    return true;
	}

	handleTimer = () => {
		const { timer } = this.state;
    if (timer <= 0) {
      this.setState({
        timerHelper: {
          msg: "Timer is must be greater than Zero",
          err: true
        }
      });
      return false;
    }
    this.setState({
      timerHelper: {
        msg: "",
        err: false
      }
    });
    return true;
	}

	handleAmt = () => {
		const { amt } = this.state;
    if (amt <= 0) {
      this.setState({
        amtHelper: {
          msg: "Amount must be greater than Zero",
          err: true
        }
      });
      return false;
    }
    this.setState({
      amtHelper: {
        msg: "",
        err: false
      }
    });
    return true;
	}

	handleSlot = () => {
		const { slot } = this.state;
    if (slot <= 0) {
      this.setState({
        slotHelper: {
          msg: "Slot must be greater than Zero",
          err: true
        }
      });
      return false;
    }
    this.setState({
      slotHelper: {
        msg: "",
        err: false
      }
    });
    return true;
	}

	handleChange = name => event => {
		this.setState({
			[name]: name === "timer" && event.target.value === "" ? 0 : event.target.value
		})
	}

	handleEditGame = async () => {
		const { name, amt, slot, status, condition, description, timer } = this.state;
		const { token, game } = this.props;

    if (!this.handleName() || !this.handleAmt() || !this.handleTimer() || !this.handleSlot()) {
      return false;
    }
    this.setState({
      loading: true
		});

		let data = {
			gameId: game._id,
			name,
			description,
			amt,
			condition,
			timer,
			slot,
			status
		}
		
		const options = {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				'x-auth-token': token
			},
			data: JSON.stringify(data),
			url: config.editGame
		};

    try {
      let create = await axios(options);
			// console.log("LOGIN", create);
			if (create.data.error) {
				this.setState({
					msg: create.data.msg
				})
			} else {
				this.setState({
					msg: ''
				})
				Router.push('/admin/' + token)
			}
    } catch (error) {
      console.log("ERROR : ", error);
      
    }
    this.setState({
      loading: false
    });
    
	}

	handleChangeSlot = (event) => {
		let reg = /[^0-9]/g;
		// console.log('reg.test(event.target.value)', !reg.test(event.target.value));
		
		if(!reg.test(event.target.value)) {
			this.setState({
				slot: Math.abs(event.target.value)
			})
		} else {
			console.log('event.target.value', event.target.value);
			
		}
	}

	handleStatus = name => event => {
		this.setState({
			status: name === "active" ? true : false
		})
	}
	
	render() {
		const { classes } = this.props;
		const { name, status, nameHelper, msg, loading, condition, slot, slotHelper, timer, amt, description, timerHelper, amtHelper } = this.state;
		console.log("status", status);
		
		return (
			<div>
				<Header admin={true} />
				<Typography variant="h5" style={{ textAlign: 'center', marginTop: 10 }} >
					Edit Game
				</Typography>
				<div className={classes.root}>
					<form className={classes.container} noValidate autoComplete="off">
						{
							msg !== "" &&
								<Typography style={{ color: 'red', fontSize: 20 }} >
									{msg}
								</Typography>
						}
						<div style={{ display: "flex", alignItems: "center" }}>
							<Button 
								onClick={this.handleStatus('active')}
								color="primary"
								variant={status ? "contained" : "outlined"}
							>
								Activate
							</Button>
							<Button 
								onClick={this.handleStatus('deactive')}
								color="primary"
								variant={!status ? "contained" : "outlined"}
							>
								Deactivate
							</Button>
						</div>
						<TextField
							error={nameHelper.err}
							name="name"
							required
							value={name}
							className={classes.textField}
							label="Name"
							onBlur={this.handleName}
							helperText={nameHelper.msg}
							onChange={this.handleChange('name')}
							fullWidth
							margin="normal"
							variant="outlined"
						/>

						<TextField
							error={nameHelper.err}
							name="description"
							value={description}
							className={classes.textField}
							label="Description"
							multiline
							rows={3}
							onChange={this.handleChange('description')}
							fullWidth
							margin="normal"
							variant="outlined"
						/>

						<TextField
							error={slotHelper.err}
							id="outlined-simple-start-adornment"
							variant="outlined"
							type="number"
							margin="normal"
							required
							onBlur={this.handleSlot}
							helperText={slotHelper.msg}
							value={slot}
							className={classes.textField}
							fullWidth
							onChange={this.handleChangeSlot}
							label="Slot"
						/>
						
						<TextField
							error={timerHelper.err}
							id="outlined-simple-start-adornment"
							variant="outlined"
							type="number"
							margin="normal"
							value={timer}
							required
							onBlur={this.handleTimer}
							helperText={timerHelper.msg}
							className={classes.textField}
							fullWidth
							onChange={this.handleChange('timer')}
							label="Timer"
							onBlur={this.handleTimer}
							InputProps={{
								startAdornment: (
									<InputAdornment style={{ paddingLeft: 0 }} position="start">
										<Select
											value={condition}
											onChange={this.handleChange('condition')}
											input={
												<FilledInput
													name="age"
													id="outlined-age-simple"
												/>
											}
										>
											<MenuItem value="s">Seconds</MenuItem>
											<MenuItem value="h">Hours</MenuItem>
											<MenuItem value="m">Minutes</MenuItem>
											<MenuItem value="d">Days</MenuItem>
										</Select>
									</InputAdornment>),
							}}
						/>

						<TextField
							error={amtHelper.err}
							id="outlined-simple-start-adornment"
							variant="outlined"
							type="number"
							margin="normal"
							required
							onBlur={this.handleAmt}
							helperText={amtHelper.msg}
							value={amt}
							className={classes.textField}
							fullWidth
							onChange={this.handleChange('amt')}
							label="Amount"
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">&#8358;</InputAdornment>),
							}}
						/>

						<Button 
							variant="contained" 
							disabled={loading} 
							color="secondary" 
							onClick={this.handleEditGame} 
							className={classes.button}
						>
							{
								loading ? 
									<CircularProgress size={24} className={classes.buttonProgress} /> 
								: 
									"Edit Game"
							}
						</Button>
					
					</form>
				</div>
			</div>
		);
	}
}

Edit.propTypes = {
	classes: PropTypes.object.isRequired,
};

// export default Edit;
function mapStateToProps(state) {
  return {
    token: state.data.token,
  }
}

// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({
// 		getToken: getToken
// 	}, dispatch)
// }


// 5103002390
export default connect(mapStateToProps, )(withStyles(styles)(Edit));








// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { getToken } from "../../actions/data";
// import axios from 'axios';
// import { config } from '../../../config';
// import CircularProgress from '@material-ui/core/CircularProgress';
// import Input from '@material-ui/core/Input';
// import FilledInput from '@material-ui/core/FilledInput';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import Select from '@material-ui/core/Select';
// import InputAdornment from '@material-ui/core/InputAdornment';



// const styles = theme => ({
//   root: {
// 		display: 'flex',
// 		justifyContent: 'center'
//   },
//   paper: {
//     padding: theme.spacing.unit * 2,
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
//   container: {
//     display: 'flex',
// 		justifyContent: 'center',
// 		flexDirection: 'column'
//     // flexWrap: 'wrap',
//   },
//   textField: {
//     // marginLeft: theme.spacing.unit,
//     // marginRight: theme.spacing.unit,
//     width: 250,
//   },
//   dense: {
//     marginTop: 19,
//   },
//   menu: {
//     width: 200,
// 	},
// 	margin: {
//     margin: theme.spacing.unit,
// 	},
// 	input: {
// 		display: 'none',
// 	},
// });


// class Edit extends Component {
// 	state = {
// 		name: "",
// 		nameHelper: {
// 			err: false,
// 			msg: ''
// 		},
// 		condition: 'h',
// 		timer: 10,
// 		amt: "",
// 		loading: false,
// 		labelWidth: 0
// 	}

	
// 	componentDidMount() {
// 		const { classes, game } = this.props;
// 		console.log('data edit', game);
		
// 		this.setState({
// 			name: game.name,
// 			amt: game.amt
// 		})
// 	}

// 	handleName = () => {

// 	}

// 	handleChange = name => event => {
// 		this.setState({
// 			[name]: name === "timer" && event.target.value === "" ? 0 : event.target.value
// 		})
// 	}
	
// 	render() {
// 		const { classes, data } = this.props;
// 		const { name, nameHelper, loading, condition, timer, amt } = this.state;
// 		return (
// 			<div className={classes.root}>
// 				<form className={classes.container} noValidate autoComplete="off">
// 					<input
// 						accept="image/*"
// 						className={classes.input}
// 						id="contained-button-file"
// 						multiple
// 						type="file"
// 					/>
// 					<label htmlFor="contained-button-file">
// 						<Button variant="contained" component="span" className={classes.button}>
// 							Upload
// 						</Button>
// 					</label>

//           <TextField
//             error={nameHelper.err}
//             name="name"
// 						value={name}
// 						className={classes.textField}
//             label="Name"
//             onBlur={this.handleName}
//             helperText={nameHelper.msg}
//             onChange={this.handleChange('name')}
//             fullWidth
//             margin="normal"
//             variant="outlined"
//           />

					
// 					<TextField
// 						id="outlined-simple-start-adornment"
// 						// className={classNames(classes.margin, classes.textField)}
// 						variant="outlined"
// 						type="number"
// 						margin="normal"
// 						value={timer}
// 						className={classes.textField}
// 						fullWidth
//             onChange={this.handleChange('timer')}
// 						label="Timer"
// 						InputProps={{
// 							startAdornment: (
// 								<InputAdornment style={{ paddingLeft: 0 }} position="start">
// 									<Select
// 										value={condition}
// 										onChange={this.handleChange('condition')}
// 										input={
// 											<FilledInput
// 												name="age"
// 												id="outlined-age-simple"
// 											/>
// 										}
// 									>
// 										<MenuItem value="s">Seconds</MenuItem>
// 										<MenuItem value="h">Hours</MenuItem>
// 										<MenuItem value="m">Minutes</MenuItem>
// 										<MenuItem value="d">Days</MenuItem>
// 									</Select>
// 								</InputAdornment>),
// 						}}
// 					/>

// 					<TextField
// 						id="outlined-simple-start-adornment"
// 						// className={classNames(classes.margin, classes.textField)}
// 						variant="outlined"
// 						type="number"
// 						margin="normal"
// 						value={amt}
// 						className={classes.textField}
// 						fullWidth
//             onChange={this.handleChange('amt')}
// 						label="Amount"
// 						InputProps={{
// 							startAdornment: (
// 								<InputAdornment style={{ paddingLeft: 0 }} position="start">&#8358;</InputAdornment>),
// 						}}
// 					/>

//           <Button 
//             variant="contained" 
//             disabled={loading} 
//             color="secondary" 
//             // onClick={this.handleRegister} 
//             className={classes.button}
//           >
// 						{
//               loading ? 
//                 <CircularProgress size={24} className={classes.buttonProgress} /> 
//               : 
//                 "Edit"
//             }
// 					</Button>
        
//         </form>
// 			</div>
// 		);
// 	}
// }

// Edit.propTypes = {
// 	classes: PropTypes.object.isRequired,
// };

// // export default Edit;
// function mapStateToProps(state) {
//   return {
//     data: state.data,
//   }
// }

// // function mapDispatchToProps(dispatch) {
// // 	return bindActionCreators({
// // 		getToken: getToken
// // 	}, dispatch)
// // }

// export default connect(mapStateToProps, )(withStyles(styles)(Edit));





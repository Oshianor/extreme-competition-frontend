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


class Create extends Component {
	state = {
		name: "",
		nameHelper: {
			err: false,
			msg: ''
		},
		msgHelper: {
			err: false,
			msg: ''
		},
		msg: '',
		firstImg: null,
		loading: false,
		prizeHelper: {
			msg: "",
			err: false
		},
		prize: "",
		errMsg: ""
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

	handlePrize = () => {
		const { prize } = this.state;
    if (isEmpty(prize)) {
      this.setState({
        prizeHelper: {
          msg: "Prize is required",
          err: true
        }
      });
      return false;
    }
    this.setState({
      prizeHelper: {
        msg: "",
        err: false
      }
    });
    return true;
	}

	handleMsg = () => {
		const { msg } = this.state;
    if (isEmpty(msg)) {
      this.setState({
        msgHelper: {
          msg: "Testimonie is required",
          err: true
        }
      });
      return false;
    }
    this.setState({
      msgHelper: {
        msg: "",
        err: false
      }
    });
    return true;
	}

	handleChange = name => event => {
		this.setState({
			[name]: event.target.value
		})
	}

	handleCreateGame = async () => {
		const { name, prize, msg, firstImg } = this.state;
		const { token } = this.props;

    if (!this.handleName() || !this.handleMsg() || !this.handlePrize() || !firstImg) {
      return false;
    }
    this.setState({
      loading: true
		});
		
		let formData = new FormData();
		formData.append('img', firstImg);
		formData.append('name', name);
		formData.append('msg', msg);
		formData.append('prize', prize);

    try {
      let create = await axios.post(config.createTestimonial, formData, {
        headers: {
          "x-auth-token": token,
          "Access-Control-Allow-Origin": "*"
        }
      });
			console.log("LOGIN", create);
			if (create.data.error) {
				this.setState({
					errMsg: create.data.msg
				})
			} else {
				this.setState({
					errMsg: ''
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

	handleIMG = name => (event) => {
		this.setState({
			[name]: event.target.files[0]
		})
	}
	
	render() {
		const { classes } = this.props;
		const { name, nameHelper, msg, loading, firstImg, msgHelper, prize, prizeHelper, errMsg } = this.state;
		
		return (
			<div>
				<Header admin={true} />
				<Typography variant="h5" style={{ textAlign: 'center', marginTop: 10 }} >
					Create Testimonies
				</Typography>
				<div className={classes.root}>
					<form className={classes.container} noValidate autoComplete="off">
						{
							errMsg !== "" &&
								<Typography style={{ color: 'red', fontSize: 20 }} >
									{errMsg}
								</Typography>
						}
						
						<input
							accept="image/*"
							onChange={this.handleIMG('firstImg')}
							className={classes.input}
							id="first"
							type="file"
						/>
						<label htmlFor="first" className={classes.label}>
							<Button variant="contained" component="span" color="secondary" className={classes.button}>
								Upload
							</Button>
							{
								firstImg &&
									<Typography>{firstImg.name}</Typography>
							}
						</label>
						
						<TextField
							error={nameHelper.err}
							name="name"
							required
							value={name}
							className={classes.textField}
							label="Full Name"
							onBlur={this.handleName}
							helperText={nameHelper.msg}
							onChange={this.handleChange('name')}
							fullWidth
							margin="normal"
							variant="outlined"
						/>

						<TextField
							name="msg"
							value={msg}
							className={classes.textField}
							label="Testimonie Message"
							multiline
							rows={4}
							error={msgHelper.err}
							onBlur={this.handleMsg}
							helperText={msgHelper.msg}
							onChange={this.handleChange('msg')}
							fullWidth
							margin="normal"
							variant="outlined"
						/>

						<TextField
							error={prizeHelper.err}
							id="outlined-simple-start-adornment"
							variant="outlined"
							margin="normal"
							required
							onBlur={this.handlePrize}
							helperText={prizeHelper.msg}
							value={prize}
							className={classes.textField}
							fullWidth
							onChange={this.handleChange('prize')}
							label="Prize Won"
						/>

						<Button 
							variant="contained" 
							disabled={loading} 
							color="secondary" 
							onClick={this.handleCreateGame} 
							className={classes.button}
						>
							{
								loading ? 
									<CircularProgress size={24} className={classes.buttonProgress} /> 
								: 
									"Create Testimonial"
							}
						</Button>
					
					</form>
				</div>
			</div>
		);
	}
}

Create.propTypes = {
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

export default connect(mapStateToProps, )(withStyles(styles)(Create));


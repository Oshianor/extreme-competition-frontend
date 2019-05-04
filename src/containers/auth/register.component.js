import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import CircularProgress from '@material-ui/core/CircularProgress';
import { config } from '../../../config';
import Axios from 'axios';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getToken } from "../../actions/data";
import Router, { withRouter } from "next/router";



const styles = theme => ({
  root: {
    paddingRight: 15,
    paddingLeft: 15,
    marginRight: "auto",
    marginLeft: "auto",
    backgroundColor: "transparent",
    [theme.breakpoints.up("lg")]: {
      // large: 1280px or larger
      width: 1170
    },
    [theme.breakpoints.up("xl")]: {
      // extra-large: 1920px or larger
      width: 1366
    },
    textAlign: "center"
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  container: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    margin: "0px 2%",
    [theme.breakpoints.up("lg")]: {
      // large: 1280px or larger
      margin: "0px 25%"
    }
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  button: {
    margin: "20px 0px -6px 0px",
    borderRadius: 20,
    width: 150
  },
  forgot: {
    margin: "1% 0px",
    cursor: "pointer",
    // textDecoration: 'underline',
    // textDecorationColor: 'blue',
    textAlign: "right"
  },
  bottom: {
    borderRightWidth: 1,
    borderRightStyle: "solid",
    padding: 5,
    textDecoration: "none",
    borderRightColor: "gray",
    color: "gray"
  },
  bottomend: {
    padding: 5,
    textDecoration: "none",
    color: "gray"
  },
  bodyRoot: {
    borderColor: "white",
    color: "white"
  },
  cssLabel: {
    color: "white"
  },

  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: `${theme.palette.primary.main} !important`
    }
  },

  cssFocused: {},

  notchedOutline: {
    borderWidth: "1px",
    borderColor: "white !important"
  }
});

class RegisterComponent extends Component {
  state = {
    loading: false,
    email: "",
    emailHelper: {
      msg: "",
      err: false
    },
    password: "",
    passwordHelper: {
      msg: "",
      err: false
    },
    confirmPassword: '',
    confirmPasswordHelper: {
      msg: '',
      err: false
    },
    name: "",
    phone: "",
    nameHelper: {
      err: false,
      msg: ""
    },
    phoneHelper: {
      err: false,
      msg: ''
    },
    res: {
      error: false,
      msg: ""
    }
  }
  

  handleRegister = async () => {
    const { email, password, confirmPassword, name, phone } = this.state;
    const { getToken, router } = this.props;
    
    if (!this.handleEmail() || !this.handlePassword() || !this.handleConfirmPassword()) {
      return false;
    }
    this.setState({
      loading: true
    });
    let data = {
      email, password, confirmPassword, fullName: name, phone
    };
    
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      data: JSON.stringify(data),
      url: config.register,
    };
    

    try {
      let register = await Axios(options);
      console.log("register  ===>>>> ", register);
      if (register.data.error) {
        this.setState({
          res: register.data,
          password: "",
          confirmPassword: ''
        })
      } else {
        localStorage.setItem('token', register.headers['x-auth-token']);
        getToken(register.headers['x-auth-token']);
        // router.push("/");
        Router.push("/error", "/");
        this.setState({
          res: { error: false,  msg: "" }
        })
      }
      
    } catch (error) {
      console.log("ERROR : ", error);
    }
    this.setState({
      loading: false
    });
    
  }

  handleEmail = () => {
    const { email } = this.state;
    if (!isEmail(email)) {
      this.setState({
        emailHelper: {
          msg: "A valid email is required!",
          err: true
        }
      });
      return false;
    }
    if (isEmpty(email)) {
      this.setState({
        emailHelper: {
          msg: "Email is required",
          err: true
        }
      });
      return false;
    }
    this.setState({
      emailHelper: {
        msg: "",
        err: false
      }
    });
    return true
  }

  handleName = () => {
    const { name } = this.state;
    if (isEmpty(name)) {
      this.setState({
        nameHelper: {
          msg: "Full Name is required!",
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
    return true
  }

  handlePhone = () => {
    const { phone } = this.state;
    if (isEmpty(phone)) {
      this.setState({
        phoneHelper: {
          msg: "Phone number is required!",
          err: true
        }
      });
      return false;
    }
    this.setState({
      phoneHelper: {
        msg: "",
        err: false
      }
    });
    return true
  }

  handlePassword = () => {
    const { password } = this.state;
    if (isEmpty(password)) {
      this.setState({
        passwordHelper: {
          msg: "Password is required",
          err: true
        }
      });
      return false;
    }
    if (password.length <= 4) {
      this.setState({
        passwordHelper: {
          msg: "A minimum of 4 characters are required for your password",
          err: true
        }
      });
      return false;
    }
    this.setState({
      passwordHelper: {
        msg: "",
        err: false
      }
    });
    return true;
  }

  handleConfirmPassword = () => {
    const { confirmPassword, password } = this.state;
    if (isEmpty(confirmPassword)) {
      this.setState({
        confirmPasswordHelper: {
          msg: "Confirm Password is required",
          err: true
        }
      });
      return false;
    }
    if (confirmPassword.length <= 4) {
      this.setState({
        confirmPasswordHelper: {
          msg: "A minimum of 4 characters are required for your password",
          err: true
        }
      });
      return false;
    }
    if (confirmPassword !== password) {
      this.setState({
        confirmPasswordHelper: {
          msg: "Confirm password isn't a match with your password",
          err: true
        }
      });
      return false;
    }
    this.setState({
      confirmPasswordHelper: {
        msg: "",
        err: false
      }
    });
    return true;
  }

  onchnage = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };


  render(){
    const {
      res,
      password,
      passwordHelper,
      email,
      emailHelper,
      loading,
      confirmPassword,
      confirmPasswordHelper,
      name,
      phone,
      nameHelper,
      phoneHelper
    } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography
          variant="h4"
          gutterBottom
          style={{ margin: "2% 8%", color: "white" }}
        >
          New Here? Create an Account...
        </Typography>
        {res.error && (
          <Typography
            variant="body1"
            gutterBottom
            style={{ margin: "0 5%", fontSize: 14, color: "red" }}
          >
            *{res.msg}
          </Typography>
        )}
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            error={nameHelper.err}
            value={name}
            name="name"
            label="Full Name"
            onBlur={this.handleName}
            helperText={nameHelper.msg}
            onChange={this.onchnage}
            fullWidth
            InputLabelProps={{
              classes: {
                root: classes.cssLabel,
                focused: classes.cssFocused
              }
            }}
            InputProps={{
              classes: {
                root: classes.cssOutlinedInput,
                input: classes.bodyRoot,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline
              }
            }}
            margin="normal"
            variant="outlined"
          />

          <TextField
            error={emailHelper.err}
            name="email"
            value={email}
            label="Email"
            onBlur={this.handleEmail}
            helperText={emailHelper.msg}
            onChange={this.onchnage}
            fullWidth
            InputLabelProps={{
              classes: {
                root: classes.cssLabel,
                focused: classes.cssFocused
              }
            }}
            InputProps={{
              classes: {
                root: classes.cssOutlinedInput,
                input: classes.bodyRoot,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline
              }
            }}
            margin="normal"
            variant="outlined"
          />

          <TextField
            error={phoneHelper.err}
            value={phone}
            label="Phone"
            name="phone"
            type="number"
            onBlur={this.handlePhone}
            helperText={phoneHelper.msg}
            onChange={this.onchnage}
            fullWidth
            InputLabelProps={{
              classes: {
                root: classes.cssLabel,
                focused: classes.cssFocused
              }
            }}
            InputProps={{
              classes: {
                root: classes.cssOutlinedInput,
                input: classes.bodyRoot,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline
              }
            }}
            margin="normal"
            variant="outlined"
          />

          <TextField
            error={passwordHelper.err}
            name="password"
            label="Password"
            value={password}
            type="password"
            onBlur={this.handlePassword}
            onChange={this.onchnage}
            helperText={passwordHelper.msg}
            fullWidth
            InputLabelProps={{
              classes: {
                root: classes.cssLabel,
                focused: classes.cssFocused
              }
            }}
            InputProps={{
              classes: {
                root: classes.cssOutlinedInput,
                input: classes.bodyRoot,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline
              }
            }}
            margin="normal"
            variant="outlined"
          />

          <TextField
            error={confirmPasswordHelper.err}
            name="confirmPassword"
            label="Confirm Password"
            value={confirmPassword}
            onChange={this.onchnage}
            onBlur={this.handleConfirmPassword}
            type="password"
            helperText={confirmPasswordHelper.msg}
            fullWidth
            InputLabelProps={{
              classes: {
                root: classes.cssLabel,
                focused: classes.cssFocused
              }
            }}
            InputProps={{
              classes: {
                root: classes.cssOutlinedInput,
                input: classes.bodyRoot,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline
              }
            }}
            margin="normal"
            variant="outlined"
          />

          <Button
            variant="contained"
            disabled={loading}
            color="secondary"
            size="large"
            onClick={this.handleRegister}
            className={classes.button}
          >
            {loading ? (
              <CircularProgress
                size={24}
                className={classes.buttonProgress}
              />
            ) : (
              "Register"
            )}
          </Button>
        </form>
      </div>
    );
  }
}

RegisterComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

// function mapStateToProps(state) {
//   return {
//     data: state.data,
//   }
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getToken: getToken
  }, dispatch)
}

export default connect(
  null,
  mapDispatchToProps
)(withRouter(withStyles(styles)(RegisterComponent)));

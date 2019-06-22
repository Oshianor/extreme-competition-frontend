import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import isEmpty from 'validator/lib/isEmpty';
import CircularProgress from '@material-ui/core/CircularProgress';
import { config } from '../../../config';
import Axios from 'axios';
import Router from "next/router";





const styles = theme => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    flex: 1,
    justifyContent: "center"
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
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
    // margin: theme.spacing.unit,
    margin: "-1% 0px",
    borderRadius: 30,
    width: 150
    // padding: "10px 55px"
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
  cssLabel: {
    color: "white"
  },
  bodyRoot: {
    borderColor: "white",
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


class RegisterPath extends Component {
  state = {
    loading: false,
    password: "",
    passwordHelper: {
      msg: "",
      err: false
    },
    confirmPassword: "",
    confirmPasswordHelper: {
      msg: "",
      err: false
    },
    res: {
      error: false,
      msg: "",
      status: 'w'
    }
  };

  handlePasswordChange = async () => {
    const { password } = this.state;
    const { userObjId } = this.props;

    if (
      !this.handlePassword() ||
      !this.handleConfirmPassword() 
    ) {
      return false;
    }
    this.setState({
      loading: true
    });

    let data = {
      password,
      userObjId
    };

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      data: JSON.stringify(data),
      url: config.resetChangePassword
    };

    try {
      let register = await Axios(options);
      console.log("register  ===>>>> ", register);
      if (!register.data.error) {
        Router.push("/login");
      }
    } catch (error) {
      console.log("ERROR : ", error);
    }
    this.setState({
      loading: false
    });
  };

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
  };

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
  };


  onchnage = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const {
      res,
      password,
      passwordHelper,
      loading,
      confirmPassword,
      confirmPasswordHelper
    } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {res.error && (
          <Typography
            variant="caption"
            gutterBottom
            style={{ margin: "0 8%", fontSize: 12, color: "red" }}
          >
            *{res.msg}
          </Typography>
        )}

        <Typography
          variant="h4"
          gutterBottom
          style={{ margin: "2% 8%", marginTop: "10%", fontSize: 20 }}
        >
          Change Password
        </Typography>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            error={passwordHelper.err}
            name="password"
            label="Password" //"Password" //   //密码
            style={{ margin: "2% 8%" }}
            value={password}
            type="password"
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
            onBlur={this.handlePassword}
            onChange={this.onchnage}
            helperText={passwordHelper.msg}
            fullWidth
            margin="normal"
            variant="outlined"
          />

          <TextField
            error={confirmPasswordHelper.err}
            name="confirmPassword"
            label="Confirm Password" //"Confirm Password" 确认密码
            style={{ margin: "2% 8%" }}
            value={confirmPassword}
            onChange={this.onchnage}
            onBlur={this.handleConfirmPassword}
            type="password"
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
            helperText={confirmPasswordHelper.msg}
            fullWidth
            margin="normal"
            variant="outlined"
          />

          <div style={{ margin: "0 8%" }}>
            <Button
              variant="outlined"
              disabled={loading}
              color="primary"
              onClick={this.handlePasswordChange}
              className={classes.button}
            >
              {loading ? (
                <CircularProgress
                  size={24}
                  className={classes.buttonProgress}
                />
              ) : (
                "save"
              )}
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

RegisterPath.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(RegisterPath);
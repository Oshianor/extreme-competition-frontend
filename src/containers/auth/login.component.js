/* eslint-disable no-underscore-dangle */

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
// import Router from 'next/router';
import green from '@material-ui/core/colors/green';
import Axios from 'axios';
import { config } from '../../../config';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getToken, getMe } from "../../actions/data";
import Router, { withRouter } from "next/router";
import Link from "next/link";


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
    flexWrap: "wrap",
    justifyContent: "center",
    // margin: "0px 2%",
    // [theme.breakpoints.up("lg")]: {
    //   // large: 1280px or larger
    //   margin: "0px 25%"
    // }
  },
  textField: {
    // marginLeft: theme.spacing.unit,
    // marginRight: theme.spacing.unit,
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
    textDecoration: "underline",
    textDecorationColor: "blue",
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
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
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



class LoginComponent extends Component {
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
    res: {
      error: false,
      msg: ''
    }
  }

  async handleLogin() {
    const { email, password, emailHelper, passwordHelper } = this.state;
    const { getToken, router, getMe } = this.props;

    if (!this.handleEmail() || !this.handlePassword()) {
      return false;
    }
    this.setState({
      loading: true
    });
    let data = {
      email, password
    };
    
    // console.log(data);
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      data: JSON.stringify(data),
      url: config.login,
    };
    

    try {
      let login = await Axios(options);
      console.log("LOGIN", login);
      
      if (login.data.error) {
        this.setState({
          res: login.data,
          password: ''
        });
      } else {
        this.setState({
          res: {
            error: false,
            msg: ''
          },
          password: ""
        });
        localStorage.setItem('token', login.headers['x-auth-token']);
        getToken(login.headers['x-auth-token']);
        getMe(login.data.content);
        // router.push("/");
        Router.push("/error", "/");
      }
    } catch (error) {
      console.log("ERROR : ", error);
      
    }
    this.setState({
      loading: false,
      password: ''
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

  onchnage = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render(){
    const { classes } = this.props;
    const { password, passwordHelper, email, emailHelper, loading, res } = this.state;
    return (
      <div className={classes.root}>
        <Typography
          variant="h4"
          gutterBottom
          style={{ margin: "2% 8%", color: "white" }}
        >
          Welcome, Login to your Account
        </Typography>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} sm={8} md={6}>
            <form
              className={classes.container}
              noValidate
              autoComplete="off"
            >
              {res.error && (
                <Typography
                  variant="caption"
                  gutterBottom
                  style={{ margin: "0 8%", fontSize: 12, color: "red" }}
                >
                  *{res.msg}
                </Typography>
              )}
              <TextField
                error={emailHelper.err}
                name="email"
                value={email}
                label="Email"
                type="email"
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
                required
                onBlur={this.handleEmail}
                onChange={this.onchnage}
                helperText={emailHelper.msg}
                fullWidth
                margin="normal"
                variant="outlined"
              />

              <TextField
                error={passwordHelper.err}
                required
                name="password"
                label="Password"
                value={password}
                onBlur={this.handlePassword}
                onChange={this.onchnage}
                type="password"
                helperText={passwordHelper.msg}
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
                fullWidth
                margin="normal"
                variant="outlined"
              />
              <Grid container spacing={24} style={{ margin: "0 8%" }}>
                <Grid item xs={6} sm={6} style={{ paddingLeft: 0 }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    disabled={loading}
                    onClick={this.handleLogin.bind(this)}
                    className={classes.button}
                  >
                    {loading ? (
                      <CircularProgress
                        size={24}
                        className={classes.buttonProgress}
                      />
                    ) : (
                      "Log In"
                    )}
                  </Button>
                </Grid>
                <Grid item xs={6} sm={6} style={{ paddingRight: 0 }}>
                  <Typography
                    variant="overline"
                    gutterBottom
                    className={classes.forgot}
                  >
                    <Link href="/forgot-password">
                      <a style={{ color: "white" }}>Forgot Password?</a>
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </div>
    );
  }
}

LoginComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

// export default withStyles(styles)();
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getToken: getToken,
    getMe: getMe
  }, dispatch)
}

export default connect(
  null,
  mapDispatchToProps
)(withRouter(withStyles(styles)(LoginComponent)));

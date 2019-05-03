import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { fade } from '@material-ui/core/styles/colorManipulator';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
// import Auth from '../auth/auth';
import Logout from '@material-ui/icons/ExitToAppRounded';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getToken, getMe } from "../../actions/data";
import Button from '@material-ui/core/Button';
import MoreHeader from './more.header';
import { withRouter } from 'next/router'



const styles = theme => ({
  root: {
    paddingRight: 15,
    paddingLeft: 15,
    marginRight: 'auto',
    marginLeft: 'auto',
    backgroundColor: "transparent",
    [theme.breakpoints.up('lg')]: { // large: 1280px or larger
      width: 1170,
    },
    [theme.breakpoints.up('xl')]: { // extra-large: 1920px or larger
      width: 1366,
    },
    textAlign: 'center'
  },
  rootAppBar: {
    backgroundColor: "transparent",
    boxShadow: "0px 0px 0px 0px",
  },
  largeText: {
    color: 'white'
  },
  title: {
    display: "flex",
    alignItems: "baseline",
    textDecoration: "none"
  },
  smallText: {
    fontSize: 11,
    color: "white"
  },
  appBar: {
    // [theme.breakpoints.up('lg')]: { // large: 1280px or larger
    //   height: 400,
    // },
    // backgroundImage: "url('/static/Base.svg')",
    backgroundColor: "black",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    boxShadow: "0 0 0 0"
  },
  grow: {
    flexGrow: 1
  },
  butt: {
    color: "white",
    "&:hover": {
      color: theme.palette.primary.main
    }
  },
  but: {
    color: "black",
    backgroundColor: "white",
    "&:hover": {
      color: "white"
    }
  }
});

class Header extends React.Component {
  // state = {
  //   open: false
  // }

  // handleAuth = () => {
  //   this.setState(state => ({
  //     open: !state.open
  //   }))
  // }

  handleLogout = () => {
		const { getToken, getMe } = this.props;
		localStorage.removeItem('token');
    getToken(null);
    getMe(null)
  }
  

  displayAdminLink = () => {
    const { classes, data } = this.props;
    return (
      <>
       <Link href={"/admin/" + data.token}>
          <a style={{ textDecoration: 'none' }} >
            <Button
              color="primary"
              className={classes.butt}
            >
              Admin
            </Button>
          </a>
        </Link>
      </>
    )
  }


  render() {
    const { classes, data, admin, router } = this.props;
    // console.log("router", router);
    
    return (
      <div className={classes.appBar} >
        <div className={classes.root}>
          <AppBar position="static" className={classes.rootAppBar} >
            <Toolbar>
              <Link href="/">
                <a className={classes.title}>
                  <img src="/static/extremecompetitions.jpeg" style={{ width: 75, height: 75 }} />
                </a>
              </Link>
              <div className={classes.grow} />
              
              {
                data.me &&
                  data.me.isAdmin ?
                    this.displayAdminLink()
                  : ""
              }

              <Link href='/' prefetch>
                <a style={{ textDecoration: 'none' }} >
                  <Button
                    color="primary"
                    size="medium"
                    className={classes.butt}
                  >
                    Home
                  </Button>
                </a>
              </Link>
              {
                router.pathname === "/" &&
                <>
                  <a href="/#faq" style={{ textDecoration: 'none' }} >
                    <Button
                      color="primary"
                      size="medium"
                      className={classes.butt}
                    >
                      FAQ
                    </Button>
                  </a>
                  <a href='/#testimonial' style={{ textDecoration: 'none' }} >
                    <Button
                      color="primary"
                      size="medium"
                      className={classes.butt}
                    >
                      Testimonials
                    </Button>
                  </a>
                </>
              }
              <Link href='/winners' prefetch>
                <a style={{ textDecoration: 'none' }} >
                  <Button
                    color="primary"
                    size="medium"
                    className={classes.butt}
                  >
                    Winners
                  </Button>
                </a>
              </Link>
              {
                data.token ?
                  <IconButton color="primary" onClick={this.handleLogout} >
                    <Logout />
                  </IconButton>
                :
                  <>
                  <Link href="/login" >
                    <a style={{ textDecoration: "none" }}>
                      <Button
                        color="primary"
                        variant="extendedFab"
                        onClick={this.handleAuth}
                        className={classes.but}
                      >
                        Login
                      </Button>
                    </a>
                  </Link>
                  
                  <Link href="/register" >
                    <a style={{ textDecoration: "none" }}>
                      <Button
                        color="primary"
                        variant="extendedFab"
                        onClick={this.handleAuth}
                        className={classes.but}
                      >
                        Register
                      </Button>
                    </a>
                  </Link>
                </>
              }
            </Toolbar>
          </AppBar>
          {/* {
            !admin &&
              <MoreHeader />
          } */}
        </div>
      </div>
    );
  }
}

Header.defaultProps = {
  admin: false
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  admin: PropTypes.bool
};
function mapStateToProps(state) {
  return {
    data: state.data,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getToken: getToken,
    getMe: getMe
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(Header)));
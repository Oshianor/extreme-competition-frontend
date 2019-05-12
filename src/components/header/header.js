import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { fade } from '@material-ui/core/styles/colorManipulator';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import Auth from '../auth/auth';
import Logout from '@material-ui/icons/ExitToAppRounded';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getToken, getMe } from "../../actions/data";
import Button from '@material-ui/core/Button';
import MoreHeader from './more.header';
import { withRouter } from 'next/router';
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";


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
  rootAppBar: {
    backgroundColor: "transparent",
    boxShadow: "0px 0px 0px 0px"
  },
  largeText: {
    color: "white"
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
  },
  img: {
    width: 150,
    height: 105,
    [theme.breakpoints.down("sm")]: {
      width: 75,
      height: 75
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
});

class Header extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  handleLogout = () => {
    const { getToken, getMe } = this.props;
    localStorage.removeItem("token");
    getToken(null);
    getMe(null);
  };

  displayAdminLink = () => {
    const { classes, data } = this.props;
    return (
      <a href={"/admin/" + data.token} style={{ textDecoration: "none" }}>
        <Button color="primary" className={classes.butt}>
          Admin
        </Button>
      </a>
    );
  };

  render() {
    const { classes, data, admin, router } = this.props;
    // console.log("router", router);
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <a
          href="/"
          style={{ textDecoration: "none", background: "transparent" }}
        >
          <MenuItem>Home</MenuItem>
        </a>
        {router.pathname === "/" && (
          <>
            <a
              href="/#faq"
              style={{ textDecoration: "none", background: "transparent" }}
            >
              <MenuItem>FAQ</MenuItem>
            </a>
            <a
              href="/#testimonial"
              style={{ textDecoration: "none", background: "transparent" }}
            >
              <MenuItem>Testimonials</MenuItem>
            </a>
          </>
        )}
        <a
          href="/how-to-play"
          style={{ textDecoration: "none", background: "transparent" }}
        >
          <MenuItem>How To Play</MenuItem>
        </a>
        <a
          href="/winners"
          style={{ textDecoration: "none", background: "transparent" }}
        >
          <MenuItem>Winners</MenuItem>
        </a>
        <a
          href="/"
          style={{ textDecoration: "none", background: "transparent" }}
        >
          <MenuItem>Home</MenuItem>
        </a>
        {data.token ? (
          <MenuItem onClick={this.handleLogout}>
            <IconButton color="primary">
              <Logout />
            </IconButton>
            <p>Log Out</p>
          </MenuItem>
        ) : (
          <>
            <a href="/login" style={{ textDecoration: "none" }}>
              <MenuItem>Login</MenuItem>
            </a>
            <a href="/register" style={{ textDecoration: "none" }}>
              <MenuItem>Register</MenuItem>
            </a>
          </>
        )}
      </Menu>
    );

    return (
      <div className={classes.appBar}>
        <div className={classes.root}>
          <AppBar position="static" className={classes.rootAppBar}>
            <Toolbar style={{ flexWrap: "wrap" }}>
              <a href="/" className={classes.title}>
                <img
                  src="/static/extremecompetitions.jpeg"
                  className={classes.img}
                />
              </a>
              <div className={classes.grow} />

              <div className={classes.sectionDesktop}>
                {data.me && data.me.isAdmin ? this.displayAdminLink() : ""}

                <a href="/" style={{ textDecoration: "none" }}>
                  <Button
                    color="primary"
                    size="medium"
                    className={classes.butt}
                  >
                    Home
                  </Button>
                </a>
                {router.pathname === "/" && (
                  <>
                    <a href="/#faq" style={{ textDecoration: "none" }}>
                      <Button
                        color="primary"
                        size="medium"
                        className={classes.butt}
                      >
                        FAQ
                      </Button>
                    </a>
                    <a
                      href="/#testimonial"
                      style={{ textDecoration: "none" }}
                    >
                      <Button
                        color="primary"
                        size="medium"
                        className={classes.butt}
                      >
                        Testimonials
                      </Button>
                    </a>
                  </>
                )}
                <a href="/how-to-play" style={{ textDecoration: "none" }}>
                  <Button
                    color="primary"
                    size="medium"
                    className={classes.butt}
                  >
                    How To Play
                  </Button>
                </a>
                <a href="/winners" style={{ textDecoration: "none" }}>
                  <Button
                    color="primary"
                    size="medium"
                    className={classes.butt}
                  >
                    Winners
                  </Button>
                </a>
                {data.token ? (
                  <IconButton color="primary" onClick={this.handleLogout}>
                    <Logout />
                  </IconButton>
                ) : (
                  <>
                    <a href="/login" style={{ textDecoration: "none" }}>
                      <Button
                        color="primary"
                        variant="extendedFab"
                        onClick={this.handleAuth}
                        className={classes.but}
                      >
                        Login
                      </Button>
                    </a>
                    <a href="/register" style={{ textDecoration: "none" }}>
                      <Button
                        color="primary"
                        variant="extendedFab"
                        onClick={this.handleAuth}
                        className={classes.but}
                      >
                        Register
                      </Button>
                    </a>
                  </>
                )}
              </div>
              <div className={classes.sectionMobile}>
                <IconButton
                  aria-haspopup="true"
                  onClick={this.handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          {renderMenu}
          {renderMobileMenu}
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
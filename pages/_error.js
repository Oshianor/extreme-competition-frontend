/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Header from '../src/components/header/header';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    // marginTop: -20,
  },
  
  center: {
    margin: "auto",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute"
  },
  demo: {
    marginTop: 65,
    [theme.breakpoints.up("lg")]: {
      width: 1170
    }
  },
  divCenter: {
    marginTop: 150,
    margin: "0 auto",
    position: "absolute"
  },
  text: {
    textAlign: "center",
    color: "gray"
  },
  second: {
    marginTop: 20
  },
  rootImg: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

class Index extends React.Component {
  state = {
    start: true,
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
      <Header />
        <Grid container justify="center" spacing={8}>
          <Grid 
            container
            className={classes.demo}
            alignItems="center"
            justify="center"
          >
            <Grid item>
              <img src="/static/icon/setting.png" />
            </Grid>
            <Grid item>
              <Typography variant="h1">
                {this.props.statusCode} &nbsp;ERROR
              </Typography>
              <Typography variant='body2' className={classes.text} >This page couldn't be found</Typography>
            </Grid> 


            <Grid item className={classes.second}>
              <Typography variant="h4">ONE OF OUR DEVELOPER WAS RESPONSIBLE FOR THIS...</Typography>
              <Typography variant="h6" className={classes.text}>WHO WOULD YOU LIKE FIRED?</Typography>
            </Grid> 

            <Grid item >
              <ButtonBase
                focusRipple
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                style={{
                  width: "225px",
                  height: "300px"
                }}
              >
                <span
                  className={classes.imageSrc}
                  style={{
                    backgroundImage: `url(/static/developer/1.jpg)`,
                  }}
                />
                <span className={classes.imageBackdrop} />
                <span className={classes.imageButton}>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    className={classes.imageTitle}
                  >
                    FIRE
                    <span className={classes.imageMarked} />
                  </Typography>
                </span>
              </ButtonBase>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
              <ButtonBase
                focusRipple
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                style={{
                  width: "225px",
                  height: "300px"
                }}
              >
                <span
                  className={classes.imageSrc}
                  style={{
                    backgroundImage: `url(/static/developer/2.jpg)`,
                  }}
                />
                <span className={classes.imageBackdrop} />
                <span className={classes.imageButton}>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    className={classes.imageTitle}
                  >
                    FIRE
                    <span className={classes.imageMarked} />
                  </Typography>
                </span>
              </ButtonBase>
              
            </Grid>

          </Grid>
        </Grid>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);

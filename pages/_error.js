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
              <img src="data:image/png;base64,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" />
            </Grid>
            <Grid item>
              <Typography variant="h1">
                {this.props.statusCode} &nbsp;ERROR
              </Typography>
              <Typography variant="body2" className={classes.text} >This page couldn't be found</Typography>
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
                    backgroundImage: `url(/static/icon/devloper1.jpg)`,
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
                    backgroundImage: `url(/static/icon/devloper1.jpg)`,
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


{/* <span>
                <img src="/static/icon/devloper1.jpg" width="225" height="300" />
                <Button>Fire!</Button>
              </span>
              
              &nbsp;
              &nbsp;
              &nbsp;
              <span>
                <img src="/static/icon/devloper1.jpg" width="225" height="300" />
                <Button>Fire!</Button>
              </span> */}
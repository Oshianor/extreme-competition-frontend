import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  root: {
    backgroundColor: "black"
  },
  demo: {
    marginTop: 30,
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
      width: 1344
    },
    textAlign: "center",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      // large: 1280px or larger
      justifyContent: "center"
    }
  },
  head: {
    color: "white"
  },
  listhead: {
    listStyleType: "none",
    margin: "10 auto",
    padding: 0
  },
  list: {
    color: "white",
    margin: 10,
    fontSize: 13
  },
  textbody: {
    color: "white",
    fontSize: 13,
    marginTop: 20
  },
  textUnder: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 13,
    color: "white",
    flexWrap: "wrap",
    margin: "1% 4%",
    [theme.breakpoints.up("lg")]: {
      margin: "1% 15%"
    },
    textAlign: "center"
  },
  payment: {
    [theme.breakpoints.up("lg")]: {
      width: 300,
      height: 100
    },
    [theme.breakpoints.only("md")]: {
      width: 300,
      height: 100
    },
    [theme.breakpoints.down("sm")]: {
      width: 300,
      height: 100
    }
  },
  img: {
    backgroundColor: "white",
    margin: "10px 5px",
    borderRadius: 25,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "gray"
    }
  },
  alink: {
    fontFamily: "poppins",
    color: "white",
    textDecoration: "none",
    "&:hover": {
      color: "gray"
    }
  }
});

function Footer(props) {
	const { classes } = props;
	return (
    <div className={classes.root}>
      <Grid container className={classes.demo}>
        <Grid xs={12} sm={4} md={4} lg={4} xl={4}>
          <Typography variant="h6" className={classes.head}>
            Payment Method
          </Typography>
          <img
            src="/static/payment.jpeg"
            // width="30"
            className={classes.payment}
          />
          {/* <Typography variant="h6" className={classes.head}>
            We're Listening
          </Typography>
          <Typography variant="h4" className={classes.textbody}>
            Phone: +234 812-178-4411
          </Typography> 
          <Typography variant="body1" className={classes.textbody}>
            Email: info.extremecompetitions@gmail.com
          </Typography> */}
        </Grid>

        <Grid xs={12} sm={4} md={4} lg={4} xl={4}>
          <Typography className={classes.textUnder}>
            ©2019 Extremecompetition.com. All rights reserved. | &nbsp;&nbsp;
            Powered by &nbsp;&nbsp;
            <img
              src="/static/tcai.jpeg"
              style={{ width: 45, height: 45 }}
            />{" "}
            &nbsp;&nbsp; | &nbsp;&nbsp;info.extremecompetitions@gmail.com
          </Typography>
        </Grid>

        <Grid xs={12} sm={4} md={4} lg={4} xl={4}>
          <Typography variant="h6" className={classes.head}>
            Social Links
          </Typography>
          <div>
            <a
              target="_blank"
              href="https://m.facebook.com/extremecompeitions/"
            >
              <img
                src="/static/facebook.png"
                width="30"
                className={classes.img}
              />
            </a>

            <a
              target="_blank"
              href="https://www.instagram.com/extreme.competitions/"
            >
              <img
                src="/static/instagram.png"
                width="30"
                className={classes.img}
              />
            </a>

            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCE7l5X1y375DYez5bamNVcw?view_as=subscriber"
            >
              <img
                src="/static/youtube.png"
                width="30"
                className={classes.img}
              />
            </a>
            {/* <img
              src="/static/twitter.png"
              width="30"
              className={classes.img}
            /> */}
          </div>
        </Grid>
      </Grid>

      {/* <Typography className={classes.textUnder}>
        Powered by <strong>TCAI</strong> © 2017 – 2019 Extremecompetition.com.
        All rights reserved..
      </Typography> */}
      {/* <Typography className={classes.textUnder}>
        Powered by &nbsp;&nbsp;
        <img src="/static/tcai.jpeg" style={{ width: 45, height: 45 }} />{" "}
        &nbsp;&nbsp; ©2019 Extremecompetition.com. All rights reserved..
      </Typography> */}
    </div>
  );
}

Footer.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Header from "../../components/header/header";
// import Countdown from '../../components/countdown/countdown';
import Game from '../../components/game/gameLarge';
import Faq from '../../components/faq/faq';
import Footer from '../../components/footer/footer'
import SubFooter from '../../components/footer/sub.footer';
import Testimonial from '../../components/testimonials/testimonial';
import Typography from '@material-ui/core/Typography';
import SliderGame from '../../components/slideGame/sliderGame';


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
  color: {
    color: "white",
    textAlign: "left",
    margin: '10px 0px',
    fontWeight: '700'
  }
});



class Home extends React.Component {
  render() {
    const { classes, games, testimonial, eight } = this.props;
    console.log('game', games);
    
    return (
      <div>
        <Header />
        <div className={classes.root}>
        
          <Typography variant="h4" className={classes.color} >
            Live Competitions
          </Typography>
          <SliderGame games={games} />

          <Typography variant="h4" className={classes.color} >
            More Competitions
          </Typography>
          <Game more={eight} />

          <Typography variant="h4" className={classes.color} >
            Testimonials
          </Typography>
          <Testimonial  testimonial={testimonial} />

          <Typography variant="h4" className={classes.color} >
            FAQ
          </Typography>
          <Faq />

        </div>
        <Footer />
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);

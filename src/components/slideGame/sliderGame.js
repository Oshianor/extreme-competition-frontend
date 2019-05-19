import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { image } from "../../../config";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import moment from 'moment'
import Countdown from '../countdown/countdown'


const styles = theme => ({
  root: {
    // width: "100%",
    // height: 400,
    // [theme.breakpoints.up('lg')]: { // large: 1280px or larger
    // 	height: 600,
    // },
  },
  img: {
    width: "100%",
    height: 400,
    [theme.breakpoints.up("lg")]: {
      // large: 1280px or larger
      height: 600
    }
  },
  side: {
    // top: -10,
    // right: -10,
    width: 150,
    height: 150,
    // position: "absolute",
    // zIndex: 9999,
    // overflow: "hidden"
  },
  sideNum: {
    // left: 9,
    // top: 30,
    backgroundColor: "red",
    // transform: "rotate(45deg)",
    // position: "absolute",
    // display: "block",
    width: 203,
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 5px 10px",
    color: "white",
    fontSize: 17,
    fontWeight: 700,
    lineHeight: 1,
    textShadow: "rgba(0, 0, 0, 0.2) 0px 1px 1px",
    textTransform: "uppercase",
    textAlign: "center",
    padding: "8px 0px"
  }
});


class SimpleSlider extends Component {

	nutralizeTitle = (title) => {
    return title.toLocaleLowerCase().split(" ").join("-").replace(/[.*+?^$/{}#()|[\]\\]/g, '');
  }
  render() {
    const { classes, games } = this.props;		
    return (
      <Slider
        className="slider-wrapper"
        autoplay={2000}
        buttonDisabled={true}
      >
        {games.map((game, index) => (
          <div
            key={game._id}
            className="slider-content"
            style={{
              background: `url('${image +
                game.img[0]}') no-repeat center center`
            }}
          >
            {/* <section>
              <Typography className={classes.side}>
                <Typography className={classes.sideNum}>
                  &#8358;{game.amt}
                </Typography>
              </Typography>
            </section> */}
            <div className="inner">
              <Typography variant="h1">{game.name}</Typography>
              <Typography variant="body1">
                {/* {moment(game.createdAt).fromNow()} */}
                &#8358;{game.amt}
              </Typography>
              <a
                href={
                  "/game/" + this.nutralizeTitle(game.name) + "/" + game._id
                }
                style={{ textDecoration: "none" }}
              >
                <Button
                  size="large"
                  style={{ background: "red", color: "white" }}
                >
                  Enter Now
                </Button>
              </a>
            </div>
            <section>
              <Countdown timer={game.timer} />
            </section>
          </div>
        ))}
      </Slider>
    );
  }
}

export default withStyles(styles)(SimpleSlider);






































































// import React, { Component } from "react";
// import Slider from "react-slick";
// import Typography from '@material-ui/core/Typography';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Button from '@material-ui/core/Button';
// import { image } from "../../../config";



// const styles = theme => ({
// 	root: {
// 		// width: "100%",
// 		// height: 400,
// 		// [theme.breakpoints.up('lg')]: { // large: 1280px or larger
// 		// 	height: 600,
// 		// },
// 	},
// 	img: {
// 		width: "100%",
// 		height: 400,
// 		[theme.breakpoints.up('lg')]: { // large: 1280px or larger
// 			height: 600,
// 		},
// 	},
// });


// class SimpleSlider extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1
// 		};
//     const { classes, games } = this.props;		
//     return (
// 			<Slider {...settings}>
// 				{
// 					games.map((game) => (
// 						<div 
// 							key={game._id}
// 							className={classes.root} 
// 							// style={{ backgroundImage: "url(" + image + game.img[0] + ")" }} 
// 						>
// 							<img className={classes.img} src={image + game.img[0]} />
// 							<Button
// 								size="large"
// 								style={{ background: "red", color: "white" }}
// 							>
// 								Enter Now
// 							</Button>
// 						</div>
// 					))
// 				}
// 			</Slider>
//     );
//   }
// }

// export default withStyles(styles)(SimpleSlider);

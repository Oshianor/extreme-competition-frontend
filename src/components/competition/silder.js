import React, { Component } from "react";
import Slider from "react-slick";
import withStyles from '@material-ui/core/styles/withStyles';


const styles = theme => ({
  root: {
    maxWidth: 400,
    maxHeight: 500,
    [theme.breakpoints.between('md', 'xl')]: {
      maxWidth: 600
    },
  }
});


class SimpleSlider extends Component {
  render() {
		const { img, classes } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      // asaccessibility: false
      arrows: false
    };
    return (
      <div className={classes.root}>
        <Slider {...settings}>
					{
						img.map(im => (
							<div>
								<img src={im} height={400} />
							</div>
						))
					}
        </Slider>
      </div>
    );
  }
}


export default withStyles(styles)(SimpleSlider);
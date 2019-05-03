import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";



const styles = theme => ({
	root: {
		display: "flex",
		background: 'inherit',
		justifyContent: "space-between",
		alignItems: "center",
		textAlign: "left"
	},
	img: {
		width: 400,
	},
	color: {
		color: "white",
	},
	smallcolor: {
		color: "white",
		[theme.breakpoints.down('xs')]: { // large: 1280px or larger
			color: 'black',
		},
	},
	text: {
		maxWidth: 500,
		// [theme.breakpoints.down('sm')]: { // large: 1280px or larger
		// 	maxWidth: 400,
		// 	textAlign: 'center'
		// },
		[theme.breakpoints.down('sm')]: { // large: 1280px or larger
			display: 'none',
		},
	},
	but: {
    "&:hover": {
    	color: theme.palette.primary.main
    }
	}
});



class MoreHeader extends Component {
	render() {
		const { classes } = this.props;
		return (
      <div className={classes.root}>
        <img src="/static/homeimage.svg" className={classes.img} />
        <div className={classes.text}>
          <Typography variant="h3" className={classes.color} >
						GET REWARDED FOR HAVING FUN...
					</Typography>
          <Typography variant="button" className={classes.smallcolor} >
            Play games on major social media platforms, and stand a chance
            to win amazing prices all for goofing off and having fun...
          </Typography>
					<Button variant="extendedFab" className={classes.but} style={{ backgroundColor: "white" }} >
						Play games
					</Button>
        </div>
      </div>
    );
	}
}

export default withStyles(styles)(MoreHeader);
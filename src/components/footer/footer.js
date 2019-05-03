import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
	root: {
		backgroundColor: 'black',
	},
  demo: {
		marginTop: 30,
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
  	textAlign: 'center',
		display: "flex",
		justifyContent: "space-between",
		[theme.breakpoints.down('xs')]: { // large: 1280px or larger
			justifyContent: "center"
		},
  },
	head: {
		color: 'white',
	},
	listhead: {
		listStyleType: 'none',
		margin: "10 auto",
		padding: 0
	},
	list: {
		color: 'white',
		margin: 10,
    fontSize: 13,
	},
	textbody: {
		color: 'white',
		marginTop: 20
	},
	textUnder: {
		fontSize: 13,
		color: 'white',
		flexWrap: 'wrap',
		margin: '1% 4%',
		[theme.breakpoints.up("lg")]: {
			margin: '1% 15%',
		},
		textAlign: 'center'
	},
	img: {
		backgroundColor: 'white',
		margin: '10px 5px',
		borderRadius: 25,
		cursor: 'pointer',
		'&:hover': {
			backgroundColor: 'gray'
		}
	},
	alink: {
		fontFamily: 'poppins',
		color: 'white',
		textDecoration: 'none',
		'&:hover': {
			color: 'gray'
		}
	},
});

function Footer(props) {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<div className={classes.demo}>
				<div>
					<Typography variant='h4' className={classes.head} >
						We're Listening
					</Typography>
					<Typography variant='h6' className={classes.textbody} >
						Phone: +234 812-178-4611
					</Typography>
					<Typography variant='h6' className={classes.textbody} >
						Email: extremecompetitions@gmail.com
					</Typography>
				</div>
				
				<div>
					<Typography variant='h6' className={classes.head} >
						Social Links
					</Typography>
					<div>
						<img src="/static/facebook.png"  width='30' className={classes.img} />
						<img src="/static/instagram.png" width='30' className={classes.img} />
						<img src="/static/twitter.png" width='30' className={classes.img} />
					</div>
				</div>
			</div>

			<Typography className={classes.textUnder}>
				Powered by <strong>TCAI</strong> © 2017 – 2019 Extremecompetition.com. All rights reserved..
			</Typography>
		</div>
	)
}

Footer.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
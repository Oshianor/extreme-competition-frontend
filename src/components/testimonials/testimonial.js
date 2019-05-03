import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { image } from '../../../config';

const styles = theme => ({
	root: {
		marginTop: 20,
		marginBottom: 20,
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
		display: 'flex',
		flexWrap: "wrap",
		justifyContent: "space-evenly"
	},
  card: {
		maxWidth: 345,
		backgroundColor: "#505050bd"
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
	},
	color: {
		color: "white"
	},
	msgcolor: {
		color: "white",
		textTransform: "lowercase"
	}
});

function ImgMediaCard(props) {
  const { classes, testimonial } = props;
  return (
		<div id="testimonial" className={classes.root}>
			{
				testimonial.map(test => (
					<Card key={test._id} className={classes.card}>
						<CardActionArea>
							<CardMedia
								component="img"
								className={classes.media}
								height="140"
								image={image + test.img}
							/>
							<CardContent>
								<Typography variant="h6" className={classes.color} >
									{test.name}
								</Typography>
								<Typography variant='body1' className={classes.color} >
									Winner&nbsp;{test.prize}
								</Typography>
								<Typography className={classes.msgcolor} >
									{test.msg}
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				))
			}
		</div>
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);

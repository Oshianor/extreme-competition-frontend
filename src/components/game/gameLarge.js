import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Countdown from '../countdown/countdown'
import Router from 'next/router';
import { image } from '../../../config';


const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center"
    }
  },
  root: {
    width: 320,
    height: 250,
    [theme.breakpoints.up("md")]: {
      width: 400,
      height: 250
    },
    backgroundRepeat: "no-repeat",
    backgroundColor: "rgb(221, 221, 221)",
    position: "relative",
    zIndex: 1,
    display: "block",
    color: "rgb(255, 255, 255)",
    marginBottom: 30,
    backgroundSize: "cover",
    padding: 16,
    transition: "all 0.3s ease 0s",
    backgroundPosition: "center",
    borderRadius: 5
    // opacity: 0.8
  },
  side: {
    top: -10,
    right: -10,
    width: 150,
    height: 150,
    position: "absolute",
    zIndex: 9999,
    overflow: "hidden"
  },
  sideNum: {
    left: 9,
    top: 30,
    backgroundColor: "red",
    transform: "rotate(45deg)",
    position: "absolute",
    display: "block",
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
  },
  name: {
    position: "absolute",
    bottom: 0,
    left: 0,
    color: "white",
    width: "100%",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "500",
    backgroundColor: "black"
  },
  price: {
    padding: "0 20px",
    position: "absolute",
    top: 20,
    left: 0,
    borderRadius: "0px 10px 10px 0px",
    display: "inline-block",
    backgroundColor: "#cb132b",
    fontSize: 22
  },
  priceText: {
    fontWeight: 600,
    padding: "3px 10px",
    color: "white"
  }
});

function ButtonBases(props) {
  const nutralizeTitle = (title) => {
    return title.toLocaleLowerCase().split(" ").join("-").replace(/[.*+?^$/{}#()|[\]\\]/g, '');
  }

  // const handleRoute = () => {
  //   Router.push("/game/" + nutralizeTitle(name) + "/" + gameId);
  // }

  // // const MyLink  = props => <Link href={"/game/" + nutralizeTitle(name) + "/" + gameId} prefetch />;
  const { classes, more } = props;
  console.log('more', more);
  
  // let imgUrl = url.mimetype === "image/png" ? url.filename + ".png" : url.filename + ".jpg"
  return (
    <div className={classes.container}>
      {more.map((game, index) => (
        <a
          key={game._id}
          href={"/game/" + nutralizeTitle(game.name) + "/" + game._id}
          className={classes.root}
          style={{ backgroundImage: "url(" + image + game.img[0] + ")" }}
        >
          {!game.status ? (
            <div className={classes.side}>
              <Typography className={classes.sideNum}>Sold Out</Typography>
            </div>
          ) : (
            <div className={classes.price}>
              <Typography className={classes.priceText}>
                &#8358;{game.amt}
              </Typography>
            </div>
          )}
          <Typography className={classes.name}>{game.name}</Typography>
        </a>
      ))}
    </div>
  );
}

ButtonBases.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonBases);






































// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import ButtonBase from '@material-ui/core/ButtonBase';
// import Typography from '@material-ui/core/Typography';
// import Countdown from '../countdown/countdown'
// import Router from 'next/router';
// import { image } from '../../../config';


// const styles = theme => ({
//   root: {
//     // display: 'flex',
// 		// flexWrap: 'wrap',
// 		// justifyContent: "center",
// 		// width: '100%',
// 		// maxWidth: 400,
// 		// margin: 10
//   },
//   image: {
//     position: 'relative',
// 		height: 500,
// 		// borderRadius: 20,
//     [theme.breakpoints.down('xs')]: {
//       width: '100% !important', // Overrides inline-style
//       height: 300,
//     },
//     '&:hover, &$focusVisible': {
//       zIndex: 1,
//       '& $imageBackdrop': {
//         opacity: 0.15,
//       },
//       '& $imageMarked': {
//         opacity: 0,
//       },
//       '& $imageTitle': {
//         border: '4px solid currentColor',
//       },
//     },
//   },
//   focusVisible: {},
//   imageButton: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     color: theme.palette.common.white,
//   },
//   imageSrc: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     backgroundSize: 'cover',
//     backgroundPosition: 'top center',
//   },
//   imageBackdrop: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     backgroundColor: theme.palette.common.black,
//     opacity: 0.6,
//     transition: theme.transitions.create('opacity'),
//   },
//   imageTitle: {
//     position: 'relative',
//     padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
//   },
//   imageMarked: {
//     height: 3,
//     width: 18,
//     backgroundColor: theme.palette.common.white,
//     position: 'absolute',
//     bottom: -2,
//     left: 'calc(50% - 9px)',
//     transition: theme.transitions.create('opacity'),
//   },
// });

// // const images = [
// //   {
// //     url: '/static/images/grid-list/breakfast.jpg',
// //     title: 'Breakfast',
// //     width: '40%',
// //   },
// //   {
// //     url: '/static/images/grid-list/burgers.jpg',
// //     title: 'Burgers',
// //     width: '30%',
// //   },
// //   {
// //     url: '/static/images/grid-list/camera.jpg',
// //     title: 'Camera',
// //     width: '30%',
// //   },
// // ];
// // https: //material-ui.com/static/images/grid-list/breakfast.jpg

// function ButtonBases(props) {
//   const nutralizeTitle = (title) => {
//     return title.toLocaleLowerCase().split(" ").join("-").replace(/[.*+?^$/{}()|[\]\\]/g, '-');
//   }

//   const handleRoute = () => {
//     Router.push("/game/" + nutralizeTitle(name) + "/" + gameId);
//   }

//   // const MyLink  = props => <Link href={"/game/" + nutralizeTitle(name) + "/" + gameId} prefetch />;
//   const { classes, url, name, timer, gameId, index } = props;
//   console.log('url', url);
  
//   // let imgUrl = url.mimetype === "image/png" ? url.filename + ".png" : url.filename + ".jpg"
//   return (
//     <>
// 			<Countdown timer={timer} />
//         <ButtonBase
//           onClick={handleRoute}
//           focusRipple
//           className={classes.image}
//           focusVisibleClassName={classes.focusVisible}
//           style={ index === 0 ? { width: '70%' } : { width: '20%'} }
//         >
//           <span
//             className={classes.imageSrc}
//             style={{
//               backgroundImage: `url(${image + url.filename})`,
//             }}
//           />
//           <span className={classes.imageBackdrop} />
//           <span className={classes.imageButton}>
//             <Typography
//               component="span"
//               variant="subtitle1"
//               color="inherit"
//               className={classes.imageTitle}
//             >
//               {name}
//               <span className={classes.imageMarked} />
//             </Typography>
//           </span>
//         </ButtonBase>
//     </>
//   );
// }

// ButtonBases.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(ButtonBases);

/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react';
import Competition from '../../components/competition/competition';
import MobileSlider from "../../components/competition/mobile.silder";
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import classnames from "classnames"
import Header from "../../components/header/header";
import Button from '@material-ui/core/Button';
import axios from "axios";
import { bindActionCreators } from 'redux';
import { getToken, getWinner } from "../../actions/data";
import { config, image } from "../../../config";
import { connect } from 'react-redux';
import Back from "@material-ui/icons/ArrowBack";
import Forward from "@material-ui/icons/ArrowForward";
import IconButton from "@material-ui/core/IconButton";
import moment from "moment";

const styles = theme => ({
  head: {
    fontWeight: "600",
    textAlign: "center",
    textTransform: "capitalize"
  },
  small: {
    fontSize: 12
  },
  con: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    [theme.breakpoints.down("md")]: {
      // large: 1280px or larger
      justifyContent: "center"
    }
  },
  root: {
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
      width: 1366
    },
    textAlign: "center"
  },
  ticket: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start"
  },
  number: {
    width: 80,
    height: 60,
    color: "white",
    textAlign: "center",
    border: "1px solid black",
    paddingTop: 20
  },
  open: {
    cursor: "pointer",
    backgroundColor: theme.palette.primary.main
  },
  close: {
    cursor: "not-allowed",
    backgroundColor: "black"
  },
  selected: {
    cursor: "pointer",
    backgroundColor: "white",
    color: "gray"
  },
  but: {
    borderRadius: 0
  },
  disabled: {
    color: "white",
    backgroundColor: "white"
  },
  container: {
		display: 'flex',
		justifyContent: 'center',
		margin: "1% 10%"
	}
});



class GameContainer extends Component {
  state = {
    index: 0
  };

  handleWinners = num => async event => {
    const { getWinner } = this.props;
    const { index } = this.state;
    let laa;
    if (num === "m") {
      laa = Number(index) - 1;
    } else {
      laa = Number(index) + 1;
    }
    let winner = await axios.get(config.getWinners + "/" + laa);
    getWinner(winner.data.content);

    this.setState({
      index: laa
    });
  };

  handleBack = () => {
    const { index, select, warning } = this.state;
    let num = Number(index) - 1;
    this.setState({
      index: num
    });
  };

  render() {
    const { classes, data } = this.props;

    return (
      <div>
        <Header admin={true} />
        {data.winner && 
        <div className={classes.root}>
          <Typography
            variant="h4"
            color="primary"
            style={{ margin: 10, color: "white" }}
          >
            EXTREME COMPETITION WINNERS
          </Typography>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly"
            }}
          >
            <IconButton onClick={this.handleWinners("m")}>
              <Back style={{ color: "white", fontSize: 30 }} />
            </IconButton>
            <Typography variant="h6" color="primary">
              {data.winner && data.winner.date}
            </Typography>
            <IconButton onClick={this.handleWinners("a")}>
              <Forward style={{ color: "white", fontSize: 30 }} />
            </IconButton>
          </div>

          <div className={classes.container}>
            {data.winner.winner.length === 0 ? (
              <Typography variant="h4" style={{ color: "white" }}>
                There are currently no winners
              </Typography>
            ) : (
              data.winner.winner.map(win => (
                <div className="example-1 card" key={win._id}>
                  <div
                    className="wrapper"
                    style={{
                      background:
                        "url(" +
                        image +
                        win.img +
                        ") 20% 1% / cover no-repeat"
                    }}
                  >
                    <div className="date">
                      <span className="day">
                        {moment(win.dateWon).format("D")}
                      </span>
                      <span className="month">
                        {moment(win.dateWon).format("MMM")}
                      </span>
                      <span className="year">
                        {moment(win.dateWon).format("YYYY")}
                      </span>
                    </div>
                    <div className="data">
                      <div className="content">
                        <span className="author">{win.name}</span>
                        <h1 className="title">
                          Winner {win.prize} (Ticket: #{win.ticket} )
                          <a href="#" />
                        </h1>
                        <div
                          className="text"
                          style={{
                            display: "flex",
                            justifyContent: "space-between"
                          }}
                        >
                          <a target="_blank" href={win.liveDrawVideo}>
                            <Button variant="contained" color="primary">
                              Live Draw Video
                            </Button>
                          </a>

                          <a target="_blank" href={win.winnerVideo}>
                            <Button variant="contained" color="primary">
                              Winner Video
                            </Button>
                          </a>
                        </div>
                        {/* <label for="show-menu" className="menu-button"><span></span></label> */}
                      </div>
                      <input type="checkbox" id="show-menu" />
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
	return {
		data: state.data,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		getToken: getToken,
		getWinner: getWinner
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(GameContainer));
// export default withStyles(styles)(GameContainer);

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
import { getToken, getTickets } from "../../actions/data";
import { config } from "../../../config";
import Warning from '../../components/reuseable/warning';
import { connect } from 'react-redux';
import Details from '../../components/competition/details';
import Payment from "../../components/pay/pay"
// import RavePaymentModal from "react-ravepayment";



const styles = theme => ({
	head: {
		fontWeight: '600',
		textAlign: 'center',
		textTransform: 'capitalize'
	},
	small: {
		fontSize: 12
	},
	container: {

	},
	con: {
		display: 'flex',
		justifyContent: 'space-between',
		flexWrap: 'wrap',
		[theme.breakpoints.down('md')]: { // large: 1280px or larger
			justifyContent: 'center',
		},
	},
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
		textAlign: 'center',
		
	},
	ticket: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "flex-start",
	},
	number: {
		width: 80,
		height: 60,
		color: 'white',
		textAlign: "center",
		border: '1px solid black',
		paddingTop: 20
	},
	open: {
		cursor: 'pointer',
		backgroundColor: theme.palette.primary.main
	},
	close: {
		cursor: 'not-allowed',
		backgroundColor: "black"
	},
	selected: {
		cursor: 'pointer',
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
	button: {
		fontSize: 40,
		color: 'red'
	}
});



class GameContainer extends Component {
  constructor(props) {
    super(props);

    this.note = null;

    this.state = {
      index: 0,
      select: [],
      warning: false,
      key: "FLWPUBK-eaa6f77031ff079936882527764af228-X", // RavePay PUBLIC KEY
    };
  }

  handleSelect = num => event => {
    const { data } = this.props;
    const { select } = this.state;

    // check if ticket is not already sold.
    if (!data.tickets.includes(num)) {
      // check if tick is already exist in selected and remove
      if (select.includes(num)) {
        console.log("inde");

        let index = select.indexOf(num);
        select.splice(index, 1);
        this.setState({
          select: select
        });
      } else {
        select.push(num);
        this.setState({
          select: select
        });
      }
    }
  };

  async componentDidMount() {
    this.farctNotification();
    this.note = setInterval(() => {
      this.farctNotification();
    }, 120000);
  }

  componentWillUnmount = () => {
    clearInterval(this.note);
  };

  farctNotification = async () => {
    const { game, getTickets } = this.props;
    let tick = await axios.get(config.getTakenTickets + game._id);
    // console.log("tick timer", tick.data);

    getTickets(tick.data.content);
  };

  handleChange(index) {
    this.setState({
      index
    });
  }

  // handleTicketBuy = async () => {
  //   const { data, game, getTickets } = this.props;
  //   const { select } = this.state;
  //   let dataDem = {
  //     amt: game.amt,
  //     gameId: game._id,
  //     ticket: select
  //   };
  //   if (data.token) {
  //     const options = {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json",
  //         "Access-Control-Allow-Origin": "*",
  //         "x-auth-token": data.token
  //       },
  //       data: JSON.stringify(dataDem),
  //       url: config.buyTicket
  //     };
  //     let games = await axios(options);
  //     console.log('games--games', games);
  //     getTickets(games.data.content);
  //     this.setState({
  //       select: []
  //     });
  //   } else {
  //     this.setState({
  //       warning: true
  //     });
  //   }
  // };

  callback = async response => {
    console.log("responseresponse", response);
    if (response.success) {
      const { data, game, getTickets } = this.props;
      const { select } = this.state;

			if (data.token) {
				let dataDem = {
					amt: game.amt,
					gameId: game._id,
					ticket: select
				};
				const options = {
					method: "POST",
					headers: {
						"content-type": "application/json",
						"Access-Control-Allow-Origin": "*",
						"x-auth-token": data.token
					},
					data: JSON.stringify(dataDem),
					url: config.buyTicket
				};
				let games = await axios(options);
				// console.log('games--games', games);
				getTickets(games.data.content);
				this.setState({
					select: []
				});
			} else {
				this.setState({
					warning: true
				});
			}
    }
  };

  close = () => {
    console.log("Payment closed");
  };

  getReference = () => {
    let text = "";
    let possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

    for (let i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  };

  handleWarningClose = () => {
    this.setState({
      warning: false
    });
  };

  render() {
    const { classes, game, data } = this.props;
    const { index, select, warning, key } = this.state;
    console.log("this.state", this.state);

    return (
      <div>
        <Header admin={true} />
        <div className={classes.root}>
          <div className={classes.con}>
            <div className={classes.container}>
              {/* <div className={classes.con} > */}
              <MobileSlider img={game.img} />
              {/* </div> */}
            </div>
            <div className={classes.container}>
              <Typography variant="h4" color="primary" className={classes.head}>
                {game.name}
              </Typography>
              <Competition
                name={game.name}
                timer={game.timer}
                amt={game.amt}
                status={game.status}
                select={select}
                percent={(data.tickets.length / game.slot) * 100}
                numLeft={game.slot - data.tickets.length}
              />
            </div>
          </div>

          <br />
          <div className={classes.ticket}>
            {game.slotRange.map((page, i) => (
              <Button
                key={i}
                className={classes.but}
                onClick={this.handleChange.bind(this, i)}
                color="primary"
                variant={index === i ? "contained" : "outlined"}
              >
                {page[0]} - {page[page.length - 1]}
              </Button>
            ))}
          </div>

          <div className={classes.ticket}>
            {game.slotRange[index].map(slot => (
              <Typography
                key={slot}
                onClick={this.handleSelect(slot)}
                className={classnames(
                  classes.number,
                  // slot === select && classes.selected,
                  select && select.includes(slot) && classes.selected,
                  data.tickets.includes(slot) && classes.close,
                  !data.tickets.includes(slot) && classes.open
                )}
              >
                {slot}
              </Typography>
            ))}
          </div>

          {data.token && game.status && (
            // <Button
            //   style={{ width: 200, color: "white" }}
            //   color="primary"
            //   disabled={!select}
            //   onClick={this.handleTicketBuy}
            //   variant="contained"
            // >
            //   Buy ticket &nbsp;
            // </Button>
            <Payment
              metadata={[{ metaname: "Device", metavalue: "IPhone X" }]}
              reference={this.getReference()}
              customer_phone={data.me && data.me.phone}
              email={data.me && data.me.email}
              amount={game.amt * select.length}
              ravePubKey={key}
              callback={this.callback}
              close={this.close}
              disabled={typeof select[0] === "undefined"}
              select={select}
              isProduction={true}
            />
          )}

          <Details description={game.description} history={game.history} />
        </div>
        <Warning open={warning} handleClose={this.handleWarningClose} />
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
		getTickets: getTickets
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(GameContainer));
// export default withStyles(styles)(GameContainer);

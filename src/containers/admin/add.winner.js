import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import isEmpty from 'validator/lib/isEmpty';
import Typography from "@material-ui/core/Typography";
import axios from 'axios';
import { config } from '../../../config';
import { FormHelperText } from '@material-ui/core';
import CircularProgress from "@material-ui/core/CircularProgress";
import { connect } from "react-redux";
import Header from "../../components/header/header";
import Router from "next/router";



const styles = theme => ({
	root: {
		display: 'flex',
		justifyContent: 'center'
	},
	paper: {
		padding: theme.spacing.unit * 2,
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
	container: {
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column'
		// flexWrap: 'wrap',
	},
	textField: {
		// marginLeft: theme.spacing.unit,
		// marginRight: theme.spacing.unit,
		width: 320,
	},
	dense: {
		marginTop: 19,
	},
	menu: {
		width: 200,
	},
	margin: {
		margin: theme.spacing.unit,
	},
	input: {
		display: 'none',
	},
	label: {
		display: "flex",
		alignItems: "center",
		marginTop: 10
	},
});



class FormDialog extends React.Component {
  state = {
    firstImg: "",
    name: "",
    nameHelper: {
      err: false,
      msg: ""
    },
    ticket: "",
    ticketHelper: {
      err: false,
      msg: ""
    },
    prize: "",
    prizeHelper: {
      err: false,
      msg: ""
    },
    date: "",
    dateHelper: {
      err: false,
      msg: ""
    },
    winnerVideo: "",
    liveDrawVideo: ""
  };

  handleAddWinner = async () => {
    const { name, date, firstImg, prize, winnerVideo, liveDrawVideo, ticket } = this.state;
    const { token } = this.props;
    if (
      !this.handleName() ||
      !this.handleDate() ||
      !this.handlePrize() ||
      !this.handleTicket() ||
      !firstImg
    ) {
      return false;
    }
    this.setState({
      loading: true
    });

    let formData = new FormData();
    formData.append("img", firstImg);
    formData.append("name", name);
    formData.append("dateWon", date);
    formData.append("prize", prize);
    formData.append("ticket", ticket);
    formData.append("winnerVideo", winnerVideo);
    formData.append("liveDrawVideo", liveDrawVideo);
    // formData.append("gameId", gameId);

    try {
      let create = await axios.post(config.createWinner, formData,  { headers: { 'x-auth-token': token }});
      console.log("create", create);
      if (create.data.error) {
        this.setState({
          msg: create.data.msg
        });
      } else {
        this.setState({
          msg: ""
        });
        Router.push('/admin/' + token)
      }
    } catch (error) {
      console.log("ERROR : ", error);
    }
    this.setState({
      loading: false
    });
  };

  handleIMG = name => event => {
    this.setState({
      [name]: event.target.files[0]
    });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleName = () => {
    const { name } = this.state;
    if (isEmpty(name)) {
      this.setState({
        nameHelper: {
          msg: "Name is required",
          err: true
        }
      });
      return false;
    }
    this.setState({
      nameHelper: {
        msg: "",
        err: false
      }
    });
    return true;
  };

  handlePrize = () => {
    const { prize } = this.state;
    if (isEmpty(prize)) {
      this.setState({
        prizeHelper: {
          msg: "Prize is required",
          err: true
        }
      });
      return false;
    }
    this.setState({
      prizeHelper: {
        msg: "",
        err: false
      }
    });
    return true;
  };

  handleTicket = () => {
    const { ticket } = this.state;
    if (isEmpty(ticket)) {
      this.setState({
        ticketHelper: {
          msg: "Ticket is required",
          err: true
        }
      });
      return false;
    }
    this.setState({
      ticketHelper: {
        msg: "",
        err: false
      }
    });
    return true;
  };

  handleDate = () => {
    const { date } = this.state;
    if (isEmpty(date)) {
      this.setState({
        dateHelper: {
          msg: "Date is required",
          err: true
        }
      });
      return false;
    }
    this.setState({
      dateHelper: {
        msg: "",
        err: false
      }
    });
    return true;
  };

  render() {
    const { classes } = this.props;

    const {
      firstImg,
      name,
      nameHelper,
      date,
      dateHelper,
      winnerVideo,
      liveDrawVideo,
      ticket,
      ticketHelper,
      prize,
			prizeHelper,
			loading
		} = this.state;
		
		console.log("this.state", this.state);
		
    return (
      <>
      <Header admin={true} />
      <div className={classes.root}>
        <form className={classes.container}>
          <input
            accept="image/*"
            onChange={this.handleIMG("firstImg")}
            className={classes.input}
            id="first"
            type="file"
          />
          <label htmlFor="first" className={classes.label}>
            <Button
              variant="contained"
              component="span"
              color="secondary"
              className={classes.button}
            >
              Upload
            </Button>
            {firstImg !== "" && <Typography>{firstImg.name}</Typography>}
          </label>
          <TextField
            autoFocus
            error={nameHelper.err}
            name="name"
            required
            onBlur={this.handleName}
            helperText={nameHelper.msg}
            value={name}
            className={classes.textField}
            variant="outlined"
            margin="dense"
            id="name"
            label="Name"
            onChange={this.handleChange("name")}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            error={ticketHelper.err}
            name="ticket"
            required
            className={classes.textField}
            onBlur={this.handleTicket}
            helperText={ticketHelper.msg}
            value={ticket}
            variant="outlined"
            margin="dense"
            label="Ticket Numbers"
            onChange={this.handleChange("ticket")}
            type="text"
            fullWidth
          />
          <FormHelperText>
            You can multiple ticket separated by a comma eg (100, 59, 56)
          </FormHelperText>
          <TextField
            autoFocus
            error={prizeHelper.err}
            name="prize"
            required
            onBlur={this.handlePrize}
            helperText={prizeHelper.msg}
            value={prize}
            className={classes.textField}
            variant="outlined"
            margin="dense"
            id="prize"
            label="Prize Won"
            onChange={this.handleChange("prize")}
            type="text"
            fullWidth
          />
          <TextField
            variant="outlined"
            error={dateHelper.err}
            name="date"
            required
            className={classes.textField}
            value={date}
            onBlur={this.handleDate}
            helperText={dateHelper.msg}
            margin="dense"
            id="name"
            label="Date"
            onChange={this.handleChange("date")}
            type="date"
            fullWidth
          />
          <TextField
            variant="outlined"
            margin="dense"
            className={classes.textField}
            value={winnerVideo}
            onChange={this.handleChange("winnerVideo")}
            label="Winner Video Link"
            type="text"
            fullWidth
          />
          <TextField
            variant="outlined"
            margin="dense"
            className={classes.textField}
            value={liveDrawVideo}
            onChange={this.handleChange("liveDrawVideo")}
            label="Live Draw Video"
            type="text"
            fullWidth
          />

					<Button 
						variant="contained" 
						disabled={loading} 
						color="secondary" 
						onClick={this.handleAddWinner} 
						className={classes.button}
					>
						{
							loading ? 
								<CircularProgress size={24} className={classes.buttonProgress} /> 
							: 
								"Add Winner"
						}
					</Button>
        </form>
      </div>
      </>
    );
  }
}


FormDialog.propTypes = {
	classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    token: state.data.token,
  }
}
export default connect(mapStateToProps, )(withStyles(styles)(FormDialog));


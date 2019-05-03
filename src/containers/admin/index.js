import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Remove from "@material-ui/icons/DeleteRounded";
import Edit from "@material-ui/icons/Edit";
import Add from "@material-ui/icons/Add";
import moment from 'moment';
import Link from "next/link";
import { connect } from 'react-redux';
import Header from "../../components/header/header";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
// import AddWinners from '../../components/winner/add.winner'
import Typography from '@material-ui/core/Typography';
import axios from "axios";
import { bindActionCreators } from 'redux';
import { getToken, getGames } from "../../actions/data";
import { config } from "../../../config";



const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  tool: {
    [theme.breakpoints.up("lg")]: {
      width: 1170
    }
  },
});

class SimpleTable extends Component{
  state = {
    open: false,
    gameId: null
  }

  handleAddWinners = id => (event) => {
    this.setState(state => ({
      open: true,
      gameId: id
    }))
  }

  handleClose = () => {
    this.setState({
      open: false
    })
  }

  async handleDeleteGame(gameId) {
    const { data, getGames } = this.props;
    console.log('gameId', gameId);
    
    const options = {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'x-auth-token': data.token
      },
      url: config.deleteGame + gameId
    };
    let games = await axios(options); 
    getGames(games.data.content);
  }

  render() {
    const { classes, data } = this.props;
    const { open, gameId } = this.state;
    let token = data.token;
    return (
      <div>
        <Header admin={true} />
          <Grid container justify="center" >
            <Grid
              container
              className={classes.tool}
              alignItems="center"
              justify="center"
            >
              <Grid item xs={12} sm={12} md={12}>
                <div style={{ display: 'flex', justifyContent: "flex-end", marginTop: 20 }} >
                  <Link href={"/admin/winner/" + token}>
                    <a style={{ textDecoration: 'none' }}>
                      <Button size="large" color="primary" variant="contained" >
                        Add Winners
                      </Button>
                    </a>
                  </Link>
                  <Link href={"/testimonial/" + token}>
                    <a style={{ textDecoration: 'none' }}>
                      <Button size="large" color="secondary" variant="contained" >
                        Testimonial
                      </Button>
                    </a>
                  </Link>
                  <Link href={"/admin/create/" + token}>
                    <a style={{ textDecoration: 'none' }}>
                      <Button size="large" color="primary" variant="contained" >
                        Add Game
                      </Button>
                    </a>
                  </Link>
                </div>
              </Grid>
              
              
              <Typography variant="h5">
                Manage Games
              </Typography>

              <Paper className={classes.root}>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell align="right">Amount</TableCell>
                      <TableCell align="right">Total Images</TableCell>
                      <TableCell align="right">Status</TableCell>
                      <TableCell align="right">Timer</TableCell>
                      <TableCell align="right">Total plays</TableCell>
                      <TableCell align="right">Actions</TableCell>
                      <TableCell align="right">Created At</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.games.map(row => (
                      <TableRow key={row._id}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">
                          &#8358;{row.amt}
                        </TableCell>
                        <TableCell align="right">
                          {row.img.length}
                        </TableCell>
                        <TableCell align="right" style={row.status ? { color: "green" } : { color: 'red' }}>
                          {row.status ? "Active" : "Inactive"}
                        </TableCell>
                        <TableCell align="right">
                          {moment(row.timer).fromNow()}
                        </TableCell>
                        <TableCell align="right">
                          {row.play.length}
                        </TableCell>
                        <TableCell align="right">
                          <Link href={"/admin/edit/" + token + "/" + row._id}>
                            <a style={{ textDecoration: 'none' }} >
                              <IconButton>
                                <Edit style={{ fontSize: 16 }} />
                              </IconButton>
                            </a>
                          </Link>
                          <IconButton onClick={this.handleDeleteGame.bind(this, row._id)} >
                            <Remove style={{ fontSize: 16 }} />
                          </IconButton>
                        </TableCell>
                        <TableCell align="right">
                          {moment(row.createdAt).fromNow()}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Paper>


              <br />
              <br />
              <br />
              
          </Grid>
        </Grid>
        {/* <AddWinners open={open} gameId={gameId} handleClose={this.handleClose} /> */}
      </div>
    );
  }
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    data: state.data,
  }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
    getToken: getToken,
    getGames: getGames
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SimpleTable));
/* eslint-disable jsx-a11y/anchor-is-valid */


import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getToken, getMe, getTickets } from "../src/actions/data";
import axios from 'axios';
import { config } from '../config';
import Head from 'next/head';
import GameContainer from "../src/containers/game/game"


class Game extends React.Component {  
  static async getInitialProps({ query }) {
    let game = await axios.get(config.getGame + query.id);
    let tick = await axios.get(config.getTakenTickets + query.id);
    let games = JSON.stringify(game.data.content);
    let ticket = JSON.stringify(tick.data.content);

    return {
      games,
      ticket
    }
	}
	
  async componentDidMount() {
    const { getToken, getMe, getTickets, ticket } = this.props;
    let token = localStorage.getItem('token');
    let tickets = JSON.parse(ticket);
    
    if(token) {
      const options = {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'x-auth-token': token
        },
        url: config.me
      };
      let me = await axios(options);
      getMe(me.data.content);
    }
    getTickets(tickets)
    getToken(token);
  }
  
  render() {
    const { games } = this.props;
    let game = JSON.parse(games);
    // console.log(game);
    
    return (
      <div>
        {/* <Head>
          <link rel="stylesheet" type="text/css" charset="UTF-8" href="/static/home.css" />
        </Head> */}
        <Head>
          <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="/static/empty.css"
          />
        </Head>
        <GameContainer game={game} />
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     data: state.data,
//   }
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getToken: getToken,
    getMe: getMe,
    getTickets: getTickets
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(Game);

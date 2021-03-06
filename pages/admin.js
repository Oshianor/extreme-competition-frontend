/* eslint-disable jsx-a11y/anchor-is-valid */


import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getToken, getMe, getGames } from "../src/actions/data";
import axios from 'axios';
import { config } from '../config';
import Router from 'next/router';
import AdminTable from '../src/containers/admin';
import Head from 'next/head';

class Game extends React.Component {  
  static async getInitialProps({ query }) {
		console.log('config.me', config.me, 'query.token', query.token);
		
		const options = {
			method: 'GET',
			headers: {
				'content-type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				'x-auth-token': query.token
			},
			url: config.me
		};
		let game = await axios.get(config.getAllGames);
		let users = await axios(options);
    let games = JSON.stringify(game.data.content);
    let user = JSON.stringify(users.data.content);

    return {
			games,
			user
    }
	}
	
  async componentDidMount() {
    const { getToken, user, getMe, getGames, games } = this.props;
		let token = localStorage.getItem('token');
		console.log(user);
		let users = JSON.parse(user);
		if (users.isAdmin !== 1) {
			return Router.push('/');
    }
    getMe(users);
    getToken(token);
    getGames(JSON.parse(games));
  }
  
  render() {
    return (
      <div style={{ background: 'white' }}>
      {/* <Head>
          <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="/static/empty.css"
          />
        </Head> */}
        <AdminTable />
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
    getMe: getMe,
    getGames: getGames
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);

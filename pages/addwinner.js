/* eslint-disable jsx-a11y/anchor-is-valid */


import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getToken, getMe } from "../src/actions/data";
import axios from 'axios';
import { config } from '../config';
import Head from 'next/head';
import AddWinner from "../src/containers/admin/add.winner"


class Game extends React.Component {
  static async getInitialProps({ query }) {
    console.log("config.me", config.me, "query.token", query.token);

    const options = {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "x-auth-token": query.token
      },
      url: config.me
    };
    let users = await axios(options);
    let user = JSON.stringify(users.data.content);

    return {
      user
    };
  }

  async componentDidMount() {
    const { getToken, user, getMe } = this.props;
    let token = localStorage.getItem("token");
    console.log(user);
    let users = JSON.parse(user);
    if (users.isAdmin !== 1) {
      return Router.push("/");
    }
    getMe(users);
    getToken(token);
    // getGames(JSON.parse(games));
  }
  render() {
    return (
      <div style={{ background: "white" }}>
        {/* <Head>
          <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="/static/empty.css"
          />
        </Head> */}
        <AddWinner />
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
    getMe: getMe
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(Game);

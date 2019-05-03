/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Register from "../src/containers/auth/register.component";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getToken, getMe } from "../src/actions/data";
import axios from 'axios';
import { config } from '../config';
import Head from 'next/head';
import Router from "next/router"
import Header from '../src/components/header/header'


class Index extends React.Component {  
  // static async getInitialProps() {
  //   let game = await axios.get(config.getCurrentGames);
  //   let games = JSON.stringify(game.data.content);

  //   return {
  //     games
  //   }
  // }
  async componentDidMount() {
    const { getToken, getMe } = this.props;
    let token = localStorage.getItem('token');
    
    if(token) {
      Router.push('/')
    }

  }
  
  render() {
    return (
      <div>
        <Head>
          <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="/static/empty.css"
          />
        </Head>
        <Header />
        <Register />
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

export default connect(null, mapDispatchToProps)(Index);

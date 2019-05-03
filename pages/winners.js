/* eslint-disable jsx-a11y/anchor-is-valid */


import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getToken, getMe, getWinner } from "../src/actions/data";
import axios from 'axios';
import { config } from '../config';
import WinnerContainer from "../src/containers/winner/winner.container";
import "../static/winners.scss";

class Game extends React.Component {  
  static async getInitialProps({ query }) {
    let win = await axios.get(config.getWinners + "/" + 0);
    let winner = JSON.stringify(win.data.content);

    return {
      winner
    }
	}
	
  async componentDidMount() {
    const { getToken, getMe, getWinner, winner } = this.props;
    let token = localStorage.getItem('token');
    
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
    let win = JSON.parse(winner);
    getWinner(win);
    getToken(token);
  }
  
  render() {
    return (
      <div>
        <WinnerContainer />
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
    getWinner: getWinner
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(Game);

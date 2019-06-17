/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import Home from "../src/containers/home/home";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getToken, getMe } from "../src/actions/data";
import axios from 'axios';
import { config } from '../config';
import Head from 'next/head';


class Index extends React.Component {  
  static async getInitialProps() {
    let game = await axios.get(config.getCurrentGames);
    let games = JSON.stringify(game.data.content);

    return {
      games
    }
  }
  
  async componentDidMount() {
    const { getToken, getMe } = this.props;
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
    getToken(token);


    // const script = document.createElement("script");

    // script.src = "https://use.typekit.net/foobar.js";
    // const s0 = document.getElementsByTagName("script")[0];
    // script.async = true;
    // script.src = "https://embed.tawk.to/5d08055f36eab9721117e798/default";
    // script.charset = "UTF-8";
    // script.setAttribute("crossorigin", "*");
    // s0.parentNode.insertBefore(script, s0);
    // document.body.appendChild(script);
  }
  
  render() {
    const { games } = this.props;
    let game = JSON.parse(games);
    // console.log(game);
    
    return (
      <div>
        <Head>
          {/* <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="/static/home.css"
          /> */}
          <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="/static/containerStyle.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="/static/sliderStyle.css"
          />
        </Head>
        <Home
          games={game.game}
          testimonial={game.testimonial}
          eight={game.eight}
        />
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

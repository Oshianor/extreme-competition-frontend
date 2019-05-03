// user auth token
export const getToken = (token) => {
  return {
    type: "X_AUTH_TOKEN",
    payload: token
  }
}

export const getMe = (token) => {
  return {
    type: "GET_ME",
    payload: token
  }
}


export const getGames = (token) => {
  return {
    type: "GET_GAMES",
    payload: token
  }
}


export const getTickets = (token) => {
  return {
    type: "GET_TICKETS",
    payload: token
  }
}


export const getWinner = (token) => {
  return {
    type: "GET_WINNER",
    payload: token
  }
}

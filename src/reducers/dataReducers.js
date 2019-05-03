const initialstate = {
  token: null,
  me: null,
  games: [],
  tickets: [],
  winner: null
};
export default (state = initialstate, action) => {
  switch (action.type) {
    case "X_AUTH_TOKEN":
      return Object.assign({}, state, {
        token: action.payload
      });
    case "GET_ME":
      return Object.assign({}, state, {
        me: action.payload
      });
    case "GET_GAMES":
      return Object.assign({}, state, {
        games: action.payload
      });
    case "GET_TICKETS":
      return Object.assign({}, state, {
        tickets: action.payload
      });
    case "GET_WINNER":
      return Object.assign({}, state, {
        winner: action.payload
      });
    default:
      return state;
  }
}
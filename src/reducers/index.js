import { combineReducers } from 'redux';
import defaulty from './default.reducers'
import builder from "./builder.reducer";

const appReducer = combineReducers({
  default: defaulty,
  builder: builder,
});

export default appReducer;
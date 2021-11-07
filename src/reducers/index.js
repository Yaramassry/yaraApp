import userReducer from './userReducer';
import singleUserReducer from './singleUserReducer';
import { combineReducers } from 'redux';
export default combineReducers({
     users: userReducer,
     user:singleUserReducer,
     
});
import {combineReducers} from 'redux';
import authReducer from './authReducer';

//Combine reducers : redux library
export default combineReducers({
  //Keys represent the keys of the state object
  //I.E. auth state is being manufactured by the 
  //authReducer function/file
  auth: authReducer
});
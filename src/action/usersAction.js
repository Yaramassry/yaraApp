import {GET_USERS ,GET_USER} from './typys'
import axios from 'axios';



export const getUsers = () => async (dispatch) => {
    let res = {};
    let errorRes = {
      errorStatus: '',
      errorMessage: '',
    };
    await 
      fetch("https://reqres.in/api/users")
      .then(res => res.json())
      .then(function (response) {
            res = response.data;
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
          console.log(res , "res in action")
        })
    dispatch({
      type: GET_USERS,
      payload: res,
    });
  };

  export const getUser = (id) => async (dispatch) => {
    let res = {};
    let errorRes = {
      errorStatus: '',
      errorMessage: '',
    };
    await 
      fetch(`https://reqres.in/api/users/${id}`)
      .then(res => res.json())
      .then(function (response) {
            res = response.data;
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
          console.log(res , " new user res in action")
        })
    dispatch({
      type: GET_USER,
      payload: res,
    });
  };
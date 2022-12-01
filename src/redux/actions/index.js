import { getApi } from '../api';
import base_url from '../api/base_url';
import {USER_LOGIN, USER_LOGOUT} from '../constants';

export function userLogin(userData) {
  return async (dispatch) => {
    const { data } = await getApi(`${base_url}action=Authenticate&emailAddress=${userData.email}`)
    userData.token = data.token
    dispatch({type: USER_LOGIN, userData: userData});
  };
}

export function userLogout() {
  return dispatch => {
    dispatch({type: USER_LOGOUT});
  };
}

/**
 * @Author: harsha
 * @Date:   2020-07-20T16:04:59+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-07-21T11:17:41+02:00
 */
import { SET_LOGIN_FORM, INIT_LOGIN } from "./types";

export const dispatchLoginData = data => async (dispatch, getState) => {
  console.log(data, "logindata");
};

export const setLoginForm = data => async (dispatch, getState) => {
  dispatch({
    type: SET_LOGIN_FORM,
    payload: data
  });
};

export const initLogin = () => async (dispatch, getState) => {
  dispatch({
    type: INIT_LOGIN,
    loggedIn: true
  });
};

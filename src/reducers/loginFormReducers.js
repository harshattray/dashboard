/**
 * @Author: harsha
 * @Date:   2020-07-20T16:16:54+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-07-21T07:07:28+02:00
 */
import { SET_LOGIN_FORM, INIT_LOGIN } from "../actions/types";

const initial_state = {
  selectedLoginForm: "tester",
  loggedIn: false
};

export default (state = initial_state, action) => {
  switch (action.type) {
    case SET_LOGIN_FORM:
      return {
        ...state,
        selectedLoginForm: action.payload
      };
    case INIT_LOGIN:
      return {
        ...state,
        loggedIn: action.loggedIn
      };
    default:
      return state;
  }
};

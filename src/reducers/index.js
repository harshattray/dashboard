/**
 * @Author: harsha
 * @Date:   2020-07-20T10:44:43+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-07-21T11:05:23+02:00
 */
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import loginFormData from "./loginFormReducers";
import detailsData from "./listViewreducers";

export default combineReducers({
  form: formReducer,
  loginFormStack: loginFormData,
  detailsDataStack: detailsData
});

/**
 * @Author: harsha
 * @Date:   2020-07-21T11:00:54+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-07-21T11:02:44+02:00
 */
import { SET_ENTITY_DATA } from "./types";

export const setEntityData = data => async (dispatch, getState) => {
  dispatch({
    type: SET_ENTITY_DATA,
    payload: data
  });
};

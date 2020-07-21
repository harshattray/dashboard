/**
 * @Author: harsha
 * @Date:   2020-07-21T11:03:08+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-07-21T11:13:25+02:00
 */

import { SET_ENTITY_DATA } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case SET_ENTITY_DATA:
      return {
        ...state,
        detailsStack: action.payload
      };
    default:
      return state;
  }
};

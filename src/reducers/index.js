import { combineReducers } from "redux";

import session from "./session";
import common from "./common";
import auth from "./auth";
import course from "./courseReducer";
export default combineReducers({
  session,
  common,
  auth,
  course
});

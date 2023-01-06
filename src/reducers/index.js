

import { PeopleReducer } from "./peopleReducer";

import { combineReducers } from "redux";
const rootReducer = combineReducers({
  people: PeopleReducer
})
export default rootReducer;
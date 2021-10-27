import { combineReducers } from "redux";
import { covidReducer } from "./covidReducer";
import { weatherReducer } from "./weatherReducer";

export const rootReducer = combineReducers({
  weather: weatherReducer,
  covid: covidReducer,
});

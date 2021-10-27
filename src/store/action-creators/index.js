import * as WeatherActionCreators from "./weather";
import * as CovidActionCreators from "./covid";
export default {
  ...WeatherActionCreators,
  ...CovidActionCreators,
};

import axios from "axios";
import {
  FETCH_WEATHER,
  FETCH_WEATHER_ERROR,
  FETCH_WEATHER_SUCCESS,
} from "../reducers/weatherReducer";
const REACT_APP_API_KEY = "e54511f5a23448d4f40361c0da9bfd3e";
export const fetchWeather = (city) => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_WEATHER });
      const response = await axios.get(
        //`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=ru&appid=${process.env.REACT_APP_API_KEY}`
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=ru&appid=${REACT_APP_API_KEY}`
      );
      dispatch({
        type: FETCH_WEATHER_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: FETCH_WEATHER_ERROR,
        payload: "Произошла ошибка при загрузке погоды",
      });
    }
  };
};

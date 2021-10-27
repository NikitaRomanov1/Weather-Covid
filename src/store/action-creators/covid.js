import axios from "axios";
import {
  FETCH_COVID,
  FETCH_COVID_ERROR,
  FETCH_COVID_SUCCESS,
} from "../reducers/covidReducer";

export const fetchCovid = (monthAgo, today) => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_COVID });
      const response = await axios.get(
        `https://api.covid19api.com/country/russia?from=${monthAgo}&to=${today}`
      );
      dispatch({
        type: FETCH_COVID_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: FETCH_COVID_ERROR,
        payload: "Произошла ошибка при загрузке данных",
      });
    }
  };
};

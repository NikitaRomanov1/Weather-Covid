export const FETCH_COVID = "FETCH_COVID";
export const FETCH_COVID_SUCCESS = "FETCH_COVID_SUCCESS";
export const FETCH_COVID_ERROR = "FETCH_COVID_ERROR";
const initialState = {
  covidData: {},
  covidLoading: false,
  covidError: null,
};

export const covidReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COVID:
      return { covidLoading: true, covidError: null, covidData: {} };
    case FETCH_COVID_SUCCESS:
      return {
        covidLoading: false,
        covidError: null,
        covidData: action.payload,
      };
    case FETCH_COVID_ERROR:
      return { covidLoading: false, covidError: action.payload, covidData: {} };
    default:
      return state;
  }
};

import moment from "moment";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CovidChart from "../components/CovidChart";

import WeatherChart from "../components/WeatherChart";
import { useActions } from "../hooks/useActions";

export const Home = () => {
  const { data, loading, error } = useSelector((state) => state.weather);
  const { covidData, covidLoading, covidError } = useSelector(
    (state) => state.covid
  );
  //сегодняшняя дата, для отправки в апи
  let today = moment().format("YYYY-MM-DD");
  //дата месяц назад
  let monthAgo = moment().subtract(30, "days").format("YYYY-MM-DD");
  console.log("Сегодня:", today);
  const { fetchWeather, fetchCovid } = useActions();
  //запрос по обновлению страницы на погоду в городе, и ковид статистика за месяц
  useEffect(() => {
    fetchWeather("Москва");
    fetchCovid(monthAgo, today);
  }, []);
  console.log(covidData);
  console.log(monthAgo);
  return (
    <div>
      <div>
        {loading && <h1>Загрузка...</h1>}
        {error && <h1>Ошибка! такого города нет</h1>}
        {Object.keys(data) != 0 && <WeatherChart data={data}></WeatherChart>}
      </div>
      <div>
        {covidLoading && <h1>Загрузка...</h1>}
        {covidError && <h1>Ошибка</h1>}
        {covidData.length != null && (
          <CovidChart covidData={covidData}></CovidChart>
        )}
      </div>
    </div>
  );
};

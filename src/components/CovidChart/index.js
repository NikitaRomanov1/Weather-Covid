import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";
import moment from "moment";
import { theme } from "../../styles/theme";

const CovidChart = ({ covidData }) => {
  return (
    <div>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Статистика заболевших COVID-19 за последний месяц</h2>
      </div>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ResponsiveContainer width="80%" aspect={5}>
          <BarChart width={730} height={250} data={covidData}>
            <CartesianGrid />
            <XAxis
              dataKey={"Date"}
              name="Дата"
              tickFormatter={(time) => moment(time).format("DD/MM")}
              type="category"
            />
            <YAxis
              interval="preserveStart"
              tickFormatter={(tick) => `${tick / 10000} т.`}
            ></YAxis>
            <Tooltip
              labelFormatter={(time) => moment(time).format("DD/MM/YY")}
            />
            <Legend />
            <Bar
              dataKey="Confirmed"
              fill={theme.colors.darkBlue}
              unit=" человек"
              name="Подтвержденные случаи"
            />
            <Bar
              dataKey="Deaths"
              fill={theme.colors.blue}
              name="Смертность"
              unit=" человек"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CovidChart;

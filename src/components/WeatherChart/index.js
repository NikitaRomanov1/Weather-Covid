import React from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  ResponsiveContainer,
  Label,
} from "recharts";
import moment from "moment";
import { theme } from "../../styles/theme";

const WeatherChart = ({ data }) => {
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
        <h1>Ваш город: {data.city.name}</h1>
        <h2>Прогноз погоды на 5 дней</h2>
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
        <ResponsiveContainer width="80%" aspect={6}>
          <LineChart
            data={data.list}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid horizontal="true" vertical="" />
            <XAxis
              dataKey="dt_txt"
              interval={1}
              tickFormatter={(time) => moment(time).format("DD/MM")}
            />
            <YAxis>
              <Label
                value={"Температура воздуха"}
                position="left"
                angle={-90}
                style={{ textAnchor: "middle", fontSize: "18px" }}
              />
            </YAxis>
            <Tooltip
              labelFormatter={(time) => moment(time).format("DD/MM HH:MM")}
              formatter={(value) => `${Math.round(value, 2)}`}
            />

            <Line
              name="Температура"
              unit={"°C"}
              type="monotone"
              dataKey="main.temp"
              stroke={theme.colors.darkBlue}
              dot={false}
            />
            <Line
              type="monotone"
              name="Ощущается как"
              unit={"°C"}
              dataKey="main.feels_like"
              stroke={theme.colors.blue}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WeatherChart;
